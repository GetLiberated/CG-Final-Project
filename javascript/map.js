/*****************************Map********************************************/

var mapMeshes;
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

    new BABYLON.SceneLoader.ImportMesh(null, "../assets/NPC/", "Man.glb", scene, (meshes, particleSystem, skeleton, animationGroups) => {               
        persons.push(meshes)
        personsAnimation.push(animationGroups[0])
        
        // Modify mesh properties
        meshes.forEach(mesh => {
            mesh.scaling = new BABYLON.Vector3(3, 3, 3);
            mesh.position = new BABYLON.Vector3(-70, 0, 14)
            mesh.rotation = new BABYLON.Vector3(0, Math.PI/2, 0)

            // mesh identifier
            // mesh.showBoundingBox = true;
            // mesh.actionManager = new BABYLON.ActionManager(scene);
            // mesh.actionManager.registerAction(
            //     new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, 
            //         function(event) {
            //             console.log(index);
            //             mesh.dispose()
            //         }
            //     )
            // )
        });

    })

    new BABYLON.SceneLoader.ImportMesh(null, "../assets/NPC/", "ManConstruction.glb", scene, (meshes, particleSystem, skeleton, animationGroups) => {               
        persons.push(meshes)
        personsAnimation.push(animationGroups[0])
        
        // Modify mesh properties
        meshes.forEach(mesh => {
            mesh.scaling = new BABYLON.Vector3(3, 3, 3);
            mesh.position = new BABYLON.Vector3(-10, 0, -10)
            mesh.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0)
        });

    })

    new BABYLON.SceneLoader.ImportMesh(null, "../assets/NPC/", "Woman.glb", scene, (meshes, particleSystem, skeleton, animationGroups) => {               
        persons.push(meshes)
        personsAnimation.push(animationGroups[0])
        
        // Modify mesh properties
        meshes.forEach(mesh => {
            mesh.scaling = new BABYLON.Vector3(3, 3, 3);
            mesh.position = new BABYLON.Vector3(-130, 0, 30)
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
        });

    })
    
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
function loadMap2(scene, car, fail, lose) {

    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "Basement Mall.obj", scene, (meshes) => {
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
    
    new BABYLON.SceneLoader.ImportMesh(null, "./assets/Environments/", "Basement Road.obj", scene, (meshes) => {
        meshes.forEach((mesh, index) => {
            mesh.position = new BABYLON.Vector3(0, 0, 0)
            mesh.scaling = new BABYLON.Vector3(3.2, 3.2, 3.2);
            mesh.rotation = new BABYLON.Vector3(0, 0, 0)
            // mesh.showBoundingBox = true;
            mesh.checkCollisions = true
            mesh.physicsImpostor = new BABYLON.PhysicsImpostor(mesh, BABYLON.PhysicsImpostor.BoxImpostor, {mass: 0 , friction: 0.8}, scene);
        });
    });
    
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
}


/*****************************End Map********************************************/ 
