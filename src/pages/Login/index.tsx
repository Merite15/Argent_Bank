import { SignIn } from "../../components/User/Auth";
import "./style.scss";

export const Login = (): JSX.Element => {
    return (
        <main className="bg-dark">
            <section id="sign-in" className="sign-in">
                <SignIn />
            </section>
        </main>
    );
}