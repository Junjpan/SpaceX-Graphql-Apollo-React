import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Lauches from "./components/Launches";
import Launch from './components/Launch'

let client;

if (process.env.NODE_ENV==='development'){
  client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
  })
}else{
  client = new ApolloClient({
    uri: "/graphql",
  });
}


// To deploy the app, we also can make a "proxy":"https://localhost:5000" in the client folder's package.json 
//and in the app.js file we just write the code below:
/**
 * client = new ApolloClient({
    uri: "/graphql",
  });
 */


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <h1>SpaceX</h1>
          <Route exact path="/" component={Lauches} />
          <Route exact path="/launch/:flight_number" component={Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
