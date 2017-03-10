import React from 'react';
import styled from 'styled-components';
import Wall from './Wall';
import Snake from './Snake';
import { Box, Vector } from 'sat';

const GameWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #EEE;
`;

export default class Game extends React.Component {

  componentWillMount() {
    this.setState({
      walls: [
        new Box(new Vector(0, 0), 400, 10),
        new Box(new Vector(0, 390), 400, 10),
        new Box(new Vector(0, 0), 10, 400),
      ],
      population: [
        { fitness: 100, direction: 'right' },
        { fitness: 100, direction: 'left' },
        { fitness: 100, direction: 'up' },
        { fitness: 100, direction: 'down' },
      ],
    });
  }

  collides(x, y, width, height) {
    const V = ;
    return false;
  }

  snakeKilled(population, snake) {
    // Update snake fitness
    const index = population.indexOf(snake);

    this.setState({
      population: [
        ...population.slice(0, index),
        {
          fitness: snake.fitness / 100,
          ...snake,
        },
        ...population.slice(index + 1),
      ],
    });
  }

  // getDistanceToGoal(game) {
  //   return calculateDistance(game.getGoal().Position(), this.position));
  // }

  // caclulateFitness(game) {
  //   return 1 / this.getDistanceToGoal(game);
  // }

  render() {
    const {
      population,
      walls,
    } = this.state;
    return (
      <GameWrapper>
        {population.map((snake, index) => (
          <Snake
            key={index}
            startingX={30}
            startingY={200}
            collidesWithAny={(x, y) => this.collides(x, y)}
            killMe={() => this.snakeKilled(population, snake)}
            speed={3}
            direction={snake.direction}
          />
        ))}
        {walls.map(({ x, y, width, height }, index) => (
          <Wall key={index} x={x} y={y} width={width} height={height} />
        ))}
      </GameWrapper>
    );
  }
}
