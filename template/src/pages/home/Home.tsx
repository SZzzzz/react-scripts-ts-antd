import React, { Component } from 'react';
import { Rate } from 'antd';
import './Home.scss';
const logo = require('../../assets/logo.svg');

export default class Home extends Component {
    render(): JSX.Element {
        return (
            <div className="home-container">
                <div className="home-header">
                    <img src={logo} className="home-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="home-intro">
                    To get started, edit <code>src/home.tsx</code> and save to reload.
                </p>
                <Rate character="6"/>
            </div>
        );
    }
};