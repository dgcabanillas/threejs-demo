import * as THREE from 'three';
import { IGameObject } from "source/interfaces/IGameObject";

interface IProps {
  uniformData: any
}

class Plane implements IGameObject {
  object: THREE.Mesh;

  constructor ({ uniformData }: IProps) {

    const geometry = new THREE.BoxGeometry( 24, 4, 24, 24, 4, 24 );
    const material = new THREE.ShaderMaterial({
      wireframe: true,
      uniforms: uniformData,
      vertexShader: `
        varying vec3 pos;
        uniform float u_time;

        void main() {
          vec4 result;
          pos = position;
  
          // result = vec4 ( position.x, position.y, position.z, 1.0 );
          // result = vec4 ( position.x, position.y + sin(u_time), position.z, 1.0 );
          // result = vec4 ( position.x, position.y + sign(position.y) * sin(u_time), position.z, 1.0 );
          // result = vec4 ( position.x, sin(position.z + u_time), position.z, 1.0 );

          result = vec4 ( position.x, 4.0 * sin(position.z / 4.0 + u_time) + position.y, position.z, 1.0 );

          gl_Position = projectionMatrix 
            * modelViewMatrix
            * result;
        }
      `,
      fragmentShader: `
        varying vec3 pos;
        uniform float u_time;
        void main() {
          if ( pos.x >= 0.0 ) {
            gl_FragColor = vec4 ( abs(sin(u_time)), 0.0, 0.0, 1.0 );
          } else {
            gl_FragColor = vec4 ( 0.0, abs(cos(u_time)), 0.0, 1.0 );
          }
        }
      `
    })
    this.object =  new THREE.Mesh(geometry, material);
  }

  update () {
    // this.object.rotation.x += 0.01;
    // this.object.rotation.y += 0.01;
  };
}

export default Plane;