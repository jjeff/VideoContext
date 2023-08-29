/// <reference path="../../../src/global.d.ts" />
export default crop;
declare namespace crop {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace x {
            let type: string;
            let value: number;
        }
        namespace y {
            let type_1: string;
            export { type_1 as type };
            let value_1: number;
            export { value_1 as value };
        }
        namespace width {
            let type_2: string;
            export { type_2 as type };
            let value_2: number;
            export { value_2 as value };
        }
        namespace height {
            let type_3: string;
            export { type_3 as type };
            let value_3: number;
            export { value_3 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./crop.vert";
import fragmentShader from "./crop.frag";
