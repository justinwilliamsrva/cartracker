import React, { Component } from "react";

export default class MaintenanceItem extends Component {
    render() {
        return (
            <div className="mx-2 mb-2">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={`w-1/3 ${this.props.color}`}
                            >
                                {this.props.shownext - this.props.mileage}
                            </th>
                            <th scope="col" className="w-2/3">
                                {this.props.name}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Last Service</th>
                            <td>{this.props.last === 0 ? 'Never Performed'  : this.props.last + " miles" }</td>
                        </tr>
                        <tr>
                            <th scope="row">Next Service</th>
                            <td>{this.props.shownext} miles</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
