/*

Create a well made fully colored map that differentiate the road with option for skybox and boundary.

Usage:
loadMap(map_type, set_boundary, load_skybox, scene, disabled)

Note: 
disabled is optional and defaults to false.
Babylonjs physics are expected to be enabled.

Parameter:
map_type = int
set_boundary = bool
load_skybox = bool
scene = BABYLON.Scene()
disabled = bool

Example:
If you want to load map 1 with boundary and skybox,
loadMap(1, true, true, scene)

If you want to load map 1 without boundary and skybox,
loadMap(1, false, false, scene)

If you want to load map 2 without boundary and skybox and disables it,
loadMap(2, false, false, scene, true)

If you want to access the map 1 environment's meshes,
mapMeshes.forEach(mesh => {
    console.log(mesh)
})

If you want to access the map 1 road's meshes,
roadMeshes.forEach(mesh => {
    console.log(mesh)
})

(Exclusive to map 1) If you want to access the traffic light's meshes,
trafficLightMeshes.forEach(mesh => {
    console.log(mesh)
})

(Exclusive to map 1) If you want to access the traffic light's light,
trafficLight[2] = Red light
trafficLight[1] = Yellow light
trafficLight[0] = Green light

*/

/*****************************Map********************************************/

var mapMeshes; // store all map 1 environment meshes here.
var roadMeshes; // store all map 1 road meshes here.

var mapMeshes2 = []; // store all map 2 environment meshes here.
var roadMeshes2; // store all map 2 road meshes here.

var trafficLightMeshes; // store traffic light meshes here.
var trafficLight = [] // store traffic light's red, yellow, and green light meshes here.

function loadMap(map_type, set_boundary, load_skybox, scene, disabled = false) {

    switch (map_type) {
        case 1:
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Environments/", "Environment.obj", scene, (meshes) => {
                mapMeshes = meshes
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(0, 0, 0)
                    mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                    mesh.freezeWorldMatrix();
                    
                    mesh.checkCollisions = true
                    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
                    if (disabled)
                        mesh.setEnabled(false)
                });
            });
            
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Environments/", "Road.obj", scene, (meshes) => {
                roadMeshes = meshes
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(0, 0, 0)
                    mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                    
                    mesh.checkCollisions = true
                    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0 , friction: 0.8}, scene);
                    // mesh.receiveShadows = true;
                    if (disabled)
                        mesh.setEnabled(false)
                });
            });
            
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Environments/Traffic Light/", "traffic light.obj", scene, (meshes) => {
                trafficLightMeshes = meshes
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(-127, 0, 40)
                    mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                    
                    mesh.checkCollisions = true
                    mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
                    if (disabled)
                        mesh.setEnabled(false)
        
                    if (index == 21 || index == 23 || index == 25) {
                        trafficLight.push(mesh)
                    }
                });
            });
            break

        case 2:
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Environments/", "MallBasement.obj", scene, (meshes) => {
                mapMeshes2.push(meshes)
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(0, 0, 0)
                    mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                    mesh.freezeWorldMatrix();
                    
                    mesh.checkCollisions = true
                    if (disabled)
                        mesh.setEnabled(false)
                });
            });
            
            new BABYLON.SceneLoader.ImportMesh(null, "assets/Environments/", "MallRoad.obj", scene, (meshes) => {
                mapMeshes2.push(meshes)
                meshes.forEach((mesh, index) => {
                    mesh.position = new BABYLON.Vector3(0, 0, 0)
                    mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
                    mesh.rotation = new BABYLON.Vector3(0, 0, 0)
                    
                    mesh.checkCollisions = true
                    if (disabled)
                        mesh.setEnabled(false)
                });
            });
        
            var basementFloor = BABYLON.MeshBuilder.CreatePlane("plane", {size: 320}, scene);
            basementFloor.rotation.x = Math.PI/2
            basementFloor.position.y = -12.6
            basementFloor.checkCollisions = true
            basementFloor.physicsImpostor = new BABYLON.PhysicsImpostor(basementFloor, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0 , friction: 0.8}, scene);
            if (disabled)
                basementFloor.setEnabled(false)
            roadMeshes2 = basementFloor
            var mat = new BABYLON.StandardMaterial("mat", scene);
            mat.diffuseColor = new BABYLON.Color3(0.1603774, 0.1603774, 0.1603774);
            basementFloor.material = mat
            break
    }
    
    // var boom = BABYLON.Mesh.CreateSphere()
    // var shader = boomShader()
    // boom.material = shader

    if (set_boundary) {
        /*****************************Boundary********************************************/ 
        
        var mat = new BABYLON.StandardMaterial()
        mat.diffuseColor = new BABYLON.Color3(0, 0, 0)
        mat.alpha = 0

        var boundary = BABYLON.Mesh.CreatePlane("", 384)
        boundary.rotation.y = -Math.PI/2
        boundary.position = new BABYLON.Vector3(-192, 0, 0)
        boundary.material = mat
        boundary.physicsImpostor = new BABYLON.PhysicsImpostor(boundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
        
        var leftBoundary = BABYLON.Mesh.CreatePlane("", 384)
        leftBoundary.rotation.y = Math.PI
        leftBoundary.position = new BABYLON.Vector3(0, 0, -230)
        leftBoundary.material = mat
        leftBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(leftBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    
        var rightBoundary = BABYLON.Mesh.CreatePlane("", 384)
        rightBoundary.position = new BABYLON.Vector3(0, 0, 230)
        rightBoundary.material = mat
        rightBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(rightBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    
        var backBoundary = BABYLON.Mesh.CreatePlane("", 384)
        backBoundary.rotation.y = Math.PI/2
        backBoundary.position = new BABYLON.Vector3(192, 0, 0)
        backBoundary.material = mat
        backBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(backBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
        
        /*****************************End Boundary********************************************/ 
    }
    
    
    // var box1 = BABYLON.Mesh.CreateBox("box1", 5, scene);
    // box1.scaling = new BABYLON.Vector3(3, 3, 3);
    // box1.rotation.x = Math.PI/3;
    // box1.rotation.y = -190;
    // box1.position.x -= 100;
    // box1.position.y -= 3;
    // box1.position.z += 3;
    // box1.physicsImpostor = new BABYLON.PhysicsImpostor(box1,BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.01, restitution: 0 }, scene);

    if (load_skybox) {
        /*****************************Skybox********************************************/ 
        
        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:500}, scene)
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene)
        skyboxMaterial.backFaceCulling = false
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("assets/Environments/Skybox/bluecloud", scene)
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
        
        skybox.infiniteDistance = true
        skyboxMaterial.disableLighting = true
        skybox.material = skyboxMaterial
        
        scene.fogMode = BABYLON.Scene.FOGMODE_EXP
        scene.fogDensity = 0.004
        scene.fogColor = new BABYLON.Color3(0.8, 0.8, 1)
        
        /*****************************End Skybox********************************************/
    }

}

/*****************************End Map********************************************/ 
