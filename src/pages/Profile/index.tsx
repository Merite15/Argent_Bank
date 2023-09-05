import { EditUser } from "@/components/User/Edit";
import { getUser } from "@/services/fetchData";
import { useSelector, useDispatch } from 'react-redux';
import { logout, editUser } from '@/store/auth';
import type { rootState } from '@/store/index';
import { Transaction } from "@/components/Transaction";
import "./style.scss";

export const Profile = (): JSX.Element => {
    const dispatch = useDispatch();
    const token: string = useSelector((state: rootState) => state.user.token);

    const atLoad = async () => {
        const answer = await getUser(token);

        if (typeof answer === 'number') {
            dispatch(logout());
        }
        else {
            dispatch(editUser(answer));
        }
    };

    atLoad();

    return (
        <main className="bg-dark">
            <h2 className="sr-only">Accounts</h2>
            <EditUser />
            <Transaction title={"Argent Bank Checking (x8349)"} amount={"2,082.79"} />
            <Transaction title={"Argent Bank Savings (x6712)"} amount={"10,928.42"} />
            <Transaction title={"Argent Bank Credit Card (x8349)"} amount={"184.30"} />
        </main>
    );
}

