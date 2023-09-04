import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';

import type { rootState } from '@/store/index';

import { setRemember, setToken } from '@/store/auth';

import { useNavigate } from "react-router-dom";

import { login } from "@/services/fetchData";

import { Message } from "../../Message";

import { pathProfile } from "@/utils/routes";

import "./style.scss";

export const SignIn = (): JSX.Element => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [codeHTTP, setCodeHTTP] = useState<number>(0);
    const token = useSelector((state: rootState) => state.user.token);
    const remember = useSelector((state: rootState) => state.user.remember);
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const Login = () => {
        if (token && remember) { navigate(`/${pathProfile}`); };
    };

    useEffect(() => {
        Login();
    }, []);


    /**
     * The handleSubmit function is used to handle form submission in a TypeScript React component,
     * including making an asynchronous login request and updating state accordingly.
     * @param {any} e - The parameter `e` is an event object that is passed to the `handleSubmit`
     * function. It is typically an event object that is triggered when a form is submitted.
     */
    const handleSubmit = async (e: any) => {
        
        e.preventDefault();

        setIsLoading(true);

        const answer = await login(email, password);

        setIsLoading(false);

        if (typeof answer === 'number') {
            setCodeHTTP(answer);
        } else {
            dispatch(setToken(answer));
            navigate(`/${pathProfile}`);
        }
    };

    return (
        <div className="auth-form-content">

            <i className="fa fa-user-circle auth-form-icon"></i>
            
            <h1>Sign In</h1>

            <Message codeStatus={codeHTTP} />

            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email"
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="input-remember">
                    <input type="checkbox" onChange={() => { dispatch(setRemember(!remember)); }} defaultChecked={remember} id="remember-me" />
                    <label htmlFor="remember-me" >Remember me</label>
                </div>

                <button className='auth-form-button' disabled={isLoading}>
                    {isLoading ? 'Chargement...' : 'Sign In'}
                </button>
            </form>
        </div >
    );

}