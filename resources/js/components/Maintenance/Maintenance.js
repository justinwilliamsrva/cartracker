import React from "react";
import AirFilterCabin from "./MaintenanceItems/AirFilterCabin";
import AirFilterEngine from "./MaintenanceItems/AirFilterEngine";

export default function Maintenance(props) {
    return (
        <div className=" maintenance card-body  grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            <AirFilterCabin mileage={props.mileage} />
            <AirFilterEngine mileage={props.mileage} />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin mileage={props.mileage} />
            <AirFilterEngine mileage={props.mileage} />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin mileage={props.mileage} />
            <AirFilterEngine mileage={props.mileage} />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
            <AirFilterCabin />
        </div>
    );
}
