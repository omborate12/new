import React, { Component } from 'react'
import load from './load.gif'

export default class Spineer extends Component {
  render() {
    return (
      <div className='text-center '>
        <img  src={load} alt="" />
      </div>    
    )
  }
}
