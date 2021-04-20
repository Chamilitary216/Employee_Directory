import React from "react";
import "./style.css";

const EmployeeTable = {props} => {
    return (
        <table className = "table table-striped table-sortable text-center">
            <tableHead>
                <tr>
                    <th scope = "col" > Image </th>
                    <th scope = "col" data-field = "name" data-sortable = "true">
                        <span onClick = {() => props.sortBy ("name", "last", "first")}> Name </span>
                    </th>
                </tr>
            </tableHead>
        </table>
    )   
}