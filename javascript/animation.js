/*

Feel free to use my animations but be warned that you must have the same map/scene as I do, otherwise it would not work.

Usage:
cutscene1Animation(frameRate)

Parameter:
frameRate = int

Example:
Cutscene 1,
var [camera_rotate, camera_position, car_move, fadeout] = cutscene1Animation(frameRate)

scene.beginDirectAnimation(camera3, [camera_position, camera_rotate], 0, 25 * frameRate, false);
scene.beginDirectAnimation(car, [car_move], 0, 25 * frameRate, false);
scene.beginDirectAnimation(dark_overlay, [fadeout], 0, 25 * frameRate, false);

*/

function winAnimation(frameRate) {
    var fadeout = new BABYLON.Animation("fadeout", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

    var fadeout_keys = []; 

    fadeout_keys.push({
        frame: 0,
        value: 0
    });

    fadeout_keys.push({
        frame: 0.5 * frameRate,
        value: 0.8
    });

    fadeout.setKeys(fadeout_keys);

    var blink = new BABYLON.Animation("blink", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

    var blink_keys = []; 

    blink_keys.push({
        frame: 0,
        value: 0
    });

    blink_keys.push({
        frame: 0.1 * frameRate,
        value: 1
    });

    blink_keys.push({
        frame: 0.2 * frameRate,
        value: 0
    });

    blink_keys.push({
        frame: 0.3 * frameRate,
        value: 1
    });

    blink.setKeys(blink_keys);

    return [fadeout, blink]
}

function cutscene1Animation(frameRate) {
    var camera_rotate = new BABYLON.Animation("camera_rotate", "rotation", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                        
    var camera_rotate_keys = []; 

    // scene 1 - street panoramic view
    camera_rotate_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(-9.8, -10, 0)
    });

    camera_rotate_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(-9.8, -10, 0)
    });

    // scene 2 - headlight showcase
    camera_rotate_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(0.25, 7.8, 0)
    });

    camera_rotate_keys.push({
        frame: 13 * frameRate, 
        value: new BABYLON.Vector3(0.25, 7.8, 0)
    });

    // scene 3 - drift
    camera_rotate_keys.push({
        frame: 13 * frameRate, 
        value: new BABYLON.Vector3(0.48, 8.5, 0)
    });

    camera_rotate_keys.push({
        frame: 16 * frameRate, 
        value: new BABYLON.Vector3(0.48, 8.5, 0)
    });

    camera_rotate_keys.push({
        frame: 19 * frameRate, 
        value: new BABYLON.Vector3(0.48, 11.6, 0)
    });

    camera_rotate.setKeys(camera_rotate_keys);
    
    var camera_position = new BABYLON.Animation("camera_position", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var camera_position_keys = []; 

    // scene 1 - street panoramic view
    camera_position_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(20, 20, -30)
    });

    camera_position_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(-80, 20, -30)
    });

    // scene 2 - headlight showcase
    camera_position_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(-108, 4, 4)
    });

    camera_position_keys.push({
        frame: 13 * frameRate,
        value: new BABYLON.Vector3(-108, 4, -1)
    });

    // scene 3 - drift
    camera_position_keys.push({
        frame: 13 * frameRate,
        value: new BABYLON.Vector3(-120, 16, 20)
    });

    camera_position_keys.push({
        frame: 16 * frameRate,
        value: new BABYLON.Vector3(-120, 12, 20)
    });

    camera_position.setKeys(camera_position_keys);

    // car animation

    var car_move = new BABYLON.Animation("car_move", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var car_move_keys = []; 

    car_move_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(0, 0, 0)
    });

    car_move_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(-89, -0.5, 0)
    });

    car_move_keys.push({
        frame: 8 * frameRate + 1,
        value: new BABYLON.Vector3(-89, -0.5, 0)
    });

    car_move.setKeys(car_move_keys);

    var fadeout = new BABYLON.Animation("fadeout", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var fadeout_keys = []; 

    fadeout_keys.push({
        frame: 0,
        value: 1
    });

    fadeout_keys.push({
        frame: 1 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 7 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 8 * frameRate,
        value: 1
    });

    fadeout_keys.push({
        frame: 9 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 12 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 13 * frameRate,
        value: 1
    });

    fadeout_keys.push({
        frame: 14 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 16 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 17 * frameRate,
        value: 1
    });

    fadeout.setKeys(fadeout_keys);

    return [camera_rotate, camera_position, car_move, fadeout]
}

function cutscene2Animation(frameRate) {
    var camera_rotate = new BABYLON.Animation("camera_rotate", "rotation", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                        
    var camera_rotate_keys = []; 

    // scene 1 - street panoramic view
    camera_rotate_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(0.1, -9.6, 0)
    });

    camera_rotate_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Vector3(0.1, -9.6, 0)
    });

    // scene 2 - headlight showcase
    camera_rotate_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Vector3(-0.1, -8.95, 0)
    });

    camera_rotate_keys.push({
        frame: 10 * frameRate,
        value: new BABYLON.Vector3(-0.1, -9.4, 0)
    });

    // scene 3
    camera_rotate_keys.push({
        frame: 10 * frameRate, 
        value: new BABYLON.Vector3(0.2, -9.45, 0)
    });

    camera_rotate_keys.push({
        frame: 15 * frameRate, 
        value: new BABYLON.Vector3(0.34, -9.45, 0)
    });

    camera_rotate.setKeys(camera_rotate_keys);
    
    var camera_position = new BABYLON.Animation("camera_position", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var camera_position_keys = []; 

    // scene 1 - street panoramic view
    camera_position_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(-150, 4, 100)
    });

    camera_position_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Vector3(-135, 4, 100)
    });

    // scene 2 - headlight showcase
    camera_position_keys.push({
        frame: 6 * frameRate,
        value: new BABYLON.Vector3(-123.6, 6.9, 47.6)
    });

    camera_position_keys.push({
        frame: 10 * frameRate,
        value: new BABYLON.Vector3(-126.4, 6.9, 47.6)
    });

    // scene 3
    camera_position_keys.push({
        frame: 10 * frameRate,
        value: new BABYLON.Vector3(-139.5, 8, 82)
    });

    camera_position_keys.push({
        frame: 15 * frameRate,
        value: new BABYLON.Vector3(-139.5, 22, 82)
    });

    camera_position.setKeys(camera_position_keys);

    // car animation

    var car_move = new BABYLON.Animation("car_move", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var car_move_keys = []; 

    car_move_keys.push({
        frame: 0,
        value: new BABYLON.Vector3(-140, 0, 120)
    });

    car_move_keys.push({
        frame: 4 * frameRate,
        value: new BABYLON.Vector3(-140, 0, 70)
    });

    car_move_keys.push({
        frame: 11 * frameRate,
        value: new BABYLON.Vector3(-140, 0, 70)
    });

    car_move_keys.push({
        frame: 16 * frameRate,
        value: new BABYLON.Vector3(-140, 0, -20)
    });

    car_move.setKeys(car_move_keys);

    var fadeout = new BABYLON.Animation("fadeout", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var fadeout_keys = []; 

    fadeout_keys.push({
        frame: 0,
        value: 1
    });

    fadeout_keys.push({
        frame: 1 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 5 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 6 * frameRate,
        value: 1
    });

    fadeout_keys.push({
        frame: 7 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 9 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 10 * frameRate,
        value: 1
    });

    fadeout_keys.push({
        frame: 11 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 14 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 15 * frameRate,
        value: 1
    });

    fadeout.setKeys(fadeout_keys);

    return [camera_rotate, camera_position, car_move, fadeout]
}

function cutscene3Animation(frameRate) {
    var camera_rotate = new BABYLON.Animation("camera_rotate", "rotation", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
                        
    var camera_rotate_keys = []; 

    // scene 1 - street panoramic view
    camera_rotate_keys.push({
        frame: 2,
        value: new BABYLON.Vector3(0.1, -2.2, 0)
    });

    camera_rotate_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(0.1, -0.9, 0)
    });




    // scene 2.0
    camera_rotate_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(0.5, -1.57, 0)
    });

    camera_rotate_keys.push({
        frame: 10 * frameRate,
        value: new BABYLON.Vector3(0.4, -1.57, 0)
    });




    // scene 2.1
    camera_rotate_keys.push({
        frame: 12 * frameRate, 
        value: new BABYLON.Vector3(-0.02, -1.57, 0)
    });

    camera_rotate_keys.push({
        frame: 13 * frameRate,
        value: new BABYLON.Vector3(-0.02, -0.75, 0)
    });

    camera_rotate_keys.push({
        frame: 15 * frameRate,
        value: new BABYLON.Vector3(0.1, -1.57, 0)
    });




    // scene 2.2
    camera_rotate_keys.push({
        frame: 17 * frameRate,
        value: new BABYLON.Vector3(0.34, -1.57, 0)
    });

    camera_rotate_keys.push({
        frame: 18 * frameRate,
        value: new BABYLON.Vector3(-0.04, 0, 0)
    });

    camera_rotate_keys.push({
        frame: 19 * frameRate,
        value: new BABYLON.Vector3(-0.01, 1.57, 0)
    });




    camera_rotate.setKeys(camera_rotate_keys);
    
    var camera_position = new BABYLON.Animation("camera_position", "position", frameRate, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var camera_position_keys = []; 

    // scene 1 - street panoramic view
    camera_position_keys.push({
        frame: 2,
        value: new BABYLON.Vector3(98.3, 27.2, 30.3)
    });

    camera_position_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(107.9, 26, -180)
    });




    // scene 2.0 - turun
    camera_position_keys.push({
        frame: 8 * frameRate,
        value: new BABYLON.Vector3(117, 70, -70)
    });

    camera_position_keys.push({
        frame: 10 * frameRate,
        value: new BABYLON.Vector3(46, 10, -70)
    });




    // scene 2.1 - masuk
    camera_position_keys.push({
        frame: 12 * frameRate,
        value: new BABYLON.Vector3(2.4, 3.65, -70)
    });

    camera_position_keys.push({
        frame: 13 * frameRate,
        value: new BABYLON.Vector3(2.4, 3.65, -70)
    });

    camera_position_keys.push({ // menuju turun
        frame: 15 * frameRate,
        value: new BABYLON.Vector3(-6, 7.5, -38.5)
    });




    // scene 2.2 - turun
    camera_position_keys.push({
        frame: 17 * frameRate,
        value: new BABYLON.Vector3(-64, -1, -38.5)
    });

    camera_position_keys.push({ // kanan
        frame: 18 * frameRate,
        value: new BABYLON.Vector3(-90.3, -6.4, -23.2)
    });

    camera_position_keys.push({ // kanan
        frame: 19 * frameRate,
        value: new BABYLON.Vector3(-90.3, -6.4, -19)
    });

    camera_position_keys.push({ // stay
        frame: 20 * frameRate,
        value: new BABYLON.Vector3(-90.3, -6.4, -19)
    });

    camera_position_keys.push({ // trigger
        frame: 21 * frameRate,
        value: new BABYLON.Vector3(-100, -6.4, -19)
    });




    camera_position.setKeys(camera_position_keys);

    var fadeout = new BABYLON.Animation("fadeout", "alpha", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
    
    var fadeout_keys = []; 

    fadeout_keys.push({
        frame: 0,
        value: 1
    });

    fadeout_keys.push({
        frame: 1 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 7 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 8 * frameRate,
        value: 1
    });

    fadeout_keys.push({
        frame: 9 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 19 * frameRate,
        value: 0
    });

    fadeout_keys.push({
        frame: 20 * frameRate,
        value: 1
    });

    fadeout.setKeys(fadeout_keys);

    return [camera_rotate, camera_position, fadeout]
}