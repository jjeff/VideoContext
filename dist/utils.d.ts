import VideoContext from "./videocontext";
import ProcessingNode from "./ProcessingNodes/processingnode";
export declare function compileShader(gl: WebGLRenderingContext, shaderSource: string, shaderType: number): WebGLShader;
export declare function createShaderProgram(gl: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram;
export declare function createElementTexture(gl: WebGLRenderingContext): WebGLTexture | null;
export declare function updateTexture(gl: WebGLRenderingContext, texture: WebGLTexture, element: HTMLImageElement | ImageBitmap | HTMLCanvasElement | HTMLVideoElement): void;
export declare function clearTexture(gl: WebGLRenderingContext, texture: WebGLTexture): void;
export declare function generateRandomId(): string;
export declare function exportToJSON(vc: VideoContext): string;
export declare function snapshot(vc: VideoContext): {
    nodes: Record<string, any>;
    videoContext: {
        currentTime: number;
        duration: number;
        state: number;
        playbackRate: number;
    };
};
export declare function createControlFormForNode(node: ProcessingNode, nodeName?: string): HTMLDivElement;
export declare function visualiseVideoContextGraph(videoContext: VideoContext, canvas: HTMLCanvasElement): void;
export declare function createSigmaGraphDataFromRenderGraph(videoContext: VideoContext): {
    nodes: {
        id: string;
        label: string;
        x: number;
        y: number;
        size: number;
        node: import("./DestinationNode/destinationnode").default;
    }[];
    edges: {
        id: string;
        source: string;
        target: string;
    }[];
};
export declare function importSimpleEDL(ctx: VideoContext, playlist: Array<{
    type: "video" | "image";
    sourceStart: number;
    start: number;
    duration: number;
    src: any;
}>): import("./ProcessingNodes/compositingnode").default;
export declare function visualiseVideoContextTimeline(videoContext: VideoContext, canvas: HTMLCanvasElement, currentTime: number): void;
interface Updatable {
    _update(time: number): void;
}
export declare class UpdateablesManager {
    _updateables: Updatable[];
    _useWebworker: boolean;
    _active: boolean;
    _previousRAFTime: number | undefined;
    _previousWorkerTime: number | undefined;
    _webWorkerString: string;
    _webWorker: Worker | undefined;
    constructor();
    _initWebWorker(): void;
    _lostVisibility(): void;
    _gainedVisibility(): void;
    _init(): void;
    _updateWorkerTime(time: number): void;
    _updateRAFTime(time: number): void;
    _update(dt: number): void;
    register(updateable: Updatable): void;
}
export declare function mediaElementHasSource({ src, srcObject }: {
    src: any;
    srcObject: any;
}): boolean;
export {};
