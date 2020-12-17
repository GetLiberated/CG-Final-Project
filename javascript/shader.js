function createShader() {
    var nodeMaterial = new BABYLON.NodeMaterial("node");

    // InputBlock
    var position = new BABYLON.InputBlock("position");
    position.setAsAttribute("position");
    
    // AddBlock
    var Add = new BABYLON.AddBlock("Add");
    Add.visibleInInspector = false;
     Add.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale = new BABYLON.ScaleBlock("Scale");
    Scale.visibleInInspector = false;
     Scale.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply = new BABYLON.MultiplyBlock("Multiply");
    Multiply.visibleInInspector = false;
     Multiply.visibleOnFrame = false;
    
    // InputBlock
    var normal = new BABYLON.InputBlock("normal");
    normal.setAsAttribute("normal");
    
    // RemapBlock
    var Remap = new BABYLON.RemapBlock("Remap");
    Remap.sourceRange = new BABYLON.Vector2(0, 0.66);
    Remap.targetRange = new BABYLON.Vector2(0, 1);
    
    // VectorMergerBlock
    var VectorMerger = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger.visibleInInspector = false;
     VectorMerger.visibleOnFrame = false;
    
    // AddBlock
    var Add1 = new BABYLON.AddBlock("Add");
    Add1.visibleInInspector = false;
     Add1.visibleOnFrame = false;
    
    // AddBlock
    var Add2 = new BABYLON.AddBlock("Add");
    Add2.visibleInInspector = false;
     Add2.visibleOnFrame = false;
    
    // AddBlock
    var Add3 = new BABYLON.AddBlock("Add");
    Add3.visibleInInspector = false;
     Add3.visibleOnFrame = false;
    
    // AddBlock
    var Add4 = new BABYLON.AddBlock("Add");
    Add4.visibleInInspector = false;
     Add4.visibleOnFrame = false;
    
    // AddBlock
    var Add5 = new BABYLON.AddBlock("Add");
    Add5.visibleInInspector = false;
     Add5.visibleOnFrame = false;
    
    // AddBlock
    var Add6 = new BABYLON.AddBlock("Add");
    Add6.visibleInInspector = false;
     Add6.visibleOnFrame = false;
    
    // AddBlock
    var Add7 = new BABYLON.AddBlock("Add");
    Add7.visibleInInspector = false;
     Add7.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply1 = new BABYLON.MultiplyBlock("Multiply");
    Multiply1.visibleInInspector = false;
     Multiply1.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs = new BABYLON.TrigonometryBlock("Abs");
    Abs.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD.visibleInInspector = false;
     SimplexPerlinD.visibleOnFrame = false;
    
    // RemapBlock
    var Remap1 = new BABYLON.RemapBlock("Remap");
    Remap1.sourceRange = new BABYLON.Vector2(0, 1);
    Remap1.targetRange = new BABYLON.Vector2(0, 1);
    
    // VectorMergerBlock
    var VectorMerger1 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger1.visibleInInspector = false;
     VectorMerger1.visibleOnFrame = false;
    
    // AddBlock
    var Add8 = new BABYLON.AddBlock("Add");
    Add8.visibleInInspector = false;
     Add8.visibleOnFrame = false;
    
    // VectorSplitterBlock
    var VectorSplitter = new BABYLON.VectorSplitterBlock("VectorSplitter");
    VectorSplitter.visibleInInspector = false;
     VectorSplitter.visibleOnFrame = false;
    
    // InputBlock
    var position1 = new BABYLON.InputBlock("position");
    position1.setAsAttribute("position");
    
    // AddBlock
    var Add9 = new BABYLON.AddBlock("Add");
    Add9.visibleInInspector = false;
     Add9.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale1 = new BABYLON.ScaleBlock("Scale");
    Scale1.visibleInInspector = false;
     Scale1.visibleOnFrame = false;
    
    // InputBlock
    var Time = new BABYLON.InputBlock("Time");
    Time.value = 0;
    Time.min = 0;
    Time.max = 0;
    Time.isBoolean = false;
    Time.matrixMode = 0;
    Time.animationType = BABYLON.AnimatedInputBlockTypes.Time;
    Time.isConstant = false;
    
    // InputBlock
    var InputBlock_31 = new BABYLON.InputBlock("");
    InputBlock_31.value = 0.87;
    InputBlock_31.min = 0;
    InputBlock_31.max = 1;
    InputBlock_31.isBoolean = false;
    InputBlock_31.matrixMode = 0;
    InputBlock_31.animationType = BABYLON.AnimatedInputBlockTypes.None;
    InputBlock_31.isConstant = false;
    
    // AddBlock
    var Add10 = new BABYLON.AddBlock("Add");
    Add10.visibleInInspector = false;
     Add10.visibleOnFrame = false;
    
    // RemapBlock
    var Remap2 = new BABYLON.RemapBlock("Remap");
    Remap2.sourceRange = new BABYLON.Vector2(0, 1);
    Remap2.targetRange = new BABYLON.Vector2(0, 1);
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD1 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD1.visibleInInspector = false;
     SimplexPerlinD1.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs1 = new BABYLON.TrigonometryBlock("Abs");
    Abs1.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply2 = new BABYLON.MultiplyBlock("Multiply");
    Multiply2.visibleInInspector = false;
     Multiply2.visibleOnFrame = false;
    
    // InputBlock
    var amp = new BABYLON.InputBlock("amp");
    amp.value = 0.48;
    amp.min = 0;
    amp.max = 1;
    amp.isBoolean = false;
    amp.matrixMode = 0;
    amp.animationType = BABYLON.AnimatedInputBlockTypes.None;
    amp.isConstant = false;
    
    // MultiplyBlock
    var Multiply3 = new BABYLON.MultiplyBlock("Multiply");
    Multiply3.visibleInInspector = false;
     Multiply3.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply4 = new BABYLON.MultiplyBlock("Multiply");
    Multiply4.visibleInInspector = false;
     Multiply4.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs2 = new BABYLON.TrigonometryBlock("Abs");
    Abs2.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD2 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD2.visibleInInspector = false;
     SimplexPerlinD2.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale2 = new BABYLON.ScaleBlock("Scale");
    Scale2.visibleInInspector = false;
     Scale2.visibleOnFrame = false;
    
    // InputBlock
    var Structure = new BABYLON.InputBlock("Structure");
    Structure.value = 2;
    Structure.min = 0;
    Structure.max = 2;
    Structure.isBoolean = false;
    Structure.matrixMode = 0;
    Structure.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Structure.isConstant = false;
    
    // ScaleBlock
    var Scale3 = new BABYLON.ScaleBlock("Scale");
    Scale3.visibleInInspector = false;
     Scale3.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD3 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD3.visibleInInspector = false;
     SimplexPerlinD3.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs3 = new BABYLON.TrigonometryBlock("Abs");
    Abs3.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply5 = new BABYLON.MultiplyBlock("Multiply");
    Multiply5.visibleInInspector = false;
     Multiply5.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply6 = new BABYLON.MultiplyBlock("Multiply");
    Multiply6.visibleInInspector = false;
     Multiply6.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply7 = new BABYLON.MultiplyBlock("Multiply");
    Multiply7.visibleInInspector = false;
     Multiply7.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply8 = new BABYLON.MultiplyBlock("Multiply");
    Multiply8.visibleInInspector = false;
     Multiply8.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs4 = new BABYLON.TrigonometryBlock("Abs");
    Abs4.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD4 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD4.visibleInInspector = false;
     SimplexPerlinD4.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale4 = new BABYLON.ScaleBlock("Scale");
    Scale4.visibleInInspector = false;
     Scale4.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale5 = new BABYLON.ScaleBlock("Scale");
    Scale5.visibleInInspector = false;
     Scale5.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD5 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD5.visibleInInspector = false;
     SimplexPerlinD5.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs5 = new BABYLON.TrigonometryBlock("Abs");
    Abs5.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply9 = new BABYLON.MultiplyBlock("Multiply");
    Multiply9.visibleInInspector = false;
     Multiply9.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply10 = new BABYLON.MultiplyBlock("Multiply");
    Multiply10.visibleInInspector = false;
     Multiply10.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply11 = new BABYLON.MultiplyBlock("Multiply");
    Multiply11.visibleInInspector = false;
     Multiply11.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply12 = new BABYLON.MultiplyBlock("Multiply");
    Multiply12.visibleInInspector = false;
     Multiply12.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs6 = new BABYLON.TrigonometryBlock("Abs");
    Abs6.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD6 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD6.visibleInInspector = false;
     SimplexPerlinD6.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale6 = new BABYLON.ScaleBlock("Scale");
    Scale6.visibleInInspector = false;
     Scale6.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale7 = new BABYLON.ScaleBlock("Scale");
    Scale7.visibleInInspector = false;
     Scale7.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD7 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD7.visibleInInspector = false;
     SimplexPerlinD7.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs7 = new BABYLON.TrigonometryBlock("Abs");
    Abs7.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply13 = new BABYLON.MultiplyBlock("Multiply");
    Multiply13.visibleInInspector = false;
     Multiply13.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply14 = new BABYLON.MultiplyBlock("Multiply");
    Multiply14.visibleInInspector = false;
     Multiply14.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply15 = new BABYLON.MultiplyBlock("Multiply");
    Multiply15.visibleInInspector = false;
     Multiply15.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply16 = new BABYLON.MultiplyBlock("Multiply");
    Multiply16.visibleInInspector = false;
     Multiply16.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs8 = new BABYLON.TrigonometryBlock("Abs");
    Abs8.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD8 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD8.visibleInInspector = false;
     SimplexPerlinD8.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale8 = new BABYLON.ScaleBlock("Scale");
    Scale8.visibleInInspector = false;
     Scale8.visibleOnFrame = false;
    
    // AddBlock
    var Add11 = new BABYLON.AddBlock("Add");
    Add11.visibleInInspector = false;
     Add11.visibleOnFrame = false;
    
    // AddBlock
    var Add12 = new BABYLON.AddBlock("Add");
    Add12.visibleInInspector = false;
     Add12.visibleOnFrame = false;
    
    // AddBlock
    var Add13 = new BABYLON.AddBlock("Add");
    Add13.visibleInInspector = false;
     Add13.visibleOnFrame = false;
    
    // AddBlock
    var Add14 = new BABYLON.AddBlock("Add");
    Add14.visibleInInspector = false;
     Add14.visibleOnFrame = false;
    
    // AddBlock
    var Add15 = new BABYLON.AddBlock("Add");
    Add15.visibleInInspector = false;
     Add15.visibleOnFrame = false;
    
    // AddBlock
    var Add16 = new BABYLON.AddBlock("Add");
    Add16.visibleInInspector = false;
     Add16.visibleOnFrame = false;
    
    // AddBlock
    var Add17 = new BABYLON.AddBlock("Add");
    Add17.visibleInInspector = false;
     Add17.visibleOnFrame = false;
    
    // VectorMergerBlock
    var VectorMerger2 = new BABYLON.VectorMergerBlock("VectorMerger");
    VectorMerger2.visibleInInspector = false;
     VectorMerger2.visibleOnFrame = false;
    
    // RemapBlock
    var Remap3 = new BABYLON.RemapBlock("Remap");
    Remap3.sourceRange = new BABYLON.Vector2(0, 0.66);
    Remap3.targetRange = new BABYLON.Vector2(0, 1);
    
    // OneMinusBlock
    var Oneminus = new BABYLON.OneMinusBlock("One minus");
    Oneminus.visibleInInspector = false;
     Oneminus.visibleOnFrame = false;
    
    // GradientBlock
    var Gradient = new BABYLON.GradientBlock("Gradient");
    Gradient.colorSteps = [];
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.21, new BABYLON.Color3(0, 0, 0)));
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.47, new BABYLON.Color3(0.7333333333333333, 0, 0)));
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(0.75, new BABYLON.Color3(0.9921568627450981, 0.9686274509803922, 0)));
    Gradient.colorSteps.push(new BABYLON.GradientBlockColorStep(1, new BABYLON.Color3(1, 1, 1)));
    
    // FragmentOutputBlock
    var fragmentOutput = new BABYLON.FragmentOutputBlock("fragmentOutput");
    fragmentOutput.visibleInInspector = false;
     fragmentOutput.visibleOnFrame = false;
    
    // RemapBlock
    var Remap4 = new BABYLON.RemapBlock("Remap");
    Remap4.sourceRange = new BABYLON.Vector2(0, 1);
    Remap4.targetRange = new BABYLON.Vector2(0, 1);
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD9 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD9.visibleInInspector = false;
     SimplexPerlinD9.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply17 = new BABYLON.MultiplyBlock("Multiply");
    Multiply17.visibleInInspector = false;
     Multiply17.visibleOnFrame = false;
    
    // InputBlock
    var amp1 = new BABYLON.InputBlock("amp");
    amp1.value = 0.47;
    amp1.min = 0;
    amp1.max = 1;
    amp1.isBoolean = false;
    amp1.matrixMode = 0;
    amp1.animationType = BABYLON.AnimatedInputBlockTypes.None;
    amp1.isConstant = false;
    
    // MultiplyBlock
    var Multiply18 = new BABYLON.MultiplyBlock("Multiply");
    Multiply18.visibleInInspector = false;
     Multiply18.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply19 = new BABYLON.MultiplyBlock("Multiply");
    Multiply19.visibleInInspector = false;
     Multiply19.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD10 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD10.visibleInInspector = false;
     SimplexPerlinD10.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale9 = new BABYLON.ScaleBlock("Scale");
    Scale9.visibleInInspector = false;
     Scale9.visibleOnFrame = false;
    
    // InputBlock
    var Structure1 = new BABYLON.InputBlock("Structure");
    Structure1.value = 2;
    Structure1.min = 0;
    Structure1.max = 2;
    Structure1.isBoolean = false;
    Structure1.matrixMode = 0;
    Structure1.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Structure1.isConstant = false;
    
    // ScaleBlock
    var Scale10 = new BABYLON.ScaleBlock("Scale");
    Scale10.visibleInInspector = false;
     Scale10.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD11 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD11.visibleInInspector = false;
     SimplexPerlinD11.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply20 = new BABYLON.MultiplyBlock("Multiply");
    Multiply20.visibleInInspector = false;
     Multiply20.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply21 = new BABYLON.MultiplyBlock("Multiply");
    Multiply21.visibleInInspector = false;
     Multiply21.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply22 = new BABYLON.MultiplyBlock("Multiply");
    Multiply22.visibleInInspector = false;
     Multiply22.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply23 = new BABYLON.MultiplyBlock("Multiply");
    Multiply23.visibleInInspector = false;
     Multiply23.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD12 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD12.visibleInInspector = false;
     SimplexPerlinD12.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale11 = new BABYLON.ScaleBlock("Scale");
    Scale11.visibleInInspector = false;
     Scale11.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale12 = new BABYLON.ScaleBlock("Scale");
    Scale12.visibleInInspector = false;
     Scale12.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD13 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD13.visibleInInspector = false;
     SimplexPerlinD13.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply24 = new BABYLON.MultiplyBlock("Multiply");
    Multiply24.visibleInInspector = false;
     Multiply24.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply25 = new BABYLON.MultiplyBlock("Multiply");
    Multiply25.visibleInInspector = false;
     Multiply25.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply26 = new BABYLON.MultiplyBlock("Multiply");
    Multiply26.visibleInInspector = false;
     Multiply26.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply27 = new BABYLON.MultiplyBlock("Multiply");
    Multiply27.visibleInInspector = false;
     Multiply27.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD14 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD14.visibleInInspector = false;
     SimplexPerlinD14.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale13 = new BABYLON.ScaleBlock("Scale");
    Scale13.visibleInInspector = false;
     Scale13.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale14 = new BABYLON.ScaleBlock("Scale");
    Scale14.visibleInInspector = false;
     Scale14.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD15 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD15.visibleInInspector = false;
     SimplexPerlinD15.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply28 = new BABYLON.MultiplyBlock("Multiply");
    Multiply28.visibleInInspector = false;
     Multiply28.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply29 = new BABYLON.MultiplyBlock("Multiply");
    Multiply29.visibleInInspector = false;
     Multiply29.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply30 = new BABYLON.MultiplyBlock("Multiply");
    Multiply30.visibleInInspector = false;
     Multiply30.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply31 = new BABYLON.MultiplyBlock("Multiply");
    Multiply31.visibleInInspector = false;
     Multiply31.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD16 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD16.visibleInInspector = false;
     SimplexPerlinD16.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale15 = new BABYLON.ScaleBlock("Scale");
    Scale15.visibleInInspector = false;
     Scale15.visibleOnFrame = false;
    
    // AddBlock
    var Add18 = new BABYLON.AddBlock("Add");
    Add18.visibleInInspector = false;
     Add18.visibleOnFrame = false;
    
    // AddBlock
    var Add19 = new BABYLON.AddBlock("Add");
    Add19.visibleInInspector = false;
     Add19.visibleOnFrame = false;
    
    // AddBlock
    var Add20 = new BABYLON.AddBlock("Add");
    Add20.visibleInInspector = false;
     Add20.visibleOnFrame = false;
    
    // AddBlock
    var Add21 = new BABYLON.AddBlock("Add");
    Add21.visibleInInspector = false;
     Add21.visibleOnFrame = false;
    
    // AddBlock
    var Add22 = new BABYLON.AddBlock("Add");
    Add22.visibleInInspector = false;
     Add22.visibleOnFrame = false;
    
    // AddBlock
    var Add23 = new BABYLON.AddBlock("Add");
    Add23.visibleInInspector = false;
     Add23.visibleOnFrame = false;
    
    // AddBlock
    var Add24 = new BABYLON.AddBlock("Add");
    Add24.visibleInInspector = false;
     Add24.visibleOnFrame = false;
    
    // RemapBlock
    var Remap5 = new BABYLON.RemapBlock("Remap");
    Remap5.sourceRange = new BABYLON.Vector2(-0.5, 0.5);
    Remap5.targetRange = new BABYLON.Vector2(0, 1);
    
    // ScaleBlock
    var Scale16 = new BABYLON.ScaleBlock("Scale");
    Scale16.visibleInInspector = false;
     Scale16.visibleOnFrame = false;
    
    // InputBlock
    var Structure2 = new BABYLON.InputBlock("Structure");
    Structure2.value = 2;
    Structure2.min = 0;
    Structure2.max = 2;
    Structure2.isBoolean = false;
    Structure2.matrixMode = 0;
    Structure2.animationType = BABYLON.AnimatedInputBlockTypes.None;
    Structure2.isConstant = false;
    
    // ScaleBlock
    var Scale17 = new BABYLON.ScaleBlock("Scale");
    Scale17.visibleInInspector = false;
     Scale17.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD17 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD17.visibleInInspector = false;
     SimplexPerlinD17.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs9 = new BABYLON.TrigonometryBlock("Abs");
    Abs9.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply32 = new BABYLON.MultiplyBlock("Multiply");
    Multiply32.visibleInInspector = false;
     Multiply32.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply33 = new BABYLON.MultiplyBlock("Multiply");
    Multiply33.visibleInInspector = false;
     Multiply33.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply34 = new BABYLON.MultiplyBlock("Multiply");
    Multiply34.visibleInInspector = false;
     Multiply34.visibleOnFrame = false;
    
    // InputBlock
    var amp2 = new BABYLON.InputBlock("amp");
    amp2.value = 0.48;
    amp2.min = 0;
    amp2.max = 1;
    amp2.isBoolean = false;
    amp2.matrixMode = 0;
    amp2.animationType = BABYLON.AnimatedInputBlockTypes.None;
    amp2.isConstant = false;
    
    // MultiplyBlock
    var Multiply35 = new BABYLON.MultiplyBlock("Multiply");
    Multiply35.visibleInInspector = false;
     Multiply35.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply36 = new BABYLON.MultiplyBlock("Multiply");
    Multiply36.visibleInInspector = false;
     Multiply36.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs10 = new BABYLON.TrigonometryBlock("Abs");
    Abs10.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD18 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD18.visibleInInspector = false;
     SimplexPerlinD18.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale18 = new BABYLON.ScaleBlock("Scale");
    Scale18.visibleInInspector = false;
     Scale18.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale19 = new BABYLON.ScaleBlock("Scale");
    Scale19.visibleInInspector = false;
     Scale19.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD19 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD19.visibleInInspector = false;
     SimplexPerlinD19.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs11 = new BABYLON.TrigonometryBlock("Abs");
    Abs11.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply37 = new BABYLON.MultiplyBlock("Multiply");
    Multiply37.visibleInInspector = false;
     Multiply37.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply38 = new BABYLON.MultiplyBlock("Multiply");
    Multiply38.visibleInInspector = false;
     Multiply38.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply39 = new BABYLON.MultiplyBlock("Multiply");
    Multiply39.visibleInInspector = false;
     Multiply39.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply40 = new BABYLON.MultiplyBlock("Multiply");
    Multiply40.visibleInInspector = false;
     Multiply40.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs12 = new BABYLON.TrigonometryBlock("Abs");
    Abs12.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD20 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD20.visibleInInspector = false;
     SimplexPerlinD20.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale20 = new BABYLON.ScaleBlock("Scale");
    Scale20.visibleInInspector = false;
     Scale20.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale21 = new BABYLON.ScaleBlock("Scale");
    Scale21.visibleInInspector = false;
     Scale21.visibleOnFrame = false;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD21 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD21.visibleInInspector = false;
     SimplexPerlinD21.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs13 = new BABYLON.TrigonometryBlock("Abs");
    Abs13.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // MultiplyBlock
    var Multiply41 = new BABYLON.MultiplyBlock("Multiply");
    Multiply41.visibleInInspector = false;
     Multiply41.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply42 = new BABYLON.MultiplyBlock("Multiply");
    Multiply42.visibleInInspector = false;
     Multiply42.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply43 = new BABYLON.MultiplyBlock("Multiply");
    Multiply43.visibleInInspector = false;
     Multiply43.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply44 = new BABYLON.MultiplyBlock("Multiply");
    Multiply44.visibleInInspector = false;
     Multiply44.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs14 = new BABYLON.TrigonometryBlock("Abs");
    Abs14.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD22 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD22.visibleInInspector = false;
     SimplexPerlinD22.visibleOnFrame = false;
    
    // ScaleBlock
    var Scale22 = new BABYLON.ScaleBlock("Scale");
    Scale22.visibleInInspector = false;
     Scale22.visibleOnFrame = false;
    
    // MultiplyBlock
    var Multiply45 = new BABYLON.MultiplyBlock("Multiply");
    Multiply45.visibleInInspector = false;
     Multiply45.visibleOnFrame = false;
    
    // TrigonometryBlock
    var Abs15 = new BABYLON.TrigonometryBlock("Abs");
    Abs15.operation = BABYLON.TrigonometryBlockOperations.Abs;
    
    // SimplexPerlin3DBlock
    var SimplexPerlinD23 = new BABYLON.SimplexPerlin3DBlock("SimplexPerlin3D");
    SimplexPerlinD23.visibleInInspector = false;
     SimplexPerlinD23.visibleOnFrame = false;
    
    // InputBlock
    var InputBlock_71 = new BABYLON.InputBlock("");
    InputBlock_71.value = 0.42;
    InputBlock_71.min = 0;
    InputBlock_71.max = 1;
    InputBlock_71.isBoolean = false;
    InputBlock_71.matrixMode = 0;
    InputBlock_71.animationType = BABYLON.AnimatedInputBlockTypes.None;
    InputBlock_71.isConstant = false;
    
    // TransformBlock
    var worldPos = new BABYLON.TransformBlock("worldPos");
    worldPos.complementZ = 0;
    worldPos.complementW = 1;
    
    // InputBlock
    var world = new BABYLON.InputBlock("world");
    world.setAsSystemValue(BABYLON.NodeMaterialSystemValues.World);
    
    // TransformBlock
    var worldPosviewProjectionTransform = new BABYLON.TransformBlock("worldPos * viewProjectionTransform");
    worldPosviewProjectionTransform.complementZ = 0;
    worldPosviewProjectionTransform.complementW = 1;
    
    // InputBlock
    var viewProjection = new BABYLON.InputBlock("viewProjection");
    viewProjection.setAsSystemValue(BABYLON.NodeMaterialSystemValues.ViewProjection);
    
    // VertexOutputBlock
    var vertexOutput = new BABYLON.VertexOutputBlock("vertexOutput");
    vertexOutput.visibleInInspector = false;
     vertexOutput.visibleOnFrame = false;
    
    // Connections
    position.output.connectTo(Add.left);
    normal.output.connectTo(Multiply.left);
    position1.output.connectTo(VectorSplitter.xyzIn);
    VectorSplitter.x.connectTo(Add8.left);
    Time.output.connectTo(Scale1.input);
    InputBlock_31.output.connectTo(Scale1.factor);
    Scale1.output.connectTo(Add8.right);
    Add8.output.connectTo(VectorMerger1.x);
    VectorSplitter.y.connectTo(Add9.left);
    Scale1.output.connectTo(Add9.right);
    Add9.output.connectTo(VectorMerger1.y);
    VectorSplitter.z.connectTo(Add10.left);
    Scale1.output.connectTo(Add10.right);
    Add10.output.connectTo(VectorMerger1.z);
    VectorMerger1.xyz.connectTo(Remap1.input);
    Remap1.output.connectTo(SimplexPerlinD.seed);
    SimplexPerlinD.output.connectTo(Abs.input);
    Abs.output.connectTo(Multiply1.left);
    amp2.output.connectTo(Multiply1.right);
    Multiply1.output.connectTo(Add7.left);
    Remap1.output.connectTo(Scale16.input);
    Structure2.output.connectTo(Scale16.factor);
    Scale16.output.connectTo(SimplexPerlinD23.seed);
    SimplexPerlinD23.output.connectTo(Abs15.input);
    Abs15.output.connectTo(Multiply45.left);
    amp2.output.connectTo(Multiply34.left);
    amp2.output.connectTo(Multiply34.right);
    Multiply34.output.connectTo(Multiply45.right);
    Multiply45.output.connectTo(Add7.right);
    Add7.output.connectTo(Add6.left);
    Scale16.output.connectTo(Scale17.input);
    Structure2.output.connectTo(Scale17.factor);
    Scale17.output.connectTo(SimplexPerlinD17.seed);
    SimplexPerlinD17.output.connectTo(Abs9.input);
    Abs9.output.connectTo(Multiply32.left);
    Multiply34.output.connectTo(Multiply33.left);
    amp2.output.connectTo(Multiply33.right);
    Multiply33.output.connectTo(Multiply32.right);
    Multiply32.output.connectTo(Add6.right);
    Add6.output.connectTo(Add5.left);
    Scale17.output.connectTo(Scale18.input);
    Structure2.output.connectTo(Scale18.factor);
    Scale18.output.connectTo(SimplexPerlinD18.seed);
    SimplexPerlinD18.output.connectTo(Abs10.input);
    Abs10.output.connectTo(Multiply36.left);
    Multiply33.output.connectTo(Multiply35.left);
    amp2.output.connectTo(Multiply35.right);
    Multiply35.output.connectTo(Multiply36.right);
    Multiply36.output.connectTo(Add5.right);
    Add5.output.connectTo(Add4.left);
    Scale18.output.connectTo(Scale19.input);
    Structure2.output.connectTo(Scale19.factor);
    Scale19.output.connectTo(SimplexPerlinD19.seed);
    SimplexPerlinD19.output.connectTo(Abs11.input);
    Abs11.output.connectTo(Multiply37.left);
    Multiply35.output.connectTo(Multiply38.left);
    amp2.output.connectTo(Multiply38.right);
    Multiply38.output.connectTo(Multiply37.right);
    Multiply37.output.connectTo(Add4.right);
    Add4.output.connectTo(Add3.left);
    Scale19.output.connectTo(Scale20.input);
    Structure2.output.connectTo(Scale20.factor);
    Scale20.output.connectTo(SimplexPerlinD20.seed);
    SimplexPerlinD20.output.connectTo(Abs12.input);
    Abs12.output.connectTo(Multiply40.left);
    Multiply38.output.connectTo(Multiply39.left);
    amp2.output.connectTo(Multiply39.right);
    Multiply39.output.connectTo(Multiply40.right);
    Multiply40.output.connectTo(Add3.right);
    Add3.output.connectTo(Add2.left);
    Scale20.output.connectTo(Scale21.input);
    Structure2.output.connectTo(Scale21.factor);
    Scale21.output.connectTo(SimplexPerlinD21.seed);
    SimplexPerlinD21.output.connectTo(Abs13.input);
    Abs13.output.connectTo(Multiply41.left);
    Multiply39.output.connectTo(Multiply42.left);
    amp2.output.connectTo(Multiply42.right);
    Multiply42.output.connectTo(Multiply41.right);
    Multiply41.output.connectTo(Add2.right);
    Add2.output.connectTo(Add1.left);
    Scale21.output.connectTo(Scale22.input);
    Structure2.output.connectTo(Scale22.factor);
    Scale22.output.connectTo(SimplexPerlinD22.seed);
    SimplexPerlinD22.output.connectTo(Abs14.input);
    Abs14.output.connectTo(Multiply44.left);
    Multiply42.output.connectTo(Multiply43.left);
    amp2.output.connectTo(Multiply43.right);
    Multiply43.output.connectTo(Multiply44.right);
    Multiply44.output.connectTo(Add1.right);
    Add1.output.connectTo(VectorMerger.x);
    Add1.output.connectTo(VectorMerger.y);
    Add1.output.connectTo(VectorMerger.z);
    VectorMerger.xyz.connectTo(Remap.input);
    Remap.output.connectTo(Multiply.right);
    Multiply.output.connectTo(Scale.input);
    InputBlock_71.output.connectTo(Scale.factor);
    Scale.output.connectTo(Add.right);
    Add.output.connectTo(worldPos.vector);
    world.output.connectTo(worldPos.transform);
    worldPos.output.connectTo(worldPosviewProjectionTransform.vector);
    viewProjection.output.connectTo(worldPosviewProjectionTransform.transform);
    worldPosviewProjectionTransform.output.connectTo(vertexOutput.vector);
    VectorMerger1.xyz.connectTo(Remap2.input);
    Remap2.output.connectTo(SimplexPerlinD1.seed);
    SimplexPerlinD1.output.connectTo(Abs1.input);
    Abs1.output.connectTo(Multiply2.left);
    amp.output.connectTo(Multiply2.right);
    Multiply2.output.connectTo(Add17.left);
    Remap2.output.connectTo(Scale2.input);
    Structure.output.connectTo(Scale2.factor);
    Scale2.output.connectTo(SimplexPerlinD2.seed);
    SimplexPerlinD2.output.connectTo(Abs2.input);
    Abs2.output.connectTo(Multiply4.left);
    amp.output.connectTo(Multiply3.left);
    amp.output.connectTo(Multiply3.right);
    Multiply3.output.connectTo(Multiply4.right);
    Multiply4.output.connectTo(Add17.right);
    Add17.output.connectTo(Add16.left);
    Scale2.output.connectTo(Scale3.input);
    Structure.output.connectTo(Scale3.factor);
    Scale3.output.connectTo(SimplexPerlinD3.seed);
    SimplexPerlinD3.output.connectTo(Abs3.input);
    Abs3.output.connectTo(Multiply5.left);
    Multiply3.output.connectTo(Multiply6.left);
    amp.output.connectTo(Multiply6.right);
    Multiply6.output.connectTo(Multiply5.right);
    Multiply5.output.connectTo(Add16.right);
    Add16.output.connectTo(Add15.left);
    Scale3.output.connectTo(Scale4.input);
    Structure.output.connectTo(Scale4.factor);
    Scale4.output.connectTo(SimplexPerlinD4.seed);
    SimplexPerlinD4.output.connectTo(Abs4.input);
    Abs4.output.connectTo(Multiply8.left);
    Multiply6.output.connectTo(Multiply7.left);
    amp.output.connectTo(Multiply7.right);
    Multiply7.output.connectTo(Multiply8.right);
    Multiply8.output.connectTo(Add15.right);
    Add15.output.connectTo(Add14.left);
    Scale4.output.connectTo(Scale5.input);
    Structure.output.connectTo(Scale5.factor);
    Scale5.output.connectTo(SimplexPerlinD5.seed);
    SimplexPerlinD5.output.connectTo(Abs5.input);
    Abs5.output.connectTo(Multiply9.left);
    Multiply7.output.connectTo(Multiply10.left);
    amp.output.connectTo(Multiply10.right);
    Multiply10.output.connectTo(Multiply9.right);
    Multiply9.output.connectTo(Add14.right);
    Add14.output.connectTo(Add13.left);
    Scale5.output.connectTo(Scale6.input);
    Structure.output.connectTo(Scale6.factor);
    Scale6.output.connectTo(SimplexPerlinD6.seed);
    SimplexPerlinD6.output.connectTo(Abs6.input);
    Abs6.output.connectTo(Multiply12.left);
    Multiply10.output.connectTo(Multiply11.left);
    amp.output.connectTo(Multiply11.right);
    Multiply11.output.connectTo(Multiply12.right);
    Multiply12.output.connectTo(Add13.right);
    Add13.output.connectTo(Add12.left);
    Scale6.output.connectTo(Scale7.input);
    Structure.output.connectTo(Scale7.factor);
    Scale7.output.connectTo(SimplexPerlinD7.seed);
    SimplexPerlinD7.output.connectTo(Abs7.input);
    Abs7.output.connectTo(Multiply13.left);
    Multiply11.output.connectTo(Multiply14.left);
    amp.output.connectTo(Multiply14.right);
    Multiply14.output.connectTo(Multiply13.right);
    Multiply13.output.connectTo(Add12.right);
    Add12.output.connectTo(Add11.left);
    Scale7.output.connectTo(Scale8.input);
    Structure.output.connectTo(Scale8.factor);
    Scale8.output.connectTo(SimplexPerlinD8.seed);
    SimplexPerlinD8.output.connectTo(Abs8.input);
    Abs8.output.connectTo(Multiply16.left);
    Multiply14.output.connectTo(Multiply15.left);
    amp.output.connectTo(Multiply15.right);
    Multiply15.output.connectTo(Multiply16.right);
    Multiply16.output.connectTo(Add11.right);
    Add11.output.connectTo(VectorMerger2.x);
    Add11.output.connectTo(VectorMerger2.y);
    Add11.output.connectTo(VectorMerger2.z);
    VectorMerger2.xyz.connectTo(Remap3.input);
    Remap3.output.connectTo(Oneminus.input);
    Oneminus.output.connectTo(Gradient.gradient);
    Gradient.output.connectTo(fragmentOutput.rgb);
    
    // Output nodes
    nodeMaterial.addOutputNode(vertexOutput);
    nodeMaterial.addOutputNode(fragmentOutput);
    nodeMaterial.build();
    

return nodeMaterial
}