import * as THREE from 'three';

const Body = ({ color = 0xA52523 }) => {
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({ color })
  );
  body.position.z = 12;
  return body;
}

export default Body;