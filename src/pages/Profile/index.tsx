import { EditUser } from "@/components/User/Edit";
import { getUser } from "@/services/fetchData";
import { useSelector, useDispatch } from 'react-redux';
import { logout, editUser } from '@/store/auth';
import type { rootState } from '@/store/index';
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
        </main>
    );
}

