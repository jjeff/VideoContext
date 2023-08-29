/// <reference path="../../../src/global.d.ts" />
export default dreamfade;
declare namespace dreamfade {
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
import vertexShader from "./dreamfade.vert";
import fragmentShader from "./dreamfade.frag";
