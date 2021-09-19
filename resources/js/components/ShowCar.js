import React, { Component } from "react";
import RenderCars from "./RenderCars";
import { BrowswerRouter, Link } from "react-router-dom";

export default class ShowCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            mileage: "",
            car: [],
            cars: [],
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(id) {
        // remove from local state
        const isNotId = (car) => car.id != id;
        const updatedCars = this.state.cars.filter(isNotId);
        this.setState({ cars: updatedCars });
        //make delete request to the backend
        axios.delete(`/cars/${id}`);
    }

    handleChange(car) {
        this.setState({
            year: car.year,
            make: car.make,
            model: car.model,
            mileage: car.mileage,
        });
    }

    renderTasks() {
        function overdueWork(mileage) {
            return mileage < 40000 ? " car is working fine" : " fix me now";
        }
        return this.state.cars.map((car) => (
            <div key={car.id} className="media rounded pb-2 m-2 bg-blue-400">
                <div className="media-body p-2 ">
                    <Link to={`/${car.id}/edit`}>
                        {car.year} {car.make} {car.model} with {car.mileage}{" "}
                        miles
                    </Link>

                    <button
                        onClick={() => this.handleDelete(car.id)}
                        className="btn btn-sm btn-warning float-right "
                    >
                        Delete
                    </button>

                    {/* <Link
                        to={`/${car.id}`}
                        
                        className="btn btn-sm btn-success float-right mr-1"
                    >
                        Show
                    </Link> */}
                    <button
                        onClick={() => this.handleChange(car)}
                        className="btn btn-sm btn-success float-right "
                    >
                        Show
                    </button>
                    <p className="mb-0">
                        Current Status: {overdueWork(car.mileage)}
                    </p>

                    <p className="text-muted ">
                        last updated on {car.updated_at.slice(0, 10)}
                    </p>

                    <hr className="m-0" />
                </div>
            </div>
        ));
    }
    getTasks() {
        axios.get(`/cars/5/edit`).then((response) => {
            console.log("response", response);
            this.setState({
                car: response.data.car,
                year: response.data.car.year,
                make: response.data.car.make,
                model: response.data.car.model,
                mileage: response.data.car.mileage,
            });
        });
    }
    getCars() {
        axios
            .get("/cars")
            // .then((response) => console.log(response))
            .then((response) =>
                this.setState({ cars: [...response.data.cars] })
            );
    }

    //lifecycle method
    componentDidMount() {
        this.getTasks();
        this.getCars();
    }

    render() {
        console.log(this.props);
        return (
            <>
                <div className="container">
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-2">
                        <div className="md:col-span-1 lg:col-span-1">
                            <div className="card  h-100">
                                <div className="card-header">Your Fleat</div>
                                <div className="card-body">
                                    {this.renderTasks()}
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-1 lg:col-span-2">
                            <div class="card h-100">
                                <div className="card-header text-center">
                                    {" "}
                                    {this.state.year} {this.state.make}{" "}
                                    {this.state.model} with {this.state.mileage}{" "}
                                    miles{" "}
                                </div>
                                <div className="card-body  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    <div class="text-xl  flex items-center ">
                                        Last Updated - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Mileage - {this.state.mileage}
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Exterior Color - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Interior Color - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Vin - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Doors - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        DriveTrain - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Type - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Cylinders - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Yearly Mileage - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Transmission - 1,000,000
                                    </div>
                                    <div class="text-xl  flex items-center ">
                                        Date Purchased - 1,000,000
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
