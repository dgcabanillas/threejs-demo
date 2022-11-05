import { PerspectiveCamera as THREE_Camera, Vector3 } from 'three';
 
class Camera extends THREE_Camera {
  constructor ( 
    fov?: number | undefined, 
    aspect?: number | undefined, 
    near?: number | undefined, 
    far?: number | undefined 
  ) {
    super ( fov, aspect, near, far );
    // this = new THREE_Camera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  }

  setAspectRatio ( aspectRatio: number ) {
    this.aspect = aspectRatio;
    this.updateProjectionMatrix();
  }
}

export default Camera;