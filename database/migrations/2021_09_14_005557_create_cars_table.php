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
            $table->integer('yearly_mileage')->unsigned()->default(1);
            $table->string('vin')->default('1');
            $table->string('ex_color')->default('1');
            $table->string('in_color')->default('1');
            $table->string('drivetrain')->default('1');
            $table->string('transmission')->default('1');
            $table->string('cylinders')->default('1');
            $table->string('type')->default('1');
            $table->string('doors')->default('1');
            $table->string('tire_size')->default('1');
            $table->date('date_purchased')->default('2020-09-21');
            $table->integer('air_filter_cabin')->unsigned()->default(0);
            $table->integer('air_filter_engine')->unsigned()->default(0);
            $table->integer('battery')->unsigned()->default(0);
            $table->integer('brake_fluid')->unsigned()->default(0);
            $table->integer('brake_pads_front')->unsigned()->default(0);
            $table->integer('brake_rotors_front')->unsigned()->default(0);
            $table->integer('brake_pads_rear')->unsigned()->default(0);
            $table->integer('brake_rotors_rear')->unsigned()->default(0);
            $table->integer('coolant_flush')->unsigned()->default(0);
            $table->integer('dif_fluid')->unsigned()->default(0);
            $table->integer('engine_oil')->unsigned()->default(0);
            $table->integer('engine_oil_filter')->unsigned()->default(0);
            $table->integer('power_steering_fluid')->unsigned()->default(0);
            $table->integer('spark_plugs')->unsigned()->default(0);
            $table->integer('tran_fluid')->unsigned()->default(0);
            $table->integer('tires_front_driver')->unsigned()->default(0);
            $table->integer('tires_front_passenger')->unsigned()->default(0);
            $table->integer('tires_rear_driver')->unsigned()->default(0);
            $table->integer('tires_rear_passenger')->unsigned()->default(0);
            $table->integer('windshield_wipers')->unsigned()->default(0);
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
