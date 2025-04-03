import React, { useEffect, useState } from "react";
import "./Table.css";
import user from "../ User";

const Table = ({ List, colNames, width = "100px", height = "70px" }) => {
    const [data, setData] = useState(List);
    useEffect(() => {
        setData();
    }, []);

    const handleEdit = (id) => {
        alert(id);
    };
    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure to delete this item?")) {
                const dt = data.flter((obj) => obj.id !== id);
                setData(dt);
            }
        }
    };
    return (
        <div style={{ width: "100%", boxShadow: "3px 6px 3px #ccc" }}>
            {List?.length > 0 && (
                <table cellspacing="0" style={{ width: "100%", height: height, padding: "5px 10px", backgroundColor: "skyblue", textAlign: "center" }}>
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr>
                            {colNames.map((headerItem, index) => {
                                return <th key={index}>{headerItem}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(List).map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index}>{value}</td>
                                ))}
                                <td>
                                    <button className="btn btn-primary" onClick={() => handleEdit(obj.id)}>
                                        Edit
                                    </button>
                                    &nbsp;
                                    <button className="btn btn-danger" onClick={() => handleDelete(obj.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
