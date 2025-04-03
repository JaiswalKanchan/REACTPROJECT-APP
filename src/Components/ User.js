import { Link } from "react-router-dom";
import Table from "./Table/Table";
import React from "react";
import Greet from "./Greet";
import Register from "./Register";
import Popup from "./Popup";
import "./User.css";
function user() {
    const colNames = ["ID", "FIRSTNAME", "LASTNAME", "ADDRESS", "AGE", "Email", "ACTIONS"];
    const list = [
        { id: 1, firstname: "Mona", lastname: "Jaiswal", address: "varanasi", Age: "25", Email: "monajaiswal280@gmail.com" },
        { id: 2, firstname: "Priyanshi", lastname: "singh", address: "Lucknow", Age: "22", Email: "priyanshi280@gmail.com" },
        { id: 3, firstname: "Aaru", lastname: "rai", address: "Mirzapur", Age: "24", Email: "aarurai280@gmail.com" },
        { id: 4, firstname: "Anshika", lastname: "gupta", address: "Delhi", Age: "23", Email: "anshikapatel280@gmail.com" },
        { id: 5, firstname: "Divyanshi", lastname: "singh", address: "Mumbai", Age: "26", Email: "divyanshi280@gmail.com" },
    ];
    const [state, setState] = user({
        firstname: "null",
        lastname: "null",
        email: "null",
        password: "null",
        age: "null",
        Actions: "null",
        isRegistered: false,
    });

    const [isPopupOpen, setIsPopupOpen] = user(false);
    const registrationHandler = (event) => {
        const name = event.target.name.value;
        const address = event.target.name.value;
        const age = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        setState({ name, address, age, email, password, isRegistered: true });

        event.preventDefault();
    };

    console.log("abcdef", isPopupOpen);

    return (
        <div className="user-container">
            <h1 className="user-title">User Page</h1>
            <p className="user-subtitle">"This is user page of our awesome App."</p>

            <Link className="right-align" to="/">
                Go to Home Page
            </Link>
            <Table List={list} colNames={colNames} />

            <button className="left-align" onClick={() => setIsPopupOpen(true)}>
                Create
            </button>

            <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
                <Register submit={registrationHandler} />
            </Popup>

            {state.isRegistered && <Greet name={state.name} age={state.age} email={state.email} />}
        </div>
    );
}
export default user;
