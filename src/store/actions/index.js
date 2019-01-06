import { ADD_USER } from './actionTypes';

export const addUser = info => (
  {
    type: ADD_USER,
    payload: { info },
  },
  console.log('ativou')
);
