/*

Create a fully textured car with pbr material and transparent glasses with functioning car lights.

Usage:
createCar(scene)

Note: Babylonjs physics are expected to be enabled.

Parameter:
scene = BABYLON.Scene()

Example:
If you want to create the car,
var car = createCar(scene)

If you want to access the car's tires,
carWheels[0] = Top left tire
carWheels[1] = Top right tire
carWheels[2] = Bottom left tire
carWheels[3] = Bottom left tire

If you want to access the car's lights,
carLights[0][0] = Left front light
carLights[0][1] = Left wing mirror light
carLights[0][2] = Left back light
carLights[1][0] = Right front light
carLights[1][1] = Right wing mirror light
carLights[1][2] = Right back light

If you want to rotate the car's steering wheel,
carSteeringWheel.rotation.x += 30

If you want to turn on/off the car's blinker light (calling it again will reverse its effect),
blinkLeft()
blinkRight()

If you want to turn on the car's brake light,
brakeLight(true)

If you want to turn off the car's brake light,
brakeLight(false)

If you want to get the state of the car's blinker light (currently turned on or off),
if (left_indicator_turned_on) {}
if (right_indicator_turned_on) {}

*/

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
    carBody.physicsImpostor = new BABYLON.PhysicsImpostor(carBody, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 1000, friction: 0.4, restitution: 0.8}, scene);

    //Import car model and attach it to car body
    importCarModel(scene, carBody)

    return carBody
}

/*****************************Import Car Model********************************************/

var carWheels = []
var carLights = [[], []]
var carLightStartMaterial;
var carSteeringWheel;
var carMeshes;

function importCarModel(scene, car, shadowGenerator) {

    new BABYLON.SceneLoader.ImportMesh(null, "assets/Vehicle/Volkswagen Touareg 2/model/", "Touareg.obj", scene, (meshes) => {
        carMeshes = meshes
        meshes.forEach((mesh, index) => {
            mesh.parent = car
            mesh.position = new BABYLON.Vector3(-2, 0, 0)
            mesh.scaling = new BABYLON.Vector3(0.0035, 0.0035, 0.0035);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)

            // shadowGenerator.addShadowCaster(mesh);
    
            var wheelIndex = [562,570,573,542,553,594,579,584,592,603,608,610,596,600,598,606,604,602,564,568,566,572,576,574,586,590,580,578,582,588,550,558,548,560,554,546,556,544,552]
            wheelIndex.forEach(i => {
                if (i == index) {
                    mesh.dispose()
                }
            })
    
            var leftLightIndex = [474, 506, 231]
            leftLightIndex.forEach(i => {
                if (i == index) {
                    var mat = new BABYLON.StandardMaterial('mat', scene);
                    mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/GLBK11.jpg");
                    mat.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
                    mat.backFaceCulling = false
                    mesh.material = mat;
                    carLightStartMaterial = mat
                    carLights[0].push(mesh)
                }
            })
    
            var rightLightIndex = [462, 496, 215]
            rightLightIndex.forEach(i => {
                if (i == index) {
                    var mat = new BABYLON.StandardMaterial('mat', scene);
                    mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/GLBK11.jpg");
                    mat.diffuseColor = new BABYLON.Color3(0.6, 0.6, 0.6);
                    mat.backFaceCulling = false
                    mesh.material = mat;
                    carLights[1].push(mesh)
                }
            })
    
            if (index == 13 || index == 32 || index == 239) {
                var pbr = new BABYLON.PBRMaterial("pbr", scene);
                mesh.material = pbr;
    
                pbr.metallic = 0.0;
                pbr.roughness = 0;   
                pbr.albedoTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/AS2_carpaint_metallic.jpg");
                pbr.backFaceCulling = false
            }
    
            if (index == 446 || index == 24) {
                var glass = new BABYLON.PBRMaterial("glass", scene);
                glass.alpha = 0.5;
                glass.reflectivityColor = new BABYLON.Color3(0.2, 0.2, 0.2);
                glass.albedoColor = new BABYLON.Color3(0.95, 0.95, 0.95);
                glass.backFaceCulling = false
                mesh.material = glass;
            }
    
            var rightLightIndex = [434, 536, 538, 540]
            rightLightIndex.forEach(i => {
                if (i == index) {
                    var mat = new BABYLON.StandardMaterial('mat', scene);
                    mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/AS2_leather_06.jpg");
                    mat.diffuseColor = new BABYLON.Color3(1, 0.8, 0);
                    mesh.material = mat;
                }
            })
    
            if (index == 109) {
                var mat = new BABYLON.StandardMaterial('mat', scene);
                mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/Metals.Ornamental Metals.Plate.Mesh.cutout.jpg");
                mat.diffuseColor = new BABYLON.Color3(0.3, 0.3, 0.3);
                mesh.material = mat;
            }
    
            if (index == 420) {
                mesh.dispose()
            }
    
            if (index == 438) {
                var mat = new BABYLON.StandardMaterial('mat', scene);
                mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/SpeedWin.jpg");
                mat.diffuseTexture.wAng = Math.PI/2; 
                mesh.material = mat;
            }
    
            if (index == 440) {
                var mat = new BABYLON.StandardMaterial('mat', scene);
                mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/computer.jpg");
                mat.diffuseTexture.wAng = -Math.PI/2; 
                mat.diffuseTexture.vAng = Math.PI; 
                mesh.material = mat;
            }
    
            if (index == 293 || index == 36 || index == 68 || index == 263) {
                var mat = new BABYLON.StandardMaterial('mat', scene);
                mat.diffuseTexture = new BABYLON.Texture("assets/Vehicle/Volkswagen Touareg 2/textures/218411094_tp.jpg");
                mat.diffuseTexture.vAng = Math.PI; 
                mesh.material = mat;
            }
            
    
            if (index == 350) {
                //Ensure working with new values for glass by computing and obtaining its worldMatrix
                mesh.computeWorldMatrix(true);
                var glass_worldMatrix = mesh.getWorldMatrix();
            
                //Obtain normals for plane and assign one of them as the normal
                var glass_vertexData = mesh.getVerticesData("normal");
                var glassNormal = new BABYLON.Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);	
                //Use worldMatrix to transform normal into its current value
                glassNormal = new BABYLON.Vector3.TransformNormal(glassNormal, glass_worldMatrix)
            
                //Create reflecting surface for mirror surface
                var reflector = new BABYLON.Plane.FromPositionAndNormal(mesh.position, glassNormal.scale(-1));
                
                //Create the mirror material
                var mirrorMaterial = new BABYLON.StandardMaterial("mirror", scene);
                mirrorMaterial.reflectionTexture = new BABYLON.MirrorTexture("mirror", 1024, scene, true);
                mirrorMaterial.reflectionTexture.mirrorPlane = reflector;
                mirrorMaterial.reflectionTexture.renderList = meshes;
                mirrorMaterial.reflectionTexture.level = 1;
            
                // mesh.material = mirrorMaterial;
            }
                
        });
    
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Vehicle/Volkswagen Touareg 2/model/", "Tire.obj", scene, (meshes) => {
                var carWheel = BABYLON.Mesh.MergeMeshes(meshes, true, true, undefined, false, true)
                carWheel.parent = car
                carWheel.position = new BABYLON.Vector3(-7, 1.2, 2.8)
                carWheel.scaling = new BABYLON.Vector3(0.0035, 0.0035, 0.0035);
                carWheel.rotation = new BABYLON.Vector3(0, 0, 0)
                carWheels.push(carWheel)
                
                var carWheel2 = carWheel.createInstance()
                carWheel2.parent = car
                carWheel2.position = new BABYLON.Vector3(-7, 1.2, -2.94)
                carWheel2.rotation = new BABYLON.Vector3(0, Math.PI, 0)
                carWheels.push(carWheel2)
    
                var carWheel3 = carWheel.createInstance()
                carWheel3.parent = car
                carWheel3.position = new BABYLON.Vector3(3, 1.2, 2.8)
                carWheels.push(carWheel3)
    
                var carWheel4 = carWheel.createInstance()
                carWheel4.parent = car
                carWheel4.position = new BABYLON.Vector3(3, 1.2, -2.94)
                carWheel4.rotation = new BABYLON.Vector3(0, Math.PI, 0)
                carWheels.push(carWheel4)
            })
    
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Vehicle/Volkswagen Touareg 2/model/", "Steer.obj", scene, (meshes) => {
                meshes.forEach((mesh, index) => {
                    mesh.parent = car
                    mesh.position = new BABYLON.Vector3(-3, 3.5, 1.3)
                    mesh.scaling = new BABYLON.Vector3(0.0035, 0.0035, 0.0035);
                    mesh.rotation = new BABYLON.Vector3(-0.15, 0, 0)
                    carSteeringWheel = mesh
                })
            })
    
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Vehicle/Volkswagen Touareg 2/model/", "Stay still.obj", scene, (meshes) => {
                meshes.forEach((mesh, index) => {
                    mesh.parent = car
                    mesh.position = new BABYLON.Vector3(-3.1, 3.5, 1.3)
                    mesh.scaling = new BABYLON.Vector3(0.0035, 0.0035, 0.0035);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                })
            })
        });
}

/*****************************End Import Car Model********************************************/

var left_indicator_turned_on = false;
var left_indicator;
var right_indicator_turned_on = false;
var right_indicator;
var blinker_state = 0 // blinker state is on or off

function blink(num) { // called for blinking car light
    // reset material to prevent light getting stuck when stopping
    carLights.forEach((array, index) => {
        array.forEach((mesh, index) => {
            mesh.material = carLightStartMaterial
        })
    })
    if (blinker_state == 0) {
        carLights[num].forEach((mesh, index) => {
            mesh.material = new BABYLON.StandardMaterial('', scene)
            mesh.material.diffuseColor = BABYLON.Color3.Yellow()
            mesh.material.emissiveColor = BABYLON.Color3.Yellow()
        })
        blinker_state++
    }
    else {
        carLights[num].forEach((mesh, index) => {
            mesh.material = carLightStartMaterial
        })
        blinker_state = 0
    }
}

function blinkLeft() {
    right_indicator_turned_on = false
    clearInterval(right_indicator)
    if (!left_indicator_turned_on)
        left_indicator = setInterval(function () { blink(0); }, 500);
    else {
        clearInterval(left_indicator)
        carLights.forEach((array, index) => {
            array.forEach((mesh, index) => {
                mesh.material = carLightStartMaterial
            })
        })
    }
    left_indicator_turned_on = !left_indicator_turned_on
}

function blinkRight() {
    left_indicator_turned_on = false
    clearInterval(left_indicator)
    if (!right_indicator_turned_on)
        right_indicator = setInterval(function () { blink(1); }, 500);
    else {
        clearInterval(right_indicator)
        carLights.forEach((array, index) => {
            array.forEach((mesh, index) => {
                mesh.material = carLightStartMaterial
            })
        })
    }
    right_indicator_turned_on = !right_indicator_turned_on
}

function brakeLight(turn_on) {
    if (turn_on) {
        var mat = new BABYLON.StandardMaterial('', scene)
        mat.diffuseColor = BABYLON.Color3.Red()
        mat.emissiveColor = BABYLON.Color3.Red()
        carLights[1][0].material = carLights[0][0].material = mat
    }
    else {
        carLights[1][0].material = carLights[0][0].material = carLightStartMaterial
    }
}

/***************************End Car*********************************************/