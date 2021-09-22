import React, { Component } from "react";
import FormBasic from "./FormBasic";
import FormInfo from "./FormInfo";
import FormMaintenance from "./FormMaintenance";

export default class NewCar extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values

        // Default is Step 1
        this.state = {
            currentStep: 1,
            year: "",
            make: "",
            model: "",
            mileage: "",
            yearly_mileage: "",
            vin: "",
            ex_color: "",
            in_color: "",
            drivetrain: "",
            transmission: "",
            cylinders: "",
            type: "",
            doors: "",
            tire_size: "",
            date_purchased: "",
            air_filter_cabin: "",
            air_filter_engine: "",
            battery: "",
            brake_fluid: "",
            brake_pads_front: "",
            brake_rotors_front: "",
            brake_pads_rear: "",
            brake_rotors_rear: "",
            coolant_flush: "",
            dif_fluid: "",
            engine_oil: "",
            engine_oil_filter: "",
            power_steering_fluid: "",
            spark_plugs: "",
            tran_fluid: "",
            tires_front_driver: "",
            tires_front_passenger: "",
            tires_rear_driver: "",
            tires_rear_passenger: "",
            windshield_wipers: "",
            cars: [],
        };

        // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    _next() {
        let currentStep = this.state.currentStep;
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1;
        this.setState({
            currentStep: currentStep,
        });
    }

    _prev() {
        let currentStep = this.state.currentStep;
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1;
        this.setState({
            currentStep: currentStep,
        });
    }

    get previousButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button"
                    onClick={this._prev}
                >
                    Previous
                </button>
            );
        }
        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button"
                    onClick={this._next}
                >
                    Next
                </button>
            );
        }
        // ...else render nothing
        return null;
    }
    // Use the submitted data to set the state
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    // Trigger an alert on form submission
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/cars", {
                year: this.state.year,
                make: this.state.make,
                model: this.state.model,
                mileage: this.state.mileage,
                yearly_mileage: this.state.yearly_mileage,
                vin: this.state.vin,
                ex_color: this.state.ex_color,
                in_color: this.state.in_color,
                drivetrain: this.state.drivetrain,
                transmission: this.state.transmission,
                cylinders: this.state.cylinders,
                type: this.state.type,
                doors: this.state.doors,
                tire_size: this.state.tire_size,
                date_purchased: this.state.date_purchased,
                air_filter_cabin: this.state.air_filter_cabin,
                air_filter_engine: this.state.air_filter_engine,
                battery: this.state.battery,
                brake_fluid: this.state.brake_fluid,
                brake_pads_front: this.state.brake_pads_front,
                brake_rotors_front: this.state.brake_rotors_front,
                brake_pads_rear: this.state.brake_pads_rear,
                brake_rotors_rear: this.state.brake_rotors_rear,
                coolant_flush: this.state.coolant_flush,
                dif_fluid: this.state.dif_fluid,
                engine_oil: this.state.engine_oil,
                engine_oil_filter: this.state.engine_oil_filter,
                power_steering_fluid: this.state.power_steering_fluid,
                spark_plugs: this.state.spark_plugs,
                tran_fluid: this.state.tran_fluid,
                tires_front_driver: this.state.tires_front_driver,
                tires_front_passenger: this.state.tires_front_passenger,
                tires_rear_driver: this.state.tires_rear_driver,
                tires_rear_passenger: this.state.tires_rear_passenger,
                windshield_wipers: this.state.windshield_wipers,
            })
            .then((response) => {
                console.log(response);
                this.props.history.push("/dashboard");
            });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-center">Add a Vehicle</h1>
                            <hr className="my-2" />
                            Page {this.state.currentStep}/3
                            {/* {this.previousButton}
                            {this.nextButton} */}
                            <form onSubmit={this.handleSubmit}>
                                {/* // Render the form steps and pass in the required props */}
                                <FormBasic
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    year={this.state.year}
                                    make={this.state.make}
                                    model={this.state.model}
                                    mileage={this.state.mileage}
                                    yearly_mileage={this.state.yearly_mileage}
                                    vin={this.state.vin}
                                    date_purchased={this.state.date_purchased}
                                />
                                <FormInfo
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    ex_color={this.state.ex_color}
                                    in_color={this.state.in_color}
                                    drivetrain={this.state.drivetrain}
                                    transmission={this.state.transmission}
                                    cylinders={this.state.cylinders}
                                    type={this.state.type}
                                    doors={this.state.doors}
                                    tire_size={this.state.tire_size}
                                />
                                <FormMaintenance
                                    currentStep={this.state.currentStep}
                                    handleChange={this.handleChange}
                                    air_filter_cabin={
                                        this.state.air_filter_cabin
                                    }
                                    air_filter_engine={
                                        this.state.air_filter_engine
                                    }
                                    battery={this.state.battery}
                                    brake_fluid={this.state.brake_fluid}
                                    brake_pads_front={
                                        this.state.brake_pads_front
                                    }
                                    brake_rotors_front={
                                        this.state.brake_rotors_front
                                    }
                                    brake_pads_rear={this.state.brake_pads_rear}
                                    brake_rotors_rear={
                                        this.state.brake_rotors_rear
                                    }
                                    coolant_flush={this.state.coolant_flush}
                                    dif_fluid={this.state.dif_fluid}
                                    engine_oil={this.state.engine_oil}
                                    engine_oil_filter={
                                        this.state.engine_oil_filter
                                    }
                                    power_steering_fluid={
                                        this.state.power_steering_fluid
                                    }
                                    spark_plugs={this.state.spark_plugs}
                                    tran_fluid={this.state.tran_fluid}
                                    tires_front_driver={
                                        this.state.tires_front_driver
                                    }
                                    tires_front_passenger={
                                        this.state.tires_front_passenger
                                    }
                                    tires_rear_driver={
                                        this.state.tires_rear_driver
                                    }
                                    tires_rear_passenger={
                                        this.state.tires_rear_passenger
                                    }
                                    windshield_wipers={
                                        this.state.windshield_wipers
                                    }
                                />
                            </form>
                            {this.previousButton}
                            {this.nextButton}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
