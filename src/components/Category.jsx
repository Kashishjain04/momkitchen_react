import React, { Component } from 'react';
import CategoryBanner from './CategoryBanner';
import '../css/category.css';
import Dishes from './Dishes';
import { SetTitle } from './SetTitle';
import { SetIcon } from './SetIcon';
import Loading from './Loading';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            category: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetch('https://momkitchen-api.herokuapp.com/categories/' + this.props.match.params.name)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    category: json,
                })
            })
    }

    render() {
        var { isLoaded, category } = this.state;
        if (!isLoaded) {
            return (
                <Loading />
            )
        } else {            
            return (
                <div>
                    <SetIcon icon={category.icon} />
                    <SetTitle title={category.name} />
                    <CategoryBanner category={category} />
                    <Dishes category={category} />
                </div>
            );
        }
    }
}

export default Category;
