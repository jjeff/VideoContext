/// <reference path="../../../src/global.d.ts" />
export default aaf_video_crop;
declare namespace aaf_video_crop {
    export let title: string;
    export let description: string;
    export { vertexShader };
    export { fragmentShader };
    export namespace properties {
        namespace cropLeft {
            let type: string;
            let value: number;
        }
        namespace cropRight {
            let type_1: string;
            export { type_1 as type };
            let value_1: number;
            export { value_1 as value };
        }
        namespace cropTop {
            let type_2: string;
            export { type_2 as type };
            let value_2: number;
            export { value_2 as value };
        }
        namespace cropBottom {
            let type_3: string;
            export { type_3 as type };
            let value_3: number;
            export { value_3 as value };
        }
    }
    export let inputs: string[];
}
import vertexShader from "./aaf_video_crop.vert";
import fragmentShader from "./aaf_video_crop.frag";
