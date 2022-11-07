import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';
import Wheel from './Wheel';

export default class Axis extends GameObject {
  constructor () {
    super();

    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(1.5, 1.5, 33, 16),
      new THREE.MeshStandardMaterial({ 
        color: 0x0F0F0F,
        emissive: 0x0F0F0F,
        roughness: 0.5,
        metalness: 0.5
      })
    )

    cylinder.rotation.x = Math.PI / 2;
    this.add ( cylinder );

    const leftWheel = new Wheel();
    leftWheel.object.position.z = 15;
    this.add ( leftWheel.object );

    const rightWheel = new Wheel();
    rightWheel.object.position.z = -15;
    this.add ( rightWheel.object );

  }

  update () {}
}
