import "./Styles.css";
import { Header, SideNav, SignupForm } from "../Components";

export default function Signup() {

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="login-header">
                        <p className="login-main-text">Signup</p>
                    </div>

                    <SignupForm />

                </div>

            </div>

        </div>)

}