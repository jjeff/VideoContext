/// <reference path="../../../src/global.d.ts" />
export default randomDissolve;
declare namespace randomDissolve {
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
import vertexShader from "./randomDissolve.vert";
import fragmentShader from "./randomDissolve.frag";
