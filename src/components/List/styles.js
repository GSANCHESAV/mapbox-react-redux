import styled from 'styled-components';

export const BoxList = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 16px;

  width: 300px;
  z-index: 9999;
  height: 94vh;
  margin: 3vh;
  background-color: #fff;

  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
