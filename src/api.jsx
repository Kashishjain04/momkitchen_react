import React, { Component } from 'react';

class Api extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('http://localhost:5000')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        })
    }

    render() {
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return <h1>LOADING...</h1>
        }
        else{
        // console.log(items);
        return  { items }
        }
    }
}

export { items };
