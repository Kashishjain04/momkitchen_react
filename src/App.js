import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Nav from './components/Nav';
const Home = lazy(() => import('./Home'));
const Category = lazy(() => import('./components/Category'));
const Dish = lazy(() => import('./Dish'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={
        <div style={{marginTop: "50vh", marginBottom: "50vh", marginLeft: "50vw"}} class="spinner-border" role="status">
          <span class="mx-auto sr-only">Loading...</span>
        </div>
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
