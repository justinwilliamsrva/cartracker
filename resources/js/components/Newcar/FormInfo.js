import React, { Component } from "react";

export default class FormInfo extends Component {
    render() {
        if (this.props.currentStep !== 2) {
            // Prop: The current step
            return null;
        }
        return (
            <>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Exterior Color
                    </label>
                    <input
                        name="ex_color"
                        onChange={this.props.handleChange}
                        value={this.props.ex_color}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Interior Color
                    </label>
                    <input
                        name="in_color"
                        onChange={this.props.handleChange}
                        value={this.props.in_color}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">DriveTrain</label>
                    <select
                        name="drivetrain"
                        onChange={this.props.handleChange}
                        value={this.props.drivetrain}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        required
                    >
                        <option>AWD/4WD</option>
                        <option>FWD</option>
                        <option>RWD</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Transmission
                    </label>
                    <select
                        name="transmission"
                        onChange={this.props.handleChange}
                        value={this.props.transmission}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        required
                    >
                        <option>Automatic</option>
                        <option>Manual</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Cylinders</label>
                    <select
                        name="cylinders"
                        onChange={this.props.handleChange}
                        value={this.props.cylinders}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        required
                    >
                        <option>3 Clylinder</option>
                        <option>4 Clylinder</option>
                        <option>5 Clylinder</option>
                        <option>6 Clylinder</option>
                        <option>8 Clylinder</option>
                        <option>10 Clylinder</option>
                        <option>12 Clylinder</option>
                        <option>16 Clylinder</option>
                        <option>Rotary Engine</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Type</label>
                    <select
                        name="type"
                        onChange={this.props.handleChange}
                        value={this.props.type}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    >
                        <option>Convertible</option>
                        <option>Sedan</option>
                        <option>Van/Minivan</option>
                        <option>Coupe</option>
                        <option>SUV/Crossover</option>
                        <option>Wagon</option>
                        <option>Hatchback</option>
                        <option>Truck</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Doors</label>
                    <select
                        name="doors"
                        onChange={this.props.handleChange}
                        value={this.props.doors}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    >
                        <option>Two Door</option>
                        <option>Three Door</option>
                        <option>Four Door</option>
                        <option>Five Door</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Tire Size</label>
                    <input
                        name="tire_size"
                        onChange={this.props.handleChange}
                        value={this.props.tire_size}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    />
                </div>
            </>
        );
    }
}
