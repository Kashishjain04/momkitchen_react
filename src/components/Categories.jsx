import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://momkitchen-api.herokuapp.com/')
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
        if (!isLoaded) {
            return (
                <Loading />
            )
        }
        else {            
            return (
                <div>
                    {
                        items.map(category =>
                            <section key={category.id} >
                                <div className="container">
                                    <div className="row align-items-center">
                                        <div className={"col-lg-6 order-lg-" + (category.id % 2) + 1}>
                                            <div className="p-5">
                                                <img className="img-thumbnail img-fluid" src={category.banner} alt={category.name} height="1000px" width="500px" />
                                            </div>
                                        </div>
                                        <div className={"col-lg-6 order-lg-" + category.id % 2}>
                                            <div className="p-5">
                                                <h2 className="display-4">{category.name}</h2>
                                                <p>{category.description}<br /></p>
                                                <Link className="btn btn-outline-info" to={"category/" + category.name} role="button">Learn More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )
                    }
                </div>
            );
        }
    }
}

export default Categories;
