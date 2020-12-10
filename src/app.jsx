import React, { lazy, Suspense } from 'react';
import Header from './components/header';
import About from './pages/about';
import Error404 from './pages/404';
import Loading from './components/loader';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const LazyHome = lazy(() => (
  import('./pages/home')
));

const LazyAbout = lazy(() => (
  import('./pages/about')
));

const LazyProjects = lazy(() => (
  import('./pages/projects')
));

const VP = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function app() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Suspense fallback={<VP><Loading/></VP>}>
            <LazyHome/>
          </Suspense>
        </Route>
        <Route exact path="/about">
          <Suspense fallback={<VP><Loading/></VP>}>
            <LazyAbout/>
          </Suspense>
        </Route>
        <Route exact path="/projects">
          <Suspense fallback={<VP><Loading/></VP>}>
            <LazyProjects/>
          </Suspense>
        </Route>
        <Route path="*">
          <Error404/>
        </Route>
      </Switch>
    </Router>
  )
}