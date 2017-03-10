import styled from 'styled-components';

export default styled.div`
  position: absolute;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  background: #333;
`;
