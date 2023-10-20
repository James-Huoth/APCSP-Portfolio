// A minimal CSS framework: you can research
// and choose others, or use none at all.
//import '@picocss/pico'
import "@fontsource/chivo"; // Defaults to weight 400
import "@fontsource/chivo/400.css"; // Specify weight
import "@fontsource/chivo/400-italic.css"; // Specify weight and style
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
   AOS.init()
  }
};
// My attempt at a 3D object
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 300, window.innerWidth / window.innerHeight  , 1, 1000 );

const renderer = new THREE.WebGLRenderer();

document.body.appendChild( renderer.domElement );
let choice;
const geometry = new THREE.IcosahedronGeometry(10,0);
const geometry2 = new THREE.TorusGeometry( 8, 0.25, 4, 100 );
const geometry2clone = new THREE.TorusGeometry( 8, 0.25, 4, 100 );
const geometry3 = new THREE.BoxGeometry( 10, 10, 10 ); 
const geometry4 = new THREE.TorusGeometry( 8, 0.25, 4, 3 )
const material = new THREE.MeshBasicMaterial( { color: 0xffffff } ); 
const circle = new THREE.TorusGeometry( 1, 0.05, 4, 100 );
let geometry6 = new THREE.Mesh( circle, material );
let geometry7 = new THREE.Mesh( circle, material );
let geometry8 = new THREE.Mesh( circle, material );
let geometry9 = new THREE.Mesh( circle, material );
let geometry10 = new THREE.Mesh( circle, material );
let geometry11 = new THREE.Mesh( circle, material );
let geometry12 = new THREE.Mesh( circle, material );
let geometry13 = new THREE.Mesh( circle, material );



let table = [geometry,geometry2,geometry3,geometry4]
let num = Math.round(Math.random() * table.length)

choice = table[num]
function check(){

  let table = [geometry,geometry2,geometry3,geometry4]
let num = Math.round(Math.random() * table.length)

choice = table[num]
if(choice == null) {

  check()
}else {scene.add(choice);}
  
  
}

check()

  camera.position.z = 80;
camera.position.x = 0;
camera.position.y = 30;



geometry6.position.y = 20;
geometry7.position.y = 20+1.85;
geometry8.position.y = 20+(1.85*2);
geometry9.position.y = 20+(1.85*3);
geometry10.position.y = 20+(1.85*4);
geometry11.position.y = 20+(1.85*5);
geometry12.position.y = 20+(1.85*6);
geometry13.position.y = 20+(1.85*7);

  geometry7.rotateY(17)
  geometry9.rotateY(17)
  geometry11.rotateY(17)
  geometry13.rotateY(17)

function animate() {
  

camera.aspect = window.innerWidth / (window.innerHeight*4);
camera.updateProjectionMatrix();

renderer.setSize( window.innerWidth, window.innerHeight *4 );

const edges = new THREE.EdgesGeometry( choice); 
const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xffffff } ) ); 
scene.add( line );
 scene.add(geometry6);
 scene.add(geometry7);
 scene.add(geometry8);
 scene.add(geometry9);
 scene.add(geometry10);
 scene.add(geometry11);
scene.add(geometry12);
scene.add(geometry13);
  
 choice.rotateX(0.005)
  choice.rotateY(0.005)
  choice.rotateZ(0.005)

 
geometry6.rotateY(-0.005)
geometry7.rotateY(-0.005)
geometry8.rotateY(-0.005)
geometry9.rotateY(-0.005)
geometry10.rotateY(-0.005)
geometry11.rotateY(-0.005)
geometry12.rotateY(-0.005)
geometry13.rotateY(-0.005)

	requestAnimationFrame( animate );
        camera.updateProjectionMatrix();
	renderer.render( scene, camera );
  scene.remove(line)
   
}


animate();

var image = document.querySelector("div2")
let bool = true;
image.addEventListener("mousedown",(event) => {
  if (bool == true) {
    bool = false
  image.className = "p2"
    image.style.left = "10%"
  var text1 = document.querySelector("p")
    text1.style = "position: absolute; top:265% ; width:40% ; left : 30%"
text1.textContent = "This is the javascript code that we used."
    var text2 = document.querySelector("p2")
     text2.style = "position: absolute; top:310% ; width 60% ; left : 0%"
  text2.textContent = "We used if statements to act like binary search in this project. We repeated if statements like the photo above. We also used booleans to determine if the person answered yes or no, to decide which question to ask next."
    var text3 = document.querySelector("p3")
    text3.style = "position: absolute; top:340% ; width:100%"
    text3.textContent = "We used collaborative programming during this project. It is when a person is writing and the other is checking the code and telling steps. This used a binary search method by cutting the amount of teams left in half until we could guess the team accurately."
  AOS.init()
    
  } else {
    bool = true
     image.style.left = "22.5%"
      image.className = "p1"
      var text1 = document.querySelector("p")
     text1.style = "position: absolute; top:300% ; width:20% ; "
    text1.textContent = "These are the images of the teams"
        var text2 = document.querySelector("p2")
     text2.style = "position: absolute; top:330% ; width:20% ;"
      text2.textContent = "Click image to show code"
    var text3 = document.querySelector("p3")
    text3.style = "position: absolute; top:370% ; width:100%"
    text3.textContent = "This is the prompt box, which is where the player interacts with the website."
      AOS.init()
  }

})
// Our stylesheet.
import './style.css'

/*
// We can import raw code fragments for samples, like this:
import fragment from './code-fragments/fragment.js?raw'
document.querySelector('#fragment').textContent = fragment;

import importExample from './code-fragments/importExample.sh?raw'
document.querySelector('#importExample').textContent = importExample;
*/
// A code highlighter
import hljs from 'highlight.js'
// You can check the folder for other themes!
import 'highlight.js/styles/panda-syntax-dark.css'
// This next line of code automatically finds
// code blocks in your HTML (in <pre><code></code>
// </pre>) and makes them look pretty!
hljs.highlightAll();

// This is a pretty good start for JavaScript: we will add more as needed!
/*setTimeout(
  ()=>document.body.style.visibility = 'visible',
  200
  );
  */