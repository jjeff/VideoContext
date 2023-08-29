/// <reference path="../../../src/global.d.ts" />
export default combine;
declare namespace combine {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace a {
            let type: string;
            let value: number;
        }
    }
    export let inputs: string[];
}
import vertexShader from "./combine.vert";
import fragmentShader from "./combine.frag";
