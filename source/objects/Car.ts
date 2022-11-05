import * as THREE from 'three';
import Wheel from './Wheel.js';

const Car = () => {
  const car = new THREE.Group();

  const backWheel = Wheel();
  backWheel.position.x = -18;
  car.add(backWheel);

  // const frontWheel = Wheel();
  // frontWheel.position.x = 18;
  // car.add(frontWheel);

  // const body = Body({ color: pickRandom(vehicleColors) });
  // car.add(body);

  // const cabin = Cabin({ material: getCabinMaterial() });
  // car.add(cabin);

  return car;
}

export default Car;