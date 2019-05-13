import React, { Component } from 'react';
import Header from './components/Header';
import TabOne from './components/TabOne';
import TabTwo from './components/TabTwo';
//
// import './App.css';
import './SASS/style.scss';
import {Router, Route, Switch, BrowserRouter, Redirect, hashHistory } from "react-router-dom";
import axios from "react-axios";
import allReducers from  "./reducers"
import {Provider} from "react-redux";
import {createStore} from "redux";

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

class App extends Component{


  render() {


    return (
        <Provider store={store}>
        <div className="wrap">

          <img src="http://gallery.yopriceville.com/downloadfullsize/send/4200"/>
          <BrowserRouter >

            <Header />
              <Switch>
                <Route exact path="/news-option" component={TabOne} />
                <Route exact path="/calendar" component={TabTwo} />
                <Redirect from="/" to="/news-option"></Redirect>
              </Switch>

          </BrowserRouter> >

          <div>


          </div>
        </div>
        </Provider>
    );
  }
}

export default App;
