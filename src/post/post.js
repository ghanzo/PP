import React, { Component } from 'react';
import './Post.scss';

export default class Items extends React.Component {
    render(){
        return (
            <div className="post">
                hi from Posts and also {this.props.niceProp}
            </div>
        )
    }
}