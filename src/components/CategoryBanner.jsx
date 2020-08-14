import React from 'react';

const CategoryBanner = (props) => {
    // console.log(props.category);
    const category = props.category;
    return (
        <div>
            <header className="bg-light text-center text-white">            
            <section style={{ background: "url('" + category.background + "')", backgroundSize: "cover", backgroundPosition: "center", backgroundAttachment: "fixed", backgroundColor: "cadetblue", backgroundBlendMode: "lighten" }} className="jumbotron text-center">
                <div className="container">
                    <h1>{category.name}</h1>
                </div>
            </section>
            </header>
        </div>
    );
}

export default CategoryBanner;
