import * as THREE from 'three';
import { GameObject } from 'source/interfaces/GameObject';

const MAX_POINTS = 500;

class DemoBufferGeometry implements GameObject {
  object: THREE.Line;
  drawCount: number;
  material: THREE.LineBasicMaterial;

  constructor () {
    const geometry = new THREE.BufferGeometry();

    // attributes
    const positions = new Float32Array( MAX_POINTS * 3 ); // 3 vertices per point
    geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) );

    // draw range
    this.drawCount = 2; // draw the first 2 points, only
    geometry.setDrawRange(0, this.drawCount);

    // material
    this.material = new THREE.LineBasicMaterial();
    this.material.color.setHSL(Math.random(), 1, 0.5);

    // line
    this.object = new THREE.Line( geometry, this.material );
  }

  update () {
    const positions = this.object.geometry.attributes.position.array as Array<number>;

    let x, y, z, index;
    x = y = z = index = 0;

    for ( let i = 0; i < MAX_POINTS; i ++ ) {
        positions[ index++ ] = x;
        positions[ index++ ] = y;
        positions[ index++ ] = z;

        x += ( Math.random() - 0.5 ) * 30;
        y += ( Math.random() - 0.5 ) * 30;
        z += ( Math.random() - 0.5 ) * 30;
    }

    this.drawCount = (this.drawCount + 1) % MAX_POINTS;
    this.object.geometry.setDrawRange(0 , this.drawCount);

    if ( this.drawCount === 0 ) {
      this.object.geometry.attributes.position.needsUpdate = true;
      this.material.color.setHSL(Math.random(), 1, 0.5);
    }
  }
}

export default DemoBufferGeometry;