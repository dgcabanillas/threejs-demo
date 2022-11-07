import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';

export default class Panel extends GameObject {
  constructor (
    width:  number, 
    height: number, 
    depth:  number, 
    color:  THREE.ColorRepresentation = 0x222222
  ) {
    super();
    this.object = new THREE.Mesh (
      new THREE.BoxGeometry(width, height, depth),
      new THREE.MeshLambertMaterial({ color })
    );
  }
}
