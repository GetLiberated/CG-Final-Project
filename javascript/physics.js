/*

Functions for manipulating babylonjs physics velocity.

Usage:
translate(mesh, direction, power);
rotate(mesh, direction, power);

Note: Babylonjs physics are expected to be enabled.

Parameter:
mesh = BABYLON.PhysicsImpostor
direction = new BABYLON.Vector3(0, 0, 0)
power = int/float

Example:
If you want to add forward force to mesh,
translate(mesh, new BABYLON.Vector3(-1, 0, 0), 1);

If you want to add left rotation force to mesh,
rotate(car, new BABYLON.Vector3(0, 1, 0), 1)

*/

/*****************************Physics********************************************/

function transformForce(mesh, vec) {
    var mymatrix = new BABYLON.Matrix();
    mesh.rotationQuaternion.toRotationMatrix(mymatrix);
    return BABYLON.Vector3.TransformNormal(vec, mymatrix);
};

var rotate = function(mesh, direction, power) {
    // console.log("angular y: " + mesh.physicsImpostor.getAngularVelocity().y);
    var maxRotation = 1;

    // limit left rotation
    if (mesh.physicsImpostor.getAngularVelocity().y < -maxRotation) 
        mesh.physicsImpostor.setAngularVelocity( 
            new BABYLON.Vector3(mesh.physicsImpostor.getAngularVelocity().x, -maxRotation, mesh.physicsImpostor.getAngularVelocity().z)
        );

    // limit right rotation
    if (mesh.physicsImpostor.getAngularVelocity().y > maxRotation) 
        mesh.physicsImpostor.setAngularVelocity( 
            new BABYLON.Vector3(mesh.physicsImpostor.getAngularVelocity().x, maxRotation, mesh.physicsImpostor.getAngularVelocity().z)
        );
            
    mesh.physicsImpostor.setAngularVelocity(
        mesh.physicsImpostor.getAngularVelocity().add(
            direction.scale(power)
        )
    );
}

var translate = function(mesh, direction, power) {
    // console.log("linear x: " + mesh.physicsImpostor.getLinearVelocity().x);
    // console.log("linear z: " + mesh.physicsImpostor.getLinearVelocity().z);
    var maxSpeed = 20;

    // limit forward velocity speed
    if (mesh.physicsImpostor.getLinearVelocity().x < -maxSpeed) 
        mesh.physicsImpostor.setLinearVelocity(
            new BABYLON.Vector3( -maxSpeed, mesh.physicsImpostor.getLinearVelocity().y, mesh.physicsImpostor.getLinearVelocity().z)
        );

    // limit backward velocity speed
    if (mesh.physicsImpostor.getLinearVelocity().x > maxSpeed) 
        mesh.physicsImpostor.setLinearVelocity(
            new BABYLON.Vector3( maxSpeed, mesh.physicsImpostor.getLinearVelocity().y, mesh.physicsImpostor.getLinearVelocity().z)
        );

    // limit z velocity to prevent slippery floor
    if (mesh.physicsImpostor.getLinearVelocity().z < -maxSpeed) 
        mesh.physicsImpostor.setLinearVelocity(
            new BABYLON.Vector3( mesh.physicsImpostor.getLinearVelocity().x, mesh.physicsImpostor.getLinearVelocity().y, -maxSpeed)
        );

    if (mesh.physicsImpostor.getLinearVelocity().z > maxSpeed) 
        mesh.physicsImpostor.setLinearVelocity(
            new BABYLON.Vector3( mesh.physicsImpostor.getLinearVelocity().x, mesh.physicsImpostor.getLinearVelocity().y, maxSpeed)
        );

    if (Math.abs(mesh.rotationQuaternion.y) > 0.45 || Math.abs(mesh.rotationQuaternion.y) < 0.55 ) {
        power = 1.2
    }

    mesh.physicsImpostor.setLinearVelocity(
        mesh.physicsImpostor.getLinearVelocity().add(
            transformForce(mesh, direction.scale(power))
        )
    );
}

/*****************************End Physics********************************************/