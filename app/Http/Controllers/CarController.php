<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Car;

class CarController extends Controller
{
    //Only auth users are allowed to access functions
    public function __construct()
    {
        $this->middleware("auth");
    }


    public function index(Request $request, Car $car)
    {
        //get call the cars based on current user id
        $allCars = $car->whereIn("user_id", $request->user())->with('user');
        $cars = $allCars->orderBy('created_at', 'asc')->take(20)->get();
        //return json response
        return response()->json(["cars" => $cars]);
    }

    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        //validation

        $this->validate($request, ['year' => 'required', 'make' => 'required|max:30', 'model' => 'required|max:30', 'mileage' => 'required|max:10',  'yearly_mileage' => 'required', 'transmission' => 'required', 'drivetrain' => 'required',]);
        //create a new car based on user cars relationship

        $car = $request->user()->cars()->create([
            'year' => $request->year,
            'make' => $request->make,
            'model' => $request->model,
            'mileage' => $request->mileage,
            'yearly_mileage' => $request->yearly_mileage,
            'vin' => $request->vin,
            'ex_color' => $request->ex_color,
            'in_color' => $request->yearly_mileage,
            'drivetrain' => $request->drivetrain,
            'transmission' => $request->transmission,
            'cylinders' => $request->cylinders,
            'type' => $request->type,
            'doors' => $request->doors,
            'tire_size' => $request->tire_size,
            'date_purchase' => $request->date_purchase,
            'air_filter_cabin' => $request->air_filter_cabin,
            'air_filter_engine' => $request->air_filter_engine,
            'battery' => $request->battery,
            'brake_fluid' => $request->brake_fluid,
            'brake_pads_front' => $request->brake_pads_front,
            'brake_rotors_front' => $request->brake_rotors_front,
            'brake_pads_rear' => $request->brake_pads_rear,
            'brake_rotors_rear' => $request->brake_rotors_rear,
            'coolant_flush' => $request->coolant_flush,
            'dif_fluid' => $request->dif_fluid,
            'engine_oil' => $request->engine_oil,
            'engine_oil_filter' => $request->engine_oil_filter,
            'power_steering_fluid' => $request->power_steering_fluid,
            'spark_plugs' => $request->spark_plugs,
            'tran_fluid' => $request->tran_fluid,
            'tires_front_driver' => $request->tires_front_driver,
            'tires_front_passenger' => $request->tires_front_passenger,
            'tires_rear_driver' => $request->tires_rear_driver,
            'tires_rear_passenger' => $request->tires_rear_passenger,
            'windshield_wipers' => $request->windshield_wipers,


        ]);
        //return car with user object
        return response()->json($car->with('user')->find($car->id));
    }


    public function show($id)
    {
        $car = Car::findOrFail($id);
        return response()->json([
            'car' => $car,
        ]);
    }


    public function edit($id)
    {
        $car = Car::findOrFail($id);
        return response()->json([
            'car' => $car,
        ]);
    }


    public function update(Request $request, $id)
    {
        $input = $request->all();
        $car = Car::findOrFail($id);
        $car->update($input);
        return response()->json($car->with('user')->find($car->id));
    }


    public function destroy($id)
    {
        //
        Car::findOrFail($id)->delete();
    }
}
