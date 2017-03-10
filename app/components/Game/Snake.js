import React from 'react';
import styled from 'styled-components';
import * as _ from 'lodash';

const SnakeShape = styled.div`
  position: absolute;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
  transform: rotate(${({rotation}) => rotation}deg);
  width: 60px;
  height: 10px;
  background: #900;
`;

export default class Snake extends React.Component {

  static propTypes = {
    killMe: React.PropTypes.func.isRequired,
    collidesWithAny: React.PropTypes.func.isRequired,
    direction: React.PropTypes.string,
    startingX: React.PropTypes.number,
    startingY: React.PropTypes.number,
  };

  componentWillMount() {
    this.setState({
      x: this.props.startingX,
      y: this.props.startingY,
    });

    setInterval(() => this.move(this.props, this.state), 50);
  }

  componentWillUpdate(nextProps, nextState) {
    if(nextState.x !== this.state.x || nextState.y !== this.state.y) {
      if(this.props.collidesWithAny(nextState.x, nextState.y)) {
        this.props.killMe();
        this.setState({
          x: this.props.startingX,
          y: this.props.startingY,
        })
      }
    }
  }

  move({ direction, speed }, { x, y }) {
    switch(direction) {
      case 'right':
        this.setState({ x: x + speed });
        break;
      case 'left':
        this.setState({ x: x - speed });
        break;
      case 'up':
        this.setState({ y: y - speed });
        break;
      case 'down':
        this.setState({ y: y + speed });
        break;
    }
  }

  getRotationDegree({ direction }) {
    switch(direction) {
      case 'right':
        return 0;
      case 'left':
        return 180;
      case 'up':
        return 90;
      case 'down':
        return -90;
    }
  }

  render() {
    const {
      x,
      y,
    } = this.state;

    const {
      direction,
    } = this.props;

    return (
      <SnakeShape x={x} y={y} rotation={this.getRotationDegree({ direction })} />
    );
  }
}
