import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';

export default class Engine extends GameObject {
  constructor () {
    super();

    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(3, 3, 8, 8),
      new THREE.MeshStandardMaterial({ 
        color: 0x636363,
        emissive: 0x636363,
        roughness: 0.8,
        metalness: 0.8
      })
    )
    cylinder.rotation.z = Math.PI / 2;
    this.add ( cylinder );
  }

  update () {
    this.object.rotation.x += 0.1;
  }
}
