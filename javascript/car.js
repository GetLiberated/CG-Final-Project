/***************************Car*********************************************/
                    
var createCar = (scene) => {
    //Car Body Material 
    var bodyMaterial = new BABYLON.StandardMaterial("body_mat", scene);
    bodyMaterial.diffuseColor = new BABYLON.Color3(1.0, 0.25, 0.25);
    bodyMaterial.backFaceCulling = false;
    bodyMaterial.alpha = 0

    //Array of points for trapezium side of car.
    var side = [new BABYLON.Vector3(-6.5, 1.5, -2),
                new BABYLON.Vector3(2.5, 1.5, -2),
                new BABYLON.Vector3(3.5, 0.5, -2),
                new BABYLON.Vector3(-9.5, 0.5, -2)				
    ];
    
    side.push(side[0]);	//close trapezium
    
    //Array of points for the extrusion path
    var extrudePath = [new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 4)];
    
    //Create body and apply material
    var carBody = BABYLON.MeshBuilder.ExtrudeShape("body", {shape: side, path: extrudePath, cap : BABYLON.Mesh.CAP_ALL}, scene);
    carBody.material = bodyMaterial;
    carBody.physicsImpostor = new BABYLON.PhysicsImpostor(carBody, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1, friction: 0.4, restitution: 0.8}, scene);

    return carBody
}

/***************************End Car*********************************************/