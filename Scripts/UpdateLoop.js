// -----JS CODE-----
//@input Component.Text instruction
//@input SceneObject blob
//@input SceneObject blur
//@input SceneObject eye
//@input Component.Text scanResult



if(getTime() - global.lastTime > 10){
    print("Fuck")
        global.lastTime = getTime();

    script.instruction.text = "Tap to scan"
    global.tweenManager.startTween(script.blob, "blobHide");
    global.tweenManager.startTween(script.blur, "blurOut");
    script.scanResult.text = ""    
    global.isShowing = false;
    script.eye.enabled = true;
    
}