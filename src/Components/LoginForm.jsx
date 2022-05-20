import "./Styles/LoginForm.css";
import { Link } from "react-router-dom";

export default function LoginForm() {


    return (
        <div className="form-div-parent">
            <form>

                <div className="form-div email-div">
                    <label htmlFor="email">Email</label>
                    <input className="email" type="email" placeholder="Enter Email" />
                </div>

                <div className="form-div">
                    <label htmlFor="password">Password</label>
                    <input className="password" type="password" placeholder="Enter Password" />
                </div>

                <p className="action-txt">Login using guest credentials</p>


                <div className="form-action-div">

                    <Link to="/signup" className="action-txt">Create account</Link>

                    <button className="submit-btn primary-btn">Login</button>

                </div>

            </form>
        </div>
    )

}