/// <reference path="../../../src/global.d.ts" />
export default verticalBlur;
declare namespace verticalBlur {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace blurAmount {
            let type: string;
            let value: number;
        }
    }
    export let inputs: string[];
}
import vertexShader from "./verticalBlur.vert";
import fragmentShader from "./verticalBlur.frag";
