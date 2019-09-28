import React, {Component} from 'react';
// react
import {Fdivone} from './Fdiv';
import {Fdivtwo} from './Fdiv';
import {Fheader} from './Components/FirstCont.js';
import {Fheader} from './Components/FirstCont.js';
// import {Fheader} from './Components/FirstCont.js';
// import {Fheader} from './Components/FirstCont.js';
// import {Fheader} from './Components/FirstCont.js';

const styles1 = {
    background: 'black',
    width: 200,
    height: 200,
}

const styles2 = {
    background: 'blue',
    width: 100,
    height: 200,
}

export class Fheader extends Component {
    render (){
    return (
        <div className={'firstHeader'}>
            <Fdivone />
            <Fdivtwo />
        </div>
        )
    }
};

export class Freviem extends Component {
    render (){
    return (
        <div className={'firstReviem'}>
            <Spankah1 />
            <Spankah2 />
            <Button />
        </div>
        )
    }
}

export class Ffoter extends Component {
    render (){
    return (
        <div className={'firstFoot'}>
            {/* <Fdiv />
            <Fdiv /> */}
        </div>
        )
    }
}


