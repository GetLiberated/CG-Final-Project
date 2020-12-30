/*

Create a fully colored vehicle with merged meshes ready to use.

Usage:
createVehicle(vehicle, position, rotation, disabled)

Note: disabled is optional and defaults to false.

Parameter:
vehicle = int
position = BABYLON.Vector3()
rotation = BABYLON.Vector3()
scale = BABYLON.Vector3()
disabled = bool

Example:
If you want to create grey car,
createVehicle(1, new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0))

If you want to create taxi,
createVehicle(3, new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0), new BABYLON.Vector3(0, 0, 0))

If you want to make vehicle move forward,
vehicles[0].position.x += 10

*/

var vehicles = [] // store all vehicle instances here.

function createVehicle(vehicle, position, rotation, scale, disabled = false) {
    new BABYLON.SceneLoader.ImportMesh(null, "assets/Vehicle/", `Car${vehicle}.obj`, scene, (meshes) => {
        
        // Merge meshes
        var mesh = BABYLON.Mesh.MergeMeshes(meshes, true, true, null, false, true);
        mesh.position = position
        mesh.rotation = rotation
        mesh.scaling = scale;
        mesh.checkCollisions = true
        if (disabled)
            mesh.setEnabled(false)
        vehicles.push(mesh)

    })
}