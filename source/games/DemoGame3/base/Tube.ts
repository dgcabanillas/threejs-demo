import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';

export default class Tube extends GameObject {
  constructor (
    radiusTop:      number, 
    radiusButtom:   number, 
    height:         number, 
    radialSegments: number,
    color:          THREE.ColorRepresentation = 0x0F0F0F
  ) {
    super();
    this.object = new THREE.Mesh(
      new THREE.CylinderGeometry(radiusTop, radiusButtom, height, radialSegments),
      new THREE.MeshStandardMaterial({ 
        color,
        emissive: color,
        roughness: 0.5,
        metalness: 0.5
      })
    )
  }
}
