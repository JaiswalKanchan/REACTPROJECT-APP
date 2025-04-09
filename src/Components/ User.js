import { Link } from "react-router-dom";
import Table from "./Table/Table";
import React, { useState } from "react";
import Greet from "./Greet";
import Register from "./Register";
import Popup from "./Popup";
import "./User.css";
function User() {
    const colNames = ["ID", "NAME", "ADDRESS", "AGE", "Email", "ACTIONS"];
    // const list = [
    //     { id: 1, firstname: "Mona", lastname: "Jaiswal", address: "varanasi", Age: "25", Email: "monajaiswal280@gmail.com" },
    //     { id: 2, firstname: "Priyanshi", lastname: "singh", address: "Lucknow", Age: "22", Email: "priyanshi280@gmail.com" },
    //     { id: 3, firstname: "Aaru", lastname: "rai", address: "Mirzapur", Age: "24", Email: "aarurai280@gmail.com" },
    //     { id: 4, firstname: "Anshika", lastname: "gupta", address: "Delhi", Age: "23", Email: "anshikapatel280@gmail.com" },
    //     { id: 5, firstname: "Divyanshi", lastname: "singh", address: "Mumbai", Age: "26", Email: "divyanshi280@gmail.com" },
    // ];
    const [state, setState] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        Actions: "",
        Update: "",
        isRegistered: false,
    });
    const UserData = JSON.parse(localStorage.getItem("userData") || "[]");

    // const UserData = JSON.parse(data);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const registrationHandler = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const address = event.target.name.value;
        const age = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setState({ name, address, age, email, password, isRegistered: true });
    };

    return (
        <div className="user-container">
            <div>
                <h1 className="user-title">User Page</h1>
                <p className="user-subtitle">"This is user page of our awesome App."</p>
                <Link to="/">Go to Home Page</Link>
            </div>
            <div className="main-class">
                <Table List={UserData} colNames={colNames} />
                <button className="left-align" onClick={() => setIsPopupOpen(true)}>
                    Create
                </button>
            </div>
            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <Register submit={registrationHandler} />
            </Popup>
            {state.isRegistered && <Greet name={state.name} age={state.age} email={state.email} />}
        </div>
    );
}
export default User;
