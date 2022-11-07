import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';

export default class Wheel extends GameObject {
  constructor () {
    super();
    const surface = new THREE.Mesh(
      new THREE.TorusGeometry(8.1, .5, 6, 32, Math.PI * 1.18 ),
      new THREE.MeshLambertMaterial({ color: 0x222222 })
    )
    surface.rotation.z = -Math.PI * 0.09;
    surface.scale.z = 6.0;
    this.add (surface);

    const rubber = new THREE.Mesh(
      new THREE.TorusGeometry(6, 1.5, 16, 100, 6.2832),
      new THREE.MeshLambertMaterial({ color: 0x333333 })
    )
    rubber.scale.z = 2;
    this.add (rubber);

    const rim = new THREE.Mesh(
      new THREE.CylinderGeometry(4.5, 4.5, 2, 10),
      new THREE.MeshLambertMaterial({ color: 0x9A9A9A })
    )
    rim.rotation.x = Math.PI / 2;
    this.add (rim);
    
  }
}
