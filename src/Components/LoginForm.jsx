import "./Styles/LoginForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {

    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Username is empty"),
            password: Yup.string().required("Password is empty")
        }),
        onSubmit: (values , actions) => {
            alert(JSON.stringify(values,null,2));
            actions.resetForm();
        }
    });

    let emailError = ((formik.errors.email !== undefined) && formik.touched.email) ? true : false; 

    let passwordError = ((formik.errors.password !== undefined) && formik.touched.password) ? true : false; 
    

    return (
        <div className="form-div-parent">
            <form onSubmit={formik.handleSubmit}>

                <div className={ emailError==true ? "form-div email-div form-error" :"form-div email-div"}>
                    <label htmlFor="email">Email</label>
                    <input className="email" type="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Enter Email" name="email"  />
                    <p className="error-message">{formik.errors.email}</p>
                </div>

                <div className={passwordError==true ? "form-div email-div form-error" :"form-div email-div"}>
                    <label htmlFor="password">Password</label>
                    <input className="password" type="password" placeholder="Enter Password" onChange={formik.handleChange} value={formik.values.password} name="password" />
                    <p className="error-message">{formik.errors.password}</p>
                </div>

                <p className="action-txt">Login using guest credentials</p>


                <div className="form-action-div">

                    <Link to="/signup" className="action-txt">Create account</Link>

                    <button className="submit-btn primary-btn" type="submit">Login</button>

                </div>

            </form>
        </div>
    )

}