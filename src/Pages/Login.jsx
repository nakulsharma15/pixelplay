import { Header, SideNav, LoginForm } from "../Components";

export default function Login() {

    return (
        <div>
            <Header />

            <div className="page-content">

                <SideNav />

                <div className="main-content">

                    <h1>Login to continue to pixelplay</h1>

                    <LoginForm />

                </div>

            </div>

        </div>
    )

}