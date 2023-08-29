/// <reference path="../../../src/global.d.ts" />
export default horizontal_wipe;
declare namespace horizontal_wipe {
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
import vertexShader from "./horizontalWipe.vert";
import fragmentShader from "./horizontalWipe.frag";
