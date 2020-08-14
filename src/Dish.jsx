import React from 'react';
import dishes from './dishes';
import './css/item.css';
import English from './components/English';
import Hindi from './components/Hindi';
import { SetTitle } from './components/SetTitle';

const Dish = (props) => {
    const dish = dishes.dishes.find(x => x.id == props.match.params.id);
    return (
        <div>
            <SetTitle title={dish.name} />
            <English dish={dish} />
            {dish.hindi ? <Hindi dish={dish} /> : ""}
        </div>
    );
}

export default Dish;
