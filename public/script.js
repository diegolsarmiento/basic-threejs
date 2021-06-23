import * as THREE from '/build/three.module.js';

// Place Scene in Canvas element
const canvas = document.querySelector('canvas.webgl');

// Prepare Size of the Scene
const sizes = {
    width: 800,
    height: 600
}

// 1) Create Scene
const scene = new THREE.Scene();

// 2) Create Object(s) : Geometry, Mat, Mesh, Add Scene
const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: '#00eaff'});
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cubeMesh);

// 3) Add Camera: params are Vetical Vesion, Aspect Radio, then we position and addd to scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = 1;
scene.add(camera)

// 4) Renderer: attach canvas, set size and render
const renderer = new THREE.WebGLRenderer({
    canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
