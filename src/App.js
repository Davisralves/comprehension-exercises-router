import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users'
import StrictAcess from './components/StrictAccess';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  constructor () {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
      },
  };
}

  handleUser = ({ target }) => {
  const { value, name } = target;
  this.setState( { user: { [name]: value }}); 
  };

  render() {
    const { user } = this.state;
    return (
      <BrowserRouter>
       <span>Login:</span> <input  onChange={this.handleUser} name="username" />
       <span>Senha:</span> <input onChange={this.handleUser} name="password" />
       <Link to={`/strict-acess${user}`}>Login</Link>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/users/:id" render={ (props) => <Users { ...props } greetingsMessage="Good Morning" />} />
          <Route exact path="/strict-acess/:user">
          {user.password === '1234' && user.username === 'joao' ? <StrictAcess /> : <Redirect to="/users/acesso Negado" />}
          </Route>
        </Switch>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users" >Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
