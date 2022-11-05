import * as THREE from 'three';

export interface GameObject {
  object: THREE.Line | THREE.Mesh
  update: () => void
}