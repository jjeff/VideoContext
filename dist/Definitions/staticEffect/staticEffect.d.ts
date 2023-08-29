/// <reference path="../../../src/global.d.ts" />
export default staticEffect;
declare namespace staticEffect {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace weight {
            let type: string;
            let value: number[];
        }
        namespace amount {
            let type_1: string;
            export { type_1 as type };
            let value_1: number;
            export { value_1 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./staticEffect.vert";
import fragmentShader from "./staticEffect.frag";
