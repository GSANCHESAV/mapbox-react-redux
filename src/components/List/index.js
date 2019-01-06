import React from 'react';

import Profile from '../Profile';

import { BoxList } from './styles';

const List = props => (
  <BoxList>
    {props.users.map(user => (
      <Profile key={user.info.id} user={user.info} />
    ))}
  </BoxList>
);

export default List;
