import "./App.css";
import logo from "./logo.png";
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Launches from "./components/launches";
import MissionKey from "./components/missionKey";
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Launch from "./components/launch";


const client = new ApolloClient({
  uri:'https://spacex-app-deployment.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <div className="container">
          <img
            src={logo}
            alt="Spacex"
            style={{ width: 450, display: "block", margin: "auto" }}
          />
          <Route exact path = "/" component = {MissionKey} />
          <Route exact path = "/" component = {Launches} />
          <Route exact path = "/launch/:id" component = {Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
