import React from 'react';
import data from '../data';
import CategoryBanner from './CategoryBanner';
import '../css/category.css';
import Dishes from './Dishes';
import { SetTitle } from './SetTitle';
import { SetIcon } from './SetIcon';

const Category = (props) => {
    const categoryId = props.match.params.name;
    const category = data.data.find(x => x.name === categoryId);
    return (
        <div>      
            {/* <Nav />   */}
            <SetIcon icon={category.icon} />
            <SetTitle title={category.name} />
            <CategoryBanner category={category} />
            <Dishes category={category} />
        </div>
    );
}

export default Category;
