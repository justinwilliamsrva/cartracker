import React, { Component } from "react";

export default class Battery extends Component {
    render() {
        function overdueWork(mileage, miles) {
            return miles - mileage;
        }
        return (
            <div className="p-2">
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={`w-1/3 ${this.props.battery_color}`}
                            >
                                {overdueWork(
                                    this.props.mileage,
                                    this.props.shownext
                                )}
                            </th>
                            <th scope="col" className="w-2/3 ">
                                Battery
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Last Service</th>
                            <td>{this.props.battery} miles</td>
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
