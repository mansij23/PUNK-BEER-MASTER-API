import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store, { initialFetch } from './redux/store';
import Header from './components/Header/Header';
import Favourites from './Pages/Favourites/Favourites';
import Main from './Pages/Main/Main';

function App() {
  initialFetch();
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/Favourites" component={Favourites} />
          <Route exact path="*" component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
