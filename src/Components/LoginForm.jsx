import "./Styles/LoginForm.css";

export default function LoginForm() {


    return (
        <div className="form-div-parent">
            <form>

               <div className="form-div email-div">
                   <label for="email">Email</label>
                   <input className="email" type="email" placeholder="Enter Email"/>
               </div>

               <div className="form-div">
                   <label for="password">Password</label>
                   <input className="password" type="password" placeholder="Enter Password"/>
               </div>

               <button className="signup-btn">Login using guest credentials</button>


               <div className="form-action-div">

                   <button className="signup-btn">Create account</button>   

                   <button className="submit-btn primary-btn">Login</button>

               </div>

            </form>
        </div>
    )

}