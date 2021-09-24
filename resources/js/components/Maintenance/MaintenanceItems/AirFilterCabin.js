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
                                className={this.props.afc_color}
                            ></th>
                            <th scope="col">Air Filter - Cabin</th>
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
