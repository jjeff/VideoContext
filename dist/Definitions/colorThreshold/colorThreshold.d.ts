/// <reference path="../../../src/global.d.ts" />
export default colorThreshold;
declare namespace colorThreshold {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace a {
            let type: string;
            let value: number;
        }
        namespace colorAlphaThreshold {
            let type_1: string;
            export { type_1 as type };
            let value_1: number[];
            export { value_1 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./colorThreshold.vert";
import fragmentShader from "./colorThreshold.frag";
