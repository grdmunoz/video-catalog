import React, { Component } from 'react'
import Nav from './navbar'
import EditList from './editList';

class AddVideo extends Component {

  render() {
    return (
         <div> 
            <Nav link="Logout" />       
            <EditList />
          </div>   
    )
  }
}

export default AddVideo