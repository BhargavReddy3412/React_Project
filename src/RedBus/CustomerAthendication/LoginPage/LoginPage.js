import React, { useState, useEffect, useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../FireBase_Folder/FireBase";
import axios from "axios";
import { UserProfileInfoRTFBContext } from "../../API/ContextApi/RealTimeDataBaseUserProfile"; 
import "./LoginPage.css"
import { message } from "antd";

function LoginForm() {
    const navigate = useNavigate();
    const loginAuth = getAuth(app);
    const { setUserProfileRTFB } = useContext(UserProfileInfoRTFBContext);  
    const [loginformData, setLoginFormData] = useState({
        email: "",
        password: "",
    });
    const [userLogin, setUserLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData({ ...loginformData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const loginSuccess = await signInWithEmailAndPassword(
                loginAuth,
                loginformData.email,
                loginformData.password
            );

            if (loginSuccess) {
                setUserLogin(true);

                // Fetch user data from Firebase Realtime Database
                const RealTimeFirebaseUrl = "https://traveler-authendication-default-rtdb.firebaseio.com/users.json";
                const ResponseData = await axios.get(RealTimeFirebaseUrl);

                if (ResponseData.data) {
                    const userProfiles = ResponseData.data;
                    const userKey = Object.keys(userProfiles).find((key) => userProfiles[key].email === loginformData.email);

                    if (userKey) {
                        const profile = { id: userKey, ...userProfiles[userKey] };
                        setUserProfile(profile);
                        setUserProfileRTFB(profile);  
                    } else {
                        message.error("User profile not found in the database.");
                    }
                } else {
                    message.error("No user data available in the database.");
                }
            }
        } catch (err) {
            console.error("Login Failed:", err.message);
            message.error("Invalid credentials. Please try again.");             
        } finally {
            setLoading(false);
        }
    };

    const handleGuestLogin = () => {
        setUserLogin(true);
        navigate("/Home", { state: { userProfile: null, userLogin: true } });
    };

    useEffect(() => {
        if (userLogin && userProfile !== null) {
            message.success("Login Successful!");
            navigate("/Home", { state: { userProfile, userLogin: true } });   
        }
    }, [userLogin, userProfile, navigate]);

    return (
        <div className="login-page">
            <Card className="login-card">
                <Card.Body>
                    <Card.Title className="text-center">Login Page</Card.Title>
                    <Form onSubmit={handleSubmit} className="login-form">
                        <Form.Group controlId="formEmail" className="form-group">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={loginformData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                className="input-field"
                            />
                        </Form.Group>
                        <Form.Group controlId="formPassword" className="form-group">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={loginformData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                className="input-field"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            className="submit-button"
                            disabled={loading}
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </Form>
                    <Button
                        variant="secondary"
                        className="guest-button"
                        onClick={handleGuestLogin}
                    >
                        Guest Login
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default LoginForm;





 