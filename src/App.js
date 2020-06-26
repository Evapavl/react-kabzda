import React from 'react';
import './index';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/redux-store";

class App extends Component {
       componentDidMount() {
              this.props.initializeApp();
       }
       render() {
              if (!this.props.initializeApp) {
                     return <Preloader />
              }
              return (
                     <div className='app-wrapper'>
                            
                            <HeaderContainer />
                            {/*<Navbar state={props.state.sidebar} />*/}
                            <Route path=''
                                   render={() => <Navbar />} />


                            <div className='app-wrapper-content'>
                            <Switch>
                            <Route exact path='/'
                                           render={() => <Redirect to={"/profile"} />} />
                                   <Route path='/login'
                                          render={() => <Login />} />
                                   <Route path='/profile/:userId?'
                                          render={() => <ProfileContainer />} />
                                   <Route path='/dialogs'
                                          render={() => <DialogsContainer />} />
                                   <Route path='/users'
                                          render={() => <UsersContainer />} />
                                   <Route path='/news' render={() => <News />} />
                                   <Route path='/music' render={() => <Music />} />
                                   <Route path='/settings' render={() => <Settings />} />
                                   {/*<Route render={() => <Friends state={props.state.sidebar}/>}/>*/}
                                   <Route path='*'
                                          render={() => <div>404 NOT FOUND</div>} />
                                   </Switch>
                            </div>
                            
                     </div>

              );
       }
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
})

const AppContainer = compose(
       withRouter, connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
       return <BrowserRouter>
              <Provider store={store}>
                     <AppContainer />
              </Provider>
       </BrowserRouter>
}

export default MainApp;
