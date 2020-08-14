import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
// import Home from './Home';
const Home = lazy(() => import('./Home'));
const Category = lazy(() => import('./components/Category'));
const Dish = lazy(() => import('./Dish'));
// import Category from './components/Category';
// import Dish from './Dish';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Nav />
        <Route path="/category/:name" component={Category} />
        <Route path="/dish/:id" component={Dish} />
        <Route path="/" exact={true} component={Home} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
