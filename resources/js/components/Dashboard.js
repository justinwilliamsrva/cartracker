import React, { Component } from "react";
import RenderCars from "./RenderCars";
import { BrowswerRouter, Link, Redirect } from "react-router-dom";
import Maintenance from "./Maintenance/Maintenance";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
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
            updated_at: "",
            car: [],
            cars: [],
            green: "",
            yellow: "",
            red: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMileage = this.handleMileage.bind(this);

        this.renderTasks = this.renderTasks.bind(this);
        this.showColor = this.showColor.bind(this);

        // this.handleDelete = this.handleDelete.bind(this);
    }
    // handleDelete(id) {
    //     // remove from local state
    //     const isNotId = (car) => car.id != id;
    //     const updatedCars = this.state.cars.filter(isNotId);
    //     this.setState({ cars: updatedCars });
    //     //make delete request to the backend
    //     axios.delete(`/cars/${id}`);
    // }

    handleMileage(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        console.log(name, value);
        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        // e.preventDefault();
        axios
            .put(`/cars/${this.state.id}`, {
                mileage: this.state.mileage,
            })
            .then(() => {
                this.getCars();
            });
    }

    handleChange(car) {
        this.setState({
            id: car.id,
            year: car.year,
            make: car.make,
            model: car.model,
            mileage: car.mileage,
            yearly_mileage: car.yearly_mileage,
            vin: car.vin,
            ex_color: car.ex_color,
            in_color: car.in_color,

            drivetrain: car.drivetrain,
            transmission: car.transmission,
            cylinders: car.cylinders,
            type: car.type,
            doors: car.doors,
            tire_size: car.tire_size,
            date_purchased: car.date_purchased,
            updated_at: car.updated_at,
        });
    }

    renderTasks() {
        function overdueWork(mileage) {
            return mileage < 40000 ? " car is working fine" : " fix me now";
        }
        return this.state.cars.map((car) => (
            <div key={car.id}>
                <div className="grid grid-cols-2 mb-2 mt-2">
                    <button
                        onClick={() => this.handleChange(car)}
                        className=" rounded p-2 mr-1 bg-blue-500"
                    >
                        {" "}
                        <h3 className="text-white">
                            {car.year} {car.make} {car.model}
                        </h3>
                        <p>{car.mileage} miles</p>
                    </button>
                    <div className="p-2 border-l-2 ml-2  ">
                        <p className="mb-0 text-center">
                            Status: {overdueWork(car.mileage)} <br /> last
                            updated on {car.updated_at.slice(0, 10)}
                        </p>

                        {/* <p className="text-muted ">
                            last updated on {car.updated_at.slice(0, 10)}
                        </p> */}
                    </div>
                </div>
                <hr className="m-0 border-4" />
            </div>
        ));
    }
    // getTasks() {
    //     axios.get(`/cars/5/edit`).then((response) => {
    //         console.log("response", response);
    //         this.setState({
    //             id: response.data.id,
    //             car: response.data.car,
    //             year: response.data.car.year,
    //             make: response.data.car.make,
    //             model: response.data.car.model,
    //             mileage: response.data.car.mileage,
    //         });
    //     });
    // }
    getCars() {
        axios
            .get("/cars")
            // .then((response) => console.log(response))
            .then((response) => {
                this.setState({ cars: [...response.data.cars] });
                console.log(
                    typeof response.data.cars.length,
                    response.data.cars.length
                );
                if (response.data.cars.length === 0) {
                    useHistory().push("/newcar");
                }
            });
    }

    //lifecycle method
    componentDidMount() {
        // this.getTasks();
        this.getCars();
    }
    // componentWillUnmount() {
    //     this.getCars();
    // }

    // color function
    showColor(data) {
        this.setState({ green: data });
    }

    render() {
        // let history = useHistory();
        console.log(this.props);
        return (
            <>
                <div className="container ">
                    <div>
                        {this.state.id ? (
                            <div className="  text-center p-3 mb-3">
                                <h1 className="">
                                    {this.state.year} {this.state.make}{" "}
                                    {this.state.model}
                                </h1>

                                <div className=" flex justify-center form mt-1">
                                    <form
                                        className="flex flex-row  justify-around items-center"
                                        onSubmit={this.handleSubmit}
                                    >
                                        <input
                                            name="mileage"
                                            onChange={this.handleMileage}
                                            value={this.state.mileage}
                                            type="number"
                                            className="form-control w-50 "
                                            id="exampleFormControlInput1"
                                            min={0}
                                        />
                                        <button className="btn btn-sm btn-primary mb-1">
                                            Update Mileage
                                        </button>
                                    </form>
                                </div>
                            </div>
                        ) : (
                            <h1 className="text-center p-3 mb-3">
                                Vehicle Dashboard
                            </h1>
                        )}
                    </div>
                    <div>
                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                            <div className="md:col-span-1 lg:col-span-1">
                                <div className="card shadow-md  h-100">
                                    <div className="card-header">
                                        <h2>
                                            Your Fleet{" "}
                                            <div className="float-right">
                                                <Link
                                                    to={`/newcar`}
                                                    className="btn btn-sm btn-primary  mr-1"
                                                >
                                                    Add a Vehicle
                                                </Link>
                                            </div>
                                        </h2>
                                    </div>
                                    <div className="card-body maintenance">
                                        {this.renderTasks()}
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-1 lg:col-span-2">
                                <div className="card shadow-md  h-100">
                                    <div className="card-header">
                                        <h2>
                                            Vehicle Info
                                            <div className="float-right">
                                                <Link
                                                    to={`/${this.state.id}/edit`}
                                                    className="btn btn-sm btn-primary mr-1"
                                                >
                                                    Update
                                                </Link>
                                                {/* <a
                                                        onClick={() =>
                                                            this.handleDelete(
                                                                this.state.id
                                                            )
                                                        }
                                                        className="btn btn-sm btn-warning mr-1 "
                                                    >
                                                        Delete
                                                    </a> */}
                                            </div>
                                        </h2>
                                    </div>
                                    <div className="card-body maintenances">
                                        {this.state.id ? (
                                            <div
                                                id="vehicle-info-tables"
                                                className=" grid  sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                                            >
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Last Updated
                                                                </th>
                                                                <td scope="col">
                                                                    {this.state.updated_at.slice(
                                                                        0,
                                                                        10
                                                                    )}
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Yearly
                                                                    Mileage
                                                                </th>
                                                                <td scope="col">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .yearly_mileage
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    VIN Number
                                                                </th>
                                                                {this.state
                                                                    .vin ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .vin
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Exterior
                                                                    Color
                                                                </th>
                                                                {this.state
                                                                    .ex_color ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .ex_color
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Interior
                                                                    Color
                                                                </th>
                                                                {this.state
                                                                    .in_color ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .in_color
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Drivetrain
                                                                </th>
                                                                <td scope="col">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .drivetrain
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Transmission
                                                                </th>
                                                                <td scope="col">
                                                                    {
                                                                        this
                                                                            .state
                                                                            .transmission
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Cylinders
                                                                </th>
                                                                {this.state
                                                                    .cylinders ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .cylinders
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Type
                                                                </th>
                                                                {this.state
                                                                    .type ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .type
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Doors
                                                                </th>
                                                                {this.state
                                                                    .doors ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .doors
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Tire Size
                                                                </th>
                                                                {this.state
                                                                    .tire_size ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .tire_size
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div className="p-1">
                                                    <table className="table table-bordered table-sm">
                                                        <thead>
                                                            <tr>
                                                                <th
                                                                    className="w-50"
                                                                    scope="col"
                                                                >
                                                                    Date
                                                                    Purchased
                                                                </th>
                                                                {this.state
                                                                    .date_purchased ===
                                                                1 ? (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .date_purchased
                                                                        }
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        N/A
                                                                    </td>
                                                                )}
                                                            </tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                            </div>
                                        ) : (
                                            <h2 className="text-center m-auto">
                                                Select a Vehicle
                                            </h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
                            <div className=" md:col-span-1 lg:col-span-1">
                                <div className="card shadow-md ">
                                    <div className="card-header">
                                        <h2>Status</h2>
                                    </div>
                                    <div className="card-body maintenances">
                                        {this.state.id ? (
                                            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-1 gap-2 ">
                                                <div>
                                                    <div className="text-white bg-green-500  rounded-t  px-4 py-2 text-center">
                                                        Up-to-date
                                                    </div>
                                                    <div className="border border-t-0 border-green-400  font-bold text-3xl rounded-b   px-1 py-1 text-green-500 text-center">
                                                        <p>22</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-white bg-yellow-500  rounded-t  px-4 py-2 text-center">
                                                        Due Soon
                                                    </div>
                                                    <div className="border border-t-0 border-yellow-400  font-bold text-3xl rounded-b   px-1 py-1 text-yellow-500 text-center">
                                                        <p>1</p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-white bg-red-500  rounded-t  px-4 py-2 text-center">
                                                        Past-due
                                                    </div>
                                                    <div className="border border-t-0 border-red-400  font-bold text-3xl rounded-b   px-1 py-1 text-red-500 text-center">
                                                        <p>0</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <h2 className="text-center m-auto">
                                                Select a Vehicle
                                            </h2>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-1 lg:col-span-2 ">
                                <div className="card shadow-md  ">
                                    <div className="card-header ">
                                        <h2>Maintenance Records</h2>
                                    </div>

                                    <Maintenance
                                        mileage={this.state.mileage}
                                        showColor={this.showColor}
                                        // green={this.state.green}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
