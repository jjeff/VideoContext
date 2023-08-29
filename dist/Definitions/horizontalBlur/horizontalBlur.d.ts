/// <reference path="../../../src/global.d.ts" />
export default horizontal_blur;
declare namespace horizontal_blur {
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
import vertexShader from "./horizontalBlur.vert";
import fragmentShader from "./horizontalBlur.frag";
