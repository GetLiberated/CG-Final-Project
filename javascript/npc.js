/*

Create a fully colored npc with animations ready to use.

Usage:
createNPC(npc, position, rotation)

Parameter:
npc = int
position = new BABYLON.Vector3(0, 0, 0)
rotation = new BABYLON.Vector3(0, 0, 0)

Example:
If you want to create male npc,
createNPC(1, new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0))

If you want to create female npc,
createNPC(3, new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0))

If you want to make npc move forward,
persons[0].position.x += 10

If you want to make npc change to idle animation,
personsAnimation[0][2].stop()
personsAnimation[0][1].play()

*/

var persons = [] // store all npc meshes here.
var personsAnimation = [] // store all npc animationGroup here.

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
        personsAnimation.push(animationGroups)

        /*
        animationGroups[0] = Dead animation 
        animationGroups[1] = Idle animation 
        animationGroups[2] = Walk animation 
        */
       
       // set walk animation as default when spawning npc
        animationGroups[0].stop()
        animationGroups[2].play(true)
        
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