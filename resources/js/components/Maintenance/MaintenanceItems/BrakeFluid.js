import React, { Component } from "react";

export default class BrakeFluid extends Component {
    render() {
        return (
            <div className="p-2">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={`w-1/3 ${this.props.brake_fluid_color}`}
                            >
                                {this.props.shownextBrakeFluid -
                                    this.props.mileage}
                            </th>
                            <th scope="col" className="w-2/3">
                                Brake Fluid
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Last Service</th>
                            <td>{this.props.brake_fluid} miles</td>
                        </tr>
                        <tr>
                            <th scope="row">Next Service</th>
                            <td>{this.props.shownextBrakeFluid} miles</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
