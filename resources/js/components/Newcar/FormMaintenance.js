import React, { Component } from "react";

export default class FormMaintenance extends Component {
    render() {
        if (this.props.currentStep !== 3) {
            // Prop: The current step
            return null;
        }
        return (
            <>
                <h2 className="text-center">Maintenance History</h2>
                <h3 className="text-center">Filters</h3>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Air Filter - Cabin
                    </label>
                    <input
                        name="air_filter_cabin"
                        onChange={this.props.handleChange}
                        value={this.props.air_filter_cabin}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Air Filter - Engine
                    </label>
                    <input
                        name="air_filter_engine"
                        onChange={this.props.handleChange}
                        value={this.props.air_filter_engine}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Engine Oil Filter
                    </label>
                    <input
                        name="engine_oil_filter"
                        onChange={this.props.handleChange}
                        value={this.props.engine_oil_filter}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <h3 className="text-center">Fluids</h3>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Brake Fluid
                    </label>
                    <input
                        name="brake_fluid"
                        onChange={this.props.handleChange}
                        value={this.props.brake_fluid}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Coolant</label>
                    <input
                        name="coolant_flush"
                        onChange={this.props.handleChange}
                        value={this.props.coolant_flush}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Differential Fluid - Filter
                    </label>
                    <input
                        name="dif_fluid"
                        onChange={this.props.handleChange}
                        value={this.props.dif_fluid}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Engine Oil</label>
                    <input
                        name="engine_oil"
                        onChange={this.props.handleChange}
                        value={this.props.engine_oil}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Power Steering Fluid
                    </label>
                    <input
                        name="power_steering_fluid"
                        onChange={this.props.handleChange}
                        value={this.props.power_steering_fluid}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Transmission Fluid
                    </label>
                    <input
                        name="tran_fluid"
                        onChange={this.props.handleChange}
                        value={this.props.tran_fluid}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <h3 className="text-center">Brakes</h3>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Brake Pads - Front
                    </label>
                    <input
                        name="brake_pads_front"
                        onChange={this.props.handleChange}
                        value={this.props.brake_pads_front}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Brake Rotors - Front
                    </label>
                    <input
                        name="brake_rotors_front"
                        onChange={this.props.handleChange}
                        value={this.props.brake_rotors_front}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Brake Pads - Rear
                    </label>
                    <input
                        name="brake_pads_rear"
                        onChange={this.props.handleChange}
                        value={this.props.brake_pads_rear}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Brake Rotors - Rear
                    </label>
                    <input
                        name="brake_rotors_back"
                        onChange={this.props.handleChange}
                        value={this.props.brake_rotors_back}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <h3 className="text-center">Tires</h3>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Tires: Driver-Front
                    </label>
                    <input
                        name="tires_front_driver"
                        onChange={this.props.handleChange}
                        value={this.props.tires_front_driver}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Tires: Passenger-Front
                    </label>
                    <input
                        name="tires_front_passenger"
                        onChange={this.props.handleChange}
                        value={this.props.tires_front_passenger}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Tires: Driver-Rear
                    </label>
                    <input
                        name="tires_rear_driver"
                        onChange={this.props.handleChange}
                        value={this.props.tires_rear_driver}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Tires: Passenger-Rear
                    </label>
                    <input
                        name="tires_rear_passenger"
                        onChange={this.props.handleChange}
                        value={this.props.tires_rear_passenger}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <h3 className="text-center">Miscellaneous</h3>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Battery</label>
                    <input
                        name="battery"
                        onChange={this.props.handleChange}
                        value={this.props.battery}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Spark PLugs
                    </label>
                    <input
                        name="spark_plugs"
                        onChange={this.props.handleChange}
                        value={this.props.spark_plugs}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Windshield Wipers
                    </label>
                    <input
                        name="windshield_wipers"
                        onChange={this.props.handleChange}
                        value={this.props.windshield_wipers}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                    />
                </div>
                <div className="flex justify-center">
                    <button className="btn btn-success jus" type="submit">
                        Submit New Vehicle
                    </button>
                </div>
            </>
        );
    }
}
