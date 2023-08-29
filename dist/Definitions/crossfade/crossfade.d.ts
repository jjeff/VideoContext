/// <reference path="../../../src/global.d.ts" />
export default crossfade;
declare namespace crossfade {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace mix {
            let type: string;
            let value: number;
        }
    }
    export let inputs: string[];
}
import vertexShader from "./crossfade.vert";
import fragmentShader from "./crossfade.frag";
