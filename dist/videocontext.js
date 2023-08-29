(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VideoContext"] = factory();
	else
		root["VideoContext"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_crop_vert_1 = __importDefault(__webpack_require__(/*! ./aaf_video_crop.vert */ "./src/Definitions/aaf_video_crop/aaf_video_crop.vert"));
var aaf_video_crop_frag_1 = __importDefault(__webpack_require__(/*! ./aaf_video_crop.frag */ "./src/Definitions/aaf_video_crop/aaf_video_crop.frag"));
var aaf_video_crop = {
  title: "AAF Video Crop Effect",
  description: "A crop effect based on the AAF spec.",
  vertexShader: aaf_video_crop_vert_1["default"],
  fragmentShader: aaf_video_crop_frag_1["default"],
  properties: {
    cropLeft: {
      type: "uniform",
      value: -1.0
    },
    cropRight: {
      type: "uniform",
      value: 1.0
    },
    cropTop: {
      type: "uniform",
      value: -1.0
    },
    cropBottom: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = aaf_video_crop;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_flip_vert_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flip.vert */ "./src/Definitions/aaf_video_flip/aaf_video_flip.vert"));
var aaf_video_flip_frag_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flip.frag */ "./src/Definitions/aaf_video_flip/aaf_video_flip.frag"));
var aaf_video_flip = {
  title: "AAF Video Flip Effect",
  description: "A flip effect based on the AAF spec. Mirrors the image in the x-axis",
  vertexShader: aaf_video_flip_vert_1["default"],
  fragmentShader: aaf_video_flip_frag_1["default"],
  properties: {},
  inputs: ["u_image"]
};
exports["default"] = aaf_video_flip;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_flop_vert_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flop.vert */ "./src/Definitions/aaf_video_flop/aaf_video_flop.vert"));
var aaf_video_flop_frag_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flop.frag */ "./src/Definitions/aaf_video_flop/aaf_video_flop.frag"));
var aaf_video_flop = {
  title: "AAF Video Flop Effect",
  description: "A flop effect based on the AAF spec. Mirrors the image in the y-axis",
  vertexShader: aaf_video_flop_vert_1["default"],
  fragmentShader: aaf_video_flop_frag_1["default"],
  properties: {},
  inputs: ["u_image"]
};
exports["default"] = aaf_video_flop;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.js":
/*!******************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_position_vert_1 = __importDefault(__webpack_require__(/*! ./aaf_video_position.vert */ "./src/Definitions/aaf_video_position/aaf_video_position.vert"));
var aaf_video_position_frag_1 = __importDefault(__webpack_require__(/*! ./aaf_video_position.frag */ "./src/Definitions/aaf_video_position/aaf_video_position.frag"));
var aaf_video_position = {
  title: "AAF Video Position Effect",
  description: "A position effect based on the AAF spec.",
  vertexShader: aaf_video_position_vert_1["default"],
  fragmentShader: aaf_video_position_frag_1["default"],
  properties: {
    positionOffsetX: {
      type: "uniform",
      value: 0.0
    },
    positionOffsetY: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = aaf_video_position;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.js":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_scale_vert_1 = __importDefault(__webpack_require__(/*! ./aaf_video_scale.vert */ "./src/Definitions/aaf_video_scale/aaf_video_scale.vert"));
var aaf_video_scale_frag_1 = __importDefault(__webpack_require__(/*! ./aaf_video_scale.frag */ "./src/Definitions/aaf_video_scale/aaf_video_scale.frag"));
var aaf_video_scale = {
  title: "AAF Video Scale Effect",
  description: "A scale effect based on the AAF spec.",
  vertexShader: aaf_video_scale_vert_1["default"],
  fragmentShader: aaf_video_scale_frag_1["default"],
  properties: {
    scaleX: {
      type: "uniform",
      value: 1.0
    },
    scaleY: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = aaf_video_scale;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var colorThreshold_vert_1 = __importDefault(__webpack_require__(/*! ./colorThreshold.vert */ "./src/Definitions/colorThreshold/colorThreshold.vert"));
var colorThreshold_frag_1 = __importDefault(__webpack_require__(/*! ./colorThreshold.frag */ "./src/Definitions/colorThreshold/colorThreshold.frag"));
var colorThreshold = {
  title: "Color Threshold",
  description: "Turns all pixels with a greater value than the specified threshold transparent.",
  vertexShader: colorThreshold_vert_1["default"],
  fragmentShader: colorThreshold_frag_1["default"],
  properties: {
    a: {
      type: "uniform",
      value: 0.0
    },
    colorAlphaThreshold: {
      type: "uniform",
      value: [0.0, 0.55, 0.0]
    }
  },
  inputs: ["u_image"]
};
exports["default"] = colorThreshold;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/combine/combine.js":
/*!********************************************!*\
  !*** ./src/Definitions/combine/combine.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var combine_vert_1 = __importDefault(__webpack_require__(/*! ./combine.vert */ "./src/Definitions/combine/combine.vert"));
var combine_frag_1 = __importDefault(__webpack_require__(/*! ./combine.frag */ "./src/Definitions/combine/combine.frag"));
var combine = {
  title: "Combine",
  description: "A basic effect which renders the input to the output, Typically used as a combine node for layering up media with alpha transparency.",
  vertexShader: combine_vert_1["default"],
  fragmentShader: combine_frag_1["default"],
  properties: {
    a: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = combine;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/crop/crop.js":
/*!**************************************!*\
  !*** ./src/Definitions/crop/crop.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var crop_vert_1 = __importDefault(__webpack_require__(/*! ./crop.vert */ "./src/Definitions/crop/crop.vert"));
var crop_frag_1 = __importDefault(__webpack_require__(/*! ./crop.frag */ "./src/Definitions/crop/crop.frag"));
var crop = {
  title: "Primer Simple Crop",
  description: "A simple crop processors for primer",
  vertexShader: crop_vert_1["default"],
  fragmentShader: crop_frag_1["default"],
  properties: {
    x: {
      type: "uniform",
      value: 0.0
    },
    y: {
      type: "uniform",
      value: 0.0
    },
    width: {
      type: "uniform",
      value: 1.0
    },
    height: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = crop;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.js":
/*!************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var crossfade_vert_1 = __importDefault(__webpack_require__(/*! ./crossfade.vert */ "./src/Definitions/crossfade/crossfade.vert"));
var crossfade_frag_1 = __importDefault(__webpack_require__(/*! ./crossfade.frag */ "./src/Definitions/crossfade/crossfade.frag"));
var crossfade = {
  title: "Cross-Fade",
  description: "A cross-fade effect. Typically used as a transistion.",
  vertexShader: crossfade_vert_1["default"],
  fragmentShader: crossfade_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = crossfade;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/definitions.ts":
/*!****************************************!*\
  !*** ./src/Definitions/definitions.ts ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var aaf_video_scale_1 = __importDefault(__webpack_require__(/*! ./aaf_video_scale/aaf_video_scale */ "./src/Definitions/aaf_video_scale/aaf_video_scale.js"));
var crossfade_1 = __importDefault(__webpack_require__(/*! ./crossfade/crossfade */ "./src/Definitions/crossfade/crossfade.js"));
var horizontalWipe_1 = __importDefault(__webpack_require__(/*! ./horizontalWipe/horizontalWipe */ "./src/Definitions/horizontalWipe/horizontalWipe.js"));
var verticalWipe_1 = __importDefault(__webpack_require__(/*! ./verticalWipe/verticalWipe */ "./src/Definitions/verticalWipe/verticalWipe.js"));
var randomDissolve_1 = __importDefault(__webpack_require__(/*! ./randomDissolve/randomDissolve */ "./src/Definitions/randomDissolve/randomDissolve.js"));
var toColorAndBackFade_1 = __importDefault(__webpack_require__(/*! ./toColorAndBackFade/toColorAndBackFade */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.js"));
var starWipe_1 = __importDefault(__webpack_require__(/*! ./starWipe/starWipe */ "./src/Definitions/starWipe/starWipe.js"));
var combine_1 = __importDefault(__webpack_require__(/*! ./combine/combine */ "./src/Definitions/combine/combine.js"));
var colorThreshold_1 = __importDefault(__webpack_require__(/*! ./colorThreshold/colorThreshold */ "./src/Definitions/colorThreshold/colorThreshold.js"));
var monochrome_1 = __importDefault(__webpack_require__(/*! ./monochrome/monochrome */ "./src/Definitions/monochrome/monochrome.js"));
var horizontalBlur_1 = __importDefault(__webpack_require__(/*! ./horizontalBlur/horizontalBlur */ "./src/Definitions/horizontalBlur/horizontalBlur.js"));
var verticalBlur_1 = __importDefault(__webpack_require__(/*! ./verticalBlur/verticalBlur */ "./src/Definitions/verticalBlur/verticalBlur.js"));
var aaf_video_flop_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flop/aaf_video_flop */ "./src/Definitions/aaf_video_flop/aaf_video_flop.js"));
var aaf_video_flip_1 = __importDefault(__webpack_require__(/*! ./aaf_video_flip/aaf_video_flip */ "./src/Definitions/aaf_video_flip/aaf_video_flip.js"));
var aaf_video_position_1 = __importDefault(__webpack_require__(/*! ./aaf_video_position/aaf_video_position */ "./src/Definitions/aaf_video_position/aaf_video_position.js"));
var aaf_video_crop_1 = __importDefault(__webpack_require__(/*! ./aaf_video_crop/aaf_video_crop */ "./src/Definitions/aaf_video_crop/aaf_video_crop.js"));
var staticDissolve_1 = __importDefault(__webpack_require__(/*! ./staticDissolve/staticDissolve */ "./src/Definitions/staticDissolve/staticDissolve.js"));
var staticEffect_1 = __importDefault(__webpack_require__(/*! ./staticEffect/staticEffect */ "./src/Definitions/staticEffect/staticEffect.js"));
var dreamfade_1 = __importDefault(__webpack_require__(/*! ./dreamfade/dreamfade */ "./src/Definitions/dreamfade/dreamfade.js"));
var opacity_1 = __importDefault(__webpack_require__(/*! ./opacity/opacity */ "./src/Definitions/opacity/opacity.js"));
var crop_1 = __importDefault(__webpack_require__(/*! ./crop/crop */ "./src/Definitions/crop/crop.js"));
var DEFINITIONS = {
  AAF_VIDEO_SCALE: aaf_video_scale_1["default"],
  CROSSFADE: crossfade_1["default"],
  DREAMFADE: dreamfade_1["default"],
  HORIZONTAL_WIPE: horizontalWipe_1["default"],
  VERTICAL_WIPE: verticalWipe_1["default"],
  RANDOM_DISSOLVE: randomDissolve_1["default"],
  STATIC_DISSOLVE: staticDissolve_1["default"],
  STATIC_EFFECT: staticEffect_1["default"],
  TO_COLOR_AND_BACK: toColorAndBackFade_1["default"],
  STAR_WIPE: starWipe_1["default"],
  COMBINE: combine_1["default"],
  COLORTHRESHOLD: colorThreshold_1["default"],
  MONOCHROME: monochrome_1["default"],
  HORIZONTAL_BLUR: horizontalBlur_1["default"],
  VERTICAL_BLUR: verticalBlur_1["default"],
  AAF_VIDEO_CROP: aaf_video_crop_1["default"],
  AAF_VIDEO_POSITION: aaf_video_position_1["default"],
  AAF_VIDEO_FLIP: aaf_video_flip_1["default"],
  AAF_VIDEO_FLOP: aaf_video_flop_1["default"],
  OPACITY: opacity_1["default"],
  CROP: crop_1["default"]
};
exports["default"] = DEFINITIONS;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.js":
/*!************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var dreamfade_vert_1 = __importDefault(__webpack_require__(/*! ./dreamfade.vert */ "./src/Definitions/dreamfade/dreamfade.vert"));
var dreamfade_frag_1 = __importDefault(__webpack_require__(/*! ./dreamfade.frag */ "./src/Definitions/dreamfade/dreamfade.frag"));
var dreamfade = {
  title: "Dream-Fade",
  description: "A wobbly dream effect. Typically used as a transistion.",
  vertexShader: dreamfade_vert_1["default"],
  fragmentShader: dreamfade_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = dreamfade;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var horizontalBlur_vert_1 = __importDefault(__webpack_require__(/*! ./horizontalBlur.vert */ "./src/Definitions/horizontalBlur/horizontalBlur.vert"));
var horizontalBlur_frag_1 = __importDefault(__webpack_require__(/*! ./horizontalBlur.frag */ "./src/Definitions/horizontalBlur/horizontalBlur.frag"));
var horizontal_blur = {
  title: "Horizontal Blur",
  description: "A horizontal blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
  vertexShader: horizontalBlur_vert_1["default"],
  fragmentShader: horizontalBlur_frag_1["default"],
  properties: {
    blurAmount: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = horizontal_blur;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var horizontalWipe_vert_1 = __importDefault(__webpack_require__(/*! ./horizontalWipe.vert */ "./src/Definitions/horizontalWipe/horizontalWipe.vert"));
var horizontalWipe_frag_1 = __importDefault(__webpack_require__(/*! ./horizontalWipe.frag */ "./src/Definitions/horizontalWipe/horizontalWipe.frag"));
var horizontal_wipe = {
  title: "Horizontal Wipe",
  description: "A horizontal wipe effect. Typically used as a transistion.",
  vertexShader: horizontalWipe_vert_1["default"],
  fragmentShader: horizontalWipe_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = horizontal_wipe;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.js":
/*!**************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.js ***!
  \**************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var monochrome_vert_1 = __importDefault(__webpack_require__(/*! ./monochrome.vert */ "./src/Definitions/monochrome/monochrome.vert"));
var monochrome_frag_1 = __importDefault(__webpack_require__(/*! ./monochrome.frag */ "./src/Definitions/monochrome/monochrome.frag"));
var monochrome = {
  title: "Monochrome",
  description: "Change images to a single chroma (e.g can be used to make a black & white filter). Input color mix and output color mix can be adjusted.",
  vertexShader: monochrome_vert_1["default"],
  fragmentShader: monochrome_frag_1["default"],
  properties: {
    inputMix: {
      type: "uniform",
      value: [0.4, 0.6, 0.2]
    },
    outputMix: {
      type: "uniform",
      value: [1.0, 1.0, 1.0]
    }
  },
  inputs: ["u_image"]
};
exports["default"] = monochrome;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/opacity/opacity.js":
/*!********************************************!*\
  !*** ./src/Definitions/opacity/opacity.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var opacity_vert_1 = __importDefault(__webpack_require__(/*! ./opacity.vert */ "./src/Definitions/opacity/opacity.vert"));
var opacity_frag_1 = __importDefault(__webpack_require__(/*! ./opacity.frag */ "./src/Definitions/opacity/opacity.frag"));
var opacity = {
  title: "Opacity",
  description: "Sets the opacity of an input.",
  vertexShader: opacity_vert_1["default"],
  fragmentShader: opacity_frag_1["default"],
  properties: {
    opacity: {
      type: "uniform",
      value: 0.7
    }
  },
  inputs: ["u_image"]
};
exports["default"] = opacity;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var randomDissolve_vert_1 = __importDefault(__webpack_require__(/*! ./randomDissolve.vert */ "./src/Definitions/randomDissolve/randomDissolve.vert"));
var randomDissolve_frag_1 = __importDefault(__webpack_require__(/*! ./randomDissolve.frag */ "./src/Definitions/randomDissolve/randomDissolve.frag"));
var randomDissolve = {
  title: "Random Dissolve",
  description: "A random dissolve effect. Typically used as a transistion.",
  vertexShader: randomDissolve_vert_1["default"],
  fragmentShader: randomDissolve_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = randomDissolve;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.js":
/*!**********************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var starWipe_vert_1 = __importDefault(__webpack_require__(/*! ./starWipe.vert */ "./src/Definitions/starWipe/starWipe.vert"));
var starWipe_frag_1 = __importDefault(__webpack_require__(/*! ./starWipe.frag */ "./src/Definitions/starWipe/starWipe.frag"));
var starWipe = {
  title: "Star Wipe Fade",
  description: "A classic star wipe transistion. Typically used as a transistion.",
  vertexShader: starWipe_vert_1["default"],
  fragmentShader: starWipe_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = starWipe;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.js":
/*!**********************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.js ***!
  \**********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var staticDissolve_vert_1 = __importDefault(__webpack_require__(/*! ./staticDissolve.vert */ "./src/Definitions/staticDissolve/staticDissolve.vert"));
var staticDissolve_frag_1 = __importDefault(__webpack_require__(/*! ./staticDissolve.frag */ "./src/Definitions/staticDissolve/staticDissolve.frag"));
var staticDissolve = {
  title: "Static Dissolve",
  description: "A static dissolve effect. Typically used as a transistion.",
  vertexShader: staticDissolve_vert_1["default"],
  fragmentShader: staticDissolve_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = staticDissolve;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.js":
/*!******************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var staticEffect_vert_1 = __importDefault(__webpack_require__(/*! ./staticEffect.vert */ "./src/Definitions/staticEffect/staticEffect.vert"));
var staticEffect_frag_1 = __importDefault(__webpack_require__(/*! ./staticEffect.frag */ "./src/Definitions/staticEffect/staticEffect.frag"));
var staticEffect = {
  title: "Static",
  description: "A static effect to add pseudo random noise to a video",
  vertexShader: staticEffect_vert_1["default"],
  fragmentShader: staticEffect_frag_1["default"],
  properties: {
    weight: {
      type: "uniform",
      value: [1.0, 1.0, 1.0]
    },
    amount: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = staticEffect;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.js":
/*!******************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var toColorAndBackFade_vert_1 = __importDefault(__webpack_require__(/*! ./toColorAndBackFade.vert */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert"));
var toColorAndBackFade_frag_1 = __importDefault(__webpack_require__(/*! ./toColorAndBackFade.frag */ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag"));
var toColorAndBackFade = {
  title: "To Color And Back Fade",
  description: "A fade to black and back effect. Setting mix to 0.5 is a fully solid color frame. Typically used as a transistion.",
  vertexShader: toColorAndBackFade_vert_1["default"],
  fragmentShader: toColorAndBackFade_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    },
    color: {
      type: "uniform",
      value: [0.0, 0.0, 0.0, 0.0]
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = toColorAndBackFade;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.js":
/*!******************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var verticalBlur_vert_1 = __importDefault(__webpack_require__(/*! ./verticalBlur.vert */ "./src/Definitions/verticalBlur/verticalBlur.vert"));
var verticalBlur_frag_1 = __importDefault(__webpack_require__(/*! ./verticalBlur.frag */ "./src/Definitions/verticalBlur/verticalBlur.frag"));
var verticalBlur = {
  title: "Vertical Blur",
  description: "A vertical blur effect. Adpated from http://xissburg.com/faster-gaussian-blur-in-glsl/",
  vertexShader: verticalBlur_vert_1["default"],
  fragmentShader: verticalBlur_frag_1["default"],
  properties: {
    blurAmount: {
      type: "uniform",
      value: 1.0
    }
  },
  inputs: ["u_image"]
};
exports["default"] = verticalBlur;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.js":
/*!******************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.js ***!
  \******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var verticalWipe_vert_1 = __importDefault(__webpack_require__(/*! ./verticalWipe.vert */ "./src/Definitions/verticalWipe/verticalWipe.vert"));
var verticalWipe_frag_1 = __importDefault(__webpack_require__(/*! ./verticalWipe.frag */ "./src/Definitions/verticalWipe/verticalWipe.frag"));
var verticalWipe = {
  title: "vertical Wipe",
  description: "A vertical wipe effect. Typically used as a transistion.",
  vertexShader: verticalWipe_vert_1["default"],
  fragmentShader: verticalWipe_frag_1["default"],
  properties: {
    mix: {
      type: "uniform",
      value: 0.0
    }
  },
  inputs: ["u_image_a", "u_image_b"]
};
exports["default"] = verticalWipe;
module.exports = exports.default;

/***/ }),

/***/ "./src/DestinationNode/destinationnode.ts":
/*!************************************************!*\
  !*** ./src/DestinationNode/destinationnode.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DESTINATIONTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var processingnode_1 = __importDefault(__webpack_require__(/*! ../ProcessingNodes/processingnode */ "./src/ProcessingNodes/processingnode.ts"));
var destinationnode_frag_1 = __importDefault(__webpack_require__(/*! ./destinationnode.frag */ "./src/DestinationNode/destinationnode.frag"));
var destinationnode_vert_1 = __importDefault(__webpack_require__(/*! ./destinationnode.vert */ "./src/DestinationNode/destinationnode.vert"));
var TYPE = "DestinationNode";
exports.DESTINATIONTYPE = TYPE;
var DestinationNode = /*#__PURE__*/function (_processingnode_1$def) {
  _inherits(DestinationNode, _processingnode_1$def);
  var _super = _createSuper(DestinationNode);
  /**
   * Initialise an instance of a DestinationNode.
   *
   * There should only be a single instance of a DestinationNode per VideoContext instance. An VideoContext's destination can be accessed like so: videoContext.desitnation.
   *
   * You should not instantiate this directly.
   */
  function DestinationNode(gl, renderGraph) {
    var _this;
    _classCallCheck(this, DestinationNode);
    var definition = {
      fragmentShader: destinationnode_frag_1["default"],
      vertexShader: destinationnode_vert_1["default"],
      properties: {},
      inputs: ["u_image"]
    };
    _this = _super.call(this, gl, renderGraph, definition, definition.inputs, false);
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(DestinationNode, [{
    key: "_render",
    value: function _render() {
      var _this2 = this;
      var gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      gl.clearColor(0, 0, 0, 0.0); // green;
      gl.clear(gl.COLOR_BUFFER_BIT);
      this.inputs.forEach(function (node) {
        _get(_getPrototypeOf(DestinationNode.prototype), "_render", _this2).call(_this2);
        //map the input textures input the node
        var texture = node._texture;
        var _iterator = _createForOfIteratorHelper(_this2._shaderInputsTextureUnitMapping),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mapping = _step.value;
            gl.activeTexture(mapping.textureUnit);
            gl.uniform1i(mapping.location, mapping.textureUnitIndex);
            gl.bindTexture(gl.TEXTURE_2D, texture);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      });
    }
  }]);
  return DestinationNode;
}(processingnode_1["default"]);
exports["default"] = DestinationNode;

/***/ }),

/***/ "./src/ProcessingNodes/compositingnode.ts":
/*!************************************************!*\
  !*** ./src/ProcessingNodes/compositingnode.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.COMPOSITINGTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var processingnode_1 = __importDefault(__webpack_require__(/*! ./processingnode */ "./src/ProcessingNodes/processingnode.ts"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var TYPE = "CompositingNode";
exports.COMPOSITINGTYPE = TYPE;
var CompositingNode = /*#__PURE__*/function (_processingnode_1$def) {
  _inherits(CompositingNode, _processingnode_1$def);
  var _super = _createSuper(CompositingNode);
  /**
   * Initialise an instance of a Compositing Node. You should not instantiate this directly, but use VideoContest.createCompositingNode().
   */
  function CompositingNode(gl, renderGraph, definition) {
    var _this;
    _classCallCheck(this, CompositingNode);
    var placeholderTexture = (0, utils_1.createElementTexture)(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    _this = _super.call(this, gl, renderGraph, definition, definition.inputs, false);
    _this._placeholderTexture = placeholderTexture;
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(CompositingNode, [{
    key: "_render",
    value: function _render() {
      var _this2 = this;
      var gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
      gl.clearColor(0, 0, 0, 0); // green;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      this.inputs.forEach(function (node) {
        if (node === undefined) return;
        _get(_getPrototypeOf(CompositingNode.prototype), "_render", _this2).call(_this2);
        //map the input textures input the node
        var texture = node._texture;
        var _iterator = _createForOfIteratorHelper(_this2._shaderInputsTextureUnitMapping),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mapping = _step.value;
            gl.activeTexture(mapping.textureUnit);
            gl.uniform1i(mapping.location, mapping.textureUnitIndex);
            gl.bindTexture(gl.TEXTURE_2D, texture);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        gl.drawArrays(gl.TRIANGLES, 0, 6);
      });
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }]);
  return CompositingNode;
}(processingnode_1["default"]);
exports["default"] = CompositingNode;

/***/ }),

/***/ "./src/ProcessingNodes/effectnode.ts":
/*!*******************************************!*\
  !*** ./src/ProcessingNodes/effectnode.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EFFECTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var processingnode_1 = __importDefault(__webpack_require__(/*! ./processingnode */ "./src/ProcessingNodes/processingnode.ts"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var TYPE = "EffectNode";
exports.EFFECTYPE = TYPE;
var EffectNode = /*#__PURE__*/function (_processingnode_1$def) {
  _inherits(EffectNode, _processingnode_1$def);
  var _super = _createSuper(EffectNode);
  /**
   * Initialise an instance of an EffectNode. You should not instantiate this directly, but use VideoContest.createEffectNode().
   */
  function EffectNode(gl, renderGraph, definition) {
    var _this;
    _classCallCheck(this, EffectNode);
    var placeholderTexture = (0, utils_1.createElementTexture)(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    _this = _super.call(this, gl, renderGraph, definition, definition.inputs, true);
    _this._placeholderTexture = placeholderTexture;
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(EffectNode, [{
    key: "_render",
    value: function _render() {
      var gl = this._gl;
      gl.bindFramebuffer(gl.FRAMEBUFFER, this._framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this._texture, 0);
      gl.clearColor(0, 0, 0, 0); // green;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.blendFunc(gl.ONE, gl.ZERO);
      _get(_getPrototypeOf(EffectNode.prototype), "_render", this).call(this);
      var inputs = this._renderGraph.getInputsForNode(this);
      for (var i = 0; i < this._shaderInputsTextureUnitMapping.length; i++) {
        var inputTexture = this._placeholderTexture;
        var textureUnit = this._shaderInputsTextureUnitMapping[i].textureUnit;
        if (i < inputs.length && inputs[i] !== undefined) {
          inputTexture = inputs[i]._texture;
        }
        gl.activeTexture(textureUnit);
        gl.uniform1i(this._shaderInputsTextureUnitMapping[i].location, this._shaderInputsTextureUnitMapping[i].textureUnitIndex);
        gl.bindTexture(gl.TEXTURE_2D, inputTexture);
      }
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
  }]);
  return EffectNode;
}(processingnode_1["default"]);
exports["default"] = EffectNode;

/***/ }),

/***/ "./src/ProcessingNodes/processingnode.ts":
/*!***********************************************!*\
  !*** ./src/ProcessingNodes/processingnode.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PROCESSINGTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var graphnode_1 = __importDefault(__webpack_require__(/*! ../graphnode */ "./src/graphnode.ts"));
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var exceptions_1 = __webpack_require__(/*! ../exceptions */ "./src/exceptions.ts");
var TYPE = "ProcessingNode";
exports.PROCESSINGTYPE = TYPE;
var ProcessingNode = /*#__PURE__*/function (_graphnode_1$default) {
  _inherits(ProcessingNode, _graphnode_1$default);
  var _super = _createSuper(ProcessingNode);
  /**
   * Initialise an instance of a ProcessingNode.
   *
   * This class is not used directly, but is extended to create CompositingNodes, TransitionNodes, and EffectNodes.
   */
  function ProcessingNode(gl, renderGraph, definition, inputNames, limitConnections) {
    var _this;
    _classCallCheck(this, ProcessingNode);
    _this = _super.call(this, gl, renderGraph, inputNames, limitConnections);
    _this._vertexShader = (0, utils_1.compileShader)(gl, definition.vertexShader, gl.VERTEX_SHADER);
    _this._fragmentShader = (0, utils_1.compileShader)(gl, definition.fragmentShader, gl.FRAGMENT_SHADER);
    _this._definition = definition;
    _this._properties = {}; //definition.properties;
    //copy definition properties
    for (var propertyName in definition.properties) {
      var propertyValue = definition.properties[propertyName].value;
      //if an array then shallow copy it
      if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
        propertyValue = definition.properties[propertyName].value.slice();
      }
      var propertyType = definition.properties[propertyName].type;
      _this._properties[propertyName] = {
        type: propertyType,
        value: propertyValue
      };
    }
    _this._shaderInputsTextureUnitMapping = [];
    _this._maxTextureUnits = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
    _this._boundTextureUnits = 0;
    _this._texture = (0, utils_1.createElementTexture)(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.canvas.width, gl.canvas.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    //compile the shader
    _this._program = (0, utils_1.createShaderProgram)(gl, _this._vertexShader, _this._fragmentShader);
    //create and setup the framebuffer
    _this._framebuffer = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, _this._framebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this._texture, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    //create properties on this object for the passed properties
    var _loop = function _loop(propertyName) {
      Object.defineProperty(_assertThisInitialized(_this), propertyName, {
        get: function get() {
          return this._properties[propertyName].value;
        },
        set: function set(passedValue) {
          this._properties[propertyName].value = passedValue;
        }
      });
    };
    for (var _propertyName in _this._properties) {
      _loop(_propertyName);
    }
    //create texutres for any texture properties
    for (var _propertyName2 in _this._properties) {
      var _propertyValue = _this._properties[_propertyName2].value;
      if (_propertyValue instanceof Image) {
        _this._properties[_propertyName2].texture = (0, utils_1.createElementTexture)(gl);
        _this._properties[_propertyName2].textureUnit = gl.TEXTURE0 + _this._boundTextureUnits;
        _this._properties[_propertyName2].textureUnitIndex = _this._boundTextureUnits;
        _this._boundTextureUnits += 1;
        if (_this._boundTextureUnits > _this._maxTextureUnits) {
          throw new exceptions_1.RenderException("Trying to bind more than available textures units to shader");
        }
      }
    }
    // calculate texture units for input textures
    var _iterator = _createForOfIteratorHelper(definition.inputs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var inputName = _step.value;
        _this._shaderInputsTextureUnitMapping.push({
          name: inputName,
          textureUnit: gl.TEXTURE0 + _this._boundTextureUnits,
          textureUnitIndex: _this._boundTextureUnits,
          location: gl.getUniformLocation(_this._program, inputName)
        });
        _this._boundTextureUnits += 1;
        if (_this._boundTextureUnits > _this._maxTextureUnits) {
          throw new exceptions_1.RenderException("Trying to bind more than available textures units to shader");
        }
      }
      //find the locations of the properties in the compiled shader
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    for (var _propertyName3 in _this._properties) {
      if (_this._properties[_propertyName3].type === "uniform") {
        _this._properties[_propertyName3].location = _this._gl.getUniformLocation(_this._program, _propertyName3);
      }
    }
    _this._currentTimeLocation = _this._gl.getUniformLocation(_this._program, "currentTime");
    _this._currentTime = 0;
    //Other setup
    var positionLocation = gl.getAttribLocation(_this._program, "a_position");
    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0]), gl.STATIC_DRAW);
    var texCoordLocation = gl.getAttribLocation(_this._program, "a_texCoord");
    gl.enableVertexAttribArray(texCoordLocation);
    gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
    _this._displayName = TYPE;
    return _this;
  }
  /**
   * Sets the passed processing node property to the passed value.
   * @param {string} name - The name of the processing node parameter to modify.
   * @param {Object} value - The value to set it to.
   *
   * @example
   * var ctx = new VideoContext();
   * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
   * monoNode.setProperty("inputMix", [1.0,0.0,0.0]); //Just use red channel
   */
  _createClass(ProcessingNode, [{
    key: "setProperty",
    value: function setProperty(name, value) {
      this._properties[name].value = value;
    }
    /**
     * Sets the passed processing node property to the passed value.
     * @param {string} name - The name of the processing node parameter to get.
     *
     * @example
     * var ctx = new VideoContext();
     * var monoNode = ctx.effect(VideoContext.DEFINITIONS.MONOCHROME);
     * console.log(monoNode.getProperty("inputMix")); //Will output [0.4,0.6,0.2], the default value from the effect definition.
     *
     */
  }, {
    key: "getProperty",
    value: function getProperty(name) {
      return this._properties[name].value;
    }
    /**
     * Destroy and clean-up the node.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(ProcessingNode.prototype), "destroy", this).call(this);
      //destrpy texutres for any texture properties
      for (var propertyName in this._properties) {
        var propertyValue = this._properties[propertyName].value;
        if (propertyValue instanceof Image) {
          this._gl.deleteTexture(this._properties[propertyName].texture);
          this._texture = undefined;
        }
      }
      //Destroy main
      this._gl.deleteTexture(this._texture);
      this._texture = undefined;
      //Detach shaders
      this._gl.detachShader(this._program, this._vertexShader);
      this._gl.detachShader(this._program, this._fragmentShader);
      //Delete shaders
      this._gl.deleteShader(this._vertexShader);
      this._gl.deleteShader(this._fragmentShader);
      //Delete program
      this._gl.deleteProgram(this._program);
      //Delete Framebuffer
      this._gl.deleteFramebuffer(this._framebuffer);
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      this._currentTime = currentTime;
    }
  }, {
    key: "_seek",
    value: function _seek(currentTime) {
      this._currentTime = currentTime;
    }
  }, {
    key: "_render",
    value: function _render() {
      this._rendered = true;
      var gl = this._gl;
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
      gl.useProgram(this._program);
      //upload the default uniforms
      gl.uniform1f(this._currentTimeLocation, parseFloat(this._currentTime));
      for (var propertyName in this._properties) {
        var propertyValue = this._properties[propertyName].value;
        var propertyType = this._properties[propertyName].type;
        var propertyLocation = this._properties[propertyName].location;
        if (propertyType !== "uniform") continue;
        if (typeof propertyValue === "number") {
          gl.uniform1f(propertyLocation, propertyValue);
        } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
          if (propertyValue.length === 1) {
            gl.uniform1fv(propertyLocation, propertyValue);
          } else if (propertyValue.length === 2) {
            gl.uniform2fv(propertyLocation, propertyValue);
          } else if (propertyValue.length === 3) {
            gl.uniform3fv(propertyLocation, propertyValue);
          } else if (propertyValue.length === 4) {
            gl.uniform4fv(propertyLocation, propertyValue);
          } else {
            console.debug("Shader parameter", propertyName, "is too long an array:", propertyValue);
          }
        } else if (propertyValue instanceof Image) {
          var texture = this._properties[propertyName].texture;
          var textureUnit = this._properties[propertyName].textureUnit;
          var textureUnitIndex = this._properties[propertyName].textureUnit;
          (0, utils_1.updateTexture)(gl, texture, propertyValue);
          gl.activeTexture(textureUnit);
          gl.uniform1i(propertyLocation, textureUnitIndex);
          gl.bindTexture(gl.TEXTURE_2D, texture);
        } else {
          //TODO - add tests for textures
          /*gl.activeTexture(gl.TEXTURE0 + textureOffset);
          gl.uniform1i(parameterLoctation, textureOffset);
          gl.bindTexture(gl.TEXTURE_2D, textures[textureOffset-1]);*/
        }
      }
    }
  }]);
  return ProcessingNode;
}(graphnode_1["default"]);
exports["default"] = ProcessingNode;

/***/ }),

/***/ "./src/ProcessingNodes/transitionnode.ts":
/*!***********************************************!*\
  !*** ./src/ProcessingNodes/transitionnode.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TRANSITIONTYPE = void 0;
var effectnode_1 = __importDefault(__webpack_require__(/*! ./effectnode */ "./src/ProcessingNodes/effectnode.ts"));
var TYPE = "TransitionNode";
exports.TRANSITIONTYPE = TYPE;
var TransitionNode = /*#__PURE__*/function (_effectnode_1$default) {
  _inherits(TransitionNode, _effectnode_1$default);
  var _super = _createSuper(TransitionNode);
  /**
   * Initialise an instance of a TransitionNode. You should not instantiate this directly, but use VideoContest.createTransitonNode().
   */
  function TransitionNode(gl, renderGraph, definition) {
    var _this;
    _classCallCheck(this, TransitionNode);
    _this = _super.call(this, gl, renderGraph, definition);
    _this._transitions = {};
    //save a version of the original property values
    _this._initialPropertyValues = {};
    for (var propertyName in _this._properties) {
      _this._initialPropertyValues[propertyName] = _this._properties[propertyName].value;
    }
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(TransitionNode, [{
    key: "_doesTransitionFitOnTimeline",
    value: function _doesTransitionFitOnTimeline(testTransition) {
      if (this._transitions[testTransition.property] === undefined) return true;
      var _iterator = _createForOfIteratorHelper(this._transitions[testTransition.property]),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var transition = _step.value;
          if (testTransition.start > transition.start && testTransition.start < transition.end) return false;
          if (testTransition.end > transition.start && testTransition.end < transition.end) return false;
          if (transition.start > testTransition.start && transition.start < testTransition.end) return false;
          if (transition.end > testTransition.start && transition.end < testTransition.end) return false;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
  }, {
    key: "_insertTransitionInTimeline",
    value: function _insertTransitionInTimeline(transition) {
      if (this._transitions[transition.property] === undefined) this._transitions[transition.property] = [];
      this._transitions[transition.property].push(transition);
      this._transitions[transition.property].sort(function (a, b) {
        return a.start - b.start;
      });
    }
    /**
     * Create a transition on the timeline.
     *
     * @param {number} startTime - The time at which the transition should start (relative to currentTime of video context).
     * @param {number} endTime - The time at which the transition should be completed by (relative to currentTime of video context).
     * @param {number} currentValue - The value to start the transition at.
     * @param {number} targetValue - The value to transition to by endTime.
     * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
     *
     * @return {Boolean} returns True if a transition is successfully added, false otherwise.
     */
  }, {
    key: "transition",
    value: function transition(startTime, endTime, currentValue, targetValue) {
      var propertyName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "mix";
      var transition = {
        start: startTime + this._currentTime,
        end: endTime + this._currentTime,
        current: currentValue,
        target: targetValue,
        property: propertyName
      };
      if (!this._doesTransitionFitOnTimeline(transition)) return false;
      this._insertTransitionInTimeline(transition);
      return true;
    }
    /**
     * Create a transition on the timeline at an absolute time.
     *
     * @param {number} startTime - The time at which the transition should start (relative to time 0).
     * @param {number} endTime - The time at which the transition should be completed by (relative to time 0).
     * @param {number} currentValue - The value to start the transition at.
     * @param {number} targetValue - The value to transition to by endTime.
     * @param {String} propertyName - The name of the property to clear transitions on, if undefined default to "mix".
     *
     * @return {Boolean} returns True if a transition is successfully added, false otherwise.
     */
  }, {
    key: "transitionAt",
    value: function transitionAt(startTime, endTime, currentValue, targetValue) {
      var propertyName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "mix";
      var transition = {
        start: startTime,
        end: endTime,
        current: currentValue,
        target: targetValue,
        property: propertyName
      };
      if (!this._doesTransitionFitOnTimeline(transition)) return false;
      this._insertTransitionInTimeline(transition);
      return true;
    }
    /**
     * Clear all transistions on the passed property. If no property is defined clear all transitions on the node.
     *
     * @param {String} propertyName - The name of the property to clear transitions on, if undefined clear all transitions on the node.
     */
  }, {
    key: "clearTransitions",
    value: function clearTransitions(propertyName) {
      if (propertyName === undefined) {
        this._transitions = {};
      } else {
        this._transitions[propertyName] = [];
      }
    }
    /**
     * Clear a transistion on the passed property that the specified time lies within.
     *
     * @param {String} propertyName - The name of the property to clear a transition on.
     * @param {number} time - A time which lies within the property you're trying to clear.
     *
     * @return {Boolean} returns True if a transition is removed, false otherwise.
     */
  }, {
    key: "clearTransition",
    value: function clearTransition(propertyName, time) {
      var transitionIndex = undefined;
      for (var i = 0; i < this._transitions[propertyName].length; i++) {
        var transition = this._transitions[propertyName][i];
        if (time > transition.start && time < transition.end) {
          transitionIndex = i;
        }
      }
      if (transitionIndex !== undefined) {
        this._transitions[propertyName].splice(transitionIndex, 1);
        return true;
      }
      return false;
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      _get(_getPrototypeOf(TransitionNode.prototype), "_update", this).call(this, currentTime);
      for (var propertyName in this._transitions) {
        var value = this[propertyName];
        if (this._transitions[propertyName].length > 0) {
          value = this._transitions[propertyName][0].current;
        }
        var transitionActive = false;
        for (var i = 0; i < this._transitions[propertyName].length; i++) {
          var transition = this._transitions[propertyName][i];
          if (currentTime > transition.end) {
            value = transition.target;
            continue;
          }
          if (currentTime > transition.start && currentTime < transition.end) {
            var difference = transition.target - transition.current;
            var progress = (this._currentTime - transition.start) / (transition.end - transition.start);
            transitionActive = true;
            this[propertyName] = transition.current + difference * progress;
            break;
          }
        }
        if (!transitionActive) this[propertyName] = value;
      }
    }
  }]);
  return TransitionNode;
}(effectnode_1["default"]);
exports["default"] = TransitionNode;

/***/ }),

/***/ "./src/SourceNodes/audionode.ts":
/*!**************************************!*\
  !*** ./src/SourceNodes/audionode.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AUDIOTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var medianode_1 = __importDefault(__webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.ts"));
var TYPE = "AudioNode";
exports.AUDIOTYPE = TYPE;
var AudioNode = /*#__PURE__*/function (_medianode_1$default) {
  _inherits(AudioNode, _medianode_1$default);
  var _super = _createSuper(AudioNode);
  /**
   * Initialise an instance of an AudioNode.
   * This should not be called directly, but created through a call to videoContext.audio();
   */
  function AudioNode() {
    var _this;
    _classCallCheck(this, AudioNode);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this._displayName = TYPE;
    _this._elementType = "audio";
    return _this;
  }
  _createClass(AudioNode, [{
    key: "_update",
    value: function _update(currentTime) {
      _get(_getPrototypeOf(AudioNode.prototype), "_update", this).call(this, currentTime, false);
    }
  }]);
  return AudioNode;
}(medianode_1["default"]);
exports["default"] = AudioNode;

/***/ }),

/***/ "./src/SourceNodes/canvasnode.ts":
/*!***************************************!*\
  !*** ./src/SourceNodes/canvasnode.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CANVASTYPE = void 0;
var sourcenode_1 = __importStar(__webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.ts"));
var TYPE = "CanvasNode";
exports.CANVASTYPE = TYPE;
var CanvasNode = /*#__PURE__*/function (_sourcenode_1$default) {
  _inherits(CanvasNode, _sourcenode_1$default);
  var _super = _createSuper(CanvasNode);
  /**
   * Initialise an instance of a CanvasNode.
   * This should not be called directly, but created through a call to videoContext.createCanvasNode();
   */
  function CanvasNode(canvas, gl, renderGraph, currentTime) {
    var _this;
    var preloadTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
    _classCallCheck(this, CanvasNode);
    _this = _super.call(this, canvas, gl, renderGraph, currentTime);
    _this._preloadTime = preloadTime;
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(CanvasNode, [{
    key: "_load",
    value: function _load() {
      _get(_getPrototypeOf(CanvasNode.prototype), "_load", this).call(this);
      this._ready = true;
      this._triggerCallbacks("loaded");
    }
  }, {
    key: "_unload",
    value: function _unload() {
      _get(_getPrototypeOf(CanvasNode.prototype), "_unload", this).call(this);
      this._ready = false;
    }
  }, {
    key: "_seek",
    value: function _seek(time) {
      _get(_getPrototypeOf(CanvasNode.prototype), "_seek", this).call(this, time);
      if (this.state === sourcenode_1.SOURCENODESTATE.playing || this.state === sourcenode_1.SOURCENODESTATE.paused) {
        if (this._element === undefined) this._load();
        this._ready = false;
      }
      if ((this._state === sourcenode_1.SOURCENODESTATE.sequenced || this._state === sourcenode_1.SOURCENODESTATE.ended) && this._element !== undefined) {
        this._unload();
      }
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      //if (!super._update(currentTime)) return false;
      _get(_getPrototypeOf(CanvasNode.prototype), "_update", this).call(this, currentTime);
      if (this._startTime - this._currentTime <= this._preloadTime && this._state !== sourcenode_1.SOURCENODESTATE.waiting && this._state !== sourcenode_1.SOURCENODESTATE.ended) this._load();
      if (this._state === sourcenode_1.SOURCENODESTATE.playing) {
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.paused) {
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.ended && this._element !== undefined) {
        this._unload();
        return false;
      }
    }
  }]);
  return CanvasNode;
}(sourcenode_1["default"]);
exports["default"] = CanvasNode;

/***/ }),

/***/ "./src/SourceNodes/imagenode.ts":
/*!**************************************!*\
  !*** ./src/SourceNodes/imagenode.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.IMAGETYPE = void 0;
var sourcenode_1 = __importStar(__webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.ts"));
var TYPE = "CanvasNode";
exports.IMAGETYPE = TYPE;
var ImageNode = /*#__PURE__*/function (_sourcenode_1$default) {
  _inherits(ImageNode, _sourcenode_1$default);
  var _super = _createSuper(ImageNode);
  /**
   * Initialise an instance of an ImageNode.
   * This should not be called directly, but created through a call to videoContext.createImageNode();
   */
  function ImageNode(src, gl, renderGraph, currentTime) {
    var _this;
    var preloadTime = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 4;
    var attributes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
    _classCallCheck(this, ImageNode);
    _this = _super.call(this, src, gl, renderGraph, currentTime);
    _this._preloadTime = preloadTime;
    _this._attributes = attributes;
    _this._textureUploaded = false;
    _this._displayName = TYPE;
    return _this;
  }
  _createClass(ImageNode, [{
    key: "elementURL",
    get: function get() {
      return this._elementURL;
    }
  }, {
    key: "_load",
    value: function _load() {
      var _this2 = this;
      if (this._image !== undefined) {
        for (var key in this._attributes) {
          this._image[key] = this._attributes[key];
        }
        return;
      }
      if (this._isResponsibleForElementLifeCycle) {
        _get(_getPrototypeOf(ImageNode.prototype), "_load", this).call(this);
        this._image = new Image();
        this._image.setAttribute("crossorigin", "anonymous");
        // It's important to set the `onload` event before the `src` property
        // https://stackoverflow.com/questions/12354865/image-onload-event-and-browser-cache?answertab=active#tab-top
        this._image.onload = function () {
          _this2._ready = true;
          if (window.createImageBitmap) {
            window.createImageBitmap(_this2._image, 0, 0, _this2._image.width, _this2._image.height, {
              imageOrientation: "flipY"
            }).then(function (imageBitmap) {
              _this2._element = imageBitmap;
              _this2._triggerCallbacks("loaded");
            });
          } else {
            _this2._element = _this2._image;
            _this2._triggerCallbacks("loaded");
          }
        };
        this._image.src = this._elementURL;
        this._image.onerror = function () {
          console.error("ImageNode failed to load. url:", _this2._elementURL);
        };
        for (var _key in this._attributes) {
          this._image[_key] = this._attributes[_key];
        }
      }
      this._image.onerror = function () {
        console.debug("Error with element", _this2._image);
        _this2._state = sourcenode_1.SOURCENODESTATE.error;
        //Event though there's an error ready should be set to true so the node can output transparenn
        _this2._ready = true;
        _this2._triggerCallbacks("error");
      };
    }
  }, {
    key: "_unload",
    value: function _unload() {
      _get(_getPrototypeOf(ImageNode.prototype), "_unload", this).call(this);
      if (this._isResponsibleForElementLifeCycle) {
        if (this._image !== undefined) {
          this._image.src = "";
          this._image.onerror = null;
          this._image = undefined;
          delete this._image;
        }
        if (this._element instanceof window.ImageBitmap) {
          this._element.close();
        }
      }
      this._ready = false;
    }
  }, {
    key: "_seek",
    value: function _seek(time) {
      _get(_getPrototypeOf(ImageNode.prototype), "_seek", this).call(this, time);
      if (this.state === sourcenode_1.SOURCENODESTATE.playing || this.state === sourcenode_1.SOURCENODESTATE.paused) {
        if (this._image === undefined) this._load();
      }
      if ((this._state === sourcenode_1.SOURCENODESTATE.sequenced || this._state === sourcenode_1.SOURCENODESTATE.ended) && this._element !== undefined) {
        this._unload();
      }
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      //if (!super._update(currentTime)) return false;
      if (this._textureUploaded) {
        _get(_getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime, false);
      } else {
        _get(_getPrototypeOf(ImageNode.prototype), "_update", this).call(this, currentTime);
      }
      if (this._startTime - this._currentTime <= this._preloadTime && this._state !== sourcenode_1.SOURCENODESTATE.waiting && this._state !== sourcenode_1.SOURCENODESTATE.ended) this._load();
      if (this._state === sourcenode_1.SOURCENODESTATE.playing) {
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.paused) {
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.ended && this._image !== undefined) {
        this._unload();
        return false;
      }
    }
  }]);
  return ImageNode;
}(sourcenode_1["default"]);
exports["default"] = ImageNode;

/***/ }),

/***/ "./src/SourceNodes/medianode.ts":
/*!**************************************!*\
  !*** ./src/SourceNodes/medianode.ts ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }
function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new TypeError('failed to set property'); } return value; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var sourcenode_1 = __importStar(__webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.ts"));
var MediaNode = /*#__PURE__*/function (_sourcenode_1$default) {
  _inherits(MediaNode, _sourcenode_1$default);
  var _super = _createSuper(MediaNode);
  /**
   * Initialise an instance of a MediaNode.
   * This should not be called directly, but extended by other Node Types which use a `HTMLMediaElement`.
   */
  function MediaNode(src, gl, renderGraph, currentTime) {
    var _this;
    var globalPlaybackRate = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1.0;
    var sourceOffset = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var preloadTime = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 4;
    var mediaElementCache = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : undefined;
    var attributes = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : {};
    _classCallCheck(this, MediaNode);
    _this = _super.call(this, src, gl, renderGraph, currentTime);
    _this._preloadTime = preloadTime;
    _this._sourceOffset = sourceOffset;
    _this._globalPlaybackRate = globalPlaybackRate;
    _this._mediaElementCache = mediaElementCache;
    _this._playbackRate = 1.0;
    _this._playbackRateUpdated = true;
    _this._attributes = Object.assign({
      volume: 1.0
    }, attributes);
    _this._loopElement = false;
    _this._isElementPlaying = false;
    if (_this._attributes.loop) {
      _this._loopElement = _this._attributes.loop;
    }
    return _this;
  }
  _createClass(MediaNode, [{
    key: "playbackRate",
    get: function get() {
      return this._playbackRate;
    },
    set: function set(playbackRate) {
      this._playbackRate = playbackRate;
      this._playbackRateUpdated = true;
    }
  }, {
    key: "stretchPaused",
    get: function get() {
      return this._stretchPaused;
    },
    set: function set(stretchPaused) {
      _set(_getPrototypeOf(MediaNode.prototype), "stretchPaused", stretchPaused, this, true);
      if (this._element) {
        if (this._stretchPaused) {
          this._element.pause();
        } else {
          if (this._state === sourcenode_1.SOURCENODESTATE.playing) {
            this._element.play();
          }
        }
      }
    }
  }, {
    key: "elementURL",
    get: function get() {
      return this._elementURL;
    }
    /**
     * @property {Boolean}
     * @summary - Check if the element is waiting on the network to continue playback
     */
  }, {
    key: "_buffering",
    get: function get() {
      if (this._element) {
        return this._element.readyState < HTMLMediaElement.HAVE_FUTURE_DATA;
      }
      return false;
    }
  }, {
    key: "volume",
    set: function set(volume) {
      this._attributes.volume = volume;
      if (this._element !== undefined) this._element.volume = this._attributes.volume;
    }
  }, {
    key: "_triggerLoad",
    value: function _triggerLoad() {
      var _this2 = this;
      // If the user hasn't supplied an element, videocontext is responsible for the element
      if (this._isResponsibleForElementLifeCycle) {
        if (this._mediaElementCache) {
          /**
           * Get a cached video element and also pass this instance so the
           * cache can access the current play state.
           */
          this._element = this._mediaElementCache.getElementAndLinkToNode(this);
        } else {
          this._element = document.createElement(this._elementType);
          this._element.setAttribute("crossorigin", "anonymous");
          this._element.setAttribute("webkit-playsinline", "");
          this._element.setAttribute("playsinline", "");
          // This seems necessary to allow using video as a texture. See:
          // https://bugs.chromium.org/p/chromium/issues/detail?id=898550
          // https://github.com/pixijs/pixi.js/issues/5996
          this._element.preload = "auto";
          this._playbackRateUpdated = true;
        }
        this._element.volume = this._attributes.volume;
        if (window.MediaStream !== undefined && this._elementURL instanceof MediaStream) {
          this._element.srcObject = this._elementURL;
        } else {
          this._element.src = this._elementURL;
        }
      }
      // at this stage either the user or the element cache should have provided an element
      if (this._element) {
        for (var key in this._attributes) {
          this._element[key] = this._attributes[key];
        }
        var currentTimeOffset = 0;
        if (this._currentTime > this._startTime) currentTimeOffset = this._currentTime - this._startTime;
        this._element.currentTime = this._sourceOffset + currentTimeOffset;
        this._element.onerror = function () {
          if (_this2._element === undefined) return;
          console.debug("Error with element", _this2._element);
          _this2._state = sourcenode_1.SOURCENODESTATE.error;
          //Event though there's an error ready should be set to true so the node can output transparenn
          _this2._ready = true;
          _this2._triggerCallbacks("error");
        };
      } else {
        // If the element doesn't exist for whatever reason enter the error state.
        this._state = sourcenode_1.SOURCENODESTATE.error;
        this._ready = true;
        this._triggerCallbacks("error");
      }
      this._loadTriggered = true;
    }
    /**
     * _load has two functions:
     *
     * 1. `_triggerLoad` which ensures the element has the correct src and is at the correct currentTime,
     *     so that the browser can start fetching media.
     *
     * 2.  `shouldPollForElementReadyState` waits until the element has a "readState" that signals there
     *     is enough media to start playback. This is a little confusing as currently structured.
     *     We're using the _update loop to poll the _load function which checks the element status.
     *     When ready we fire off the "loaded callback"
     *
     */
  }, {
    key: "_load",
    value: function _load() {
      _get(_getPrototypeOf(MediaNode.prototype), "_load", this).call(this);
      /**
       * We've got to be careful here as _load is called many times whilst waiting for the element to buffer
       * and this function should only be called once.
       * This is step one in what should be a more thorough refactor
       */
      if (!this._loadTriggered) {
        this._triggerLoad();
      }
      var shouldPollForElementReadyState = this._element !== undefined;
      /**
       * this expression is effectively polling the element, waiting for it to buffer
       * it gets called a lot of time
       */
      if (shouldPollForElementReadyState) {
        if (this._element.readyState > 3 && !this._element.seeking) {
          // at this point the element has enough data for current playback position
          // and at least a couple of frames into the future
          // Check if the duration has changed. Update if necessary.
          // this could potentially go in the normal update loop but I don't want to change
          // too many things at once
          if (this._loopElement === false) {
            if (this._stopTime === Infinity || this._stopTime == undefined) {
              this._stopTime = this._startTime + this._element.duration;
              this._triggerCallbacks("durationchange", this.duration);
            }
          }
          // signal to user that this node has "loaded"
          if (this._ready !== true) {
            this._triggerCallbacks("loaded");
            this._playbackRateUpdated = true;
          }
          this._ready = true;
        } else {
          if (this._state !== sourcenode_1.SOURCENODESTATE.error) {
            this._ready = false;
          }
        }
      }
    }
  }, {
    key: "_unload",
    value: function _unload() {
      _get(_getPrototypeOf(MediaNode.prototype), "_unload", this).call(this);
      if (this._isResponsibleForElementLifeCycle && this._element !== undefined) {
        this._element.removeAttribute("src");
        this._element.srcObject = undefined;
        this._element.load();
        for (var key in this._attributes) {
          this._element.removeAttribute(key);
        }
        // Unlink this form the cache, freeing up the element for another media node
        if (this._mediaElementCache) this._mediaElementCache.unlinkNodeFromElement(this._element);
        this._element = undefined;
        if (!this._mediaElementCache) delete this._element;
      }
      // reset class to initial state
      this._ready = false;
      this._isElementPlaying = false;
      // For completeness. I couldn't find a path that required reuse of this._loadTriggered after _unload.
      this._loadTriggered = false;
    }
  }, {
    key: "_seek",
    value: function _seek(time) {
      _get(_getPrototypeOf(MediaNode.prototype), "_seek", this).call(this, time);
      if (this.state === sourcenode_1.SOURCENODESTATE.playing || this.state === sourcenode_1.SOURCENODESTATE.paused) {
        if (this._element === undefined) this._load();
        var relativeTime = this._currentTime - this._startTime + this._sourceOffset;
        this._element.currentTime = relativeTime;
        this._ready = false;
      }
      if ((this._state === sourcenode_1.SOURCENODESTATE.sequenced || this._state === sourcenode_1.SOURCENODESTATE.ended) && this._element !== undefined) {
        this._unload();
      }
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      //if (!super._update(currentTime)) return false;
      _get(_getPrototypeOf(MediaNode.prototype), "_update", this).call(this, currentTime, triggerTextureUpdate);
      //check if the media has ended
      if (this._element !== undefined) {
        if (this._element.ended) {
          this._state = sourcenode_1.SOURCENODESTATE.ended;
          this._triggerCallbacks("ended");
        }
      }
      if (this._startTime - this._currentTime <= this._preloadTime && this._state !== sourcenode_1.SOURCENODESTATE.waiting && this._state !== sourcenode_1.SOURCENODESTATE.ended) this._load();
      if (this._state === sourcenode_1.SOURCENODESTATE.playing) {
        if (this._playbackRateUpdated) {
          this._element.playbackRate = this._globalPlaybackRate * this._playbackRate;
          this._playbackRateUpdated = false;
        }
        if (!this._isElementPlaying) {
          this._element.play();
          if (this._stretchPaused) {
            this._element.pause();
          }
          this._isElementPlaying = true;
        }
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.paused) {
        this._element.pause();
        this._isElementPlaying = false;
        return true;
      } else if (this._state === sourcenode_1.SOURCENODESTATE.ended && this._element !== undefined) {
        this._element.pause();
        if (this._isElementPlaying) {
          this._unload();
        }
        return false;
      }
    }
  }, {
    key: "clearTimelineState",
    value: function clearTimelineState() {
      _get(_getPrototypeOf(MediaNode.prototype), "clearTimelineState", this).call(this);
      if (this._element !== undefined) {
        this._element.pause();
        this._isElementPlaying = false;
      }
      this._unload();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this._element) this._element.pause();
      _get(_getPrototypeOf(MediaNode.prototype), "destroy", this).call(this);
    }
  }]);
  return MediaNode;
}(sourcenode_1["default"]);
exports["default"] = MediaNode;
module.exports = exports.default;

/***/ }),

/***/ "./src/SourceNodes/nodes.ts":
/*!**********************************!*\
  !*** ./src/SourceNodes/nodes.ts ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var audionode_1 = __importDefault(__webpack_require__(/*! ./audionode */ "./src/SourceNodes/audionode.ts"));
var canvasnode_1 = __importDefault(__webpack_require__(/*! ./canvasnode */ "./src/SourceNodes/canvasnode.ts"));
var imagenode_1 = __importDefault(__webpack_require__(/*! ./imagenode */ "./src/SourceNodes/imagenode.ts"));
var medianode_1 = __importDefault(__webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.ts"));
var sourcenode_1 = __importDefault(__webpack_require__(/*! ./sourcenode */ "./src/SourceNodes/sourcenode.ts"));
var videonode_1 = __importDefault(__webpack_require__(/*! ./videonode */ "./src/SourceNodes/videonode.ts"));
var NODES = {
  AudioNode: audionode_1["default"],
  CanvasNode: canvasnode_1["default"],
  ImageNode: imagenode_1["default"],
  MediaNode: medianode_1["default"],
  SourceNode: sourcenode_1["default"],
  VideoNode: videonode_1["default"]
};
exports["default"] = NODES;
module.exports = exports.default;

/***/ }),

/***/ "./src/SourceNodes/sourcenode.ts":
/*!***************************************!*\
  !*** ./src/SourceNodes/sourcenode.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SOURCETYPE = exports.SOURCENODESTATE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var utils_1 = __webpack_require__(/*! ../utils */ "./src/utils.ts");
var graphnode_1 = __importDefault(__webpack_require__(/*! ../graphnode */ "./src/graphnode.ts"));
var STATE = {
  waiting: 0,
  sequenced: 1,
  playing: 2,
  paused: 3,
  ended: 4,
  error: 5
};
exports.SOURCENODESTATE = STATE;
var TYPE = "SourceNode";
exports.SOURCETYPE = TYPE;
var SourceNode = /*#__PURE__*/function (_graphnode_1$default) {
  _inherits(SourceNode, _graphnode_1$default);
  var _super = _createSuper(SourceNode);
  /**
   * Initialise an instance of a SourceNode.
   * This is the base class for other Nodes which generate media to be passed into the processing pipeline.
   */
  function SourceNode(src, gl, renderGraph, currentTime) {
    var _this;
    _classCallCheck(this, SourceNode);
    _this = _super.call(this, gl, renderGraph, [], true);
    _this._element = undefined;
    _this._elementURL = undefined;
    _this._isResponsibleForElementLifeCycle = true;
    if (typeof src === "string" || window.MediaStream !== undefined && src instanceof MediaStream) {
      //create the node from the passed URL or MediaStream
      _this._elementURL = src;
    } else {
      //use the passed element to create the SourceNode
      _this._element = src;
      _this._isResponsibleForElementLifeCycle = false;
    }
    _this._state = STATE.waiting;
    _this._currentTime = currentTime;
    _this._startTime = NaN;
    _this._stopTime = Infinity;
    _this._ready = false;
    _this._loadCalled = false;
    _this._stretchPaused = false;
    _this._texture = (0, utils_1.createElementTexture)(gl);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    _this._callbacks = [];
    _this._renderPaused = false;
    _this._displayName = TYPE;
    return _this;
  }
  /**
   * Returns the state of the node.
   * 0 - Waiting, start() has not been called on it yet.
   * 1 - Sequenced, start() has been called but it is not playing yet.
   * 2 - Playing, the node is playing.
   * 3 - Paused, the node is paused.
   * 4 - Ended, playback of the node has finished.
   *
   * @example
   * var ctx = new VideoContext();
   * var videoNode = ctx.createVideoSourceNode('video.mp4');
   * console.log(videoNode.state); //will output 0 (for waiting)
   * videoNode.start(5);
   * console.log(videoNode.state); //will output 1 (for sequenced)
   * videoNode.stop(10);
   * ctx.play();
   * console.log(videoNode.state); //will output 2 (for playing)
   * ctx.paused();
   * console.log(videoNode.state); //will output 3 (for paused)
   */
  _createClass(SourceNode, [{
    key: "state",
    get: function get() {
      return this._state;
    }
    /**
     * Returns the underlying DOM element which represents this source node.
     * Note: If a source node is created with a url rather than passing in an existing element then this will return undefined until the source node preloads the element.
     *
     * @return {Element} The underlying DOM element representing the media for the node. If the lifecycle of the video is owned UNSIGNED_BYTE the node itself, this can return undefined if the element hasn't been loaded yet.
     *
     * @example
     * //Accessing the Element on a VideoNode created via a URL
     * var ctx = new VideoContext();
     * var videoNode = ctx.createVideoSourceNode('video.mp4');
     * videoNode.start(0);
     * videoNode.stop(5);
     * //When the node starts playing the element should exist so set it's volume to 0
     * videoNode.regsiterCallback("play", function(){videoNode.element.volume = 0;});
     *
     *
     * @example
     * //Accessing the Element on a VideoNode created via an already existing element
     * var ctx = new VideoContext();
     * var videoElement = document.createElement("video");
     * var videoNode = ctx.createVideoSourceNode(videoElement);
     * videoNode.start(0);
     * videoNode.stop(5);
     * //The elemnt can be accessed any time because it's lifecycle is managed outside of the VideoContext
     * videoNode.element.volume = 0;
     *
     */
  }, {
    key: "element",
    get: function get() {
      return this._element;
    }
    /**
     * Returns the duration of the node on a timeline. If no start time is set will return undefiend, if no stop time is set will return Infinity.
     *
     * @return {number} The duration of the node in seconds.
     *
     * @example
     * var ctx = new VideoContext();
     * var videoNode = ctx.createVideoSourceNode('video.mp4');
     * videoNode.start(5);
     * videoNode.stop(10);
     * console.log(videoNode.duration); //will output 10
     */
  }, {
    key: "duration",
    get: function get() {
      if (isNaN(this._startTime)) return undefined;
      if (this._stopTime === Infinity) return Infinity;
      return this._stopTime - this._startTime;
    }
  }, {
    key: "stretchPaused",
    get: function get() {
      return this._stretchPaused;
    },
    set: function set(stretchPaused) {
      this._stretchPaused = stretchPaused;
    }
  }, {
    key: "_load",
    value: function _load() {
      if (!this._loadCalled) {
        this._triggerCallbacks("load");
        this._loadCalled = true;
      }
    }
  }, {
    key: "_unload",
    value: function _unload() {
      this._triggerCallbacks("destroy");
      this._loadCalled = false;
    }
    /**
     * Register callbacks against one of these events: "load", "destroy", "seek", "pause", "play", "ended", "durationchange", "loaded", "error"
     *
     * @param {String} type - the type of event to register the callback against.
     * @param {function} func - the function to call.
     *
     * @example
     * var ctx = new VideoContext();
     * var videoNode = ctx.createVideoSourceNode('video.mp4');
     *
     * videoNode.registerCallback("load", function(){"video is loading"});
     * videoNode.registerCallback("play", function(){"video is playing"});
     * videoNode.registerCallback("ended", function(){"video has eneded"});
     *
     */
  }, {
    key: "registerCallback",
    value: function registerCallback(type, func) {
      this._callbacks.push({
        type: type,
        func: func
      });
    }
    /**
     * Remove callback.
     *
     * @param {function} [func] - the callback to remove, if undefined will remove all callbacks for this node.
     *
     * @example
     * var ctx = new VideoContext();
     * var videoNode = ctx.createVideoSourceNode('video.mp4');
     *
     * videoNode.registerCallback("load", function(){"video is loading"});
     * videoNode.registerCallback("play", function(){"video is playing"});
     * videoNode.registerCallback("ended", function(){"video has eneded"});
     * videoNode.unregisterCallback(); //remove all of the three callbacks.
     *
     */
  }, {
    key: "unregisterCallback",
    value: function unregisterCallback(func) {
      var toRemove = [];
      var _iterator = _createForOfIteratorHelper(this._callbacks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _callback = _step.value;
          if (func === undefined) {
            toRemove.push(_callback);
          } else if (_callback.func === func) {
            toRemove.push(_callback);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var _i = 0, _toRemove = toRemove; _i < _toRemove.length; _i++) {
        var callback = _toRemove[_i];
        var index = this._callbacks.indexOf(callback);
        this._callbacks.splice(index, 1);
      }
    }
  }, {
    key: "_triggerCallbacks",
    value: function _triggerCallbacks(type, data) {
      var _iterator2 = _createForOfIteratorHelper(this._callbacks),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var callback = _step2.value;
          if (callback.type === type) {
            if (data !== undefined) {
              callback.func(this, data);
            } else {
              callback.func(this);
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    /**
     * Start playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
     *
     * @param {number} time - the time from the currentTime of the VideoContext which to start playing, if negative will play as soon as possible.
     * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
     */
  }, {
    key: "start",
    value: function start(time) {
      if (this._state !== STATE.waiting) {
        console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
        return false;
      }
      this._startTime = this._currentTime + time;
      this._state = STATE.sequenced;
      return true;
    }
    /**
     * Start playback at an absolute time ont the VideoContext's timeline.
     *
     * @param {number} time - the time on the VideoContexts timeline to start playing.
     * @return {boolean} Will return true is seqeuncing has succeded, or false if it is already sequenced.
     */
  }, {
    key: "startAt",
    value: function startAt(time) {
      if (this._state !== STATE.waiting) {
        console.debug("SourceNode is has already been sequenced. Can't sequence twice.");
        return false;
      }
      this._startTime = time;
      this._state = STATE.sequenced;
      return true;
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    }
    /**
     * Stop playback at VideoContext.currentTime plus passed time. If passed time is negative, will play as soon as possible.
     *
     * @param {number} time - the time from the currentTime of the video context which to stop playback.
     * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
     */
  }, {
    key: "stop",
    value: function stop(time) {
      if (this._state === STATE.ended) {
        console.debug("SourceNode has already ended. Cannot call stop.");
        return false;
      } else if (this._state === STATE.waiting) {
        console.debug("SourceNode must have start called before stop is called");
        return false;
      }
      if (this._currentTime + time <= this._startTime) {
        console.debug("SourceNode must have a stop time after it's start time, not before.");
        return false;
      }
      this._stopTime = this._currentTime + time;
      this._stretchPaused = false;
      this._triggerCallbacks("durationchange", this.duration);
      return true;
    }
    /**
     * Stop playback at an absolute time ont the VideoContext's timeline.
     *
     * @param {number} time - the time on the VideoContexts timeline to stop playing.
     * @return {boolean} Will return true is seqeuncing has succeded, or false if the playback has already ended or if start hasn't been called yet, or if time is less than the start time.
     */
  }, {
    key: "stopAt",
    value: function stopAt(time) {
      if (this._state === STATE.ended) {
        console.debug("SourceNode has already ended. Cannot call stop.");
        return false;
      } else if (this._state === STATE.waiting) {
        console.debug("SourceNode must have start called before stop is called");
        return false;
      }
      if (time <= this._startTime) {
        console.debug("SourceNode must have a stop time after it's start time, not before.");
        return false;
      }
      this._stopTime = time;
      this._stretchPaused = false;
      this._triggerCallbacks("durationchange", this.duration);
      return true;
    }
  }, {
    key: "stopTime",
    get: function get() {
      return this._stopTime;
    }
  }, {
    key: "_seek",
    value: function _seek(time) {
      this._renderPaused = false;
      this._triggerCallbacks("seek", time);
      if (this._state === STATE.waiting) return;
      if (time < this._startTime) {
        (0, utils_1.clearTexture)(this._gl, this._texture);
        this._state = STATE.sequenced;
      }
      if (time >= this._startTime && this._state !== STATE.paused) {
        this._state = STATE.playing;
      }
      if (time >= this._stopTime) {
        (0, utils_1.clearTexture)(this._gl, this._texture);
        this._triggerCallbacks("ended");
        this._state = STATE.ended;
      }
      //update the current time
      this._currentTime = time;
    }
  }, {
    key: "_pause",
    value: function _pause() {
      if (this._state === STATE.playing || this._currentTime === 0 && this._startTime === 0) {
        this._triggerCallbacks("pause");
        this._state = STATE.paused;
        this._renderPaused = false;
      }
    }
  }, {
    key: "_play",
    value: function _play() {
      if (this._state === STATE.paused) {
        this._triggerCallbacks("play");
        this._state = STATE.playing;
      }
    }
  }, {
    key: "_isReady",
    value: function _isReady() {
      if (this._buffering) {
        return false;
      }
      if (this._state === STATE.playing || this._state === STATE.paused || this._state === STATE.error) {
        return this._ready;
      }
      return true;
    }
  }, {
    key: "_update",
    value: function _update(currentTime) {
      var triggerTextureUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this._rendered = true;
      var timeDelta = currentTime - this._currentTime;
      //update the current time
      this._currentTime = currentTime;
      //update the state
      if (this._state === STATE.waiting || this._state === STATE.ended || this._state === STATE.error) return false;
      this._triggerCallbacks("render", currentTime);
      if (currentTime < this._startTime) {
        (0, utils_1.clearTexture)(this._gl, this._texture);
        this._state = STATE.sequenced;
      }
      if (currentTime >= this._startTime && this._state !== STATE.paused && this._state !== STATE.error) {
        if (this._state !== STATE.playing) this._triggerCallbacks("play");
        this._state = STATE.playing;
      }
      if (currentTime >= this._stopTime) {
        (0, utils_1.clearTexture)(this._gl, this._texture);
        this._triggerCallbacks("ended");
        this._state = STATE.ended;
      }
      //update this source nodes texture
      if (this._element === undefined || this._ready === false) return true;
      if (!this._renderPaused && this._state === STATE.paused) {
        if (triggerTextureUpdate) (0, utils_1.updateTexture)(this._gl, this._texture, this._element);
        this._renderPaused = true;
      }
      if (this._state === STATE.playing) {
        if (triggerTextureUpdate) (0, utils_1.updateTexture)(this._gl, this._texture, this._element);
        if (this._stretchPaused) {
          this._stopTime += timeDelta;
        }
      }
      return true;
    }
    /**
     * Clear any timeline state the node currently has, this puts the node in the "waiting" state, as if neither start nor stop had been called.
     */
  }, {
    key: "clearTimelineState",
    value: function clearTimelineState() {
      this._startTime = NaN;
      this._stopTime = Infinity;
      this._state = STATE.waiting;
    }
    /**
     * Destroy and clean-up the node.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this._unload();
      _get(_getPrototypeOf(SourceNode.prototype), "destroy", this).call(this);
      this.unregisterCallback();
      delete this._element;
      this._elementURL = undefined;
      this._state = STATE.waiting;
      this._currentTime = 0;
      this._startTime = NaN;
      this._stopTime = Infinity;
      this._ready = false;
      this._loadCalled = false;
      this._gl.deleteTexture(this._texture);
      this._texture = undefined;
    }
  }]);
  return SourceNode;
}(graphnode_1["default"]);
exports["default"] = SourceNode;

/***/ }),

/***/ "./src/SourceNodes/videonode.ts":
/*!**************************************!*\
  !*** ./src/SourceNodes/videonode.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.VIDEOTYPE = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var medianode_1 = __importDefault(__webpack_require__(/*! ./medianode */ "./src/SourceNodes/medianode.ts"));
var TYPE = "VideoNode";
exports.VIDEOTYPE = TYPE;
var VideoNode = /*#__PURE__*/function (_medianode_1$default) {
  _inherits(VideoNode, _medianode_1$default);
  var _super = _createSuper(VideoNode);
  /**
   * Initialise an instance of a VideoNode.
   * This should not be called directly, but created through a call to videoContext.createVideoNode();
   */
  function VideoNode() {
    var _this;
    _classCallCheck(this, VideoNode);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this._displayName = TYPE;
    _this._elementType = "video";
    return _this;
  }
  return _createClass(VideoNode);
}(medianode_1["default"]);
exports["default"] = VideoNode;

/***/ }),

/***/ "./src/exceptions.ts":
/*!***************************!*\
  !*** ./src/exceptions.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.RenderException = exports.ConnectException = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var ConnectException = /*#__PURE__*/function (_Error) {
  _inherits(ConnectException, _Error);
  var _super = _createSuper(ConnectException);
  function ConnectException(message) {
    var _this;
    _classCallCheck(this, ConnectException);
    _this = _super.call(this, message);
    _this.name = "ConnectException";
    return _this;
  }
  return _createClass(ConnectException);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.ConnectException = ConnectException;
var RenderException = /*#__PURE__*/function (_Error2) {
  _inherits(RenderException, _Error2);
  var _super2 = _createSuper(RenderException);
  function RenderException(message) {
    var _this2;
    _classCallCheck(this, RenderException);
    _this2 = _super2.call(this, message);
    _this2.name = "RenderException";
    return _this2;
  }
  return _createClass(RenderException);
}( /*#__PURE__*/_wrapNativeSuper(Error));
exports.RenderException = RenderException;

/***/ }),

/***/ "./src/graphnode.ts":
/*!**************************!*\
  !*** ./src/graphnode.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


//Matthew Shotton, R&D User Experience,© BBC 2015
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GRAPHTYPE = void 0;
var TYPE = "GraphNode";
exports.GRAPHTYPE = TYPE;
var GraphNode = /*#__PURE__*/function () {
  /**
   * Base class from which all processing and source nodes are derrived.
   */
  function GraphNode(gl, renderGraph, inputNames) {
    var limitConnections = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    _classCallCheck(this, GraphNode);
    this._renderGraph = renderGraph;
    this._limitConnections = limitConnections;
    this._inputNames = inputNames;
    this._destroyed = false;
    //Setup WebGL output texture
    this._gl = gl;
    this._renderGraph = renderGraph;
    this._rendered = false;
    this._displayName = TYPE;
  }
  /**
   * Get a string representation of the class name.
   *
   * @return String A string of the class name.
   */
  _createClass(GraphNode, [{
    key: "displayName",
    get: function get() {
      return this._displayName;
    }
    /**
     * Get the names of the inputs to this node.
     *
     * @return {String[]} An array of the names of the inputs ot the node.
     */
  }, {
    key: "inputNames",
    get: function get() {
      return this._inputNames.slice();
    }
    /**
     * The maximum number of connections that can be made to this node. If there is not limit this will return Infinity.
     *
     * @return {number} The number of connections which can be made to this node.
     */
  }, {
    key: "maximumConnections",
    get: function get() {
      if (this._limitConnections === false) return Infinity;
      return this._inputNames.length;
    }
    /**
     * Get an array of all the nodes which connect to this node.
     *
     * @return {GraphNode[]} An array of nodes which connect to this node.
     */
  }, {
    key: "inputs",
    get: function get() {
      var result = this._renderGraph.getInputsForNode(this);
      result = result.filter(function (n) {
        return n !== undefined;
      });
      return result;
    }
    /**
     * Get an array of all the nodes which this node outputs to.
     *
     * @return {GraphNode[]} An array of nodes which this node connects to.
     */
  }, {
    key: "outputs",
    get: function get() {
      return this._renderGraph.getOutputsForNode(this);
    }
    /**
     * Get whether the node has been destroyed or not.
     *
     * @return {boolean} A true/false value of whather the node has been destoryed or not.
     */
  }, {
    key: "destroyed",
    get: function get() {
      return this._destroyed;
    }
    /**
     * Connect this node to the targetNode
     *
     * @param {GraphNode} targetNode - the node to connect.
     * @param {(number| String)} [targetPort] - the port on the targetNode to connect to, this can be an index, a string identifier, or undefined (in which case the next available port will be connected to).
     *
     */
  }, {
    key: "connect",
    value: function connect(targetNode, targetPort) {
      return this._renderGraph.registerConnection(this, targetNode, targetPort);
    }
    /**
     * Disconnect this node from the targetNode. If targetNode is undefind remove all out-bound connections.
     *
     * @param {GraphNode} [targetNode] - the node to disconnect from. If undefined, disconnect from all nodes.
     *
     */
  }, {
    key: "disconnect",
    value: function disconnect(targetNode) {
      var _this = this;
      if (targetNode === undefined) {
        var toRemove = this._renderGraph.getOutputsForNode(this);
        toRemove.forEach(function (target) {
          return _this._renderGraph.unregisterConnection(_this, target);
        });
        if (toRemove.length > 0) return true;
        return false;
      }
      return this._renderGraph.unregisterConnection(this, targetNode);
    }
    /**
     * Destory this node, removing it from the graph.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      this.disconnect();
      var _iterator = _createForOfIteratorHelper(this.inputs),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          input.disconnect(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this._destroyed = true;
    }
  }]);
  return GraphNode;
}();
exports["default"] = GraphNode;

/***/ }),

/***/ "./src/rendergraph.ts":
/*!****************************!*\
  !*** ./src/rendergraph.ts ***!
  \****************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
//Matthew Shotton, R&D User Experience,© BBC 2015
var exceptions_1 = __webpack_require__(/*! ./exceptions */ "./src/exceptions.ts");
var RenderGraph = /*#__PURE__*/function () {
  /**
   * Manages the rendering graph.
   */
  function RenderGraph() {
    _classCallCheck(this, RenderGraph);
    this.connections = [];
  }
  /**
   * Get a list of nodes which are connected to the output of the passed node.
   *
   * @param {GraphNode} node - the node to get the outputs for.
   * @return {GraphNode[]} An array of the nodes which are connected to the output.
   */
  _createClass(RenderGraph, [{
    key: "getOutputsForNode",
    value: function getOutputsForNode(node) {
      var results = [];
      this.connections.forEach(function (connection) {
        if (connection.source === node) {
          results.push(connection.destination);
        }
      });
      return results;
    }
    /**
     * Get a list of nodes which are connected, by input name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"name", "name":inputName, "destination":destinationNode}.
     *
     * @param {GraphNode} node - the node to get the named inputs for.
     * @return {Object[]} An array of objects representing the nodes and connection type, which are connected to the named inputs for the node.
     */
  }, {
    key: "getNamedInputsForNode",
    value: function getNamedInputsForNode(node) {
      var results = [];
      this.connections.forEach(function (connection) {
        if (connection.destination === node && connection.type === "name") {
          results.push(connection);
        }
      });
      return results;
    }
    /**
     * Get a list of nodes which are connected, by z-index name, to the given node. Array contains objects of the form: {"source":sourceNode, "type":"zIndex", "zIndex":0, "destination":destinationNode}.
     *
     * @param {GraphNode} node - the node to get the z-index refernced inputs for.
     * @return {Object[]} An array of objects representing the nodes and connection type, which are connected by z-Index for the node.
     */
  }, {
    key: "getZIndexInputsForNode",
    value: function getZIndexInputsForNode(node) {
      var results = [];
      this.connections.forEach(function (connection) {
        if (connection.destination === node && connection.type === "zIndex") {
          results.push(connection);
        }
      });
      results.sort(function (a, b) {
        return a.zIndex - b.zIndex;
      });
      return results;
    }
    /**
     * Get a list of nodes which are connected as inputs to the given node. The length of the return array is always equal to the number of inputs for the node, with undefined taking the place of any inputs not connected.
     *
     * @param {GraphNode} node - the node to get the inputs for.
     * @return {GraphNode[]} An array of GraphNodes which are connected to the node.
     */
  }, {
    key: "getInputsForNode",
    value: function getInputsForNode(node) {
      var inputNames = node.inputNames;
      var results = [];
      var namedInputs = this.getNamedInputsForNode(node);
      var indexedInputs = this.getZIndexInputsForNode(node);
      if (node._limitConnections === true) {
        for (var i = 0; i < inputNames.length; i++) {
          results[i] = undefined;
        }
        var _iterator = _createForOfIteratorHelper(namedInputs),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var connection = _step.value;
            var index = inputNames.indexOf(connection.name);
            results[index] = connection.source;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        var indexedInputsIndex = 0;
        for (var _i = 0; _i < results.length; _i++) {
          if (results[_i] === undefined && indexedInputs[indexedInputsIndex] !== undefined) {
            results[_i] = indexedInputs[indexedInputsIndex].source;
            indexedInputsIndex += 1;
          }
        }
      } else {
        var _iterator2 = _createForOfIteratorHelper(namedInputs),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _connection = _step2.value;
            results.push(_connection.source);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        var _iterator3 = _createForOfIteratorHelper(indexedInputs),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _connection2 = _step3.value;
            results.push(_connection2.source);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
      return results;
    }
    /**
     * Check if a named input on a node is available to connect too.
     * @param {GraphNode} node - the node to check.
     * @param {string} inputName - the named input to check.
     */
  }, {
    key: "isInputAvailable",
    value: function isInputAvailable(node, inputName) {
      if (node._inputNames.indexOf(inputName) === -1) return false;
      var _iterator4 = _createForOfIteratorHelper(this.connections),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var connection = _step4.value;
          if (connection.type === "name") {
            if (connection.destination === node && connection.name === inputName) {
              return false;
            }
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return true;
    }
    /**
     * Register a connection between two nodes.
     *
     * @param {GraphNode} sourceNode - the node to connect from.
     * @param {GraphNode} destinationNode - the node to connect to.
     * @param {(string | number)} [target] - the target port of the conenction, this could be a string to specfiy a specific named port, a number to specify a port by index, or undefined, in which case the next available port will be connected to.
     * @return {boolean} Will return true if connection succeeds otherwise will throw a ConnectException.
     */
  }, {
    key: "registerConnection",
    value: function registerConnection(sourceNode, destinationNode, target) {
      if (destinationNode.inputs.length >= destinationNode.inputNames.length && destinationNode._limitConnections === true) {
        throw new exceptions_1.ConnectException("Node has reached max number of inputs, can't connect");
      }
      if (destinationNode._limitConnections === false) {
        //check if connection is already made, if so raise a warning
        var inputs = this.getInputsForNode(destinationNode);
        if (inputs.includes(sourceNode)) {
          console.debug("WARNING - node connected mutliple times, removing previous connection");
          this.unregisterConnection(sourceNode, destinationNode);
        }
      }
      if (typeof target === "number") {
        //target is a specific
        this.connections.push({
          source: sourceNode,
          type: "zIndex",
          zIndex: target,
          destination: destinationNode
        });
      } else if (typeof target === "string" && destinationNode._limitConnections) {
        //target is a named port
        //make sure named port is free
        if (this.isInputAvailable(destinationNode, target)) {
          this.connections.push({
            source: sourceNode,
            type: "name",
            name: target,
            destination: destinationNode
          });
        } else {
          throw new exceptions_1.ConnectException("Port " + target + " is already connected to");
        }
      } else {
        //target is undefined so just make it a high zIndex
        var indexedConns = this.getZIndexInputsForNode(destinationNode);
        var index = 0;
        if (indexedConns.length > 0) index = indexedConns[indexedConns.length - 1].zIndex + 1;
        this.connections.push({
          source: sourceNode,
          type: "zIndex",
          zIndex: index,
          destination: destinationNode
        });
      }
      return true;
    }
    /**
     * Remove a connection between two nodes.
     * @param {GraphNode} sourceNode - the node to unregsiter connection from.
     * @param {GraphNode} destinationNode - the node to register connection to.
     * @return {boolean} Will return true if removing connection succeeds, or false if there was no connectionsction to remove.
     */
  }, {
    key: "unregisterConnection",
    value: function unregisterConnection(sourceNode, destinationNode) {
      var _this = this;
      var toRemove = [];
      this.connections.forEach(function (connection) {
        if (connection.source === sourceNode && connection.destination === destinationNode) {
          toRemove.push(connection);
        }
      });
      if (toRemove.length === 0) return false;
      toRemove.forEach(function (removeNode) {
        var index = _this.connections.indexOf(removeNode);
        _this.connections.splice(index, 1);
      });
      return true;
    }
  }], [{
    key: "outputEdgesFor",
    value: function outputEdgesFor(node, connections) {
      var results = [];
      var _iterator5 = _createForOfIteratorHelper(connections),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var conn = _step5.value;
          if (conn.source === node) {
            results.push(conn);
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return results;
    }
  }, {
    key: "inputEdgesFor",
    value: function inputEdgesFor(node, connections) {
      var results = [];
      var _iterator6 = _createForOfIteratorHelper(connections),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var conn = _step6.value;
          if (conn.destination === node) {
            results.push(conn);
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return results;
    }
  }, {
    key: "getInputlessNodes",
    value: function getInputlessNodes(connections) {
      var inputLess = [];
      var _iterator7 = _createForOfIteratorHelper(connections),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var conn = _step7.value;
          inputLess.push(conn.source);
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var _iterator8 = _createForOfIteratorHelper(connections),
        _step8;
      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var _conn = _step8.value;
          var index = inputLess.indexOf(_conn.destination);
          if (index !== -1) {
            inputLess.splice(index, 1);
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }
      return inputLess;
    }
  }]);
  return RenderGraph;
}();
exports["default"] = RenderGraph;
module.exports = exports.default;

/***/ }),

/***/ "./src/utils.ts":
/*!**********************!*\
  !*** ./src/utils.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mediaElementHasSource = exports.UpdateablesManager = exports.visualiseVideoContextTimeline = exports.importSimpleEDL = exports.createSigmaGraphDataFromRenderGraph = exports.visualiseVideoContextGraph = exports.createControlFormForNode = exports.snapshot = exports.exportToJSON = exports.generateRandomId = exports.clearTexture = exports.updateTexture = exports.createElementTexture = exports.createShaderProgram = exports.compileShader = void 0;
//Matthew Shotton, R&D User Experience,© BBC 2015
var definitions_1 = __importDefault(__webpack_require__(/*! ./Definitions/definitions */ "./src/Definitions/definitions.ts"));
var sourcenode_1 = __webpack_require__(/*! ./SourceNodes/sourcenode */ "./src/SourceNodes/sourcenode.ts");
var videonode_1 = __webpack_require__(/*! ./SourceNodes/videonode */ "./src/SourceNodes/videonode.ts");
var canvasnode_1 = __webpack_require__(/*! ./SourceNodes/canvasnode */ "./src/SourceNodes/canvasnode.ts");
var imagenode_1 = __webpack_require__(/*! ./SourceNodes/imagenode */ "./src/SourceNodes/imagenode.ts");
var destinationnode_1 = __webpack_require__(/*! ./DestinationNode/destinationnode */ "./src/DestinationNode/destinationnode.ts");
var transitionnode_1 = __webpack_require__(/*! ./ProcessingNodes/transitionnode */ "./src/ProcessingNodes/transitionnode.ts");
var compositingnode_1 = __webpack_require__(/*! ./ProcessingNodes/compositingnode */ "./src/ProcessingNodes/compositingnode.ts");
/*
 * Utility function to compile a WebGL Vertex or Fragment shader.
 *
 * @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
 * @param {String} shaderSource - A string of shader code to compile.
 * @param {number} shaderType - Shader type, either WebGLRenderingContext.VERTEX_SHADER or WebGLRenderingContext.FRAGMENT_SHADER.
 *
 * @return {WebGLShader} A compiled shader.
 *
 */
function compileShader(gl, shaderSource, shaderType) {
  var shader = gl.createShader(shaderType);
  gl.shaderSource(shader, shaderSource);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (!success) {
    throw "could not compile shader:" + gl.getShaderInfoLog(shader);
  }
  return shader;
}
exports.compileShader = compileShader;
/*
 * Create a shader program from a passed vertex and fragment shader source string.
 *
 * @param {WebGLRenderingContext} gl - the webgl context fo which to build the shader.
 * @param {WebGLShader} vertexShader - A compiled vertex shader.
 * @param {WebGLShader} fragmentShader - A compiled fragment shader.
 *
 * @return {WebGLProgram} A compiled & linkde shader program.
 */
function createShaderProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw {
      error: 4,
      msg: "Can't link shader program for track",
      toString: function toString() {
        return this.msg;
      }
    };
  }
  return program;
}
exports.createShaderProgram = createShaderProgram;
function createElementTexture(gl) {
  var texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  // Set the parameters so we can render any size image.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  //Initialise the texture untit to clear.
  //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, type);
  return texture;
}
exports.createElementTexture = createElementTexture;
function updateTexture(gl, texture, element) {
  if (element.readyState !== undefined && element.readyState === 0) return;
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, element);
  texture._isTextureCleared = false;
}
exports.updateTexture = updateTexture;
function clearTexture(gl, texture) {
  // A quick check to ensure we don't call 'texImage2D' when the texture has already been 'cleared' #performance
  if (!texture._isTextureCleared) {
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    texture._isTextureCleared = true;
  }
}
exports.clearTexture = clearTexture;
function generateRandomId() {
  var appearanceAdjective = ["adorable", "alert", "average", "beautiful", "blonde", "bloody", "blushing", "bright", "clean", "clear", "cloudy", "colourful", "concerned", "crowded", "curious", "cute", "dark", "dirty", "drab", "distinct", "dull", "elegant", "fancy", "filthy", "glamorous", "gleaming", "graceful", "grotesque", "homely", "light", "misty", "motionless", "muddy", "plain", "poised", "quaint", "scary", "shiny", "smoggy", "sparkling", "spotless", "stormy", "strange", "ugly", "unsightly", "unusual"];
  var conditionAdjective = ["alive", "brainy", "broken", "busy", "careful", "cautious", "clever", "crazy", "damaged", "dead", "difficult", "easy", "fake", "false", "famous", "forward", "fragile", "guilty", "helpful", "helpless", "important", "impossible", "infamous", "innocent", "inquisitive", "mad", "modern", "open", "outgoing", "outstanding", "poor", "powerful", "puzzled", "real", "rich", "right", "robust", "sane", "scary", "shy", "sleepy", "stupid", "super", "tame", "thick", "tired", "wild", "wrong"];
  var nounAnimal = ["manatee", "gila monster", "nematode", "seahorse", "slug", "koala bear", "giant tortoise", "garden snail", "starfish", "sloth", "american woodcock", "coral", "swallowtail butterfly", "house sparrow", "sea anemone"];
  function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  function capitalize(word) {
    word = word.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
    return word;
  }
  var name = randomChoice(appearanceAdjective) + " " + randomChoice(conditionAdjective) + " " + randomChoice(nounAnimal);
  name = capitalize(name);
  name = name.replace(/ /g, "-");
  return name;
}
exports.generateRandomId = generateRandomId;
function exportToJSON(vc) {
  console.warn("VideoContext.exportToJSON has been deprecated. Please use VideoContext.snapshot instead.");
  return JSON.stringify(snapshotNodes(vc));
}
exports.exportToJSON = exportToJSON;
function snapshot(vc) {
  return {
    nodes: snapshotNodes(vc),
    videoContext: snapshotVideoContext(vc)
  };
}
exports.snapshot = snapshot;
function snapshotVideoContext(vc) {
  return {
    currentTime: vc.currentTime,
    duration: vc.duration,
    state: vc.state,
    playbackRate: vc.playbackRate
  };
}
var warningExportSourceLogged = false;
function snapshotNodes(vc) {
  function qualifyURL(url) {
    var a = document.createElement("a");
    a.href = url;
    return a.href;
  }
  function getInputIDs(node, vc) {
    var inputs = [];
    var _iterator = _createForOfIteratorHelper(node.inputs),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var input = _step.value;
        if (input === undefined) continue;
        var inputID = void 0;
        var inputIndex = node.inputs.indexOf(input);
        var index = vc._processingNodes.indexOf(input);
        if (index > -1) {
          inputID = "processor" + index;
        } else {
          var _index = vc._sourceNodes.indexOf(input);
          if (_index > -1) {
            inputID = "source" + _index;
          } else {
            console.log("Warning, can't find input", input);
          }
        }
        inputs.push({
          id: inputID,
          index: inputIndex
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return inputs;
  }
  var result = {};
  var sourceNodeStateMapping = [];
  for (var state in sourcenode_1.SOURCENODESTATE) {
    sourceNodeStateMapping[sourcenode_1.SOURCENODESTATE[state]] = state;
  }
  for (var index in vc._sourceNodes) {
    var source = vc._sourceNodes[index];
    var id = "source" + index;
    var node_url = "";
    if (!source._isResponsibleForElementLifeCycle) {
      if (!warningExportSourceLogged) {
        console.debug("Warning - Trying to export source created from an element not a URL. URL of export will be set to the elements src attribute and may be incorrect", source);
        warningExportSourceLogged = true;
      }
      node_url = source.element.src;
    } else {
      node_url = qualifyURL(source._elementURL);
    }
    var node = {
      type: source.displayName,
      url: node_url,
      start: source.startTime,
      stop: source.stopTime,
      state: sourceNodeStateMapping[source.state],
      currentTime: undefined,
      sourceOffset: undefined
    };
    if (node.type === videonode_1.VIDEOTYPE) {
      node.currentTime = null;
      if (source.element && source.element.currentTime) {
        node.currentTime = source.element.currentTime;
      }
    }
    if (source._sourceOffset) {
      node.sourceOffset = source._sourceOffset;
    }
    result[id] = node;
  }
  for (var _index2 in vc._processingNodes) {
    var processor = vc._processingNodes[_index2];
    var _id = "processor" + _index2;
    var _node = {
      type: processor.displayName,
      definition: processor._definition,
      inputs: getInputIDs(processor, vc),
      properties: {},
      transitions: undefined
    };
    for (var property in _node.definition.properties) {
      _node.properties[property] = processor[property];
    }
    if (_node.type === transitionnode_1.TRANSITIONTYPE) {
      _node.transitions = processor._transitions;
    }
    result[_id] = _node;
  }
  result["destination"] = {
    type: "Destination",
    inputs: getInputIDs(vc.destination, vc)
  };
  return result;
}
function createControlFormForNode(node, nodeName) {
  var rootDiv = document.createElement("div");
  if (nodeName !== undefined) {
    var title = document.createElement("h2");
    title.innerHTML = nodeName;
    rootDiv.appendChild(title);
  }
  var _loop = function _loop(propertyName) {
    var propertyParagraph = document.createElement("p");
    var propertyTitleHeader = document.createElement("h3");
    propertyTitleHeader.innerHTML = propertyName;
    propertyParagraph.appendChild(propertyTitleHeader);
    var propertyValue = node._properties[propertyName].value;
    if (typeof propertyValue === "number") {
      var range = document.createElement("input");
      range.setAttribute("type", "range");
      range.setAttribute("min", "0");
      range.setAttribute("max", "1");
      range.setAttribute("step", "0.01");
      range.setAttribute("value", propertyValue.toString());
      var number = document.createElement("input");
      number.setAttribute("type", "number");
      number.setAttribute("min", "0");
      number.setAttribute("max", "1");
      number.setAttribute("step", "0.01");
      number.setAttribute("value", propertyValue.toString());
      var mouseDown = false;
      range.onmousedown = function () {
        mouseDown = true;
      };
      range.onmouseup = function () {
        mouseDown = false;
      };
      range.onmousemove = function () {
        if (mouseDown) {
          node[propertyName] = parseFloat(range.value);
          number.value = range.value;
        }
      };
      range.onchange = function () {
        node[propertyName] = parseFloat(range.value);
        number.value = range.value;
      };
      number.onchange = function () {
        node[propertyName] = parseFloat(number.value);
        range.value = number.value;
      };
      propertyParagraph.appendChild(range);
      propertyParagraph.appendChild(number);
    } else if (Object.prototype.toString.call(propertyValue) === "[object Array]") {
      var _loop2 = function _loop2() {
        var range = document.createElement("input");
        range.setAttribute("type", "range");
        range.setAttribute("min", "0");
        range.setAttribute("max", "1");
        range.setAttribute("step", "0.01");
        range.setAttribute("value", propertyValue[i]);
        var number = document.createElement("input");
        number.setAttribute("type", "number");
        number.setAttribute("min", "0");
        number.setAttribute("max", "1");
        number.setAttribute("step", "0.01");
        number.setAttribute("value", propertyValue);
        var index = i;
        var mouseDown = false;
        range.onmousedown = function () {
          mouseDown = true;
        };
        range.onmouseup = function () {
          mouseDown = false;
        };
        range.onmousemove = function () {
          if (mouseDown) {
            node[propertyName][index] = parseFloat(range.value);
            number.value = range.value;
          }
        };
        range.onchange = function () {
          node[propertyName][index] = parseFloat(range.value);
          number.value = range.value;
        };
        number.onchange = function () {
          node[propertyName][index] = parseFloat(number.value);
          range.value = number.value;
        };
        propertyParagraph.appendChild(range);
        propertyParagraph.appendChild(number);
      };
      for (i = 0; i < propertyValue.length; i++) {
        _loop2();
      }
    }
    rootDiv.appendChild(propertyParagraph);
  };
  for (var propertyName in node._properties) {
    var i;
    _loop(propertyName);
  }
  return rootDiv;
}
exports.createControlFormForNode = createControlFormForNode;
function calculateNodeDepthFromDestination(videoContext) {
  var destination = videoContext.destination;
  var depthMap = new Map();
  depthMap.set(destination, 0);
  function itterateBackwards(node) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var _iterator2 = _createForOfIteratorHelper(node.inputs),
      _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var n = _step2.value;
        var d = depth + 1;
        if (depthMap.has(n)) {
          if (d > depthMap.get(n)) {
            depthMap.set(n, d);
          }
        } else {
          depthMap.set(n, d);
        }
        itterateBackwards(n, depthMap.get(n));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }
  itterateBackwards(destination);
  return depthMap;
}
function visualiseVideoContextGraph(videoContext, canvas) {
  var ctx = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  ctx.clearRect(0, 0, w, h);
  var nodeDepths = calculateNodeDepthFromDestination(videoContext);
  var depths = Array.from(nodeDepths.values()).sort(function (a, b) {
    return b - a;
  });
  var maxDepth = depths[0];
  var xStep = w / (maxDepth + 1);
  var nodeHeight = h / videoContext._sourceNodes.length / 3;
  var nodeWidth = nodeHeight * 1.618;
  function calculateNodePos(node, nodeDepths, xStep, nodeHeight) {
    var depth = nodeDepths.get(node);
    nodeDepths.values();
    var count = 0;
    var _iterator3 = _createForOfIteratorHelper(nodeDepths),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var nodeDepth = _step3.value;
        if (nodeDepth[0] === node) break;
        if (nodeDepth[1] === depth) count += 1;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return {
      x: xStep * nodeDepths.get(node),
      y: nodeHeight * 1.5 * count + 50
    };
  }
  // "video":["#572A72", "#3C1255"],
  // "image":["#7D9F35", "#577714"],
  // "canvas":["#AA9639", "#806D15"]
  for (var i = 0; i < videoContext._renderGraph.connections.length; i++) {
    var conn = videoContext._renderGraph.connections[i];
    var source = calculateNodePos(conn.source, nodeDepths, xStep, nodeHeight);
    var destination = calculateNodePos(conn.destination, nodeDepths, xStep, nodeHeight);
    if (source !== undefined && destination !== undefined) {
      ctx.beginPath();
      //ctx.moveTo(source.x + nodeWidth/2, source.y + nodeHeight/2);
      var x1 = source.x + nodeWidth / 2;
      var y1 = source.y + nodeHeight / 2;
      var x2 = destination.x + nodeWidth / 2;
      var y2 = destination.y + nodeHeight / 2;
      var dx = x2 - x1;
      var dy = y2 - y1;
      var angle = Math.PI / 2 - Math.atan2(dx, dy);
      var distance = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
      var midX = Math.min(x1, x2) + (Math.max(x1, x2) - Math.min(x1, x2)) / 2;
      var midY = Math.min(y1, y2) + (Math.max(y1, y2) - Math.min(y1, y2)) / 2;
      var testX = Math.cos(angle + Math.PI / 2) * distance / 1.5 + midX;
      var testY = Math.sin(angle + Math.PI / 2) * distance / 1.5 + midY;
      // console.log(testX, testY);
      ctx.arc(testX, testY, distance / 1.2, angle - Math.PI + 0.95, angle - 0.95);
      //ctx.arcTo(source.x + nodeWidth/2 ,source.y + nodeHeight/2,destination.x + nodeWidth/2,destination.y + nodeHeight/2,100);
      //ctx.lineTo(midX, midY);
      ctx.stroke();
      //ctx.endPath();
    }
  }
  var _iterator4 = _createForOfIteratorHelper(nodeDepths.keys()),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var node = _step4.value;
      var pos = calculateNodePos(node, nodeDepths, xStep, nodeHeight);
      var color = "#AA9639";
      var text = "";
      if (node.displayName === compositingnode_1.COMPOSITINGTYPE) {
        color = "#000000";
      }
      if (node.displayName === destinationnode_1.DESTINATIONTYPE) {
        color = "#7D9F35";
        text = "Output";
      }
      if (node.displayName === videonode_1.VIDEOTYPE) {
        color = "#572A72";
        text = "Video";
      }
      if (node.displayName === canvasnode_1.CANVASTYPE) {
        color = "#572A72";
        text = "Canvas";
      }
      if (node.displayName === imagenode_1.IMAGETYPE) {
        color = "#572A72";
        text = "Image";
      }
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.fillRect(pos.x, pos.y, nodeWidth, nodeHeight);
      ctx.fill();
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.font = "10px Arial";
      ctx.fillText(text, pos.x + nodeWidth / 2, pos.y + nodeHeight / 2 + 2.5);
      ctx.fill();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
  return;
}
exports.visualiseVideoContextGraph = visualiseVideoContextGraph;
function createSigmaGraphDataFromRenderGraph(videoContext) {
  function idForNode(node) {
    if (videoContext._sourceNodes.indexOf(node) !== -1) {
      var _id2 = "source " + node.displayName + " " + videoContext._sourceNodes.indexOf(node);
      return _id2;
    }
    var id = "processor " + node.displayName + " " + videoContext._processingNodes.indexOf(node);
    return id;
  }
  var graph = {
    nodes: [{
      id: idForNode(videoContext.destination),
      label: "Destination Node",
      x: 2.5,
      y: 0.5,
      size: 2,
      node: videoContext.destination
    }],
    edges: []
  };
  for (var i = 0; i < videoContext._sourceNodes.length; i++) {
    var sourceNode = videoContext._sourceNodes[i];
    var y = i * (1.0 / videoContext._sourceNodes.length);
    graph.nodes.push({
      id: idForNode(sourceNode),
      label: "Source " + i.toString(),
      x: 0,
      y: y,
      size: 2,
      color: "#572A72",
      node: sourceNode
    });
  }
  for (var _i = 0; _i < videoContext._processingNodes.length; _i++) {
    var processingNode = videoContext._processingNodes[_i];
    graph.nodes.push({
      id: idForNode(processingNode),
      x: Math.random() * 2.5,
      y: Math.random(),
      size: 2,
      node: processingNode
    });
  }
  for (var _i2 = 0; _i2 < videoContext._renderGraph.connections.length; _i2++) {
    var conn = videoContext._renderGraph.connections[_i2];
    graph.edges.push({
      id: "e" + _i2.toString(),
      source: idForNode(conn.source),
      target: idForNode(conn.destination)
    });
  }
  return graph;
}
exports.createSigmaGraphDataFromRenderGraph = createSigmaGraphDataFromRenderGraph;
function importSimpleEDL(ctx, playlist) {
  // Create a "track" node to connect all the clips to.
  var trackNode = ctx.compositor(definitions_1["default"].COMBINE);
  // Create a source node for each of the clips.
  var _iterator5 = _createForOfIteratorHelper(playlist),
    _step5;
  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var clip = _step5.value;
      var node = void 0;
      if (clip.type === "video") {
        node = ctx.video(clip.src, clip.sourceStart);
      } else if (clip.type === "image") {
        node = ctx.image(clip.src, clip.sourceStart);
      } else {
        console.debug("Clip type ".concat(clip.type, " not recognised, skipping."));
        continue;
      }
      node.startAt(clip.start);
      node.stopAt(clip.start + clip.duration);
      node.connect(trackNode);
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }
  return trackNode;
}
exports.importSimpleEDL = importSimpleEDL;
function visualiseVideoContextTimeline(videoContext, canvas, currentTime) {
  var ctx = canvas.getContext("2d");
  var w = canvas.width;
  var h = canvas.height;
  var trackHeight = h / videoContext._sourceNodes.length;
  var playlistDuration = videoContext.duration;
  // FIXME: spelling
  if (currentTime > playlistDuration && !videoContext._endOnLastSourceEnd) playlistDuration = currentTime;
  if (videoContext.duration === Infinity) {
    var total = 0;
    for (var i = 0; i < videoContext._sourceNodes.length; i++) {
      var sourceNode = videoContext._sourceNodes[i];
      if (sourceNode._stopTime !== Infinity) total += sourceNode._stopTime;
    }
    if (total > videoContext.currentTime) {
      playlistDuration = total + 5;
    } else {
      playlistDuration = videoContext.currentTime + 5;
    }
  }
  var pixelsPerSecond = w / playlistDuration;
  var mediaSourceStyle = {
    video: ["#572A72", "#3C1255"],
    image: ["#7D9F35", "#577714"],
    canvas: ["#AA9639", "#806D15"]
  };
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = "#999";
  var _iterator6 = _createForOfIteratorHelper(videoContext._processingNodes),
    _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var node = _step6.value;
      if (node.displayName !== transitionnode_1.TRANSITIONTYPE) continue;
      for (var propertyName in node._transitions) {
        var _iterator7 = _createForOfIteratorHelper(node._transitions[propertyName]),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var transition = _step7.value;
            var tW = (transition.end - transition.start) * pixelsPerSecond;
            var tH = h;
            var tX = transition.start * pixelsPerSecond;
            var tY = 0;
            ctx.fillStyle = "rgba(0,0,0, 0.3)";
            ctx.fillRect(tX, tY, tW, tH);
            ctx.fill();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  for (var _i3 = 0; _i3 < videoContext._sourceNodes.length; _i3++) {
    var _sourceNode = videoContext._sourceNodes[_i3];
    var duration = _sourceNode._stopTime - _sourceNode._startTime;
    if (duration === Infinity) duration = videoContext.currentTime;
    var start = _sourceNode._startTime;
    var msW = duration * pixelsPerSecond;
    var msH = trackHeight;
    var msX = start * pixelsPerSecond;
    var msY = trackHeight * _i3;
    ctx.fillStyle = mediaSourceStyle.video[_i3 % mediaSourceStyle.video.length];
    ctx.fillRect(msX, msY, msW, msH);
    ctx.fill();
  }
  if (currentTime !== undefined) {
    ctx.fillStyle = "#000";
    ctx.fillRect(currentTime * pixelsPerSecond, 0, 1, h);
  }
}
exports.visualiseVideoContextTimeline = visualiseVideoContextTimeline;
var UpdateablesManager = /*#__PURE__*/function () {
  function UpdateablesManager() {
    _classCallCheck(this, UpdateablesManager);
    this._updateables = [];
    this._useWebworker = false;
    this._active = false;
    this._previousRAFTime = undefined;
    this._previousWorkerTime = undefined;
    this._webWorkerString = "\
            var running = false;\
            function tick(){\
                postMessage(Date.now());\
                if (running){\
                    setTimeout(tick, 1000/20);\
                }\
            }\
            self.addEventListener('message',function(msg){\
                var data = msg.data;\
                if (data === 'start'){\
                    running = true;\
                    tick();\
                }\
                if (data === 'stop') running = false;\
            });";
    this._webWorker = undefined;
  }
  _createClass(UpdateablesManager, [{
    key: "_initWebWorker",
    value: function _initWebWorker() {
      var _this = this;
      window.URL = window.URL || window.webkitURL;
      var blob = new Blob([this._webWorkerString], {
        type: "application/javascript"
      });
      this._webWorker = new Worker(URL.createObjectURL(blob));
      this._webWorker.onmessage = function (msg) {
        var time = msg.data;
        _this._updateWorkerTime(time);
      };
    }
  }, {
    key: "_lostVisibility",
    value: function _lostVisibility() {
      this._previousWorkerTime = Date.now();
      this._useWebworker = true;
      if (!this._webWorker) {
        this._initWebWorker();
      }
      this._webWorker.postMessage("start");
    }
  }, {
    key: "_gainedVisibility",
    value: function _gainedVisibility() {
      this._useWebworker = false;
      this._previousRAFTime = undefined;
      if (this._webWorker) this._webWorker.postMessage("stop");
      requestAnimationFrame(this._updateRAFTime.bind(this));
    }
  }, {
    key: "_init",
    value: function _init() {
      var _this2 = this;
      if (!window.Worker) return;
      //If page visibility API not present fallback to using "focus" and "blur" event listeners.
      if (typeof document.hidden === "undefined") {
        window.addEventListener("focus", this._gainedVisibility.bind(this));
        window.addEventListener("blur", this._lostVisibility.bind(this));
        return;
      }
      //Otherwise we can use the visibility API to do the loose/gain focus properly
      document.addEventListener("visibilitychange", function () {
        if (document.hidden === true) {
          _this2._lostVisibility();
        } else {
          _this2._gainedVisibility();
        }
      }, false);
      requestAnimationFrame(this._updateRAFTime.bind(this));
    }
  }, {
    key: "_updateWorkerTime",
    value: function _updateWorkerTime(time) {
      var dt = (time - this._previousWorkerTime) / 1000;
      if (dt !== 0) this._update(dt);
      this._previousWorkerTime = time;
    }
  }, {
    key: "_updateRAFTime",
    value: function _updateRAFTime(time) {
      if (this._previousRAFTime === undefined) this._previousRAFTime = time;
      var dt = (time - this._previousRAFTime) / 1000;
      if (dt !== 0) this._update(dt);
      this._previousRAFTime = time;
      if (!this._useWebworker) requestAnimationFrame(this._updateRAFTime.bind(this));
    }
  }, {
    key: "_update",
    value: function _update(dt) {
      for (var i = 0; i < this._updateables.length; i++) {
        this._updateables[i]._update(parseFloat(dt));
      }
    }
  }, {
    key: "register",
    value: function register(updateable) {
      this._updateables.push(updateable);
      if (this._active === false) {
        this._active = true;
        this._init();
      }
    }
  }]);
  return UpdateablesManager;
}();
exports.UpdateablesManager = UpdateablesManager;
function mediaElementHasSource(_ref) {
  var src = _ref.src,
    srcObject = _ref.srcObject;
  return !((src === "" || src === undefined) && srcObject == null);
}
exports.mediaElementHasSource = mediaElementHasSource;

/***/ }),

/***/ "./src/videocontext.ts":
/*!*****************************!*\
  !*** ./src/videocontext.ts ***!
  \*****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    };
  }
  Object.defineProperty(o, k2, desc);
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (o, v) {
  Object.defineProperty(o, "default", {
    enumerable: true,
    value: v
  });
} : function (o, v) {
  o["default"] = v;
});
var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
//Matthew Shotton, R&D User Experience,© BBC 2015
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var nodes_1 = __importDefault(__webpack_require__(/*! ./SourceNodes/nodes */ "./src/SourceNodes/nodes.ts"));
var videonode_1 = __importStar(__webpack_require__(/*! ./SourceNodes/videonode */ "./src/SourceNodes/videonode.ts"));
var audionode_1 = __importDefault(__webpack_require__(/*! ./SourceNodes/audionode */ "./src/SourceNodes/audionode.ts"));
var imagenode_1 = __importDefault(__webpack_require__(/*! ./SourceNodes/imagenode */ "./src/SourceNodes/imagenode.ts"));
var canvasnode_1 = __importDefault(__webpack_require__(/*! ./SourceNodes/canvasnode */ "./src/SourceNodes/canvasnode.ts"));
var sourcenode_1 = __webpack_require__(/*! ./SourceNodes/sourcenode */ "./src/SourceNodes/sourcenode.ts");
var compositingnode_1 = __importDefault(__webpack_require__(/*! ./ProcessingNodes/compositingnode */ "./src/ProcessingNodes/compositingnode.ts"));
var destinationnode_1 = __importDefault(__webpack_require__(/*! ./DestinationNode/destinationnode */ "./src/DestinationNode/destinationnode.ts"));
var effectnode_1 = __importDefault(__webpack_require__(/*! ./ProcessingNodes/effectnode */ "./src/ProcessingNodes/effectnode.ts"));
var transitionnode_1 = __importDefault(__webpack_require__(/*! ./ProcessingNodes/transitionnode */ "./src/ProcessingNodes/transitionnode.ts"));
var rendergraph_1 = __importDefault(__webpack_require__(/*! ./rendergraph */ "./src/rendergraph.ts"));
var videoelementcache_1 = __importDefault(__webpack_require__(/*! ./videoelementcache */ "./src/videoelementcache.ts"));
var definitions_1 = __importDefault(__webpack_require__(/*! ./Definitions/definitions */ "./src/Definitions/definitions.ts"));
var updateablesManager = new utils_1.UpdateablesManager();
/**
 * VideoContext.
 * @module VideoContext
 */
var VideoContext = /*#__PURE__*/function () {
  /**
   * Initialise the VideoContext and render to the specific canvas. A 2nd parameter can be passed to the constructor which is a function that get's called if the VideoContext fails to initialise.
   *
   * @param {Canvas} canvas - the canvas element to render the output to.
   * @param {function} [initErrorCallback] - a callback for if initialising the canvas failed.
   * @param {Object} [options] - a number of custom options which can be set on the VideoContext, generally best left as default.
   * @param {boolean} [options.manualUpdate=false] - Make Video Context not use the updatable manager
   * @param {boolean} [options.endOnLastSourceEnd=true] - Trigger an `ended` event when the current time goes above the duration of the composition
   * @param {boolean} [options.useVideoElementCache=true] - Creates a pool of video element that will be all initialised at the same time. Important for mobile support
   * @param {number} [options.videoElementCacheSize=6] - Number of video element in the pool
   * @param {object} [options.webglContextAttributes] - A set of attributes used when getting the GL context. Alpha will always be `true`.
   *
   * @example
   * var canvasElement = document.getElementById("canvas");
   * var ctx = new VideoContext(canvasElement, () => console.error("Sorry, your browser dosen\'t support WebGL"));
   * var videoNode = ctx.video("video.mp4");
   * videoNode.connect(ctx.destination);
   * videoNode.start(0);
   * videoNode.stop(10);
   * ctx.play();
   *
   */
  function VideoContext(canvas, initErrorCallback) {
    var _this = this;
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$manualUpdate = _ref.manualUpdate,
      manualUpdate = _ref$manualUpdate === void 0 ? false : _ref$manualUpdate,
      _ref$endOnLastSourceE = _ref.endOnLastSourceEnd,
      endOnLastSourceEnd = _ref$endOnLastSourceE === void 0 ? true : _ref$endOnLastSourceE,
      _ref$useVideoElementC = _ref.useVideoElementCache,
      useVideoElementCache = _ref$useVideoElementC === void 0 ? true : _ref$useVideoElementC,
      _ref$videoElementCach = _ref.videoElementCacheSize,
      videoElementCacheSize = _ref$videoElementCach === void 0 ? 6 : _ref$videoElementCach,
      _ref$webglContextAttr = _ref.webglContextAttributes,
      webglContextAttributes = _ref$webglContextAttr === void 0 ? {} : _ref$webglContextAttr;
    _classCallCheck(this, VideoContext);
    this._canvas = canvas;
    this._endOnLastSourceEnd = endOnLastSourceEnd;
    this._gl = canvas.getContext("experimental-webgl", Object.assign({
      preserveDrawingBuffer: true
    },
    // can be overriden
    webglContextAttributes, {
      alpha: false
    } // Can't be overriden because it is copied last
    ));

    if (this._gl === null) {
      console.error("Failed to intialise WebGL.");
      if (initErrorCallback) initErrorCallback();
      return;
    }
    // Initialise the video element cache
    this._useVideoElementCache = useVideoElementCache;
    if (this._useVideoElementCache) {
      this._videoElementCache = new videoelementcache_1["default"](videoElementCacheSize);
    }
    // Create a unique ID for this VideoContext which can be used in the debugger.
    if (this._canvas.id) {
      if (typeof this._canvas.id === "string" || this._canvas.id instanceof String) {
        this._id = canvas.id;
      }
    }
    if (this._id === undefined) this._id = (0, utils_1.generateRandomId)();
    if (window.__VIDEOCONTEXT_REFS__ === undefined) window.__VIDEOCONTEXT_REFS__ = {};
    window.__VIDEOCONTEXT_REFS__[this._id] = this;
    this._renderGraph = new rendergraph_1["default"]();
    this._sourceNodes = [];
    this._processingNodes = [];
    this._timeline = [];
    this._currentTime = 0;
    this._state = VideoContext.STATE.PAUSED;
    this._playbackRate = 1.0;
    this._volume = 1.0;
    this._sourcesPlaying = undefined;
    this._destinationNode = new destinationnode_1["default"](this._gl, this._renderGraph);
    this._callbacks = new Map();
    Object.keys(VideoContext.EVENTS).forEach(function (name) {
      return _this._callbacks.set(VideoContext.EVENTS[name], []);
    });
    this._timelineCallbacks = [];
    if (!manualUpdate) {
      updateablesManager.register(this);
    }
  }
  /**
   * Returns an ID assigned to the VideoContext instance. This will either be the same id as the underlying canvas element,
   * or a uniquely generated one.
   */
  _createClass(VideoContext, [{
    key: "id",
    get: function get() {
      return this._id;
    }
    /**
     * Set the ID of the VideoContext instance. This should be unique.
     */,
    set: function set(newID) {
      var _a, _b;
      (_a = window.__VIDEOCONTEXT_REFS__) === null || _a === void 0 ? true : delete _a[this._id];
      if (((_b = window.__VIDEOCONTEXT_REFS__) === null || _b === void 0 ? void 0 : _b[newID]) !== undefined) console.warn("Warning; setting id to that of an existing VideoContext instance.");
      window.__VIDEOCONTEXT_REFS__[newID] = this;
      this._id = newID;
    }
    /**
     * Register a callback to happen at a specific point in time.
     * @param {number} time - the time at which to trigger the callback.
     * @param {Function} func - the callback to register.
     * @param {number} ordering - the order in which to call the callback if more than one is registered for the same time.
     */
  }, {
    key: "registerTimelineCallback",
    value: function registerTimelineCallback(time, func) {
      var ordering = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      this._timelineCallbacks.push({
        time: time,
        func: func,
        ordering: ordering
      });
    }
    /**
     * Unregister a callback which happens at a specific point in time.
     * @param {Function} func - the callback to unregister.
     */
  }, {
    key: "unregisterTimelineCallback",
    value: function unregisterTimelineCallback(func) {
      var toRemove = [];
      var _iterator = _createForOfIteratorHelper(this._timelineCallbacks),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _callback = _step.value;
          if (_callback.func === func) {
            toRemove.push(_callback);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      for (var _i = 0, _toRemove = toRemove; _i < _toRemove.length; _i++) {
        var callback = _toRemove[_i];
        var index = this._timelineCallbacks.indexOf(callback);
        this._timelineCallbacks.splice(index, 1);
      }
    }
    /**
     * Register a callback to listen to one of the events defined in `VideoContext.EVENTS`
     *
     * @param {String} type - the event to register against.
     * @param {Function} func - the callback to register.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * ctx.registerCallback(VideoContext.EVENTS.STALLED, () => console.log("Playback stalled"));
     * ctx.registerCallback(VideoContext.EVENTS.UPDATE, () => console.log("new frame"));
     * ctx.registerCallback(VideoContext.EVENTS.ENDED, () => console.log("Playback ended"));
     */
  }, {
    key: "registerCallback",
    value: function registerCallback(type, func) {
      if (!this._callbacks.has(type)) return false;
      this._callbacks.get(type).push(func);
    }
    /**
     * Remove a previously registered callback
     *
     * @param {Function} func - the callback to remove.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     *
     * //the callback
     * var updateCallback = () => console.log("new frame");
     *
     * //register the callback
     * ctx.registerCallback(VideoContext.EVENTS.UPDATE, updateCallback);
     * //then unregister it
     * ctx.unregisterCallback(updateCallback);
     *
     */
  }, {
    key: "unregisterCallback",
    value: function unregisterCallback(func) {
      var _iterator2 = _createForOfIteratorHelper(this._callbacks.values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var funcArray = _step2.value;
          var index = funcArray.indexOf(func);
          if (index !== -1) {
            funcArray.splice(index, 1);
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return false;
    }
  }, {
    key: "_callCallbacks",
    value: function _callCallbacks(type) {
      var funcArray = this._callbacks.get(type);
      var _iterator3 = _createForOfIteratorHelper(funcArray),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var func = _step3.value;
          func(this._currentTime);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    /**
     * Get the canvas that the VideoContext is using.
     *
     * @return {HTMLCanvasElement} The canvas that the VideoContext is using.
     *
     */
  }, {
    key: "element",
    get: function get() {
      return this._canvas;
    }
    /**
     * Get the current state.
     * @return {STATE} The number representing the state.
     *
     */
  }, {
    key: "state",
    get: function get() {
      return this._state;
    }
    /**
     * Set the progress through the internal timeline.
     * Setting this can be used as a way to implement a scrubbable timeline.
     *
     * @param {number} currentTime - this is the currentTime to set in seconds.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.connect(ctx.destination);
     * videoNode.start(0);
     * videoNode.stop(20);
     * ctx.currentTime = 10; // seek 10 seconds in
     * ctx.play();
     *
     */
  }, {
    key: "currentTime",
    get:
    /**
     * Get how far through the internal timeline has been played.
     *
     * Getting this value will give the current playhead position. Can be used for updating timelines.
     * @return {number} The time in seconds through the current playlist.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.connect(ctx.destination);
     * videoNode.start(0);
     * videoNode.stop(10);
     * ctx.play();
     * setTimeout(() => console.log(ctx.currentTime),1000); //should print roughly 1.0
     *
     */
    function get() {
      return this._currentTime;
    }
    /**
     * Get the time at which the last node in the current internal timeline finishes playing.
     *
     * @return {number} The end time in seconds of the last video node to finish playing.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * console.log(ctx.duration); //prints 0
     *
     * var videoNode = ctx.video("video.mp4");
     * videoNode.connect(ctx.destination);
     * videoNode.start(0);
     * videoNode.stop(10);
     *
     * console.log(ctx.duration); //prints 10
     *
     * ctx.play();
     */,
    set: function set(currentTime) {
      if (currentTime < this.duration && this._state === VideoContext.STATE.ENDED) this._state = VideoContext.STATE.PAUSED;
      if (typeof currentTime === "string") {
        currentTime = parseFloat(currentTime);
      }
      for (var i = 0; i < this._sourceNodes.length; i++) {
        this._sourceNodes[i]._seek(currentTime);
      }
      for (var _i2 = 0; _i2 < this._processingNodes.length; _i2++) {
        this._processingNodes[_i2]._seek(currentTime);
      }
      this._currentTime = currentTime;
    }
  }, {
    key: "duration",
    get: function get() {
      var maxTime = 0;
      for (var i = 0; i < this._sourceNodes.length; i++) {
        if (this._sourceNodes[i].state !== sourcenode_1.SOURCENODESTATE.waiting && this._sourceNodes[i]._stopTime > maxTime) {
          maxTime = this._sourceNodes[i]._stopTime;
        }
      }
      return maxTime;
    }
    /**
     * Get the final node in the render graph which represents the canvas to display content on to.
     *
     * This proprety is read-only and there can only ever be one destination node. Other nodes can connect to this but you cannot connect this node to anything.
     *
     * @return {DestinationNode} A graph node representing the canvas to display the content on.
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.start(0);
     * videoNode.stop(10);
     * videoNode.connect(ctx.destination);
     *
     */
  }, {
    key: "destination",
    get: function get() {
      return this._destinationNode;
    }
    /**
     * Set the playback rate of the VideoContext instance.
     * This will alter the playback speed of all media elements played through the VideoContext.
     *
     * @param {number} rate - this is the playback rate.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.start(0);
     * videoNode.stop(10);
     * videoNode.connect(ctx.destination);
     * ctx.playbackRate = 2;
     * ctx.play(); // Double playback rate means this will finish playing in 5 seconds.
     */
  }, {
    key: "playbackRate",
    get:
    /**
     *  Return the current playbackRate of the video context.
     * @return {number} A value representing the playbackRate. 1.0 by default.
     */
    function get() {
      return this._playbackRate;
    }
    /**
     * Set the volume of all MediaNode created in the VideoContext.
     * @param {number} volume - the volume to apply to the video nodes.
     */,
    set: function set(rate) {
      if (rate <= 0) {
        throw new RangeError("playbackRate must be greater than 0");
      }
      var _iterator4 = _createForOfIteratorHelper(this._sourceNodes),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var node = _step4.value;
          if (node.constructor.name === videonode_1.VIDEOTYPE) {
            node._globalPlaybackRate = rate;
            node._playbackRateUpdated = true;
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      this._playbackRate = rate;
    }
  }, {
    key: "volume",
    get:
    /**
     * Return the current volume of the video context.
     * @return {number} A value representing the volume. 1.0 by default.
     */
    function get() {
      return this._volume;
    }
    /**
     * Start the VideoContext playing
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.connect(ctx.destination);
     * videoNode.start(0);
     * videoNode.stop(10);
     * ctx.play();
     */,
    set: function set(vol) {
      var _iterator5 = _createForOfIteratorHelper(this._sourceNodes),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var node = _step5.value;
          if (node instanceof videonode_1["default"] || node instanceof audionode_1["default"]) {
            node.volume = vol;
          }
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      this._volume = vol;
    }
  }, {
    key: "play",
    value: function play() {
      console.debug("VideoContext - playing");
      //Initialise the video element cache
      if (this._videoElementCache) this._videoElementCache.init();
      // set the state.
      this._state = VideoContext.STATE.PLAYING;
      return true;
    }
    /**
     * Pause playback of the VideoContext
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("video.mp4");
     * videoNode.connect(ctx.destination);
     * videoNode.start(0);
     * videoNode.stop(20);
     * ctx.currentTime = 10; // seek 10 seconds in
     * ctx.play();
     * setTimeout(() => ctx.pause(), 1000); //pause playback after roughly one second.
     */
  }, {
    key: "pause",
    value: function pause() {
      console.debug("VideoContext - pausing");
      this._state = VideoContext.STATE.PAUSED;
      return true;
    }
    /**
     * Create a new node representing a video source
     *
     * @param {string|HTMLVideoElement|MediaStream} - The URL or video element to create the video from.
     * @param {number} [sourceOffset=0] - Offset into the start of the source video to start playing from.
     * @param {number} [preloadTime=4] - How many seconds before the video is to be played to start loading it.
     * @param {Object} [videoElementAttributes] - A dictionary of attributes to map onto the underlying video element.
     * @return {VideoNode} A new video node.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var videoNode = ctx.video("bigbuckbunny.mp4");
     */
  }, {
    key: "video",
    value: function video(src) {
      var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var videoElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var videoNode = new videonode_1["default"](src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, this._videoElementCache, videoElementAttributes);
      this._sourceNodes.push(videoNode);
      return videoNode;
    }
    /**
     * Create a new node representing an audio source
     * @param {string|HTMLAudioElement|MediaStream} src - The url or audio element to create the audio node from.
     * @param {number} [sourceOffset=0] - Offset into the start of the source audio to start playing from.
     * @param {number} [preloadTime=4] - How long before a node is to be displayed to attmept to load it.
     * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
     * @return {AudioNode} A new audio node.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var audioNode = ctx.audio("ziggystardust.mp3");
     */
  }, {
    key: "audio",
    value: function audio(src) {
      var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var audioElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var audioNode = new audionode_1["default"](src, this._gl, this._renderGraph, this._currentTime, this._playbackRate, sourceOffset, preloadTime, undefined, audioElementAttributes);
      this._sourceNodes.push(audioNode);
      return audioNode;
    }
    /**
     * @deprecated
     */
  }, {
    key: "createVideoSourceNode",
    value: function createVideoSourceNode(src) {
      var sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var videoElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      this._deprecate("Warning: createVideoSourceNode will be deprecated in v1.0, please switch to using VideoContext.video()");
      return this.video(src, sourceOffset, preloadTime, videoElementAttributes);
    }
    /**
     * Create a new node representing an image source
     * @param {string|HTMLImageElement|ImageBitmap} src - The url or image element to create the image node from.
     * @param {number} [preloadTime=4] - How long before a node is to be displayed to attmept to load it.
     * @param {Object} [imageElementAttributes] - Any attributes to be given to the underlying image element.
     * @return {ImageNode} A new image node.
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     * var imageNode = ctx.image("image.png");
     *
     * @example
     * var canvasElement = document.getElementById("canvas");
     * var imageElement = document.getElementById("image");
     * var ctx = new VideoContext(canvasElement);
     * var imageNode = ctx.image(imageElement);
     */
  }, {
    key: "image",
    value: function image(src) {
      var preloadTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      var imageElementAttributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var imageNode = new imagenode_1["default"](src, this._gl, this._renderGraph, this._currentTime, preloadTime, imageElementAttributes);
      this._sourceNodes.push(imageNode);
      return imageNode;
    }
    /**
     * @deprecated
     */
  }, {
    key: "createImageSourceNode",
    value: function createImageSourceNode(src) {
      var _sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      var imageElementAttributes = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      this._deprecate("Warning: createImageSourceNode will be deprecated in v1.0, please switch to using VideoContext.image()");
      return this.image(src, preloadTime, imageElementAttributes);
    }
    /**
     * Create a new node representing a canvas source
     * @param {Canvas} src - The canvas element to create the canvas node from.
     * @return {CanvasNode} A new canvas node.
     */
  }, {
    key: "canvas",
    value: function canvas(_canvas) {
      var canvasNode = new canvasnode_1["default"](_canvas, this._gl, this._renderGraph, this._currentTime);
      this._sourceNodes.push(canvasNode);
      return canvasNode;
    }
    /**
     * @deprecated
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  }, {
    key: "createCanvasSourceNode",
    value: function createCanvasSourceNode(canvas) {
      var _sourceOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _preloadTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
      this._deprecate("Warning: createCanvasSourceNode will be deprecated in v1.0, please switch to using VideoContext.canvas()");
      return this.canvas(canvas);
    }
    /**
     * Create a new effect node.
     * @param {IDefinition} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS.
     * @return {EffectNode} A new effect node created from the passed definition
     */
  }, {
    key: "effect",
    value: function effect(definition) {
      var effectNode = new effectnode_1["default"](this._gl, this._renderGraph, definition);
      this._processingNodes.push(effectNode);
      return effectNode;
    }
    /**
     * @deprecated
     */
  }, {
    key: "createEffectNode",
    value: function createEffectNode(definition) {
      this._deprecate("Warning: createEffectNode will be deprecated in v1.0, please switch to using VideoContext.effect()");
      return this.effect(definition);
    }
    /**
     * Create a new compositiing node.
     *
     * Compositing nodes are used for operations such as combining multiple video sources into a single track/connection for further processing in the graph.
     *
     * A compositing node is slightly different to other processing nodes in that it only has one input in it's definition but can have unlimited connections made to it.
     * The shader in the definition is run for each input in turn, drawing them to the output buffer. This means there can be no interaction between the spearte inputs to a compositing node, as they are individually processed in seperate shader passes.
     *
     * @param {IDefinition} definition - this is an object defining the shaders, inputs, and properties of the compositing node to create. Builtin definitions can be found by accessing VideoContext.DEFINITIONS
     *
     * @return {CompositingNode} A new compositing node created from the passed definition.
     *
     * @example
     *
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     *
     * //A simple compositing node definition which just renders all the inputs to the output buffer.
     * var combineDefinition = {
     *     vertexShader : "\
     *         attribute vec2 a_position;\
     *         attribute vec2 a_texCoord;\
     *         varying vec2 v_texCoord;\
     *         void main() {\
     *             gl_Position = vec4(vec2(2.0,2.0)*vec2(1.0, 1.0), 0.0, 1.0);\
     *             v_texCoord = a_texCoord;\
     *         }",
     *     fragmentShader : "\
     *         precision mediump float;\
     *         uniform sampler2D u_image;\
     *         uniform float a;\
     *         varying vec2 v_texCoord;\
     *         varying float v_progress;\
     *         void main(){\
     *             vec4 color = texture2D(u_image, v_texCoord);\
     *             gl_FragColor = color;\
     *         }",
     *     properties:{
     *         "a":{type:"uniform", value:0.0},
     *     },
     *     inputs:["u_image"]
     * };
     * //Create the node, passing in the definition.
     * var trackNode = videoCtx.compositor(combineDefinition);
     *
     * //create two videos which will play at back to back
     * var videoNode1 = ctx.video("video1.mp4");
     * videoNode1.play(0);
     * videoNode1.stop(10);
     * var videoNode2 = ctx.video("video2.mp4");
     * videoNode2.play(10);
     * videoNode2.stop(20);
     *
     * //Connect the nodes to the combine node. This will give a single connection representing the two videos which can
     * //be connected to other effects such as LUTs, chromakeyers, etc.
     * videoNode1.connect(trackNode);
     * videoNode2.connect(trackNode);
     *
     * //Don't do anything exciting, just connect it to the output.
     * trackNode.connect(ctx.destination);
     *
     */
  }, {
    key: "compositor",
    value: function compositor(definition) {
      var compositingNode = new compositingnode_1["default"](this._gl, this._renderGraph, definition);
      this._processingNodes.push(compositingNode);
      return compositingNode;
    }
    /**
     * Instanciate a custom built source node
     * @param {typeof SourceNode} CustomSourceNode
     * @param {any} src
     * @param  {...any} options
     */
  }, {
    key: "customSourceNode",
    value: function customSourceNode(CustomSourceNode, src) {
      for (var _len = arguments.length, options = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        options[_key - 2] = arguments[_key];
      }
      var customSourceNode = _construct(CustomSourceNode, [src, this._gl, this._renderGraph, this._currentTime].concat(options));
      this._sourceNodes.push(customSourceNode);
      return customSourceNode;
    }
    /**
     * @depricated
     */
  }, {
    key: "createCompositingNode",
    value: function createCompositingNode(definition) {
      this._deprecate("Warning: createCompositingNode will be deprecated in v1.0, please switch to using VideoContext.compositor()");
      return this.compositor(definition);
    }
    /**
     * Create a new transition node.
     *
     * Transistion nodes are a type of effect node which have parameters which can be changed as events on the timeline.
     *
     * For example a transition node which cross-fades between two videos could have a "mix" property which sets the
     * progress through the transistion. Rather than having to write your own code to adjust this property at specfic
     * points in time a transition node has a "transition" function which takes a startTime, stopTime, targetValue, and a
     * propertyName (which will be "mix"). This will linearly interpolate the property from the curernt value to
     * tragetValue between the startTime and stopTime.
     *
     * @param {Object} definition - this is an object defining the shaders, inputs, and properties of the transition node to create.
     * @return {TransitionNode} A new transition node created from the passed definition.
     * @example
     *
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement);
     *
     * //A simple cross-fade node definition which cross-fades between two videos based on the mix property.
     * var crossfadeDefinition = {
     *     vertexShader : "\
     *        attribute vec2 a_position;\
     *        attribute vec2 a_texCoord;\
     *        varying vec2 v_texCoord;\
     *        void main() {\
     *            gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\
     *            v_texCoord = a_texCoord;\
     *         }",
     *     fragmentShader : "\
     *         precision mediump float;\
     *         uniform sampler2D u_image_a;\
     *         uniform sampler2D u_image_b;\
     *         uniform float mix;\
     *         varying vec2 v_texCoord;\
     *         varying float v_mix;\
     *         void main(){\
     *             vec4 color_a = texture2D(u_image_a, v_texCoord);\
     *             vec4 color_b = texture2D(u_image_b, v_texCoord);\
     *             color_a[0] *= mix;\
     *             color_a[1] *= mix;\
     *             color_a[2] *= mix;\
     *             color_a[3] *= mix;\
     *             color_b[0] *= (1.0 - mix);\
     *             color_b[1] *= (1.0 - mix);\
     *             color_b[2] *= (1.0 - mix);\
     *             color_b[3] *= (1.0 - mix);\
     *             gl_FragColor = color_a + color_b;\
     *         }",
     *     properties:{
     *         "mix":{type:"uniform", value:0.0},
     *     },
     *     inputs:["u_image_a","u_image_b"]
     * };
     *
     * //Create the node, passing in the definition.
     * var transitionNode = videoCtx.transition(crossfadeDefinition);
     *
     * //create two videos which will overlap by two seconds
     * var videoNode1 = ctx.video("video1.mp4");
     * videoNode1.play(0);
     * videoNode1.stop(10);
     * var videoNode2 = ctx.video("video2.mp4");
     * videoNode2.play(8);
     * videoNode2.stop(18);
     *
     * //Connect the nodes to the transistion node.
     * videoNode1.connect(transitionNode);
     * videoNode2.connect(transitionNode);
     *
     * //Set-up a transition which happens at the crossover point of the playback of the two videos
     * transitionNode.transition(8,10,1.0,"mix");
     *
     * //Connect the transition node to the output
     * transitionNode.connect(ctx.destination);
     *
     * //start playback
     * ctx.play();
     */
  }, {
    key: "transition",
    value: function transition(definition) {
      var transitionNode = new transitionnode_1["default"](this._gl, this._renderGraph, definition);
      this._processingNodes.push(transitionNode);
      return transitionNode;
    }
    /**
     * @deprecated
     */
  }, {
    key: "createTransitionNode",
    value: function createTransitionNode(definition) {
      this._deprecate("Warning: createTransitionNode will be deprecated in v1.0, please switch to using VideoContext.transition()");
      return this.transition(definition);
    }
  }, {
    key: "_isStalled",
    value: function _isStalled() {
      for (var i = 0; i < this._sourceNodes.length; i++) {
        var sourceNode = this._sourceNodes[i];
        if (!sourceNode._isReady()) {
          return true;
        }
      }
      return false;
    }
    /**
     * This allows manual calling of the update loop of the videoContext.
     *
     * @param {Number} dt - The difference in seconds between this and the previous calling of update.
     * @example
     *
     * var canvasElement = document.getElementById("canvas");
     * var ctx = new VideoContext(canvasElement, undefined, {"manualUpdate" : true});
     *
     * var previousTime;
     * function update(time){
     *     if (previousTime === undefined) previousTime = time;
     *     var dt = (time - previousTime)/1000;
     *     ctx.update(dt);
     *     previousTime = time;
     *     requestAnimationFrame(update);
     * }
     * update();
     *
     */
  }, {
    key: "update",
    value: function update(dt) {
      this._update(dt);
    }
  }, {
    key: "_update",
    value: function _update(dt) {
      //Remove any destroyed nodes
      this._sourceNodes = this._sourceNodes.filter(function (sourceNode) {
        if (!sourceNode.destroyed) return sourceNode;
      });
      this._processingNodes = this._processingNodes.filter(function (processingNode) {
        if (!processingNode.destroyed) return processingNode;
      });
      if (this._state === VideoContext.STATE.PLAYING || this._state === VideoContext.STATE.STALLED || this._state === VideoContext.STATE.PAUSED) {
        this._callCallbacks(VideoContext.EVENTS.UPDATE);
        if (this._state !== VideoContext.STATE.PAUSED) {
          if (this._isStalled()) {
            this._callCallbacks(VideoContext.EVENTS.STALLED);
            this._state = VideoContext.STATE.STALLED;
          } else {
            this._state = VideoContext.STATE.PLAYING;
          }
        }
        if (this._state === VideoContext.STATE.PLAYING) {
          //Handle timeline callbacks.
          var activeCallbacks = new Map();
          var _iterator6 = _createForOfIteratorHelper(this._timelineCallbacks),
            _step6;
          try {
            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              var _callback2 = _step6.value;
              if (_callback2.time >= this.currentTime && _callback2.time < this._currentTime + dt * this._playbackRate) {
                //group the callbacks by time
                if (!activeCallbacks.has(_callback2.time)) activeCallbacks.set(_callback2.time, []);
                activeCallbacks.get(_callback2.time).push(_callback2);
              }
            }
            //Sort the groups of callbacks by the times of the groups
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }
          var timeIntervals = Array.from(activeCallbacks.keys());
          timeIntervals.sort(function (a, b) {
            return a - b;
          });
          for (var _i3 = 0, _timeIntervals = timeIntervals; _i3 < _timeIntervals.length; _i3++) {
            var t = _timeIntervals[_i3];
            var callbacks = activeCallbacks.get(t);
            callbacks.sort(function (a, b) {
              return a.ordering - b.ordering;
            });
            var _iterator7 = _createForOfIteratorHelper(callbacks),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var callback = _step7.value;
                callback.func();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          }
          this._currentTime += dt * this._playbackRate;
          if (this._currentTime > this.duration && this._endOnLastSourceEnd) {
            //Do an update od the sourcenodes in case anything in the "ended" callbacks modifes currentTime and sources haven't had a chance to stop.
            for (var i = 0; i < this._sourceNodes.length; i++) {
              this._sourceNodes[i]._update(this._currentTime);
            }
            this._state = VideoContext.STATE.ENDED;
            this._callCallbacks(VideoContext.EVENTS.ENDED);
          }
        }
        var sourcesPlaying = false;
        for (var _i4 = 0; _i4 < this._sourceNodes.length; _i4++) {
          var sourceNode = this._sourceNodes[_i4];
          if (this._state === VideoContext.STATE.STALLED) {
            if (sourceNode._isReady() && sourceNode._state === sourcenode_1.SOURCENODESTATE.playing) sourceNode._pause();
          }
          if (this._state === VideoContext.STATE.PAUSED) {
            sourceNode._pause();
          }
          if (this._state === VideoContext.STATE.PLAYING) {
            sourceNode._play();
          }
          sourceNode._update(this._currentTime);
          if (sourceNode._state === sourcenode_1.SOURCENODESTATE.paused || sourceNode._state === sourcenode_1.SOURCENODESTATE.playing) {
            sourcesPlaying = true;
          }
        }
        if (sourcesPlaying !== this._sourcesPlaying && this._state === VideoContext.STATE.PLAYING) {
          if (sourcesPlaying === true) {
            this._callCallbacks(VideoContext.EVENTS.CONTENT);
          } else {
            this._callCallbacks(VideoContext.EVENTS.NOCONTENT);
          }
          this._sourcesPlaying = sourcesPlaying;
        }
        /*
         * Itterate the directed acyclic graph using Khan's algorithm (KHAAAAAN!).
         *
         * This has highlighted a bunch of ineffencies in the rendergraph class about how its stores connections.
         * Mainly the fact that to get inputs for a node you have to iterate the full list of connections rather than
         * a node owning it's connections.
         * The trade off with changing this is making/removing connections becomes more costly performance wise, but
         * this is definitely worth while because getting the connnections is a much more common operation.
         *
         * TL;DR Future matt - refactor this.
         *
         */
        var sortedNodes = [];
        var connections = this._renderGraph.connections.slice();
        var nodes = rendergraph_1["default"].getInputlessNodes(connections);
        while (nodes.length > 0) {
          var node = nodes.pop();
          sortedNodes.push(node);
          var _iterator8 = _createForOfIteratorHelper(rendergraph_1["default"].outputEdgesFor(node, connections)),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var edge = _step8.value;
              var index = connections.indexOf(edge);
              if (index > -1) connections.splice(index, 1);
              if (rendergraph_1["default"].inputEdgesFor(edge.destination, connections).length === 0) {
                nodes.push(edge.destination);
              }
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }
        for (var _i5 = 0, _sortedNodes = sortedNodes; _i5 < _sortedNodes.length; _i5++) {
          var _node = _sortedNodes[_i5];
          if (this._sourceNodes.indexOf(_node) === -1) {
            _node._update(this._currentTime);
            _node._render();
          }
        }
      }
    }
    /**
     * Destroy all nodes in the graph and reset the timeline. After calling this any created nodes will be unusable.
     */
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;
      var _iterator9 = _createForOfIteratorHelper(this._callbacks),
        _step9;
      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var callback = _step9.value;
          // FIXME: bug
          // this.unregisterCallback(callback);
          callback[1].forEach(function (cb) {
            return _this2.unregisterCallback(cb);
          });
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
      var _iterator10 = _createForOfIteratorHelper(this._sourceNodes),
        _step10;
      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var node = _step10.value;
          node.destroy();
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
      var _iterator11 = _createForOfIteratorHelper(this._processingNodes),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var _node2 = _step11.value;
          _node2.destroy();
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      this._update(0);
      this._sourceNodes = [];
      this._processingNodes = [];
      this._timeline = [];
      this._currentTime = 0;
      this._state = VideoContext.STATE.PAUSED;
      this._playbackRate = 1.0;
      this._sourcesPlaying = undefined;
      Object.keys(VideoContext.EVENTS).forEach(function (name) {
        return _this2._callbacks.set(VideoContext.EVENTS[name], []);
      });
      this._timelineCallbacks = [];
    }
  }, {
    key: "_deprecate",
    value: function _deprecate(msg) {
      console.log(msg);
    }
  }, {
    key: "snapshot",
    value:
    /**
     * Get a JS Object containing the state of the VideoContext instance and all the created nodes.
     */
    function snapshot() {
      return (0, utils_1.snapshot)(this);
    }
  }], [{
    key: "DEFINITIONS",
    get: function get() {
      return definitions_1["default"];
    }
  }, {
    key: "NODES",
    get: function get() {
      return nodes_1["default"];
    }
  }]);
  return VideoContext;
}();
/**
 * Video Context States
 * @readonly
 * @typedef {Object} STATE
 * @property {number} STATE.PLAYING - All sources are active
 * @property {number} STATE.PAUSED - All sources are paused
 * @property {number} STATE.STALLED - One or more sources is unable to play
 * @property {number} STATE.ENDED - All sources have finished playing
 * @property {number} STATE.BROKEN - The render graph is in a broken state
 */
VideoContext.STATE = Object.freeze({
  PLAYING: 0,
  PAUSED: 1,
  STALLED: 2,
  ENDED: 3,
  BROKEN: 4
});
/**
 * Video Context Events
 * @readonly
 * @typedef {Object} STATE
 * @property {string} STATE.UPDATE - Called any time a frame is rendered to the screen.
 * @property {string} STATE.STALLED - happens anytime the playback is stopped due to buffer starvation for playing assets.
 * @property {string} STATE.ENDED - Called once plackback has finished (i.e ctx.currentTime == ctx.duration).
 * @property {string} STATE.CONTENT - Called at the start of a time region where there is content playing out of one or more sourceNodes.
 * @property {number} STATE.NOCONTENT - Called at the start of any time region where the VideoContext is still playing, but there are currently no active playing sources.
 */
VideoContext.EVENTS = Object.freeze({
  UPDATE: "update",
  STALLED: "stalled",
  ENDED: "ended",
  CONTENT: "content",
  NOCONTENT: "nocontent"
});
VideoContext.visualiseVideoContextTimeline = utils_1.visualiseVideoContextTimeline;
VideoContext.visualiseVideoContextGraph = utils_1.visualiseVideoContextGraph;
VideoContext.createControlFormForNode = utils_1.createControlFormForNode;
VideoContext.createSigmaGraphDataFromRenderGraph = utils_1.createSigmaGraphDataFromRenderGraph;
VideoContext.exportToJSON = utils_1.exportToJSON;
VideoContext.updateablesManager = updateablesManager;
VideoContext.importSimpleEDL = utils_1.importSimpleEDL;
exports["default"] = VideoContext;
module.exports = exports.default;

/***/ }),

/***/ "./src/videoelementcache.ts":
/*!**********************************!*\
  !*** ./src/videoelementcache.ts ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var videoelementcacheitem_1 = __importDefault(__webpack_require__(/*! ./videoelementcacheitem */ "./src/videoelementcacheitem.ts"));
var utils_1 = __webpack_require__(/*! ./utils */ "./src/utils.ts");
var VideoElementCache = /*#__PURE__*/function () {
  function VideoElementCache() {
    var cache_size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    _classCallCheck(this, VideoElementCache);
    this._cacheItems = [];
    this._cacheItemsInitialised = false;
    for (var i = 0; i < cache_size; i++) {
      // Create a video element and cache
      this._cacheItems.push(new videoelementcacheitem_1["default"]());
    }
  }
  _createClass(VideoElementCache, [{
    key: "init",
    value: function init() {
      if (!this._cacheItemsInitialised) {
        var _iterator = _createForOfIteratorHelper(this._cacheItems),
          _step;
        try {
          var _loop = function _loop() {
            var cacheItem = _step.value;
            try {
              cacheItem.element.play().then(function () {
                // Pause any elements not in the "playing" state
                if (!cacheItem.isPlaying()) {
                  cacheItem.element.pause();
                }
              }, function (e) {
                if (e.name !== "NotSupportedError") throw e;
              });
            } catch (e) {
              //console.log(e.name);
            }
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      this._cacheItemsInitialised = true;
    }
    /**
     * Find and return an empty initialised element or, if the cache is
     * empty, create a new one.
     *
     * @param {Object} mediaNode A `MediaNode` instance
     */
  }, {
    key: "getElementAndLinkToNode",
    value: function getElementAndLinkToNode(mediaNode) {
      // Try and get an already intialised element.
      var _iterator2 = _createForOfIteratorHelper(this._cacheItems),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _cacheItem = _step2.value;
          // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
          if (!(0, utils_1.mediaElementHasSource)(_cacheItem.element)) {
            // attach node to the element
            _cacheItem.linkNode(mediaNode);
            return _cacheItem.element;
          }
        }
        // Fallback to creating a new element if none exist or are available
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      console.debug("No available video element in the cache, creating a new one. This may break mobile, make your initial cache larger.");
      var cacheItem = new videoelementcacheitem_1["default"](mediaNode);
      this._cacheItems.push(cacheItem);
      this._cacheItemsInitialised = false;
      return cacheItem.element;
    }
    /**
     * Unlink any media node currently linked to a cached video element.
     *
     * @param {VideoElement} element The element to unlink from any media nodes
     */
  }, {
    key: "unlinkNodeFromElement",
    value: function unlinkNodeFromElement(element) {
      var _iterator3 = _createForOfIteratorHelper(this._cacheItems),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var cacheItem = _step3.value;
          // Unlink the node from the element
          if (element === cacheItem._element) {
            cacheItem.unlinkNode();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "length",
    get: function get() {
      return this._cacheItems.length;
    }
  }, {
    key: "unused",
    get: function get() {
      var count = 0;
      var _iterator4 = _createForOfIteratorHelper(this._cacheItems),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var cacheItem = _step4.value;
          // For some reason an uninitialised videoElement has its sr attribute set to the windows href. Hence the below check.
          if (!(0, utils_1.mediaElementHasSource)(cacheItem.element)) count += 1;
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return count;
    }
  }]);
  return VideoElementCache;
}();
exports["default"] = VideoElementCache;
module.exports = exports.default;

/***/ }),

/***/ "./src/videoelementcacheitem.ts":
/*!**************************************!*\
  !*** ./src/videoelementcacheitem.ts ***!
  \**************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var sourcenode_1 = __webpack_require__(/*! ./SourceNodes/sourcenode */ "./src/SourceNodes/sourcenode.ts");
/**
 * A video element item created and managed by the `VideoElementCache`.
 *
 * This creates and stores a `<video />` element, which is assigned
 * to a `MediaNode` by the `VideoElementCache` for playback. Once
 * playback has completed the `MediaNode` association will be removed
 * and potentially replaced with another.
 */
var VideoElementCacheItem = /*#__PURE__*/function () {
  function VideoElementCacheItem() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, VideoElementCacheItem);
    this._element = this._createElement();
    this._node = node;
  }
  _createClass(VideoElementCacheItem, [{
    key: "_createElement",
    value: function _createElement() {
      var videoElement = document.createElement("video");
      videoElement.setAttribute("crossorigin", "anonymous");
      videoElement.setAttribute("webkit-playsinline", "");
      videoElement.setAttribute("playsinline", "");
      // This seems necessary to allow using video as a texture. See:
      // https://bugs.chromium.org/p/chromium/issues/detail?id=898550
      // https://github.com/pixijs/pixi.js/issues/5996
      videoElement.preload = "auto";
      return videoElement;
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    },
    set: function set(element) {
      this._element = element;
    }
  }, {
    key: "linkNode",
    value: function linkNode(node) {
      this._node = node;
    }
  }, {
    key: "unlinkNode",
    value: function unlinkNode() {
      this._node = null;
    }
  }, {
    key: "isPlaying",
    value: function isPlaying() {
      return this._node && this._node._state === sourcenode_1.SOURCENODESTATE.playing;
    }
  }]);
  return VideoElementCacheItem;
}();
exports["default"] = VideoElementCacheItem;
module.exports = exports.default;

/***/ }),

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float cropLeft;\nuniform float cropRight;\nuniform float cropTop;\nuniform float cropBottom;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (v_texCoord[0] < (cropLeft+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[0] > (cropRight+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] < (-cropBottom+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    if (v_texCoord[1] > (-cropTop+1.0)/2.0) color = vec4(0.0,0.0,0.0,0.0);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_crop/aaf_video_crop.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_crop/aaf_video_crop.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(v_texCoord[0] ,1.0 - v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flip/aaf_video_flip.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flip/aaf_video_flip.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvoid main(){\n    vec2 coord = vec2(1.0 - v_texCoord[0] ,v_texCoord[1]);\n    vec4 color = texture2D(u_image, coord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_flop/aaf_video_flop.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/aaf_video_flop/aaf_video_flop.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.frag":
/*!********************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.frag ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float positionOffsetX;\nuniform float positionOffsetY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0] - positionOffsetX/2.0, v_texCoord[1] -  positionOffsetY/2.0);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_position/aaf_video_position.vert":
/*!********************************************************************!*\
  !*** ./src/Definitions/aaf_video_position/aaf_video_position.vert ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.frag":
/*!**************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.frag ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float scaleX;\nuniform float scaleY;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = vec2(v_texCoord[0]*1.0/scaleX - (1.0/scaleX/2.0 -0.5), v_texCoord[1]*1.0/scaleY - (1.0/scaleY/2.0 -0.5));\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/aaf_video_scale/aaf_video_scale.vert":
/*!**************************************************************!*\
  !*** ./src/Definitions/aaf_video_scale/aaf_video_scale.vert ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nuniform vec3 colorAlphaThreshold;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    if (color[0] > colorAlphaThreshold[0] && color[1]> colorAlphaThreshold[1] && color[2]> colorAlphaThreshold[2]){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/colorThreshold/colorThreshold.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/colorThreshold/colorThreshold.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/combine/combine.frag":
/*!**********************************************!*\
  !*** ./src/Definitions/combine/combine.frag ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float a;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/combine/combine.vert":
/*!**********************************************!*\
  !*** ./src/Definitions/combine/combine.vert ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crop/crop.frag":
/*!****************************************!*\
  !*** ./src/Definitions/crop/crop.frag ***!
  \****************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float x;\nuniform float y;\nuniform float width;\nuniform float height;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    vec2 pos = (((v_texCoord)*vec2(width, height)) + vec2(0, 1.0-height)) +vec2(x,-y);\n    vec4 color = texture2D(u_image, pos);\n    if (pos[0] < 0.0 || pos[0] > 1.0 || pos[1] < 0.0 || pos[1] > 1.0){\n        color = vec4(0.0,0.0,0.0,0.0);\n    }\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/crop/crop.vert":
/*!****************************************!*\
  !*** ./src/Definitions/crop/crop.vert ***!
  \****************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.frag ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n"

/***/ }),

/***/ "./src/Definitions/crossfade/crossfade.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/crossfade/crossfade.vert ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.frag":
/*!**************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.frag ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    float wobble = 1.0 - abs((mix*2.0)-1.0);\n    vec2 pos = vec2(v_texCoord[0] + ((sin(v_texCoord[1]*(10.0*wobble*3.14) + wobble*10.0)/13.0)), v_texCoord[1]);\n    vec4 color_a = texture2D(u_image_a, pos);\n    vec4 color_b = texture2D(u_image_b, pos);\n    color_a[0] *= (1.0 - mix);\n    color_a[1] *= (1.0 - mix);\n    color_a[2] *= (1.0 - mix);\n    color_a[3] *= (1.0 - mix);\n    color_b[0] *= mix;\n    color_b[1] *= mix;\n    color_b[2] *= mix;\n    color_b[3] *= mix;\n    gl_FragColor = color_a + color_b;\n}\n"

/***/ }),

/***/ "./src/Definitions/dreamfade/dreamfade.vert":
/*!**************************************************!*\
  !*** ./src/Definitions/dreamfade/dreamfade.vert ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalBlur/horizontalBlur.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalBlur/horizontalBlur.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nuniform float blurAmount;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(-0.028 * blurAmount, 0.0);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(-0.024 * blurAmount, 0.0);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(-0.020 * blurAmount, 0.0);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(-0.016 * blurAmount, 0.0);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(-0.012 * blurAmount, 0.0);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(-0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(-0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 7] = v_texCoord + vec2( 0.004 * blurAmount, 0.0);\n    v_blurTexCoords[ 8] = v_texCoord + vec2( 0.008 * blurAmount, 0.0);\n    v_blurTexCoords[ 9] = v_texCoord + vec2( 0.012 * blurAmount, 0.0);\n    v_blurTexCoords[10] = v_texCoord + vec2( 0.016 * blurAmount, 0.0);\n    v_blurTexCoords[11] = v_texCoord + vec2( 0.020 * blurAmount, 0.0);\n    v_blurTexCoords[12] = v_texCoord + vec2( 0.024 * blurAmount, 0.0);\n    v_blurTexCoords[13] = v_texCoord + vec2( 0.028 * blurAmount, 0.0);\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[0] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/horizontalWipe/horizontalWipe.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/horizontalWipe/horizontalWipe.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.frag":
/*!****************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.frag ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform vec3 inputMix;\nuniform vec3 outputMix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    float mono = color[0]*inputMix[0] + color[1]*inputMix[1] + color[2]*inputMix[2];\n    color[0] = mono * outputMix[0];\n    color[1] = mono * outputMix[1];\n    color[2] = mono * outputMix[2];\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/monochrome/monochrome.vert":
/*!****************************************************!*\
  !*** ./src/Definitions/monochrome/monochrome.vert ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/opacity/opacity.frag":
/*!**********************************************!*\
  !*** ./src/Definitions/opacity/opacity.frag ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float opacity;\nvarying vec2 v_texCoord;\nvarying float v_opacity;\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[3] *= opacity;\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/opacity/opacity.vert":
/*!**********************************************!*\
  !*** ./src/Definitions/opacity/opacity.vert ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co){\n    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/randomDissolve/randomDissolve.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/randomDissolve/randomDissolve.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.frag":
/*!************************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.frag ***!
  \************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat sign (vec2 p1, vec2 p2, vec2 p3){\n    return (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1]);\n}\nbool pointInTriangle(vec2 pt, vec2 v1, vec2 v2, vec2 v3){\n    bool b1, b2, b3;\n    b1 = sign(pt, v1, v2) < 0.0;\n    b2 = sign(pt, v2, v3) < 0.0;\n    b3 = sign(pt, v3, v1) < 0.0;\n    return ((b1 == b2) && (b2 == b3));\n}\nvec2 rotatePointAboutPoint(vec2 point, vec2 pivot, float angle){\n    float s = sin(angle);\n    float c = cos(angle);\n    float x = point[0] - pivot[0];\n    float y = point[1] - pivot[1];\n    float new_x = x * c - y * s;\n    float new_y = x * s + y * c;\n    return vec2(new_x + pivot[0], new_y+pivot[1]);\n}\n\nvoid main(){\n    vec4 color_a = texture2D(u_image_b, v_texCoord);\n    vec4 color_b = texture2D(u_image_a, v_texCoord);\n    vec2 t0_p0,t0_p1,t0_p2,t1_p0,t1_p1,t1_p2,t2_p0,t2_p1,t2_p2,t3_p0,t3_p1,t3_p2;\n    vec2 t4_p0,t4_p1,t4_p2,t5_p0,t5_p1,t5_p2,t6_p0,t6_p1,t6_p2,t7_p0,t7_p1,t7_p2;\n\n\n    t0_p0 = vec2(0.0, 0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p1 = vec2(0.0, -0.25) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n    t0_p2 = vec2(1.0, 0.0) * clamp(mix,0.0,1.0) * 2.0 + vec2(0.5,0.5);\n\n    t1_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854);\n    t1_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854);\n    t1_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854);\n\n    t2_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 2.0);\n    t2_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 2.0);\n\n    t3_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 3.0);\n    t3_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 3.0);\n\n    t4_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 4.0);\n    t4_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 4.0);\n\n    t5_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 5.0);\n    t5_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 5.0);\n\n    t6_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 6.0);\n    t6_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 6.0);\n\n    t7_p0 = rotatePointAboutPoint(t0_p0, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p1 = rotatePointAboutPoint(t0_p1, vec2(0.5,0.5), 0.7854 * 7.0);\n    t7_p2 = rotatePointAboutPoint(t0_p2, vec2(0.5,0.5), 0.7854 * 7.0);\n\n    if(mix > 0.99){\n        gl_FragColor = color_a;\n        return;\n    }\n    if(mix < 0.01){\n        gl_FragColor = color_b;\n        return;\n    }\n    if(pointInTriangle(v_texCoord, t0_p0, t0_p1, t0_p2) || pointInTriangle(v_texCoord, t1_p0, t1_p1, t1_p2) || pointInTriangle(v_texCoord, t2_p0, t2_p1, t2_p2) || pointInTriangle(v_texCoord, t3_p0, t3_p1, t3_p2) || pointInTriangle(v_texCoord, t4_p0, t4_p1, t4_p2) || pointInTriangle(v_texCoord, t5_p0, t5_p1, t5_p2) || pointInTriangle(v_texCoord, t6_p0, t6_p1, t6_p2) || pointInTriangle(v_texCoord, t7_p0, t7_p1, t7_p2)){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/starWipe/starWipe.vert":
/*!************************************************!*\
  !*** ./src/Definitions/starWipe/starWipe.vert ***!
  \************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.frag":
/*!************************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.frag ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform float currentTime;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (clamp(rand(v_texCoord, currentTime),  0.01, 1.001) > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/staticDissolve/staticDissolve.vert":
/*!************************************************************!*\
  !*** ./src/Definitions/staticDissolve/staticDissolve.vert ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.frag ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nuniform float currentTime;\nuniform float amount;\nvarying vec2 v_texCoord;\nuniform vec3 weight;\nfloat rand(vec2 co, float currentTime){\n    return fract(sin(dot(co.xy,vec2(12.9898,78.233))+currentTime) * 43758.5453);\n}\nvoid main(){\n    vec4 color = texture2D(u_image, v_texCoord);\n    color[0] = color[0] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[0] * amount;\n    color[1] = color[1] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[1] * amount;\n    color[2] = color[2] + (2.0*(clamp(rand(v_texCoord, currentTime),  0.01, 1.001)-0.5)) * weight[2] *amount;\n    gl_FragColor = color;\n}\n"

/***/ }),

/***/ "./src/Definitions/staticEffect/staticEffect.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/staticEffect/staticEffect.vert ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag":
/*!********************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.frag ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nuniform vec4 color;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    float mix_amount = (mix *2.0) - 1.0;\n    if(mix_amount < 0.0){\n        gl_FragColor = abs(mix_amount) * color_a + (1.0 - abs(mix_amount)) * color;\n    } else {\n        gl_FragColor = mix_amount * color_b + (1.0 - mix_amount) * color;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert":
/*!********************************************************************!*\
  !*** ./src/Definitions/toColorAndBackFade/toColorAndBackFade.vert ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.frag ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying vec2 v_blurTexCoords[14];\nvoid main(){\n    gl_FragColor = vec4(0.0);\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 0])*0.0044299121055113265;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 1])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 2])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 3])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 4])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 5])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 6])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_texCoord         )*0.159576912161;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 7])*0.147308056121;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 8])*0.115876621105;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[ 9])*0.0776744219933;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[10])*0.0443683338718;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[11])*0.0215963866053;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[12])*0.00895781211794;\n    gl_FragColor += texture2D(u_image, v_blurTexCoords[13])*0.0044299121055113265;\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalBlur/verticalBlur.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalBlur/verticalBlur.vert ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nuniform float blurAmount;\nvarying vec2 v_blurTexCoords[14];\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n    v_blurTexCoords[ 0] = v_texCoord + vec2(0.0,-0.028 * blurAmount);\n    v_blurTexCoords[ 1] = v_texCoord + vec2(0.0,-0.024 * blurAmount);\n    v_blurTexCoords[ 2] = v_texCoord + vec2(0.0,-0.020 * blurAmount);\n    v_blurTexCoords[ 3] = v_texCoord + vec2(0.0,-0.016 * blurAmount);\n    v_blurTexCoords[ 4] = v_texCoord + vec2(0.0,-0.012 * blurAmount);\n    v_blurTexCoords[ 5] = v_texCoord + vec2(0.0,-0.008 * blurAmount);\n    v_blurTexCoords[ 6] = v_texCoord + vec2(0.0,-0.004 * blurAmount);\n    v_blurTexCoords[ 7] = v_texCoord + vec2(0.0, 0.004 * blurAmount);\n    v_blurTexCoords[ 8] = v_texCoord + vec2(0.0, 0.008 * blurAmount);\n    v_blurTexCoords[ 9] = v_texCoord + vec2(0.0, 0.012 * blurAmount);\n    v_blurTexCoords[10] = v_texCoord + vec2(0.0, 0.016 * blurAmount);\n    v_blurTexCoords[11] = v_texCoord + vec2(0.0, 0.020 * blurAmount);\n    v_blurTexCoords[12] = v_texCoord + vec2(0.0, 0.024 * blurAmount);\n    v_blurTexCoords[13] = v_texCoord + vec2(0.0, 0.028 * blurAmount);\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.frag":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.frag ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image_a;\nuniform sampler2D u_image_b;\nuniform float mix;\nvarying vec2 v_texCoord;\nvarying float v_mix;\nvoid main(){\n    vec4 color_a = texture2D(u_image_a, v_texCoord);\n    vec4 color_b = texture2D(u_image_b, v_texCoord);\n    if (v_texCoord[1] > mix){\n        gl_FragColor = color_a;\n    } else {\n        gl_FragColor = color_b;\n    }\n}\n"

/***/ }),

/***/ "./src/Definitions/verticalWipe/verticalWipe.vert":
/*!********************************************************!*\
  !*** ./src/Definitions/verticalWipe/verticalWipe.vert ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ }),

/***/ "./src/DestinationNode/destinationnode.frag":
/*!**************************************************!*\
  !*** ./src/DestinationNode/destinationnode.frag ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "precision mediump float;\nuniform sampler2D u_image;\nvarying vec2 v_texCoord;\nvarying float v_progress;\nvoid main(){\n    gl_FragColor = texture2D(u_image, v_texCoord);\n}\n"

/***/ }),

/***/ "./src/DestinationNode/destinationnode.vert":
/*!**************************************************!*\
  !*** ./src/DestinationNode/destinationnode.vert ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "attribute vec2 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main() {\n    gl_Position = vec4(vec2(2.0,2.0)*a_position-vec2(1.0, 1.0), 0.0, 1.0);\n    v_texCoord = a_texCoord;\n}\n"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/videocontext.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=videocontext.js.map