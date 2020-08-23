import React, { Component } from 'react';
import cars from './cars'
import CarItem from './CarItem';
console.log(cars)
class CarList extends Component {
    state = {}
    render() {
        return (
            <section>
                {cars.map(car => <CarItem
                    key={car.id}
                    make={car.car_make}
                    model={car.car_model}
                    year={car.car_year}
                />)}
            </section>
        );
    }
}

export default CarList;