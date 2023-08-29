import ProcessingNode from "./processingnode";
import RenderGraph from "../rendergraph";
import { IDefinition } from "../Definitions/definitions";
declare const TYPE = "EffectNode";
declare class EffectNode extends ProcessingNode {
    _placeholderTexture: WebGLTexture | null;
    /**
     * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
     */
    constructor(gl: WebGLRenderingContext, renderGraph: RenderGraph, definition: IDefinition);
    _render(): void;
}
export { TYPE as EFFECTYPE };
export default EffectNode;
