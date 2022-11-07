import * as THREE from 'three';
import Axis from './Axis';
import Engine from './Engine';
import GameObject from 'source/entities/GameObject';
import Tube from '../base/Tube';

export default class Chassis extends GameObject {
  constructor () {
    super ();

    const cylinder = new Tube(1.25, 1.25, 40, 16, 0x0F0F0F);
    cylinder.object.rotation.z = Math.PI / 2;
    this.add ( cylinder );

    const backAxis = new Axis();
    backAxis.object.position.x = 20;
    this.add ( backAxis.object );

    const frontAxis = new Axis();
    frontAxis.object.position.x = -20;
    this.add ( frontAxis );
    
    const engine = new Engine();
    engine.object.position.x = -12;
    this.components.push( engine );
    this.add ( engine.object );
  }
}
