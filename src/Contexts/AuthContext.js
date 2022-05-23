import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({
        name: "Nakul Sharma",
        email: "pixelplay15@gmail.com",
    });
    const token = localStorage.getItem("Token");
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            setIsLoggedIn(true);
        }
    }, [isLoggedIn]);

    const logoutHandler = () => {
        localStorage.removeItem("Token");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <AuthContext.Provider
            value={{
                logoutHandler,
                isLoggedIn,
                setIsLoggedIn,
                userDetails,
                setUserDetails,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { useAuth, AuthProvider };