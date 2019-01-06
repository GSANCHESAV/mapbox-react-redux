import styled from 'styled-components';
import Modal from 'styled-react-modal';

export const AvatarUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    border: solid 4px #f65;
  }
`;

export const StyledModal = Modal.styled`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 100%;
  width: 100%;
  z-index: 99999;

  background: #00000099;
`;

export const ModalBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  height: 100%;
  width: 100%;
  z-index: 99999;

  background: #00000099;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  width: 360px;
  height: 160px;
  border-radius: 4px;
  background: #fff;

  padding: 16px;

  h3 {
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 16px;
    border: solid 1px #bbb;
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 4px;

    button {
      height: 40px;
      width: 47%;
      border-radius: 4px;
      background: #222;
      color: #fff;
      font-size: 14px;
      font-weight: bold;

      &.save {
        background: #4caf50;
        color: #fff;
      }

      &.cancel {
        background: #f44336;
        color: #fff;
      }

      &:disabled,
      [disabled] {
        background: #ddd;
        color: #999;
        opacity: 1 !important;
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
