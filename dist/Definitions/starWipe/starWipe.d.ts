/// <reference path="../../../src/global.d.ts" />
export default starWipe;
declare namespace starWipe {
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
import vertexShader from "./starWipe.vert";
import fragmentShader from "./starWipe.frag";
