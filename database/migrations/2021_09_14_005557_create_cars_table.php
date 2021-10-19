<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if (Schema::hasTable('cars')) return;
        // to make change: php artisan migrate:refresh
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->unsigned()->index();
            $table->integer('year')->unsigned();
            $table->string('make');
            $table->string('model');
            $table->integer('mileage')->unsigned();
            $table->integer('yearly_mileage')->unsigned();
            $table->string('vin');
            $table->string('ex_color');
            $table->string('in_color');
            $table->string('drivetrain');
            $table->string('transmission');
            $table->string('cylinders');
            $table->string('type');
            $table->string('doors');
            $table->string('tire_size');
            $table->date('date_purchased');
            $table->integer('air_filter_cabin')->unsigned()->nullable();
            $table->integer('air_filter_engine')->unsigned()->nullable();;
            $table->integer('battery')->unsigned()->nullable();;
            $table->integer('brake_fluid')->unsigned()->nullable();;
            $table->integer('brake_pads_front')->unsigned()->nullable();;
            $table->integer('brake_rotors_front')->unsigned()->nullable();;
            $table->integer('brake_pads_rear')->unsigned()->nullable();;
            $table->integer('brake_rotors_rear')->unsigned()->nullable();;
            $table->integer('coolant_flush')->unsigned()->nullable();;
            $table->integer('dif_fluid')->unsigned()->nullable();;
            $table->integer('engine_oil')->unsigned()->nullable();;
            $table->integer('engine_oil_filter')->unsigned()->nullable();;
            $table->integer('power_steering_fluid')->unsigned()->nullable();;
            $table->integer('spark_plugs')->unsigned()->nullable();;
            $table->integer('tran_fluid')->unsigned()->nullable();;
            $table->integer('tires_front_driver')->unsigned()->nullable();;
            $table->integer('tires_front_passenger')->unsigned()->nullable();;
            $table->integer('tires_rear_driver')->unsigned()->nullable();
            $table->integer('tires_rear_passenger')->unsigned()->nullable();
            $table->integer('windshield_wipers')->unsigned()->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
