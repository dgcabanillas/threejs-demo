export const pickRandom = ( array = [] ) => {
  return array[Math.random() * array.length];
}