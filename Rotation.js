// -----JS CODE-----

//@input float speed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}
//@input float range = 10.0 {"widget": "slider", "min": 0, "max": 30.0, "step": 0.01}


//@input float rotSpeed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}
//@input float rotRange = 10.0 {"widget": "slider", "min": 0, "max": 360.0, "step": 0.01}
//@input Component.ScreenTransform screenTransform

//global.rotationFromEulerDeg(rotation [vec3]) : quat
// 	Converts a human-readable Euler rotation (as seen in the Inspector) to the quaternion rotation for a transform (for use in transform.setWorldRotation()).
global.radToDeg = function(radians){
	if(typeof radians === 'number'){
		return radians * 180/Math.PI;
	// assume vec3
	}else{
		var _x = radians.x * 180/Math.PI;
		var _y = radians.y * 180/Math.PI;
		var _z = radians.z * 180/Math.PI;
		return new vec3(_x, _y, _z);
	}
}
global.degToRad = function(degrees){
	if(typeof degrees === 'number'){
		return degrees * Math.PI/180;
	// assume vec3
	}else{
		var _x = degrees.x * Math.PI/180;
		var _y = degrees.y * Math.PI/180;
		var _z = degrees.z * Math.PI/180;
		return new vec3(_x, _y, _z);
	}
}





global.rotationFromEulerDeg = function(rotation){
	return quat.fromEulerVec( global.degToRad(rotation));
}

// Calculate the new height of the Scene Object and store it in newY.
var newY = Math.sin(getTime() * script.speed) * script.range;
var newX = Math.sin(getTime() * script.speed*0.5);

var newAngle = Math.cos(getTime() * script.rotSpeed) * script.rotRange;

// Set the new local position of the Scene Object to [0, newY, 0].
script.getSceneObject().getTransform().setLocalPosition(new vec3(0, newY, -100+ newY*20));
if(script.screenTransform){
    script.screenTransform.position = new vec3(-11 + newX*2, newY*2.5, 0);

}
script.getSceneObject().getTransform().setLocalRotation(global.rotationFromEulerDeg(new vec3(0, newAngle, 0)))