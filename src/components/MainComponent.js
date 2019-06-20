import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import AboutUs from './AboutUsComponent';
import DishDetail from './DishdetailComponent';
import Contact from './ContactComponent';
import { DISHES } from '../shared/Dishes';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './FooterComponent';
import { COMMENTS } from '../shared/Comments';
import { PROMOTIONS } from '../shared/Promotions';
import { LEADERS } from '../shared/Leaders';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
            dish={this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
            leader={this.state.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
      <React.Fragment>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route path='/about' component={AboutUs} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={Contact} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default Main;