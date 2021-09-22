import React, { useEffect } from "react";

export default function AirFilterCabin(props) {
    // function showBigGreen(data) {
    //     getGreen(data);
    // }

    // useEffect(() => {
    //     showBigGreen(1);
    // }, []);

    function showLast(x) {
        if (x > 1) {
            return x;
        } else {
            return "";
        }
    }
    function showNext(x, y) {
        let j = parseInt(y);

        if (!x && j > 30000) {
            return parseInt(j) - 3000;
        } else if (!x && j <= 30000) {
            return 30000;
        } else {
            return x + 30000;
        }
    }
    function color(x, y) {
        if (x > y) {
            // props.getGreen(1);
            return "bg-green-500";
        } else if (x > y - 1000) {
            return "bg-yellow-500";
        } else {
            return "bg-red-500";
        }
    }

    // props.green(1);
    let nextJob = showNext(props.air_filter_cabin, props.mileage);
    return (
        <div className="p-2">
            <table className="table table-bordered table-sm">
                <thead>
                    <tr>
                        <th
                            scope="col"
                            className={color(nextJob, props.mileage)}
                        ></th>
                        <th scope="col">Air Filter - Cabin</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Last</th>
                        <td>{showLast(props.air_filter_cabin)}</td>
                    </tr>
                    <tr>
                        <th scope="row">Next</th>
                        <td>
                            {showNext(props.air_filter_cabin, props.mileage)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
