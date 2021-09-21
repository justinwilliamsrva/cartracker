import React from "react";

export default function AirFilterCabin(props) {
    return (
        <div className="p-2">
            <table class="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th scope="col" className="bg-green-500"></th>
                        <th scope="col">Air Filter - Cabin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Last</th>
                        <td>{props.mileage}</td>
                    </tr>
                    <tr>
                        <th scope="row">Next</th>
                        <td>{props.mileage + 5000}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
