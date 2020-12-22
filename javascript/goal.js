/*

Create goal like object with ui attached to it (optional)

Usage:
createGoal(position, gui, reuse_previous_gui)

Note: gui and reuse_previous_gui is optional and defaults to none.

Parameter:
position = new BABYLON.Vector3(0, 0, 0)
gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI")
reuse_previous_gui = [rect1, line, target, label]

Example:
If you want to create goal without UI,
var goal = createGoal(new BABYLON.Vector3(0, 0, 0))

If you want to create goal with UI,
var [goal, goalUI] = createGoal(new BABYLON.Vector3(0, 0, 0), gui)

If you want to create goal and want to attach it to already existing goal UI instead of creating a new goal UI,
var goal = createGoal(new BABYLON.Vector3(0, 0, 0), null, goalUI)

*/

function createGoal(position, gui = null, reuse_previous_gui = null) {
    // create goal
    var goal = BABYLON.MeshBuilder.CreateCylinder("goal", { height: 20, diameter: 8 });
    goal.position = position;

    // create material for goal
    var mat = new BABYLON.StandardMaterial()
    goal.material = mat
    goal.material.diffuseColor = BABYLON.Color3.Yellow()
    // goal.material.emissiveColor = BABYLON.Color3.Yellow()
    goal.material.alpha = 0.7

    if (gui) {
        // create goal ui
        var rect1 = new BABYLON.GUI.Rectangle();
        rect1.width = "80px";
        rect1.height = "40px";
        rect1.cornerRadius = 20;
        rect1.color = "orange";
        rect1.thickness = 4;
        rect1.background = "orange";
        gui.addControl(rect1);
        rect1.linkOffsetY = -150;
    
        var label = new BABYLON.GUI.TextBlock();
        label.text = "Goal";
        label.color = "white"
        rect1.addControl(label);
    
        var target = new BABYLON.GUI.Ellipse();
        target.width = "30px";
        target.height = "30px";
        target.color = "orange";
        target.thickness = 4;
        target.background = "orange";
        gui.addControl(target);
    
        var line = new BABYLON.GUI.Line();
        line.lineWidth = 4;
        line.color = "orange";
        line.y2 = 10;
        line.linkOffsetY = -10;
        gui.addControl(line);
        line.connectedControl = rect1;
    
        // attach goal ui to goal
        rect1.linkWithMesh(goal);
        line.linkWithMesh(goal);
        target.linkWithMesh(goal);

        return [goal, [rect1, line, target, label]]
    }

    if (reuse_previous_gui) {
        // attach goal ui to goal
        reuse_previous_gui[0].linkWithMesh(goal);
        reuse_previous_gui[1].linkWithMesh(goal);
        reuse_previous_gui[2].linkWithMesh(goal);
    }

    return goal
}