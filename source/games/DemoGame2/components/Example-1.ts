import * as THREE from 'three';
import { IGameObject } from "source/interfaces/IGameObject";

class Plane implements IGameObject {
  object: THREE.Mesh;

  constructor () {
    const geometry = new THREE.BoxGeometry( 16, 16, 16, 16, 16, 16 );
    const material = new THREE.ShaderMaterial({
      wireframe: true,
      vertexShader: `
        void main() {
          // gl_Position = projectionMatrix 
          //   * modelViewMatrix
          //   * vec4 ( position.x, position.y, position.z, 1.0 );
          // gl_Position = projectionMatrix 
          //   * modelViewMatrix
          //   * vec4 ( position.x, sin(position.z), position.z, 1.0 );
          // gl_Position = projectionMatrix 
          //   * modelViewMatrix
          //   * vec4 ( position.x, sin(position.z) + position.y, position.z, 1.0 );
          // gl_Position = projectionMatrix 
          //   * modelViewMatrix
          //   * vec4 ( position.x, sin(position.z / 4.0) + position.y, position.z, 1.0 );
          gl_Position = projectionMatrix 
            * modelViewMatrix
            * vec4 ( position.x, 4.0 * sin(position.z / 4.0) + position.y, position.z, 1.0 );
        }
      `,
      fragmentShader: `
        void main() {
          gl_FragColor = vec4 ( 1.0, 1.0, 0.0, 1.0 );
        }
      `
    })
    this.object =  new THREE.Mesh(geometry, material);
  }

  update () {
    this.object.rotation.x += 0.01;
    this.object.rotation.y += 0.01;
  };
}

export default Plane;