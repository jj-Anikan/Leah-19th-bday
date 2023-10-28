// Import Three.js library
import * as THREE from 'three';

// Initialize Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a simple maze
const mazeGeometry = new THREE.BoxGeometry(1, 1, 1);
const mazeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

// Maze dimensions (adjust as needed)
const mazeWidth = 5;
const mazeHeight = 5;

// Create the maze structure
for (let x = -mazeWidth / 2; x < mazeWidth / 2; x++) {
    for (let z = -mazeHeight / 2; z < mazeHeight / 2; z++) {
        const mazeCube = new THREE.Mesh(mazeGeometry, mazeMaterial);
        mazeCube.position.set(x, 0, z);
        scene.add(mazeCube);
    }
}

// Set the camera position
camera.position.set(0, 1, 10);

// Player position and movement (basic example)
const player = new THREE.Mesh(mazeGeometry, new THREE.MeshBasicMaterial({ color: 0xff0000 }));
player.position.set(0, 0.5, 0);
scene.add(player);

// Game logic
const playerSpeed = 0.1;

const handlePlayerMovement = () => {
    if (Key.isDown(Key.LEFT)) player.position.x -= playerSpeed;
    if (Key.isDown(Key.RIGHT)) player.position.x += playerSpeed;
    if (Key.isDown(Key.UP)) player.position.z -= playerSpeed;
    if (Key.isDown(Key.DOWN)) player.position.z += playerSpeed;
};

const animate = () => {
    requestAnimationFrame(animate);

    // Update game logic
    handlePlayerMovement();

    renderer.render(scene, camera);
};

// Key object for player controls
const Key = {
    _pressed: {},

    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,

    isDown: function(keyCode) {
        return this._pressed[keyCode];
    },

    onKeyDown: function(event) {
        this._pressed[event.keyCode] = true;
    },

    onKeyUp: function(event) {
        delete this._pressed[event.keyCode];
    },
};

// Event listeners for player controls
window.addEventListener('keydown', (event) => Key.onKeyDown(event), false);
window.addEventListener('keyup', (event) => Key.onKeyUp(event), false);

// Start the game loop
animate();
