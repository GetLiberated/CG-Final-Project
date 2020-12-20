/*****************************Map********************************************/

var mapMeshes;
var roadMeshes;
var trafficLightMeshes;
var trafficLight = []
var persons = []
var personsAnimation = []
function loadMap(scene) {

    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "Environment.obj", scene, (meshes) => {
        mapMeshes = meshes
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(0, 0, 0)
            mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            mesh.checkCollisions = true
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
        });
    });
    
    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "Road.obj", scene, (meshes) => {
        roadMeshes = meshes
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(0, 0, 0)
            mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            mesh.checkCollisions = true
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0 , friction: 0.8}, scene);
            // mesh.receiveShadows = true;
        });
    });
    
    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/Traffic Light/", "traffic light.obj", scene, (meshes) => {
        trafficLightMeshes = meshes
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(-127, 0, 40)
            mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            mesh.checkCollisions = true
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);

            if (index == 21 || index == 23 || index == 25) {
                trafficLight.push(mesh)
            }
        });
    });
    
    // var boom = BABYLON.Mesh.CreateSphere()
    // var shader = boomShader()
    // boom.material = shader
    
    var boundary = BABYLON.Mesh.CreatePlane("", 384)
    boundary.rotation.y = -Math.PI/2
    boundary.position = new BABYLON.Vector3(-192, 0, 0)
    var mat = new BABYLON.StandardMaterial()
    mat.diffuseColor = new BABYLON.Color3(0, 0, 0)
    mat.alpha = 0
    boundary.material = mat
    boundary.physicsImpostor = new BABYLON.PhysicsImpostor(boundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    
    var leftBoundary = BABYLON.Mesh.CreatePlane("", 384)
    leftBoundary.rotation.y = Math.PI
    leftBoundary.position = new BABYLON.Vector3(0, 0, -230)
    var mat = new BABYLON.StandardMaterial()
    mat.diffuseColor = new BABYLON.Color3(0, 0, 0)
    mat.alpha = 0
    leftBoundary.material = mat
    leftBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(leftBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);

    var rightBoundary = BABYLON.Mesh.CreatePlane("", 384)
    rightBoundary.position = new BABYLON.Vector3(0, 0, 230)
    var mat = new BABYLON.StandardMaterial()
    mat.diffuseColor = new BABYLON.Color3(0, 0, 0)
    mat.alpha = 0
    rightBoundary.material = mat
    rightBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(rightBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);

    var backBoundary = BABYLON.Mesh.CreatePlane("", 384)
    backBoundary.rotation.y = Math.PI/2
    backBoundary.position = new BABYLON.Vector3(192, 0, 0)
    var mat = new BABYLON.StandardMaterial()
    mat.diffuseColor = new BABYLON.Color3(0, 0, 0)
    mat.alpha = 0
    backBoundary.material = mat
    backBoundary.physicsImpostor = new BABYLON.PhysicsImpostor(backBoundary, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0}, scene);
    
    // var box1 = BABYLON.Mesh.CreateBox("box1", 5, scene);
    // box1.scaling = new BABYLON.Vector3(3, 3, 3);
    // box1.rotation.x = Math.PI/3;
    // box1.rotation.y = -190;
    // box1.position.x -= 100;
    // box1.position.y -= 3;
    // box1.position.z += 3;
    // box1.physicsImpostor = new BABYLON.PhysicsImpostor(box1,BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, friction: 0.01, restitution: 0 }, scene);

    /*****************************Skybox********************************************/ 
    
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:500}, scene)
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./assets/Environments/Skybox/bluecloud", scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    
    skybox.infiniteDistance = true
    skyboxMaterial.disableLighting = true
    skybox.material = skyboxMaterial
    
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP
    scene.fogDensity = 0.004
    scene.fogColor = new BABYLON.Color3(0.8, 0.8, 1)
    
    /*****************************End Skybox********************************************/
}

var mapMeshes2;
var roadMeshes2;
function loadMap2(scene) {

    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "MallEnvironment.obj", scene, (meshes) => {
        mapMeshes2 = meshes
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(0, 0, 0)
            mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            // mesh.checkCollisions = true
            mesh.setEnabled(false)
        });
    });
    
    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "MallRoad.obj", scene, (meshes) => {
        roadMeshes2 = meshes
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(0, 0, 0)
            mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            // mesh.checkCollisions = true
            mesh.setEnabled(false)
        });
    });
}


/*****************************End Map********************************************/ 
