import "./Styles/Header.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

export default function Header() {

    const { isLoggedIn, logoutHandler } = useAuth();

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

            {isLoggedIn ? <button className="btn primary-btn flex-sb login-btn" onClick={logoutHandler}><span className="material-symbols-outlined">account_circle</span>LOGOUT</button> :  <Link to="/login">
                <button className="btn primary-btn flex-sb login-btn"><span className="material-symbols-outlined">account_circle</span>LOGIN</button>
            </Link>} 
           

        </div>)

}