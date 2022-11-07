import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';
import Camera from 'source/entities/Camera';

import { IGameObject } from 'source/interfaces/IGameObject';

export default class GameInit {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: Camera;
  clock: THREE.Clock;
  controls: OrbitControls;
  stats: Stats;
  ambientLight: THREE.AmbientLight;
  directionalLight: THREE.DirectionalLight;

  objects: IGameObject[];

  constructor () {
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.camera = new Camera(45, window.innerWidth / window.innerHeight, 1, 1000);
    this.camera.position.z = 48;
    
    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.stats = Stats();

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);

    this.objects = [];

    const axesHelper = new THREE.AxesHelper( 100 );
    this.scene.add ( axesHelper );

    this.animate = this.animate.bind(this);
  }

  add ( item: IGameObject ) {
    this.objects.push ( item );
    this.scene.add ( item.object );
  }

  resize () {
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.camera.setAspectRatio( window.innerWidth / window.innerHeight );
  }

  animate () {
    requestAnimationFrame( this.animate );
    this.objects.forEach(item => { item.update() })
    this.renderer.render( this.scene, this.camera );
    this.stats.update();
    this.controls.update();
  }

  init () {
    this.resize();
    this.animate();
  }
}