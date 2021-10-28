import React, { Component } from "react";
import MaintenanceItem from "./MaintenanceItem";

export default class Maintenance extends Component {
    render() {
        return (
            <div className=" maintenance card-body  ">
                {this.props.afc_color ? (
                    <div className=" grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        <MaintenanceItem
                            name="Air Filter - Cabin"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.air_filter_cabin}
                            color={this.props.afc_color}
                            shownext={this.props.shownextAFC}
                        />
                        <MaintenanceItem
                            name="Air Filter - Engine"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.air_filter_engine}
                            color={this.props.afe_color}
                            shownext={this.props.shownextAFE}
                        />
                        <MaintenanceItem
                            name="Battery"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.battery}
                            color={this.props.battery_color}
                            shownext={this.props.shownextBAT}
                        />
                        <MaintenanceItem
                            name="Brake Fluid"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.brake_fluid}
                            color={this.props.brake_fluid_color}
                            shownext={this.props.shownextBrakeFluid}
                        />
                        <MaintenanceItem
                            name="Brake Pads - Front"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.brake_pads_front}
                            color={this.props.brake_pad_front_color}
                            shownext={this.props.shownextBrakePadFront}
                        />
                        <MaintenanceItem
                            name="Brake Rotors - Front"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.brake_rotors_front}
                            color={this.props.brake_rotor_front_color}
                            shownext={this.props.shownextBrakeRotorFront}
                        />
                        <MaintenanceItem
                            name="Coolant Flush"
                            mileage={this.props.mileage}
                            yearly_mileage={this.props.yearly_mileage}
                            last={this.props.coolant_flush}
                            color={this.props.coolant_flush_color}
                            shownext={this.props.shownextCoolantFlush}
                        />

                        {this.props.drivetrain != "FWD" && (
                            <MaintenanceItem
                                name="Differential Fluid"
                                mileage={this.props.mileage}
                                yearly_mileage={this.props.yearly_mileage}
                                last={this.props.dif_fluid}
                                color={this.props.dif_fluid_color}
                                shownext={this.props.shownextDiffFluid}
                            />
                        )}
                    </div>
                ) : (
                    <h2 className="text-center m-auto">Select a Vehicle</h2>
                )}
            </div>
        );
    }
}
