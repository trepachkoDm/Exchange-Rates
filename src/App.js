import React from 'react';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import _404 from './404/_404';
import Actions from './Actions/Actions';



class App extends React.Component {

  render() {

    let main = {
      main: '/',
      actions: '/actions',
      about: '/about',
      contacts: '/contacts'
    }

    return (
      <div className='site'>
        <Header />
        <div className='container'>
          <main>
            <Router>
              <Switch>
                <Route exact path='/' component={Rate} />
                <Route exact path='/about' component={About} />
                <Route exact path='/actions' component={Actions} />
                <Route exact path='/contacts' component={Contacts} />
                <Route component={_404} />
              </Switch>
            </Router>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;