import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from "react-router-dom";

import './Detail.css';
import dragonAnimate from './dragon-animation.gif';

export default class Dragons extends Component {
    state = {
        dragon: {},
        dragonsDate: '',
    };

    async componentDidMount(){
        const { id } = this.props.match.params;
        
        const response = await api.get(`/dragon/${id}`);

        const dragons = response.data;

        const dragonsDate = dragons.createdAt.substr(0, 10);

        this.setState({ dragon: dragons, dragonsDate: dragonsDate });
    }

    render() {
      const { dragon, dragonsDate } = this.state;

      return (
        <div className="container-list">
          <div className="card-detail">
            <img className="card-img-login" src={dragonAnimate} />
            <h1 className="mb-15">Detalhes do Dragão</h1>
            <ul>
              <li className="card-list-item-detail"><strong>Nome:</strong> {dragon.name}</li>
              <li className="card-list-item-detail"><strong>Tipo:</strong>{dragon.type}</li>
              <li className="card-list-item-detail"><strong>Data de Criação:</strong>{dragonsDate}</li>
            </ul> 
          </div>
        </div>
      ) 
    }
}