import React from "react";

export default function Greet({ name, email }) {
    return (
        <div className="container card p-5 mt-4 register-container text-center">
            <h3>{name},</h3>
            <h3>Thankyou.</h3>
            <h3>verification sent to {email},</h3>
        </div>
    );
}
