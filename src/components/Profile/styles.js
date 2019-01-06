import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: solid 1px #ddd;

  height: 80px;
  width: 100%;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;

export const Infos = styled.div`
  display: flex;
  flex: 5;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;
  padding-left: 16px;

  h4 {
    color: #444;
    font-weight: 400;
  }
`;

export const Options = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
