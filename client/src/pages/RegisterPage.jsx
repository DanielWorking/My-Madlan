import React, { useState } from "react";
import "../styles/Register.scss";

function RegisterPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: null,
    });
    const handlechange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            [name]: name === "profileImage" ? files[0] : value,
        });
    };
    console.log(formData);
    return (
        <>
            <div className="register">
                <div className="register_content">
                    <form className="register_content_form">
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handlechange}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handlechange}
                            required
                        />
                        <input
                            id="image"
                            type="file"
                            name="profileImage"
                            accept="image/*"
                            onChange={handlechange}
                            required
                            style={{ display: "none" }}
                        />
                        <label htmlFor="image">
                            <img
                                src="/assets/addImage.png"
                                alt="add profile photo"
                            />
                            Upload Your Photo
                        </label>
                        {formData.profileImage && (
                            <img
                                src={URL.createObjectURL(formData.profileImage)}
                                alt="profile photo"
                                style={{ maxWidth: "80px" }}
                            />
                        )}
                        <button type="submit">REGISTER</button>
                    </form>
                    <a href="./login">Already have an account? Log In Here</a>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;
