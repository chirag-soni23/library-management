import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); 
    const [isAuth, setIsAuth] = useState(false);
    const [btnLoading, setBtnLoading] = useState(false);
    const [role, setRole] = useState(""); 
    const [isLoading, setIsLoading] = useState(true); 

    // Register user
    const registerUser = async (name, email, password, navigate) => {
        setBtnLoading(true);
        try {
            const { data } = await axios.post("/api/user/register", { name, email, password });
            toast.success(data.message);
            // setIsAuth(true); 
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || "Registration failed. Please try again.");
        } finally {
            setBtnLoading(false);
        }
    };

    // Login user
    const loginUser = async (email, password, navigate) => {
        setBtnLoading(true);
        try {
            const { data } = await axios.post("/api/user/login", { email, password });
            toast.success(data.message);
            setIsAuth(true);
            window.location.reload();
            setUser(data.user);
            setRole(data.user.role);
            navigate('/');
        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setBtnLoading(false);
        }
    };

    // Fetch User
    const fetchUser = async () => {
        try {
            const { data } = await axios.get("/api/user/me");
            setUser(data);
            setIsAuth(true);
            setIsLoading(false);
        } catch (error) {
            toast.error(error.response?.data?.message || "Failed to fetch user data.");
            setIsAuth(false);   
            setIsLoading(false);
        } 
    };

    useEffect(() => {
        fetchUser();
    }, []);

    // Logout
    const logout = async (navigate) => {
        setBtnLoading(true);
        try {
            const { data } = await axios.get("/api/user/logout");
            toast.success(data.message);
            setIsAuth(false);
            setUser(null);
            setRole(""); 
            navigate('/login');
        } catch (error) {
            toast.error(error.response?.data?.message || "Logout failed. Please try again.");
        } finally {
            setBtnLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{ registerUser, loginUser, logout, user, isAuth, btnLoading, role, isLoading }}>
            {children}  <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </UserContext.Provider>
    );
};

export const UserData = () => useContext(UserContext);
