import { lazy, Suspense } from "react";
import "./App.css";
// import { HomePage } from "./pages/Home";
// import { AboutPage } from "./pages/About";
import Page404 from "./pages/404";
import SearchPage from "./pages/Search";

import { Router } from "./Router";
import { Route } from "./Route";

const LazyHomePage = lazy(()=>import('./pages/Home.jsx'))
const LazyAboutPage = lazy(()=>import('./pages/About.jsx'))

const appRoutes=[
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },
  {
    path:'/search/:query',
    Component:SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={appRoutes} defaultComponent={Page404} >
          <Route path='/' Component={LazyHomePage}/>
          <Route path='/:lang/about' Component={LazyAboutPage}/>
        </Router>
      </Suspense>
    </main>
  );
}

export default App;
