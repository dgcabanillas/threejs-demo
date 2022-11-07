import * as THREE from 'three';
import { IGameObject } from "source/interfaces/IGameObject";

export default class GameObject implements IGameObject {
  object: THREE.Object3D;
  components: IGameObject[];

  constructor () {
    this.object = new THREE.Group();
    this.components = [];
  }
  
  add ( component: GameObject | THREE.Object3D ) {
    if ( component instanceof GameObject ) {
      this.components.push ( component )
      this.object.add ( component.object );
    } else {
      this.object.add ( component );
    }
  }
  update () { this.components.forEach(component => { component.update() })}
}