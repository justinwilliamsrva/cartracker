<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $cars = $allCars->orderBy('created_at', 'desc')->take(20)->get();
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
        $this->validate($request, ['year' => 'required', 'make' => 'required|max:30', 'model' => 'required|max:30', 'mileage' => 'required|max:10']);
        //create a new car based on user cars relationship

        $car = $request->user()->cars()->create([
            'year' => $request->year,
            'make' => $request->make,
            'model' => $request->model,
            'mileage' => $request->mileage,

        ]);
        //return car with user object
        return response()->json($car->with('user')->find($car->id));
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
