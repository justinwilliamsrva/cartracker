import axios from "axios";
import { over } from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

// look at bottom of page to find useState for functional components

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "",
            make: "",
            model: "",
            mileage: "",
            cars: [],
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
                    <div>
                        {car.year} {car.make} {car.model} {car.mileage} with
                        miles{overdueWork(car.mileage)}
                        <button
                            onClick={() => this.handleDelete(car.id)}
                            className="btn btn-sm btn-warning float-right "
                        >
                            Delete
                        </button>
                        <Link
                            to={`/${car.id}/edit`}
                            className="btn btn-sm btn-success float-right mr-1"
                        >
                            Update
                        </Link>
                    </div>
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
    componentDidMount() {
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
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlSelect1">
                                            Year
                                        </label>
                                        <select
                                            name="year"
                                            onChange={this.handleChange}
                                            value={this.state.year}
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlSelect1"
                                            required
                                        >
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">
                                            Car Make
                                        </label>
                                        <input
                                            name="make"
                                            onChange={this.handleChange}
                                            value={this.state.make}
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="Honda"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">
                                            Car Model
                                        </label>
                                        <input
                                            name="model"
                                            onChange={this.handleChange}
                                            value={this.state.model}
                                            type="text"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="CR-V"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">
                                            Current Mileage
                                        </label>
                                        <input
                                            name="mileage"
                                            onChange={this.handleChange}
                                            value={this.state.mileage}
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="100,000"
                                            step={10000}
                                            min={0}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="card mt-1">
                            <div className="card-header">Your Fleat</div>
                            <div className="card=body p-2">
                                {" "}
                                {this.renderTasks()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}

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
