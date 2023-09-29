// A minimal CSS framework: you can research
// and choose others, or use none at all.
//import '@picocss/pico'

// My attempt at a 3D object
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 300, window.innerWidth / window.innerHeight, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.IcosahedronGeometry(10,0);
const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 

const material = new THREE.MeshBasicMaterial( { color: 606060 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 100;
camera.position.x = 0;
camera.position.y = 0;
function animate() {
  const edges = new THREE.EdgesGeometry( geometry ); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 
  scene.add( line );
 geometry.rotateX(0.05)
  geometry.rotateY(0.05)
  geometry.rotateZ(0.05)
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  scene.remove(line)
}
animate();
// Our stylesheet.
import './style.css'


// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;

// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
