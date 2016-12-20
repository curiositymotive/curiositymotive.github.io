var time;

var camPosition = {x:115.53,y:8.56,z:58.7};
var messagePosition = {x:49.11,y:-98.24,z:-72.54};
var snowmanRotation = {x:0, y:0, z:0};
var snowmanOpacity = {opacity:1};
var snowmanVisibility = true;
//var followPosition = {}
var lastCamPosition = {x:0, y:0, z:0};
var isDay = false;

var particleSystem;
var particleSystemHeight = 600.0;
var clock;
var started = false;
var muted = false;



AFRAME.registerComponent('snow-filled', {
  init: function () {
    var sceneEl = this.el;

    console.log(THREE);
	var numParticles = 30000,
      width = 600,
      height = particleSystemHeight,
      depth = 600,
      parameters = {
        color: 0xFFFFFF,
        height: particleSystemHeight,
        radiusX: 2.5,
        radiusZ: 2.5,
        size: 50,
        scale: 5.0,
        opacity: 0.7
      },
      systemGeometry = new THREE.Geometry(),
      systemMaterial = new THREE.ShaderMaterial({
        uniforms: {
          color:  { type: 'c', value: new THREE.Color( parameters.color ) },
          height: { type: 'f', value: parameters.height },
          elapsedTime: { type: 'f', value: 0 },
          radiusX: { type: 'f', value: parameters.radiusX },
          radiusZ: { type: 'f', value: parameters.radiusZ },
          size: { type: 'f', value: parameters.size },
          scale: { type: 'f', value: parameters.scale },
          opacity: { type: 'f', value: parameters.opacity }
        },
        vertexShader: document.getElementById( 'snow_vertex' ).textContent,
        fragmentShader: document.getElementById( 'snow_fragment' ).textContent,
        blending: THREE.AdditiveBlending,
        transparent: true
      });

      for( var i = 0; i < numParticles; i++ ) {
        var vertex = new THREE.Vector3(
            rand( width ),
            Math.random() * height,
            rand( depth )
          );

        systemGeometry.vertices.push( vertex );
      }

      particleSystem = new THREE.ParticleSystem( systemGeometry, systemMaterial );
      particleSystem.position.y = -height/2;
      particleSystem.position.x = 0;

      sceneEl.object3D.add( particleSystem );
  }
});

function rand( v ) {
  return (v * (Math.random() - 0.5));
}


$(document).ready(function(){

	clock = new THREE.Clock();
	isDay = true;

	animate();

	$(".btn-start").on("click",function(){
		startExperience();
	});

	$(".btn-mute").on("click", function(){
		if(muted) {
			$(".btn-mute").html("SOUND OFF");
			$("#walking")[0].muted = false;
			muted = false;
		} else {
			$(".btn-mute").html("SOUND ON");
			$("#walking")[0].muted = true;
			muted = true;
		}
	});

	$("#white_flash").fadeOut(2000);

	$("#snowman").attr("material", "src:#snowman-texture");
	$(".foliage").attr("material", "src:#foliage-texture");
	$(".house").attr("material", "src:#house-texture");
	$("#monument").attr("material", "src:#monument-texture");

});

var startExperience = function() {
	$("#start_ui").fadeOut(500);
	$(".a-enter-vr-button, .btn-mute").fadeIn();
	$("#walking")[0].play();

	$("#white_flash").fadeIn(300, function(){

		started = true;

		$("#snowmancontainer")
		.attr("position","-0.49 5.01 0.19")
		.attr("rotation","90 180 5.94");

		TweenMax.to(camPosition, 150, {
			bezier:[
				{x:115.53,y:8.56,z:58.7},
				{x:100.29,y:1.89,z:87.65},
				{x:86.74,y:7.63,z:104.31},
				{x:60.51,y:4.45,z:109.92},
				{x:59.65,y:2.49,z:97.12},
				{x:68.34,y:0.9,z:85.45},
				{x:68.95,y:2.3,z:71.19},
				{x:58.54,y:0.52,z:57.78},
				{x:49.67,y:0.88,z:42.8},
				{x:37.2,y:5.32,z:9.34},
				{x:31.23,y:11.18 ,z:-27.71},
				{x:53.91,y:15.34,z:-42.33},
				{x:70.44,y:11.18,z:-38.73},
				{x:71.56,y:2.86,z:-27.05}
			],
			ease:Linear.easeNone,
		});

		TweenMax.fromTo(snowmanRotation, 5, {
			x:0,
			y:-10,
			z:0
		},{
			x:0,
			y:10,
			z:0,
			repeat: -1, /* Aka infinite amount of repeats */
	    	yoyo: true, /* Make it go back and forth */
	    	ease:Power1.easeInOut,
	    	onComplete:function(){
	    		
	    	}
		});
	}).delay(500).fadeOut();

	setTimeout(function(){
		TweenMax.to(messagePosition, 4, {
			x:49.11,
			y:-48.24,
			z:-72.54
		});
		TweenMax.to(snowmanOpacity, 2, {
			opacity:0,
			onComplete:function(){
				snowmanVisibility = false;
			}
		});
	}, 120000);


	var numTrees = 200;
	for(var i = 0; i < numTrees; i++) {
		var spacing = i/3;
		var $newTree;
		if(Math.random()>.5) {
			$newTree = $("#pineTree-master").clone();
		} else {
			$newTree = $("#decTree-master").clone();
		}

		$newTree.attr("position", toVec3String({
			x:(Math.random()*96-10),
			y:(Math.random()*.5),
			z:(Math.random()*200-80)
		})).attr("id", "pineTreeprog-"+i);
		$("#programmatic-tree-holder").append($newTree);
	}
	$(".foliage").attr("material", "src:#foliage-texture");

}

window.updateTime = function() {
	if(isDay) {
		$(".day").attr("visible", "true");
		$(".night").attr("visible", "false");
	} else {
		$(".day").attr("visible", "false");
		$(".night").attr("visible", "true");
	}
}


var animate = function(){
	window.requestAnimationFrame(animate);


	var now = new Date().getTime(),
    	dt = now - (time || now);
 
    time = now;

	var velocity = {};
	velocity.x = (camPosition.x - lastCamPosition.x);
	velocity.y = (camPosition.y - lastCamPosition.y);
	velocity.z = (camPosition.z - lastCamPosition.z);

	var rotationRad = Math.atan2(velocity.x, velocity.z);
	var rotationDeg = rotationRad*(180/Math.PI)+180;

	var rotation = {};
	rotation.x = 0;
	rotation.y = rotationDeg;
	rotation.z = 0;

	if(started) {
		$("#magic_carpet").attr("position", toVec3String(camPosition)).attr("rotation",toVec3String(rotation));
		$("#snowman").attr("rotation", toVec3String(snowmanRotation));
		$("#message").attr("position", toVec3String(messagePosition));
		if(snowmanVisibility) {
			$("#snowman").attr("material", "src:#snowman-texture;transparent:true;opacity:"+snowmanOpacity.opacity);
		} else {
			$("#snowman").attr("material", "src:#snowman-texture;visible:false;");
		}
	}


	lastCamPosition.x = camPosition.x;
	lastCamPosition.y = camPosition.y;
	lastCamPosition.z = camPosition.z;

	var elapsedTime = clock.getElapsedTime();
	if(particleSystem) {
		particleSystem.material.uniforms.elapsedTime.value = elapsedTime * 10;
	}

}

var toVec3String = function(vec3) {
	var vec3String = "";
	vec3String += vec3.x + " ";
	vec3String += vec3.y + " ";
	vec3String += vec3.z;
	return vec3String;
}