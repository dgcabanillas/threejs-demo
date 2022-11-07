import * as THREE from 'three';
import Camera from '../../entities/Camera';
import { IGameObject } from 'source/interfaces/IGameObject';
import Example from './components/Example-2';

class CarGame {
  renderer: THREE.WebGLRenderer;
  camera: Camera;
  scene: THREE.Scene;
  clock: THREE.Clock;
  uniformData: any;

  gameObjects: IGameObject[]

  constructor () {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = new Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.set(50, 50, 0);
    this.camera.lookAt( 0, 0, 0 );

    this.clock = new THREE.Clock();
    this.uniformData = {
      u_time: {
        type: 'f',
        value: this.clock.getElapsedTime()
      }
    }

    this.gameObjects = [
      new Example({ uniformData: this.uniformData }),
    ]

    this.gameObjects.forEach(item => { this.scene.add( item.object )})


    this.animate = this.animate.bind(this);
  }
  
  public resize () {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera.setAspectRatio( window.innerWidth / window.innerHeight );
  }

  animate () {
    this.uniformData.u_time.value = this.clock.getElapsedTime();
    requestAnimationFrame( this.animate );

    this.gameObjects.forEach(item => { item.update() })

    this.renderer.render( this.scene, this.camera );
  }

  init () {
    this.resize();
    this.animate();
  }

  render () {
    return this.renderer.domElement;
  }
}

export default CarGame;