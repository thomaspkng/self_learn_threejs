/* JS of threeJS for index.html */
import {
  Color,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,

} from 'three';

const container = document.querySelector('#scene-container');

const renderer = new WebGLRenderer( { antialias: true } );
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);

const scene = new Scene();
scene.background = new Color('#CCCCFF');

const fov = 28;
const aspect = container.clientWidth / container.clientHeight;
const nearPL = 0.1;
const farPL = 1000;
const camera = new PerspectiveCamera(fov, aspect, nearPL, farPL);
camera.position.z = 5;

const geoCube01 = new BoxGeometry(1,1,1);
const matCube01_fill = new MeshBasicMaterial( { color: 0x00ff00, } );
const matCube01_stroke = new MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframe_linewidth: 5 } );
const cube01 = new Mesh( geoCube01, matCube01_fill );
scene.add(cube01);

function animate() {
  cube01.rotation.x += 0.01;
  cube01.rotation.y += 0.01;

  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );
