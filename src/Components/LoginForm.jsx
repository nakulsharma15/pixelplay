import "./Styles/LoginForm.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {

    const guestCredentials = {
        email: "pixelplay15@gmail.com",
        password:"pixelplay@15"
    }

    const login = (data) => {
        console.log(data);
    }

    


    const formik = useFormik({
        initialValues: {
            email:"",
            password:""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is empty").min(6, "Email is invalid"),
            password: Yup.string().required("Password is empty")
        }),
        onSubmit: (values, actions) => {
            // alert(JSON.stringify(values, null, 2));  
            isGuestLogin ? login()  : login("user")                     
            console.log(values);
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
                        <input className="email" type="email" placeholder="Enter Email" name="email" {...formik.getFieldProps("email")} />
                    </div>

                    {
                        (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                    }
                </div>

                <div className={"form-div email-div password-div"} >

                    <label htmlFor="password">Password</label>

                    <div className={(formik.touched.password && formik.errors.password) && "form-error"}>
                        <input className="password" type="password" placeholder="Enter Password" name="password" {...formik.getFieldProps("password")} />
                    </div>


                    {
                        (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                    }

                </div>

                <p className="action-txt" onClick={() => { }}>Login using guest credentials</p>


                <div className="form-action-div">

                    <Link to="/signup" className="action-txt">Create account</Link>

                    <button className="submit-btn primary-btn" type="submit">Login</button>

                </div>

            </form>
        </div>
    )

}