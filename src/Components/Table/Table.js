import React, { useEffect, useState } from "react";
import "./Table.css";

const Table = ({ List, colNames, width = "100px", height = "70px" }) => {
    const [data, setData] = useState(List);

    const handleEdit = (id) => {
        alert("Edit ID: " + id);
    };

    const handleDelete = (id) => {
        if (id > 0) {
            if (window.confirm("Are you sure to delete this item?")) {
                const updatedData = data.filter((obj) => obj.id !== id);
                setData(updatedData);

                // Save the updated data to localStorage
                localStorage.setItem("tableData", JSON.stringify(updatedData)); // use consistent key
                console.log("Updated Data", updatedData);
            }
        }
    };

    // Ensure that the data state is updated correctly when the List prop changes
    useEffect(() => {
        if (List) {
            setData(List);
        }
    }, [List]);

    return (
        <div style={{ width: "100%", boxShadow: "3px 6px 3px #ccc" }}>
            {data.length > 0 && (
                <table cellSpacing="0" style={{ width: "100%", height: height, padding: "5px 10px", backgroundColor: "skyblue", textAlign: "center" }}>
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr>
                            {colNames.map((headerItem, index) => {
                                return <th key={index}>{headerItem === "id" ? "Index + 1" : headerItem}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((obj, index) => (
                            <tr key={index}>
                                {Object.values(obj).map((value, index2) => (
                                    <td key={index2}>
                                        {index2 === 0 ? index + 1 : value} {/* Show index + 1 for 'id' column */}
                                    </td>
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
