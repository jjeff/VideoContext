/// <reference path="../../../src/global.d.ts" />
export default monochrome;
declare namespace monochrome {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace inputMix {
            let type: string;
            let value: number[];
        }
        namespace outputMix {
            let type_1: string;
            export { type_1 as type };
            let value_1: number[];
            export { value_1 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./monochrome.vert";
import fragmentShader from "./monochrome.frag";
