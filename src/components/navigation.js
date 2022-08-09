import React, { Component } from 'react';

class Navigation extends Component {
   render () {
    return ( 
       <nav className='navbar  navbar-dark bg-dark'>
        <a href='4'>
          {this.props.titulo}
        </a>
       </nav>
    )
    }
}

export default Navigation;