import React from 'react';

import { Cancel, KeyboardArrowRight } from '@material-ui/icons';
import { Container, Infos, Options } from './styles';

const Profile = ({ user }) => (
  <Container>
    <img src={user.avatar_url} alt={user.name} />

    <Infos>
      <strong>{user.name}</strong>
      <h4>{user.login}</h4>
    </Infos>

    <Options>
      <Cancel color="error" />
      <KeyboardArrowRight color="action" />
    </Options>
  </Container>
);

export default Profile;
