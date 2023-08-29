/// <reference path="../../../src/global.d.ts" />
export default staticDissolve;
declare namespace staticDissolve {
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
import vertexShader from "./staticDissolve.vert";
import fragmentShader from "./staticDissolve.frag";
