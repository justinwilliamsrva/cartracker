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
        // this.handleDelete = this.handleDelete.bind(this);
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
            <div key={car.id} className="media pb-2">
                <div className="media-body">
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
                    <button
                        onClick={() => this.handleChange(car)}
                        className="btn btn-sm btn-success float-right "
                    >
                        Show
                    </button>
                    {/* <Link
                        to={`/${car.id}`}
                        
                        className="btn btn-sm btn-success float-right mr-1"
                    >
                        Show
                    </Link> */}
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
                    <div className="row justify-content-center">
                        <table className="table table-sm col-3 align-middle ">
                            <thead>
                                <tr>
                                    <th colSpan="2" scope="col">
                                        Milage
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Last Change</th>
                                    <th scope="row">{this.state.mileage}</th>
                                </tr>
                                <tr>
                                    <th scope="row">New Change</th>
                                    <th scope="row">
                                        {this.state.mileage + 5000}
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card mt-1">
                                <div className="card-header">Your Fleat</div>
                                <div className="card=body p-2">
                                    {this.renderTasks()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
