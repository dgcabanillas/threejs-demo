import * as THREE from 'three';
import { GameObject } from 'source/interfaces/GameObject';

class Cube implements GameObject {
  object: THREE.Mesh;

  constructor () {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
    this.object = new THREE.Mesh( geometry, material );
  }

  update () {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
  }
}

export default Cube;