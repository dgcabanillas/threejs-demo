import GameInit from 'source/lib/GameInit';
import { Vector3 } from 'three';
import CarModel_1 from './cars/Model_1';

export default class DemoGame3 {
  game: GameInit;

  constructor () {
    this.game = new GameInit();
    this.game.camera.position.x = 8;
    this.game.camera.position.y = 0;
    this.game.camera.position.z = 120;

    const car = new CarModel_1();
    this.game.add ( car );
  }
}