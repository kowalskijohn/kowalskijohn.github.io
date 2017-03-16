//setting up a scene
var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;

//setting up camera and renderer
var camera = new THREE.PerspectiveCamera(70, aspect, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 34;

//setting up objects (geometry, material that mesh)
var geo = new THREE.TorusGeometry( 2, 1, 30,35);
var material = new THREE.MeshPhongMaterial({
  color:0xffffff,
  shininess:80
});
var sphere = new THREE.Mesh(geo, material);
sphere.rotation.x = -4.1;
sphere.rotation.y = -3.7;

//add light
light = new THREE.DirectionalLight( 0xffffff, 1 );
light.position.set(10,5,8);

//add stuff to scene
scene.add(sphere);
scene.add(light);

//add OrbitControls
var controls = new THREE.OrbitControls(camera);

//set up render function
function render (){
  requestAnimationFrame(render);
  controls.update();
  //sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.005;
  renderer.render(scene, camera);
};

$(document).ready(function(){
  render();
  $('body').fadeIn('fast',function(){
    $('div').fadeIn('slow');
  });
});
