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