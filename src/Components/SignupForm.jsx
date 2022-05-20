import "./Styles/SignupForm.css";
import { Link } from "react-router-dom";

export default function SignupForm() {

    return (
        <div className="signup-form-div">

            <form>

                <div className="signup-name-div">

                    <div className="name-input-div">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" className="first-name" placeholder="Enter First Name" />
                    </div>

                    <div className="name-input-div">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" className="last-name" placeholder="Enter Last Name" />
                    </div>

                </div>

                <div className="form-input-div">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="email" placeholder="Enter your email address"/>
                </div>

                <div className="form-input-div">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="password" placeholder="Enter your password"/>
                </div>

                <div className="form-input-div">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" className="password" placeholder="Re-Enter your password"/>
                </div>

                <div className="form-action-div">

                    <Link to="/login" className="action-txt">Login instead</Link>

                    <button className="submit-btn primary-btn">Signup</button>

                </div>
                

            </form>
        </div>
    )


}