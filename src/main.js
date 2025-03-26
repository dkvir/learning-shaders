import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Plane } from "./objects/Plane";
import { setupUI } from "./ui";

// Animation
const clock = new THREE.Clock();

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.001,
  100
);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Camera position
camera.position.set(0, 0, 1);

// Controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add some light to see the ground material
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const plane = new Plane();
plane.material.uniforms.u_resolution.value.x = renderer.domElement.width;
plane.material.uniforms.u_resolution.value.y = renderer.domElement.height;
scene.add(plane);

function animate() {
  controls.update();
  renderer.render(scene, camera);
  plane.material.uniforms.u_time.value += clock.getDelta();
  requestAnimationFrame(animate);
}

// Handle resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  plane.material.uniforms.u_resolution.value.x = renderer.domElement.width;
  plane.material.uniforms.u_resolution.value.y = renderer.domElement.height;
});

window.addEventListener("mousemove", (e) => plane.onMousemove(e));

animate();
// setupUI({});
