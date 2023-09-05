import { updateUser } from "@/services/fetchData";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editUser } from '@/store/auth';
import type { rootState } from '@/store/index';
import { Message } from "../../Message";
import "./style.scss";

export const EditUser = (): JSX.Element => {
    const token: string = useSelector((state: rootState) => state.user.token);
    const firstName: string = useSelector((state: rootState) => state.user.firstName);
    const lastName: string = useSelector((state: rootState) => state.user.lastName);
    const [codeHTTP, setCodeHTTP] = useState<number>(0);

    const [inputFirstName, setInputFirstName] = useState<string>("");
    const [inputLastName, setInputLastName] = useState<string>("");

    const [toggle, setToggle] = useState<boolean>(false);
    const dispatch = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const answer = await updateUser(inputFirstName, inputLastName, token);

        if (typeof answer === 'number') {
            setCodeHTTP(answer);
        } else {
            dispatch(editUser({ firstName: inputFirstName, lastName: inputLastName }));
            setToggle(false);
        }

    };

    return (
        <div className="edit-user">
            <h1>Welcome back
                <p>{`${firstName} ${lastName}`}</p>
            </h1>

            <Message codeStatus={codeHTTP} />

            <form onSubmit={handleSubmit}>
                {toggle ?
                    <div className="group-element">
                        <input name="input-firstname"
                            placeholder={firstName}
                            onChange={(e) => { setInputFirstName(e.target.value); }}
                            required
                            minLength={4}>
                        </input>
                        <input name="input-lastname"
                            placeholder={lastName}
                            onChange={(e) => { setInputLastName(e.target.value); }}
                            required
                            minLength={4}>
                        </input>
                    </div>
                    : null
                }

                <div className="group-element">
                    <button className="edit-button"
                        onClick={() => setToggle(true)}>{toggle ? "Save" : "Edit Name"}
                    </button>
                    {toggle ? <button className="edit-button"
                        onClick={() => setToggle(false)}>Cancel
                    </button> : null}
                </div>
            </form>
        </div>
    );

}