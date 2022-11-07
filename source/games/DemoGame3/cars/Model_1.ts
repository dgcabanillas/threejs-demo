import * as THREE from 'three';
import Chassis from '../componets/Chassis';
import GameObject from 'source/entities/GameObject';
import Floor from '../componets/Floor';

class CarFloat extends GameObject {
  constructor () {
    super();

    const frontHood = new THREE.Mesh ( 
      new THREE.TorusGeometry ( 10, 1.5, 16, 36, Math.PI ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    frontHood.position.x = 20;
    frontHood.scale.z = 7.5;
    this.add ( frontHood );

    const frontLeftHood = new THREE.Mesh (
      new THREE.TorusGeometry ( 10, 2, 16, 36, Math.PI ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    frontLeftHood.position.x = 20;
    frontLeftHood.position.z = 8;
    frontLeftHood.scale.z = 3;
    this.add ( frontLeftHood );

    const frontRightHood = new THREE.Mesh (
      new THREE.TorusGeometry ( 10, 2, 16, 36, Math.PI ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    frontRightHood.position.x = 20;
    frontRightHood.position.z = -8;
    frontRightHood.scale.z = 3;
    this.add ( frontRightHood );

    const backHood = new THREE.Mesh (
      new THREE.TorusGeometry ( 10, 3, 16, 36, Math.PI ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    backHood.position.x = -20;
    backHood.scale.z = 4.75;
    this.add ( backHood );

    const bodyBottom = new THREE.Mesh (
      new THREE.BoxGeometry ( 18, 4, 18 ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    bodyBottom.position.y = 2;
    this.add ( bodyBottom );

    const bodyCenter = new THREE.Mesh (
      new THREE.BoxGeometry ( 20, 1, 18 ),
      new THREE.MeshStandardMaterial ({ 
        color: 0x222222,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    bodyCenter.position.y = 4.5;
    this.add ( bodyCenter );

    const bodyTop = new THREE.Mesh (
      new THREE.CapsuleGeometry ( 4, 16, 8, 24 ),
      new THREE.MeshStandardMaterial ({ 
        color: 0xFFFF00,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    bodyTop.position.y = 6;
    bodyTop.scale.y = 2;
    bodyTop.scale.z = 2;
    bodyTop.rotation.z = 15 * Math.PI / 32;
    this.add ( bodyTop );

    const cabinCeil = new THREE.Mesh (
      new THREE.SphereGeometry ( 7.2, 32, 32, Math.PI / 2 ),
      new THREE.MeshStandardMaterial ({ 
        color: 0x333333,
        emissive: 0x000000,
        roughness: 0.5,
        metalness: 0.5
      })
    )
    cabinCeil.position.x = 0;
    cabinCeil.position.y = 8;
    cabinCeil.scale.x = 2.5;
    this.add ( cabinCeil );
  }
}

export default class CarModel_1 extends GameObject {
  constructor () {
    super();

    const chassis = new Chassis();
    this.add ( chassis );

    const floor = new Floor();
    this.add ( floor );

    const float = new CarFloat();
    this.add ( float );
  }
}