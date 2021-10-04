// -----JS CODE-----

//@input float speed = 1.0 {"widget": "slider", "min": 0, "max": 10.0, "step": 0.01}
//@input float range = 15.0 {"widget": "slider", "min": 0, "max": 1.0, "step": 0.01}
var newY = Math.sin(getTime()*2) * 5;



script.getSceneObject().getTransform().setWorldScale(new vec3(7, newY, 7));
