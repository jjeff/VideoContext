/// <reference path="../../../src/global.d.ts" />
export default verticalWipe;
declare namespace verticalWipe {
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
import vertexShader from "./verticalWipe.vert";
import fragmentShader from "./verticalWipe.frag";
