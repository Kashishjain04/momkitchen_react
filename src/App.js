import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Loading from './components/Loading';
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
        <Loading />
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
