import "./Styles.css";
import { Header, SideNav, LoginForm } from "../Components";

export default function Login() {

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <div className="login-header">
                        <p className="login-main-text">Login</p>
                        <p className="login-sec-text">to continue to pixelplay</p>
                    </div>

                    <LoginForm />

                </div>

            </div>

        </div>
    )

}