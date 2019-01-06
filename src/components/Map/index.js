import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMapGL, { Marker } from 'react-map-gl';
import { ModalProvider } from 'styled-react-modal';
import api from '../../services/api';

import '../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import List from '../List';
import {
  StyledModal,
  ModalBackground,
  Form,
  AvatarUser,
} from './styles';

import { addUser } from '../../store/actions';

class Map extends Component {
  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    latitude: null,
    longitude: null,
    isOpen: false,
    userInput: '',
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  toogleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleMapClick = (e) => {
    e.preventDefault();
    const [latitude, longitude] = e.lngLat;

    this.setState({ latitude: latitude, longitude: longitude })
    console.log(this.state.latitude)
    console.log(this.state.longitude)

    this.toogleModal();
  };

  handleAddUser = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get(`/users/${this.state.userInput}`);
      const info = {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        user: response.data,
      };

      this.props.addUser(info);
      console.log(this.props.users);

    } catch (err) {
      console.log(err);
    }

    this.setState({ userInput: '' });
    this.toogleModal();
  };

  render() {
    return (
      <div>
        <ReactMapGL
          {...this.state.viewport}
          onClick={this.handleMapClick}
          mapStyle="mapbox://style/mapbox/basic-v9"
          mapboxApiAccessToken="pk.eyJ1IjoiZ3NhdiIsImEiOiJjanB2amI3dmgwYmUyNDNtY2U4MmR2ODIxIn0.FczS_mjH9qxX7n8wEGgtpg"
          onViewportChange={viewport => this.setState({ viewport })}
        >
        { this.props.users.map(user => (
          <Marker
            key={user.info.id}
            latitude={user.latitude}
            longitude={user.longitude}
            onClick={this.handleMapClick}
            captureClick
          >
            <AvatarUser>
              <img src={user.info.avatar_url} alt={user.info.login} />
              <h5>{user.info.login}</h5>
            </AvatarUser>
          </Marker>
        )) }
        </ReactMapGL>

        <List users={this.props.users}/>

        <ModalProvider backgroundComponent={ModalBackground}>
          <StyledModal
            isOpen={this.state.isOpen}
            onBackgroundClick={this.toogleModal}
            onEscapeKeydown={this.toogleModal}
          >
            <Form onSubmit={this.handleAddUser}>
              <h3>Adicionar novo usuário</h3>
              <input
                type="text"
                placeholder="Usuário no GitHub"
                value={this.state.userInput}
                onChange={e => this.setState({ userInput: e.target.value })}
              />
              <div>
                <button className="cancel" onClick={this.toogleModal} type="submit">
                  Cancelar
                </button>
                <button className="save" type="submit">
                  Salvar
                </button>
              </div>
            </Form>
          </StyledModal>
        </ModalProvider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.list.users,
});

const mapDispatchToProps = dispatch => ({
  addUser: info => dispatch(addUser(info))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
