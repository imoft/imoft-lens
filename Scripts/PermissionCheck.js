// PermissionCheck.js
// Version: 0.0.1
// Event: On Awake
// Description: Promps feedback to check scan permissions

//@input SceneObject[] scanObjects
//@input SceneObject waitingScreen
//@input SceneObject tapText

function initialize() {
    scanAllowed(false);
    scan();
}
initialize();

function scanAllowed(b) {
    for (var i=0;i<script.scanObjects.length;i++) {
        script.scanObjects[i].enabled = b;
    }
    script.waitingScreen.enabled = !b;
    
}

function scan() {
    global.getScanResults("Objects", function callback(data) {
        if (data) {
            scanAllowed(true);
            script.tapText.enabled = true;
            
        } else {
            scan();
        }
    }, function failureCallback(data) {
        if (data.includes("decline permission")) {
            scanAllowed(false);
        }
        scan();
    });        

}