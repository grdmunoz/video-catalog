import React, { Component } from 'react'
import Nav from './navbar'
import List from './list';


class Index extends Component {

  render() {
    return (
       <div> 
          <Nav />       
          <List />
       </div>   
    )
  }

}

export default Index