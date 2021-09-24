import AirFilterCabin from "./MaintenanceItems/AirFilterCabin";
import AirFilterEngine from "./MaintenanceItems/AirFilterEngine";

import React, { Component } from "react";

export default class Maintenance extends Component {
    render() {
        return (
            <div className=" maintenance card-body  ">
                {this.props.afc_color ? (
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <AirFilterCabin
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.early_mileage}
                            air_filter_cabin={this.props.air_filter_cabin}
                            afc_color={this.props.afc_color}
                            // color={this.color}
                        />
                        <AirFilterEngine />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterEngine />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterEngine />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                        <AirFilterCabin />
                    </div>
                ) : (
                    <h2 className="text-center m-auto">Select a Vehicle</h2>
                )}
            </div>
        );
    }
}
