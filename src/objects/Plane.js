import * as THREE from "three";
import vertexShader from "../shaders/vertexShader.vert?raw";
import fragmentShader from "../shaders/fragmentShader.frag?raw";

export class Plane extends THREE.Mesh {
  constructor(options = {}) {
    super();

    this.material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_mouse: { type: "v2", value: new THREE.Vector2() },
      },
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    });
    this.geometry = new THREE.PlaneGeometry(1, 1);
  }

  onMousemove(e) {
    this.material.uniforms.u_mouse.value.x = e.pageX;
    this.material.uniforms.u_mouse.value.y = e.pageY;
  }
}
