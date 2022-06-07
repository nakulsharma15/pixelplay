import "./Styles/LoginForm.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { replace, useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../Contexts/AuthContext";
import { toast } from "react-hot-toast";
import axios from "axios";
import toastStyle from "../Utils/toastStyle";

export default function LoginForm() {

    const { setUserDetails , setIsLoggedIn} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const guestCredentials = {
        email: "pixelplay15@gmail.com",
        password:"pixelplay@15"
    }

    const loginHandler = async (loginData) => {
        
        try {
          const response = await axios.post("/api/auth/login", loginData);
          if (response.status === 200) {
            setIsLoggedIn(true);
            setUserDetails(response.data.foundUser);
            localStorage.setItem("Token", response.data.encodedToken);
            toast.success("You're successfully logged in.", {style: toastStyle});
            navigate(location.state?.from?.pathname === undefined ? "/" :location.state?.from?.pathname, {replace: true} );
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong. Please try again!", {style: toastStyle
        });
        }
      };


    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
            password: Yup.string().required("Password cannot be empty")
        }),
        onSubmit: (values, actions) => { 
            loginHandler(JSON.stringify(values));
            actions.resetForm();
        },
    },
   );


    

    return (
        <div className="form-div-parent">
            <form onSubmit={formik.handleSubmit}>

                <div className={"form-div email-div"}>
                    <label htmlFor="email">Email</label>

                    <div className={(formik.touched.email && formik.errors.email) && "form-error"}>
                        <input type="email" placeholder="Enter Email" name="email" {...formik.getFieldProps("email")} />
                    </div>

                    {
                        (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                    }
                </div>

                <div className={"form-div email-div password-div"} >

                    <label htmlFor="password">Password</label>

                    <div className={(formik.touched.password && formik.errors.password) && "form-error"}>
                        <input type="password" placeholder="Enter Password" name="password" {...formik.getFieldProps("password")} />
                    </div>


                    {
                        (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                    }

                </div>

                <p className="action-txt" onClick={() => loginHandler(JSON.stringify(guestCredentials))}>Login using guest credentials</p>


                <div className="form-action-div">

                    <Link to="/signup" className="action-txt">Create account</Link>

                    <button className="submit-btn primary-btn" type="submit">Login</button>

                </div>

            </form>
        </div>
    )

}