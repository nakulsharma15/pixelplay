import "./Styles/SignupForm.css";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function SignupForm() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("First Name cannot be empty"),
            lastName: Yup.string().required("Last Name cannot be empty"),
            email: Yup.string().required("Email cannot be empty").min(5, "Please enter a valid email address"),
            password: Yup.string().required("Password cannot be empty").min(6, "Password's length should be greater than 6"),
            confirmPassword: Yup.string().required("Kindly Re-Enter the Password").oneOf([Yup.ref("password"), null],"Passwords doesn't match")
        }),
        onSubmit: (values, actions) => {
           actions.resetForm();
        },
    },
    );

    return (
        <div className="signup-form-div">

            <form onSubmit={formik.handleSubmit}>

                <div className="signup-name-div">

                    <div className="name-input-div">
                        <label htmlFor="first-name">First Name</label>

                        <div className={(formik.touched.firstName && formik.errors.firstName) && "form-error"}>
                            <input type="text" placeholder="Enter First Name" name="firstName"  {...formik.getFieldProps("firstName")} />
                        </div>

                        {
                            (formik.touched.firstName && formik.errors.firstName) && <p className="error-message">{formik.errors.firstName}</p>
                        }
                    </div>

                    <div className="name-input-div">
                        <label htmlFor="last-name">Last Name</label>

                        <div className={(formik.touched.lastName && formik.errors.lastName) && "form-error"}>
                            <input type="text" placeholder="Enter Last Name" name="lastName" {...formik.getFieldProps("lastName")} />
                        </div>

                        {
                            (formik.touched.lastName && formik.errors.lastName) && <p className="error-message">{formik.errors.lastName}</p>
                        }
                    </div>

                </div>

                <div className="form-input-div">
                    <label htmlFor="email">Email</label>

                    <div className={(formik.touched.email && formik.errors.email) && "form-error"}>
                        <input type="email" name="email" placeholder="Enter your email address" {...formik.getFieldProps("email")} />
                    </div>

                    {
                        (formik.touched.email && formik.errors.email) && <p className="error-message">{formik.errors.email}</p>
                    }
                </div>

                <div className="form-input-div">
                    <label htmlFor="password">Password</label>

                    <div className={(formik.touched.password && formik.errors.password) && "form-error"}>
                        <input type="password" name="password" placeholder="Enter your password" {...formik.getFieldProps("password")} />
                    </div>

                    {
                        (formik.touched.password && formik.errors.password) && <p className="error-message">{formik.errors.password}</p>
                    }

                </div>

                <div className="form-input-div">
                    <label htmlFor="password">Confirm Password</label>

                    <div className={(formik.touched.confirmPassword && formik.errors.confirmPassword) && "form-error"}>
                        <input type="password" name="confirmPassword" placeholder="Re-Enter your password" {...formik.getFieldProps("confirmPassword")} />
                    </div>

                    {
                        (formik.touched.confirmPassword && formik.errors.confirmPassword) && <p className="error-message">{formik.errors.confirmPassword}</p>
                    }

                </div>

                <div className="form-action-div">

                    <Link to="/login" className="action-txt">Login instead</Link>

                    <button className="submit-btn primary-btn" type="submit">Signup</button>

                </div>


            </form>
        </div>
    )


}