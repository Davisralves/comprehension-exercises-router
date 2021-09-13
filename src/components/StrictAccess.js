import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component {
  render() {
    const grettinsElement = <span>Welcome joao!</span>;
    return (
      { grettinsElement }
    );
  }
};

export default StrictAcess;