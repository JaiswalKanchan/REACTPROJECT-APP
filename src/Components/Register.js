import React, { useEffect, useState } from "react";
import "./User.css";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        age: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        // Retrieve the existing data from localStorage and ensure it's an array
        const storedData = localStorage.getItem("userData");
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            // Make sure we are loading an array and not an object
            if (Array.isArray(parsedData)) {
                setFormData(parsedData[parsedData.length - 1]); // Set formData to the last saved object (if any)
            }
        } else {
            // If no data is stored, initialize with empty values
            setFormData({
                name: "",
                address: "",
                age: "",
                email: "",
                password: "",
            });
        }
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        let existingData = JSON.parse(localStorage.getItem("userData"));


        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        // Append new form data to existing data (as an object)
        existingData.push(formData);

        // Save the updated array back to localStorage
        localStorage.setItem("userData", JSON.stringify(existingData));

        alert("User data saved to localStorage!");

        // Reset the form fields after submission
        setFormData({
            name: "",
            address: "",
            age: "",
            email: "",
            password: "",
        });

        // Dispatch a custom event indicating that user data has been updated
        window.dispatchEvent(new Event("userDataUpdated"));
    };

    return (
        <div className="container card p-5 mt-4 register-container">
            <h1 className="text-center">Add New User</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required className="form-control" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" required className="form-control" value={formData.address} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" required className="form-control" value={formData.age} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required className="form-control" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required className="form-control" value={formData.password} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Submit
                </button>
            </form>
        </div>
    );
}
