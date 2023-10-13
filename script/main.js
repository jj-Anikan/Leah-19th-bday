// Import Three.js library
import * as THREE from 'three';

// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspecitveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRederer();
renderer.setSize(window.innerWidth, window.innerHeight);
