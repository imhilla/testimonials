import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
import Header from './Reusables/Header';
import Hero from '../../src/Components/HomeComponents/Hero';
import Blog from './HomeComponents/Blog';
import Feedback from './HomeComponents/Feedback';
import Footer from './Reusables/Footer';
import Intergaration from './HomeComponents/Intergaration';
import Plan from './HomeComponents/Plan';

export default function Home() {
  // let match = useRouteMatch();

  return (
    <div>
      {/* <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
        </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Plan />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch> */}


      <Header />
      <Hero />
      <Intergaration />
      <Plan />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  )
}
