import React from "react";
import ReactDOM from "react-dom";

function App() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">React Component</div>

                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">
                                       Year
                                    </label>
                                    <select
                                        class="form-control"
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
                                    <label for="exampleFormControlInput1">
                                        Car Make
                                    </label>
                                    <input
                                        type="make"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Honda"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label for="exampleFormControlInput1">
                                        Car Model
                                    </label>
                                    <input
                                        type="model"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="CR-V"
                                    />
                                    </div>
                                    <div className="form-group">
                                    <label for="exampleFormControlInput1">
                                       Current Milage
                                    </label>
                                    <input
                                        type="milage"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="100,000"
                                    />
                                    </div>
                              
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

if (document.getElementById("root")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
