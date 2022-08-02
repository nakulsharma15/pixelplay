import "./Styles/SignupForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import axios from "axios";
import toastStyle from "../Utils/toastStyle";
import { useAuth } from "../Contexts/AuthContext";

export default function SignupForm() {

    const { setUserDetails, setIsLoggedIn } = useAuth();

    const navigate = useNavigate();

    const signupGuestCredentials = {
        firstName: "Nakul",
        lastName: "Sharma",
        email: "nakulsharma@gmail.com",
        password: "nakulsharma",
        confirmPassword: "nakulsharma"
    }

    const signupHandler = async (userData) => {

        try {
            const response = await axios.post("/api/auth/signup", userData);
            if (response.status === 201) {
                setUserDetails(userData);
                setIsLoggedIn(true)
                toast.success("You're successfully signed up!", { style: toastStyle });
                navigate("/", { replace: true });
                localStorage.setItem("Token", response.data.encodedToken);
            }
        } catch (error) {
            console.log(error);
            toast.error((t) => (<p><b>Oops! Something went wrong</b> <p style={{ color: "#aaa" }}>Please try again later.</p></p>),
                {
                    style: toastStyle,
                }
            )
        }
    };

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
            confirmPassword: Yup.string().required("Kindly Re-Enter the Password").oneOf([Yup.ref("password"), null], "Passwords doesn't match")
        }),
        onSubmit: (values, actions) => {
            signupHandler(values)
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

                <p className="action-txt" onClick={() => signupHandler(JSON.stringify(signupGuestCredentials))}>Signup using guest credentials</p>

                <div className="form-action-div">

                    <Link to="/login" className="action-txt">Login instead</Link>

                    <button className="submit-btn primary-btn" type="submit">Signup</button>

                </div>


            </form>
        </div>
    )


}