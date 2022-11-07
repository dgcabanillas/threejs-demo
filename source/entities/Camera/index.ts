import * as THREE from 'three';
 
class Camera extends THREE.PerspectiveCamera {
  constructor ( 
    fov?: number | undefined, 
    aspect?: number | undefined, 
    near?: number | undefined, 
    far?: number | undefined 
  ) {
    super ( fov, aspect, near, far );
  }

  setAspectRatio ( aspectRatio: number ) {
    this.aspect = aspectRatio;
    this.updateProjectionMatrix();
  }
}

export default Camera;