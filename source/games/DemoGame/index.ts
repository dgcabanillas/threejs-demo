import * as THREE from 'three';
import Camera from '../../entities/Camera';
import DemoBufferGeometry from 'source/objects/DemoBufferGeometry';
import { IGameObject } from 'source/interfaces/IGameObject';

class DemoGame {
  renderer: THREE.WebGLRenderer;
  camera: Camera;
  scene: THREE.Scene;

  gameObjects: IGameObject[]

  constructor () {
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = new Camera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    this.camera.position.set(0, 0, 1000);
    this.camera.lookAt( 0, 0, 0 );

    this.gameObjects = [
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry(),
      new DemoBufferGeometry()
    ]

    this.gameObjects.forEach(item => { this.scene.add( item.object )})

    this.animate = this.animate.bind(this);
  }
  
  public resize () {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera.setAspectRatio( window.innerWidth / window.innerHeight );
  }

  animate () {
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

export default DemoGame;