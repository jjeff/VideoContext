import AudioNode from "./audionode";
import CanvasNode from "./canvasnode";
import ImageNode from "./imagenode";
import MediaNode from "./medianode";
import SourceNode from "./sourcenode";
import VideoNode from "./videonode";
declare const NODES: {
    AudioNode: typeof AudioNode;
    CanvasNode: typeof CanvasNode;
    ImageNode: typeof ImageNode;
    MediaNode: typeof MediaNode;
    SourceNode: typeof SourceNode;
    VideoNode: typeof VideoNode;
};
export default NODES;
