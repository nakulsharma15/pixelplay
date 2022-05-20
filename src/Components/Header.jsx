import "./Styles/Header.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import toastStyle from "../Utils/toastStyle";

export default function Header() {

    return (
        <div className="header flex-sb">

            <Link to="/">
                <div className="header-logo flex-align-center">

                    <div className="header-logo-img">
                        <img src="https://res.cloudinary.com/nakulsharma15/image/upload/v1651218268/Assets/0_hfnhg9.png" alt="pp-logo" />
                    </div>
                    <h1 className="text-xl">PixelPlay</h1>

                </div>
            </Link>

            <Link to="/login">
                <button class="btn primary-btn flex-sb login-btn"><span class="material-symbols-outlined">account_circle</span>LOGIN</button>
            </Link>

        </div>)

}