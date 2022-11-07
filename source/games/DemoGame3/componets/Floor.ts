import * as THREE from 'three';
import GameObject from 'source/entities/GameObject';
import Panel from '../base/Panel';

export default class Floor extends GameObject {
  constructor () {
    super(); 

    const leftPanel = new Panel(54, 1, 8);
    leftPanel.object.position.z = 8;
    leftPanel.object.position.y = -2;
    this.add ( leftPanel );

    const rightPanel = new Panel(54, 1, 8);
    rightPanel.object.position.z = -8;
    rightPanel.object.position.y = -2;
    this.add ( rightPanel );

    const frontPanel = new Panel(6, 1, 24);
    frontPanel.object.position.x = -25;
    frontPanel.object.position.y = -2;
    this.add ( frontPanel );

    const backPanel = new Panel(6, 1, 24);
    backPanel.object.position.x = 25;
    backPanel.object.position.y = -2;
    this.add ( backPanel );
  }
}
