import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
//import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/Dishes';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './FooterComponent';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }
    return (
      <React.Fragment>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Main;