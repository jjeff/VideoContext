/// <reference path="../../../src/global.d.ts" />
export default aaf_video_flip;
declare namespace aaf_video_flip {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export let properties: {};
    export let inputs: string[];
}
import vertexShader from "./aaf_video_flip.vert";
import fragmentShader from "./aaf_video_flip.frag";
