import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: "2016",
            make: "Honda",
            model: "CR-v",
            milage: "100,000",
            cars: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    // handle change
    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">React Component</div>

                            <div className="card-body">
                                <form>
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
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">
                                            Current Milage
                                        </label>
                                        <input
                                            name="milage"
                                            onChange={this.handleChange}
                                            value={this.state.milage}
                                            type="number"
                                            className="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="100,000"
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
