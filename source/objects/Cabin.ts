import * as THREE from 'three';

const DEFAULT_MATERIAL = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

const Cabin = ({ material = DEFAULT_MATERIAL }) => {
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    material
  );
  cabin.position.x = -6;
  cabin.position.z = 25.5;
  return cabin;
}

export default Cabin;