import React, { Component } from "react";

export default class AirFilterEngine extends Component {
    render() {
        return (
            <div className="p-2">
                <table class="table table-bordered table-sm">
                    <thead>
                        <tr>
                            <th
                                scope="col"
                                className={this.props.afe_color}
                            ></th>
                            <th scope="col">Air Filter - Engine</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Last Service</th>
                            <td>{this.props.air_filter_engine} miles</td>
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
