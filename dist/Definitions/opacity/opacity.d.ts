/// <reference path="../../../src/global.d.ts" />
export default opacity;
declare namespace opacity {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace opacity {
            let type: string;
            let value: number;
        }
    }
    export let inputs: string[];
}
import vertexShader from "./opacity.vert";
import fragmentShader from "./opacity.frag";
