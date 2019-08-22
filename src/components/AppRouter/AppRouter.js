// Реализуйте роутер
// Вам нужно определить корневой роут, который будет вести на страницу поиска.
// Роут шоу должен принимать id в параметрах.
import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Style from './AppRouter.css';

import Search from '../Search';
import ShowPage from '../ShowPage';

export default class AppRouter extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' component={Search} exact/>
          <Route path='/shows/:id' component={ShowPage}/>
        </Switch>
      </div>
    )
  }
}