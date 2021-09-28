import { set } from "lodash";
import React, { Component } from "react";

export default class AirFilterCabin extends Component {
    render() {
        return (
            <div className="p-2">
                <table className="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={`w-1/3 ${this.props.afc_color}`}
                            >
                                {this.props.shownext - this.props.mileage}
                            </th>
                            <th scope="col" className="w-2/3">
                                Air Filter - Cabin
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Last Service</th>
                            <td>{this.props.air_filter_cabin} miles</td>
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
