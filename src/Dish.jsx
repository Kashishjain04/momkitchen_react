import React, { Component } from 'react';
import './css/item.css';
import English from './components/English';
import Hindi from './components/Hindi';
import { SetTitle } from './components/SetTitle';
import { SetIcon } from './components/SetIcon';
import Loading from './components/Loading';

class Dish extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dish: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://momkitchen-api.herokuapp.com/dish/' + this.props.match.params.id)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    dish: json,
                })
            })
    }

    render() {
        var { isLoaded, dish } = this.state;
        if (!isLoaded) {
            return (
                <Loading />
            )
        } else {        
        return (
            <div>
                <SetIcon />
                <SetTitle title={dish.name} />
                <English dish={dish} />
                {dish.hindi ? <Hindi dish={dish} /> : ""}
            </div>
        );
        }
    }
}

export default Dish;
