import React, { Component } from "react";
import App from "./App";

export default class ShowCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            mileage: "",
            car: [],
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.renderTasks = this.renderTasks.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);
    }

    getTasks() {
        axios.get(`/cars/${this.props.match.params.id}`).then((response) => {
            console.log(response);
            this.setState({
                car: response.data.car,
                year: response.data.car.year,
                make: response.data.car.make,
                model: response.data.car.model,
                mileage: response.data.car.mileage,
            });
        });
    }

    //lifecycle method
    componentDidMount() {
        this.getTasks();
    }

    render() {
        console.log(this.props);
        return (
            <div>
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
                            <th scope="row">{this.state.mileage + 5000}</th>
                        </tr>
                    </tbody>
                </table>
                <App />
            </div>
        );
    }
}
