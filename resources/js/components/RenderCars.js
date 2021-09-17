import axios from "axios";
import { over } from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowswerRouter, Link } from "react-router-dom";

// look at bottom of page to find useState for functional components

class RenderCars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            mileage: "",
            car: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderTasks = this.renderTasks.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    // handle change
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/cars", {
                year: this.state.year,
                make: this.state.make,
                model: this.state.model,
                mileage: this.state.mileage,
            })
            .then((response) => {
                console.log(response);
                this.setState({
                    cars: [response.data, ...this.state.cars],
                    year: "",
                    make: "",
                    model: "",
                    mileage: "",
                });
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
                    {/* <button
                        onClick={() => this.handleDelete(car.id)}
                        className="btn btn-sm btn-warning float-right "
                    >
                        Delete
                    </button> */}
                    <Link
                        to={`/${car.id}`}
                        className="btn btn-sm btn-success float-right mr-1"
                    >
                        Show
                    </Link>
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
        axios
            .get("/cars")
            // .then((response) => console.log(response))
            .then((response) =>
                this.setState({ cars: [...response.data.cars] })
            );
    }

    //lifecycle method
    componentDidUpdate() {
        this.getTasks();
    }

    //handle delete
    handleDelete(id) {
        // remove from local state
        const isNotId = (car) => car.id != id;
        const updatedCars = this.state.cars.filter(isNotId);
        this.setState({ cars: updatedCars });
        //make delete request to the backend
        axios.delete(`/cars/${id}`);
    }

    render() {
        return (
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
        );
    }
}

export default RenderCars;

// function App() {
//     const [state, setState] = useState({
//       fname: "",
//       lname: "",
//     })

//     const handleChange = e => {
//       setState({
//         ...state,
//         [e.target.name]: e.target.value,
//       })
//     }

//     return (
//       <div>
//         <h1>React Form Handling</h1>
//         <form>
//           <label>
//             First Name:{" "}
//             <input
//               type="text"
//               name="fname"
//               value={state.fname}
//               onChange={handleChange}
//             />
//           </label>{" "}
//           <label>
//             Last Name:{" "}
//             <input
//               type="text"
//               name="lname"
//               value={state.lname}
//               onChange={handleChange}
//             />
//           </label>
//         </form>
//         <h5>
//           Name: {state.fname} {state.lname}
//         </h5>
//       </div>
//     )
//   }

//   export default App
