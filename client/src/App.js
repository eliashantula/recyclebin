import React, { Component } from "react";
import "./App.css";

import FoodNav from "./nav";

import MeatContainer from "./meatcontainer";
import VegetableContainer from "./vegetablecontainer";
import DairyContainer from "./dairycontainer";
import DrinkContainer from "./drinkcontainer";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import { getCookies } from "./actions";
import foodmoney from "./foodmoney.jpg";
import beta from "./beta-stamp.png";

const home = props => {
  return (
    <div>
      <Jumbotron className="jumbo" style={{ marginBottom: "0px" }}>
        <h1 className="display-3">Hello, Sales!</h1>
        <div>
          <img src={beta} alt="beta" />
        </div>
        <p className="lead">
          Choose your items and check out some money saving recipes
        </p>
        <hr className="my-2" />

        <p className="lead">
          <Button color="primary">
            Select Stores <i>(Coming soon)</i>
          </Button>
        </p>
      </Jumbotron>
      <div
        className="introBack"
        style={{
          height: "720px",
          backgroundImage: `url(${foodmoney})`,
          backgroundSize: "cover"
        }}
      />
    </div>
  );
};

/*<div className="content" style={{ backgroundImage: `url(${picture})`, height: "1300px", padding: "0%"}}>*/

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
         
            <div
              className="navigation"
              style={{
                position: "sticky",
                top: "0",
                zIndex: "9"
              }}
            >
              <FoodNav cookies={this.props.cookies} />
            </div>

            <Switch>
              <Route exact path="/" component={home} />

              <Route exact path="/meats" component={MeatContainer} />
              <Route exact path="/vegetables" component={VegetableContainer} />
              <Route exact path="/dairy" component={DairyContainer} />
              <Route exact path="/drinks-snacks" component={DrinkContainer} />
            </Switch>
         
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCookies: () => {
      dispatch(getCookies());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);