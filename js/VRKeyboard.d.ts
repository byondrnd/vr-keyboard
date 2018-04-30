export default class VRKeyboard {


    onMouseDown: any;
    onMouseMove: any;
    onMouseUp: any;

    camera: THREE.Camera;
    scene: THREE.Scene;
    renderer: THREE.Renderer;
    raycaster: THREE.Raycaster;
    position: THREE.Vector3;
    scale: THREE.Vector3;
    rotation: THREE.Vector3;
    addEventListener(eventType: string, func: any): any;
    pointerX: number;
    pointerY: number;
    fields: any[];
    referenceText: string;
    _keyColor: string;
    _keyDownColor: string;
    _labelColor: string;
    _labelDownColor: string;
    _borderColor: string;
    _borderDownColor: string;
    _borderRadius: number;
    _target: any;
    _enabled: boolean;
    constructor(scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.Renderer);
    init(): any;
    dispose(): any;
    clear(): any;
    build(): any;
    getInput(): any;
    drawKeys(): any;
    drawCase(): any;
    setStyle(): any;
    drawKey(): any;
    onKeyDown(): any;
    onKeyOver(): any;
    onKeyOut(): any;
    onKeyUp(): any;
    updateText(): any;
    addField(): any;
    update(): any;
}
export declare class VRTextInput {
    pointerX: number;
    pointerY: number;
    onMouseDown
    onMouseMove
    onMouseUp;
    _backgroundColor: string;
    _textColor: string;
    _backgroundFocusColor: string;
    _textFocusColor: string;
    _borderColor: string;
    _borderFocusColor: string;
    _borderRadius: number;
    _value: string;
    _displayAsPassword: boolean;
    _width: number;
    _placeholder: string;
    collides(): any;
    clear(): any;
    dispose(): any;
    init(): any;
    draw(): any;
    build(): any;
    blur(): any;
    focus(): any;
    update(): any;
}

export declare class VRKey {
    code: number;
    x: number;
    y: number;
    collides(): any;
    getBounds(): any;

}
