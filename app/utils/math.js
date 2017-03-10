export const calculateDistance = (position1, position2) => {
  const a = position1.x - position2.x;
  const b = position1.y - position2.y;
  return Math.sqrt( a*a + b*b );
}
