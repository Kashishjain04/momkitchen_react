import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Home")), 600);
  });
});
const Category = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Category')), 600);
  });
});
const Dish = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./Dish")), 600);
  });
});

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div className="sk-circle">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
        // <div style={{marginTop: "50vh", marginBottom: "50vh", marginLeft: "50vw"}} className="spinner-border" role="status">
        //   <span className="mx-auto sr-only">Loading...</span>
        // </div>
      }>
        <Nav />
        <Route path="/category/:name" component={Category} />
        <Route path="/dish/:id" component={Dish} />
        <Route path="/" exact={true} component={Home} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
