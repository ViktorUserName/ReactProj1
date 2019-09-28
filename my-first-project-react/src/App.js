import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// тут загрузил все для в принципе работы
import {Fheader} from './Components/First/FirstCont';
import {Freviem} from './Components/First/FirstCont';
import {Ffoter} from './Components/First/FirstCont';
// загрузил компоненты



  class Root extends Component {
    constructor (props) {
      super (props)
    }

    render () {
      return (
        <div className={'firstConteiner'}>
          <Fheader />
          <Freviem />
          <Ffoter />
        </div>
      )
    }

  }


export default Root;
