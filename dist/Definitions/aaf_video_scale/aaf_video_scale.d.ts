/// <reference path="../../../src/global.d.ts" />
export default aaf_video_scale;
declare namespace aaf_video_scale {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace scaleX {
            let type: string;
            let value: number;
        }
        namespace scaleY {
            let type_1: string;
            export { type_1 as type };
            let value_1: number;
            export { value_1 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./aaf_video_scale.vert";
import fragmentShader from "./aaf_video_scale.frag";
