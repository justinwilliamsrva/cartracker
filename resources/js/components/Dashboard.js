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
            afc_color: "",
            afe_color: "",
            battery_color: "",
            brake_fluid_color: "",
            brake_pad_front_color: "",
            brake_rotor_front_color: "",
            coolant_flush_color: "",
            dif_fluid_color: "",

            green: 0,
            yellow: 0,
            red: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMileage = this.handleMileage.bind(this);
        this.colorAFC = this.colorAFC.bind(this);
        this.colorAFE = this.colorAFE.bind(this);
        this.colorBAT = this.colorBAT.bind(this);
        this.colorBrakeFluid = this.colorBrakeFluid.bind(this);
        // this.colorBrakePadFront = this.colorBrakePadFront(this);
        // this.colorBrakeRotorFront = this.colorBrakeRotorFront(this);

        this.renderTasks = this.renderTasks.bind(this);
        // this.showColor = this.showColor.bind(this);

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
        // console.log(name, value);
        this.setState({ [name]: value });
        // this.color(this.state.air_filter_cabin, this.state.mileage);
    }
    handleSubmit(e) {
        e.preventDefault();
        axios
            .put(`/cars/${this.state.id}`, {
                mileage: this.state.mileage
            })
            .then(() => {
                this.setState({green:0,yellow:0,red:0})
                this.getCars();
              this.runcolors();
              
                this.colorBrakePadFront(
                    this.shownextBrakePadFront(
                        this.state.brake_pads_front,
                        this.state.mileage,
                        this.state.yearly_mileage
                    ),
                    this.state.mileage
                );
                this.colorBrakeRotorFront(
                    this.shownextBrakeRotorFront(
                        this.state.brake_rotors_front,
                        this.state.mileage,
                        this.state.yearly_mileage
                    ),
                    this.state.mileage
                );
                this.colorCoolantFlush(
                    this.shownextCoolantFlush(
                        this.state.coolant_flush,
                        this.state.mileage,
                        this.state.yearly_mileage
                    ),
                    this.state.mileage
                );
            });
    }
    
    colorAFC(x, y) {

        let redder=0;
        let yellower=0;
        let greener=0;
        if (x > y - 1000 && y > x) {
            yellower++;
            this.setState({
                afc_color: "bg-yellow-500",
                yellow: yellower,
            });
        } else if (x > y) {
            greener++;
            this.setState({
                afc_color: "bg-green-500",
                green: greener,
            });
        } else {
         
redder++;
            this.setState({
                afc_color: "bg-red-500",
                red: redder,
            });
            
        }
       
        this.colorAFE(
            this.showNextAFE(
                this.state.air_filter_engine,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,redder,yellower,greener
        );
    }

    showNextAFC(x, y) {
        let j = parseInt(y);

        if (!x && j > 15000) {
            return j;
        } else if (!x && j < 15000) {
            return 15000;
        } else {
            return x + 15000;
        }
    }

    colorAFE(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
           
ye++;
            this.setState({
                afe_color: "bg-yellow-500",
                yellow: ye,
            });
        } else if (x > y) {
          
g++
            this.setState({
                afe_color: "bg-green-500",
                green: g,
            });
        } else {
            // console.log("second" + this.state.red);
          r++;

            this.setState({
                afe_color: "bg-red-500",
                red:r,
            });
        }
        this.colorBAT(
            this.showNextBAT(
                this.state.battery,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );
    }

    showNextAFE(x, y) {
        let j = parseInt(y);

        if (!x && j > 12000) {
            return j;
        } else if (!x && j < 12000) {
            return 12000;
        } else {
            return x + 12000;
        }
    }

    colorBAT(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
            ye++;
            this.setState({
                battery_color: "bg-yellow-500",
                yellow:ye,
            });
        } else if (x > y) {
            g++;
            this.setState({
                battery_color: "bg-green-500",
                green:g,

            });
        } else {
            r++;
            this.setState({
                battery_color: "bg-red-500",
                red: r,
            });
        }
        this.colorBrakeFluid(
            this.shownextBrakeFluid(
                this.state.brake_fluid,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );




    }
    showNextBAT(x, y, i) {
        let j = parseInt(y);

        if (!x && j > i * 4) {
            return j;
        } else if (!x && j <= i * 4) {
            return i * 4;
        } else {
            return i * 4 + x;
        }
    }
    colorBrakeFluid(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
          ye++;
            this.setState({
                brake_fluid_color: "bg-yellow-500",
                yellow: ye,

            });
        } else if (x > y) {
          g++;

            this.setState({
                brake_fluid_color: "bg-green-500",
                green: g,

            });
        } else {
           
r++
            this.setState({
                brake_fluid_color: "bg-red-500",
                red: r,

            });
        }
        this.colorBrakePadFront(
            this.shownextBrakePadFront(
                this.state.brake_pads_front,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );
    }
    shownextBrakeFluid(x, y, i) {
        let j = parseInt(y);

        if (!x && j > i * 3) {
            //(parseInt(j) - 500);
            return j;
        } else if (!x && j <= i * 3) {
            //(i * 2);

            return i * 3;
        } else {
            //(i * 2 + x);

            return i * 3 + x;
        }
    }



    colorBrakePadFront(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
           ye++

            this.setState({
                brake_pad_front_color: "bg-yellow-500",
                yellow:ye
            });
        } else if (x > y) {
          
g++
            this.setState({
                brake_pad_front_color: "bg-green-500",
                green:g
            });
        } else {
          
            r++
            this.setState({
                brake_fluid_color: "bg-red-500",
                red: r,

            });
        }

        this.colorBrakeRotorFront(
            this.shownextBrakeRotorFront(
                this.state.brake_rotors_front,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );
    }

    shownextBrakePadFront(x, y, i) {
        let j = parseInt(y);

        if (!x && j > 35000) {
            return j;
        } else if (!x && j < 35000) {
            return 35000;
        } else {
            return x + 35000;
        }
    }

  
    colorBrakeRotorFront(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
       
ye++
            this.setState({
                brake_rotor_front_color: "bg-yellow-500",
                yellow:y
            });
        } else if (x > y) {
          g++

            this.setState({
                brake_rotor_front_color: "bg-green-500",
                green:g

            });
        } else {
           r++
            this.setState({
                brake_rotor_front_color: "bg-red-500",
                red:r
            });
        }
        this.colorCoolantFlush(
            this.shownextCoolantFlush(
                this.state.coolant_flush,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );
    }

    shownextBrakeRotorFront(x, y, i) {
        let j = parseInt(y);

        if (!x && j > 70000) {
            return j;
        } else if (!x && j < 75000) {
            return 75000;
        } else {
            return x + 70000;
        }
    }
    colorCoolantFlush(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
ye++
            this.setState({
                coolant_flush_color: "bg-yellow-500",
                yellow:ye
            });
        } else if (x > y) {
g++
            this.setState({
                coolant_flush_color: "bg-green-500",
                green:g
            });
        } else {
            r++
            this.setState({
                coolant_flush_color: "bg-red-500",
                red:r
            });
        }
        this.colorDiffFluid(
            this.shownextDiffFluid(
                this.state.dif_fluid,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage,r,ye,g
        );
    }

    shownextCoolantFlush(x, y, i) {
        let j = parseInt(y);
        if (!x && j > 30000) {
            return j;
        } else if (!x && j < 30000) {
            return 30000;
        } else {
            return x + 30000;
        }
    }
    colorDiffFluid(x, y,r,ye,g) {
        if (x > y - 1000 && y > x) {
console.log(x,y);

ye++
            this.setState({
                coolant_flush_color: "bg-yellow-500",
                yellow:ye
            });
        } else if (x > y) {
console.log(x,y);

g++
            this.setState({
                coolant_flush_color: "bg-green-500",
                green:g
            });
        } else {
console.log(x,y);

            r++
            this.setState({
                coolant_flush_color: "bg-red-500",
                red:r
            });
        }
    }

    shownextDiffFluid(x, y, i) {
        let j = parseInt(y);

        if (!x && j > 90000) {
            return j;
        } else if (!x && j < 90000) {
            return 90000;
        } else {
            return x + 90000;
        }
    }

    runcolors() {
        this.colorAFC(
            this.showNextAFC(
                this.state.air_filter_cabin,
                this.state.mileage,
                this.state.yearly_mileage
            ),
            this.state.mileage
        );
    }

    handleChange(car) {
        // console.log(this.state.air_filter_cabin, this.state.mileage);

        this.setState(
            {
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
                air_filter_cabin: car.air_filter_cabin,
                air_filter_engine: car.air_filter_engine,
                battery: car.battery,
                brake_fluid: car.brake_fluid,
                brake_pads_front: car.brake_pads_front,
                brake_rotors_front: car.brake_rotors_front,
                brake_pads_rear: car.brake_pads_rear,
                brake_rotors_rear: car.brake_rotors_rear,
                coolant_flush: car.coolant_flush,
                dif_fluid: car.dif_fluid,
                engine_oil: car.engine_oil,
                engine_oil_filter: car.engine_oil_filter,
                power_steering_fluid: car.power_steering_fluid,
                spark_plugs: car.spark_plugs,
                tran_fluid: car.tran_fluid,
                tires_front_driver: car.tires_front_driver,
                tires_front_passenger: car.tires_front_passenger,
                tires_rear_driver: car.tires_rear_driver,
                tires_rear_passenger: car.tires_rear_passenger,
                windshield_wipers: car.windshield_wipers,
                green: 0,
                yellow: 0,
                red: 0,
            },
            () => {
                // this.showNexvar;
                this.runcolors();
              
            
          
               
              
            }
        );
    }

    renderTasks() {
        function overdueWork(mileage) {
            return mileage < 40000 ? " car is working fine" : " fix me now";
        }

        return this.state.cars.map((car) => (
            <div key={car.id}>
                <div className="grid grid-cols-2 mb-2 mt-2">
                    <button
                        onClick={() => {
                            this.handleChange(car);
                        }}
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
                            {}
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
                // console.log(
                //     typeof response.data.cars.length,
                //     response.data.cars.length
                // );
                if (response.data.cars.length === 0) {
                    this.props.history.push("/newcar");
                }
            });
    }

    //lifecycle method
    componentDidMount() {
        // this.getTasks();
        this.getCars();
    }

    render() {
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
                                    <div className="card-body maintenance">
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .vin
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .ex_color
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .in_color
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .cylinders
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .type
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .doors
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .tire_size
                                                                        }
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
                                                                        N/A
                                                                    </td>
                                                                ) : (
                                                                    <td scope="col">
                                                                        {
                                                                            this
                                                                                .state
                                                                                .date_purchased
                                                                        }
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
                                                        <p>
                                                            {this.state.green}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-white bg-yellow-500  rounded-t  px-4 py-2 text-center">
                                                        Due Soon
                                                    </div>
                                                    <div className="border border-t-0 border-yellow-400  font-bold text-3xl rounded-b   px-1 py-1 text-yellow-500 text-center">
                                                        <p>
                                                            {this.state.yellow}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div>
                                                    <div className="text-white bg-red-500  rounded-t  px-4 py-2 text-center">
                                                        Past-due
                                                    </div>
                                                    <div className="border border-t-0 border-red-400  font-bold text-3xl rounded-b   px-1 py-1 text-red-500 text-center">
                                                        <p>{this.state.red}</p>
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
                                        <h2>
                                            Maintenance Records
                                            <div className="float-right">
                                                <Link
                                                    to={`/${this.state.id}/edit`}
                                                    className="btn btn-sm btn-primary mr-1"
                                                >
                                                    Update
                                                </Link>
                                            </div>
                                        </h2>
                                    </div>
                                  
                                        <Maintenance
                                            mileage={this.state.mileage}
                                            yearly_mileage={
                                                this.state.yearly_mileage
                                            }
                                            //cabin
                                            air_filter_cabin={
                                                this.state.air_filter_cabin
                                            }
                                            afc_color={this.state.afc_color}
                                            shownextAFC={this.showNextAFC(
                                                this.state.air_filter_cabin,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            //engine
                                            air_filter_engine={
                                                this.state.air_filter_engine
                                            }
                                            afe_color={this.state.afe_color}
                                            shownextAFE={this.showNextAFE(
                                                this.state.air_filter_engine,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            //battery
                                            battery={this.state.battery}
                                            shownextBAT={this.showNextBAT(
                                                this.state.battery,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            battery_color={
                                                this.state.battery_color
                                            }
                                            //brake
                                            brake_fluid={this.state.brake_fluid}
                                            shownextBrakeFluid={this.shownextBrakeFluid(
                                                this.state.brake_fluid,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            brake_fluid_color={
                                                this.state.brake_fluid_color
                                            }
                                            brake_pads_front={
                                                this.state.brake_pads_front
                                            }
                                            shownextBrakePadFront={this.shownextBrakePadFront(
                                                this.state.brake_pads_front,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            brake_pad_front_color={
                                                this.state.brake_pad_front_color
                                            }
                                            //rotors
                                            brake_rotors_front={
                                                this.state.brake_rotors_front
                                            }
                                            shownextBrakeRotorFront={this.shownextBrakeRotorFront(
                                                this.state.brake_rotors_front,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            brake_rotor_front_color={
                                                this.state
                                                    .brake_rotor_front_color
                                            }
                                            //coolant
                                            coolant_flush={
                                                this.state.coolant_flush
                                            }
                                            shownextCoolantFlush={this.shownextCoolantFlush(
                                                this.state.coolant_flush,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            coolant_flush_color={
                                                this.state.coolant_flush_color
                                            }
                                            // diff
                                            dif_fluid={
                                                this.state.dif_fluid
                                            }
                                            shownextDiffFluid={this.shownextDiffFluid(
                                                this.state.dif_fluid,
                                                this.state.mileage,
                                                this.state.yearly_mileage
                                            )}
                                            dif_fluid_color={
                                                this.state.dif_fluid_color
                                            }
                                            drivetrain={this.state.drivetrain}
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
