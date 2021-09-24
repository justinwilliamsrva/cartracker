import React, { Component } from "react";

export default class Battery extends Component {
    render() {
        return (
            <div className="p-2">
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={this.props.battery_color}
                            ></th>
                            <th scope="col">Battery</th>
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
