function createNPC(npc, position, rotation) {
    model_name = ""
    switch (npc) {
        case 1:
            model_name = "Man.glb"
            break
        case 2:
            model_name = "ManConstruction.glb"
            break
        case 3:
            model_name = "Woman.glb"
            break
    }
    new BABYLON.SceneLoader.ImportMesh(null, "../assets/NPC/", model_name, scene, (meshes, particleSystem, skeleton, animationGroups) => {               
        persons.push(meshes)
        personsAnimation.push(animationGroups[0])
        
        // Modify mesh properties
        meshes.forEach(mesh => {
            mesh.scaling = new BABYLON.Vector3(3, 3, 3);
            mesh.position = position
            mesh.rotation = rotation
        });

    })
}

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