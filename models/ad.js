const Sequelize = require('sequelize');
const DB_ACCESS = require('../config').DB_ACCESS;

const sequelize = new Sequelize(DB_ACCESS);

const Ad = sequelize.define('ads', {
    seller_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    type_of_seller_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    phone_number_is_shown: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    region_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    city_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    currency_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    car_mark_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    car_model_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    car_generation_id: {
        type: Sequelize.STRING,
        allowNull: true
    },
    complectation: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0
    },
    year: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    state_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    mileage_km: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    mileage_m: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    number_of_cars: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    text: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    body_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    drive_unit_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    type_of_fuel_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    transmission_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    color_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    interior_color_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    interior_trim_material_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    engine_capacity: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    engine_power: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    exchange_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    vin: {
        type: Sequelize.STRING,
        allowNull: true
    },
    is_hybrid: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_propan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_metan: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_abs: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_esp: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_traction_control: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_immobilizer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_side_airbags: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_rear_airbags: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_front_airbags: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_signaling: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_luke: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_panoramic_roof: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_heater: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_climate_control: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_air_conditioning: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_heated_mirrors: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_windshield_heating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_steering_wheel_heating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_seat_heating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_engine_autostart: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_cruise_control: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_multimedia_steering_wheel_control: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_power_seats: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_rear_power_windows: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_front_power_windows: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_aux_ipod: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_bluetooth: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_cd_mp3: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_usb: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_multimedia_screen: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_native_navigation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_xenon_headlights: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_fog_lights: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_led_headlights: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_rain_sensor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_rear_view_camera: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_control_dead_zones: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_parking_sensors: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_alloy_wheels: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    is_roof_rails: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0

    },
    is_hitch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
});

sequelize.sync()
    .then(() => console.log('ads table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

module.exports = Ad;