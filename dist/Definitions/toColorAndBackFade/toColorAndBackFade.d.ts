/// <reference path="../../../src/global.d.ts" />
export default toColorAndBackFade;
declare namespace toColorAndBackFade {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace mix {
            let type: string;
            let value: number;
        }
        namespace color {
            let type_1: string;
            export { type_1 as type };
            let value_1: number[];
            export { value_1 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./toColorAndBackFade.vert";
import fragmentShader from "./toColorAndBackFade.frag";
