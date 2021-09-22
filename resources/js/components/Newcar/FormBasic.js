import React, { Component } from "react";

export default class FormBasic extends Component {
    render() {
        if (this.props.currentStep !== 1) {
            // Prop: The current step
            return null;
        }
        // The markup for the Step 1 UI

        // http://www.carqueryapi.com/demo/dependant-selects-and-car-data-display/
        return (
            <>
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <select
                        name="year"
                        onChange={this.props.handleChange}
                        value={this.props.year}
                        type="number"
                        className="form-control"
                        id="year"
                        required
                    >
                        <option>1990</option>
                        <option>1991</option>
                        <option>1992</option>
                        <option>1993</option>
                        <option>1994</option>
                        <option>1995</option>
                        <option>1996</option>
                        <option>1997</option>
                        <option>1998</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        <option>2012</option>
                        <option>2013</option>
                        <option>2014</option>
                        <option>2015</option>
                        <option>2016</option>
                        <option>2017</option>
                        <option>2018</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="make">Make</label>
                    <select
                        name="make"
                        onChange={this.props.handleChange}
                        value={this.props.make}
                        type="text"
                        className="form-control"
                        id="make"
                        required
                    >
                        <option>Acura</option>
                        <option>Alfa Romeo</option>
                        <option>Aston Martin</option>
                        <option>Audi</option>
                        <option>Bentley</option>
                        <option>BMW</option>
                        <option>Buick</option>
                        <option>Cadillac</option>
                        <option>Cheverolet</option>
                        <option>Chrysler</option>
                        <option>Citroen</option>
                        <option>Dodge</option>
                        <option>Ferrari</option>
                        <option>Fiat</option>
                        <option>Ford</option>
                        <option>GMC</option>
                        <option>Honda</option>
                        <option>Hummer</option>
                        <option>Hyundai</option>
                        <option>Infiniti</option>
                        <option>Isuzu</option>
                        <option>Jaguar</option>
                        <option>Jeep</option>
                        <option>Kia</option>
                        <option>Lamborghini</option>
                        <option>Land Rover</option>
                        <option>Lexus</option>
                        <option>Lincoln</option>
                        <option>Lotus</option>
                        <option>Masterati</option>
                        <option>Mazda</option>
                        <option>Mercedes-Benz</option>
                        <option>Mercury</option>
                        <option>Mini</option>
                        <option>Mitsubishi</option>
                        <option>Nissan</option>
                        <option>Pontiac</option>
                        <option>Porsche</option>
                        <option>Ram</option>
                        <option>Saab</option>
                        <option>Saturn</option>
                        <option>Scion</option>
                        <option>Smart</option>
                        <option>Subaru</option>
                        <option>Saab</option>
                        <option>Suzuki</option>
                        <option>Toyota</option>
                        <option>Volkswagen</option>
                        <option>Volvo</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Car Model</label>
                    <input
                        name="model"
                        onChange={this.props.handleChange}
                        value={this.props.model}
                        type="text"
                        className="form-control"
                        id="model"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Current Mileage
                    </label>
                    <input
                        name="mileage"
                        onChange={this.props.handleChange}
                        value={this.props.mileage}
                        type="number"
                        className="form-control"
                        id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Average Yealy Mileage
                    </label>
                    <input
                        name="yearly_mileage"
                        onChange={this.props.handleChange}
                        value={this.props.yearly_mileage}
                        type="number"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                        min={0}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">VIN Number</label>
                    <input
                        name="vin"
                        onChange={this.props.handleChange}
                        value={this.props.vin}
                        type="text"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">
                        Date Purchase
                    </label>
                    <input
                        name="date_purchased"
                        onChange={this.props.handleChange}
                        value={this.props.date_purchased}
                        type="date"
                        className="form-control"
                        // id="exampleFormControlInput1"
                        // placeholder="100,000"
                    />
                </div>
            </>
        );
    }
}
