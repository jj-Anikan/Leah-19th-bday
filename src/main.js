// Import Three.js library
import * as THREE from 'three';

// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspecitveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRederer();
renderer.setSize(window.innerWidth, window.innerHeight);

const mazeGeometry = new THREE.BoxGeometry(1, 1, 1);
const mazeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mazeCube = new THREE.Mesh(mazeGeometry, mazeMaterial);
scene.add(mazeCube);

// Set the camera position
camera.position.z = 5;

// Game loop
const animate = () => {
    requestAnimationFrame(animate);

    // Add game logic here (e.g., player movement)

    renderer.render(scene, camera);
};

// Start the game loop
animate();
