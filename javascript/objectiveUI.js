/*

Create objective ui on top left screen with task or to do list

Usage:
createObjectiveUI(gui, {width, height}, number_of_task)

Parameter:
gui = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI")
width = string/int
height = string/int
number_of_task = int

Example:
If you want to create objective UI with 1 task or to do list,
var [rect, objective_text, task_texts] = createObjectiveUI(gui, {width: "10px", height: "10px"}, 1)
task_texts[0].text = "This is task 1";

*/

function createObjectiveUI(gui, {width, height}, number_of_task) {
    // rectangle background
    var rect = new BABYLON.GUI.Rectangle();
    rect.width = "440px";
    rect.height = "150px";
    rect.cornerRadius = 20;
    rect.background = "black";
    rect.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    rect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    rect.paddingTop = "10px"
    rect.paddingLeft = "10px"
    rect.alpha = 0.6
    gui.addControl(rect);

    // objective title
    var objective_text = new BABYLON.GUI.TextBlock();
    objective_text.text = "Objective";
    objective_text.color = "white";
    objective_text.fontSize = 36;
    objective_text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
    objective_text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
    objective_text.paddingTop = "16px"
    objective_text.paddingLeft = "20px"
    gui.addControl(objective_text);

    var task_texts = []
    var top = 80

    for (let i = 0; i < number_of_task; i++) {
        // task text
        var task_text = new BABYLON.GUI.TextBlock();
        task_text.color = "white";
        task_text.fontSize = 24;
        task_text.textHorizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
        task_text.textVerticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
        task_text.top = top
        task_text.left = 20
        gui.addControl(task_text);
        task_texts.push(task_text)
        top += 30
    }

    return [rect, objective_text, task_texts]
}