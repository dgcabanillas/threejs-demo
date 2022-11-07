import * as THREE from 'three';

export interface IGameObject {
  object: THREE.Object3D
  update: () => void
}