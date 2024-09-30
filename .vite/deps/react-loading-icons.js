import {
  require_react
} from "./chunk-XMMJGW5B.js";
import {
  __toESM
} from "./chunk-5WWUZCGV.js";

// node_modules/react-loading-icons/dist/esm/components/audio.js
var import_react = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function Audio(props) {
  var _a, _b, _c, _d, _e;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = (_c = props.stroke) !== null && _c !== void 0 ? _c : "transparent";
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react.default.createElement(
    "svg",
    __assign({}, __assign(__assign({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_d = props.height) !== null && _d !== void 0 ? _d : 80, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_e = props.width) !== null && _e !== void 0 ? _e : 55 }), { viewBox: "0 0 55 80" }),
    import_react.default.createElement(
      "g",
      { transform: "matrix(1 0 0 -1 0 80)" },
      import_react.default.createElement(
        "rect",
        __assign({ width: 10, height: 20, rx: 3 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "".concat(4.3 / speed, "s"), values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react.default.createElement(
        "rect",
        __assign({ x: 15, width: 10, height: 80, rx: 3 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "".concat(2 / speed, "s"), values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react.default.createElement(
        "rect",
        __assign({ x: 30, width: 10, height: 50, rx: 3 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "".concat(1.4 / speed, "s"), values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react.default.createElement(
        "rect",
        __assign({ x: 45, width: 10, height: 30, rx: 3 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "".concat(2 / speed, "s"), values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/ball-triangle.js
var import_react2 = __toESM(require_react());
var __assign2 = function() {
  __assign2 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function BallTriangle(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = props.fill;
  var stroke = (_b = props.stroke) !== null && _b !== void 0 ? _b : "#fff";
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react2.default.createElement(
    "svg",
    __assign2({}, __assign2(__assign2({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 57, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 57 }), { viewBox: "0 0 57 57" }),
    import_react2.default.createElement(
      "g",
      { transform: "translate(1 1)", strokeWidth: 2, fill: "none", fillRule: "evenodd" },
      import_react2.default.createElement(
        "circle",
        __assign2({ cx: 5, cy: 50, r: 5 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "".concat(2.2 / speed, "s"), values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite" }),
        import_react2.default.createElement("animate", { attributeName: "cx", begin: "0s", dur: "".concat(2.2 / speed, "s"), values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react2.default.createElement(
        "circle",
        __assign2({ cx: 27, cy: 5, r: 5 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "".concat(2.2 / speed, "s"), from: 5, to: 5, values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite" }),
        import_react2.default.createElement("animate", { attributeName: "cx", begin: "0s", dur: "".concat(2.2 / speed, "s"), from: 27, to: 27, values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react2.default.createElement(
        "circle",
        __assign2({ cx: 49, cy: 50, r: 5 }, { fill, stroke, fillOpacity, strokeOpacity }),
        import_react2.default.createElement("animate", { attributeName: "cy", begin: "0s", dur: "".concat(2.2 / speed, "s"), values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite" }),
        import_react2.default.createElement("animate", { attributeName: "cx", from: 49, to: 49, begin: "0s", dur: "".concat(2.2 / speed, "s"), values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/bars.js
var import_react3 = __toESM(require_react());
var __assign3 = function() {
  __assign3 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign3.apply(this, arguments);
};
function Bars(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react3.default.createElement(
    "svg",
    __assign3({}, __assign3(__assign3({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 140, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 135 }), { viewBox: "0 0 135 140" }),
    import_react3.default.createElement(
      "rect",
      __assign3({ y: 10, width: 15, height: 120, rx: 6 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react3.default.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "".concat(1 / speed, "s"), values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
      import_react3.default.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "".concat(1 / speed, "s"), values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react3.default.createElement(
      "rect",
      __assign3({ x: 30, y: 10, width: 15, height: 120, rx: 6 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react3.default.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "".concat(1 / speed, "s"), values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
      import_react3.default.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "".concat(1 / speed, "s"), values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react3.default.createElement(
      "rect",
      __assign3({ x: 60, width: 15, height: 140, rx: 6 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react3.default.createElement("animate", { attributeName: "height", begin: "0s", dur: "".concat(1 / speed, "s"), values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
      import_react3.default.createElement("animate", { attributeName: "y", begin: "0s", dur: "".concat(1 / speed, "s"), values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react3.default.createElement(
      "rect",
      __assign3({ x: 90, y: 10, width: 15, height: 120, rx: 6 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react3.default.createElement("animate", { attributeName: "height", begin: "0.25s", dur: "".concat(1 / speed, "s"), values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
      import_react3.default.createElement("animate", { attributeName: "y", begin: "0.25s", dur: "".concat(1 / speed, "s"), values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react3.default.createElement(
      "rect",
      __assign3({ x: 120, y: 10, width: 15, height: 120, rx: 6 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react3.default.createElement("animate", { attributeName: "height", begin: "0.5s", dur: "".concat(1 / speed, "s"), values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }),
      import_react3.default.createElement("animate", { attributeName: "y", begin: "0.5s", dur: "".concat(1 / speed, "s"), values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/circles.js
var import_react4 = __toESM(require_react());
var __assign4 = function() {
  __assign4 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign4.apply(this, arguments);
};
function Circles(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react4.default.createElement(
    "svg",
    __assign4({}, __assign4(__assign4({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 135, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 135 }), { viewBox: "0 0 135 135" }),
    import_react4.default.createElement(
      "path",
      __assign4({ d: "M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react4.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "-360 67 67", dur: "".concat(2.5 / speed, "s"), repeatCount: "indefinite" })
    ),
    import_react4.default.createElement(
      "path",
      __assign4({ d: "M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react4.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 67 67", to: "360 67 67", dur: "".concat(8 / speed, "s"), repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/grid.js
var import_react5 = __toESM(require_react());
var __assign5 = function() {
  __assign5 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign5.apply(this, arguments);
};
function Grid(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react5.default.createElement(
    "svg",
    __assign5({}, __assign5(__assign5({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 105, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 105 }), { viewBox: "0 0 105 105" }),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 12.5, cy: 12.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 12.5, cy: 52.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "100ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 52.5, cy: 12.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "300ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 52.5, cy: 52.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "600ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 92.5, cy: 12.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "800ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 92.5, cy: 52.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "400ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 12.5, cy: 92.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "700ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 52.5, cy: 92.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "500ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react5.default.createElement(
      "circle",
      __assign5({ cx: 92.5, cy: 92.5, r: 12.5 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react5.default.createElement("animate", { attributeName: "fill-opacity", begin: "200ms", dur: "".concat(1 / speed, "s"), values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/hearts.js
var import_react6 = __toESM(require_react());
var __assign6 = function() {
  __assign6 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign6.apply(this, arguments);
};
function Hearts(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  return import_react6.default.createElement(
    "svg",
    __assign6({}, __assign6(__assign6({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 64, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 140 }), { viewBox: "0 0 140 64" }),
    import_react6.default.createElement(
      "path",
      __assign6({ d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", fillOpacity }, { fill, stroke }),
      import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.4 / speed, "s"), values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react6.default.createElement(
      "path",
      __assign6({ d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", fillOpacity }, { fill, stroke }),
      import_react6.default.createElement("animate", { attributeName: "fill-opacity", begin: "0.7s", dur: "".concat(1.4 / speed, "s"), values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react6.default.createElement("path", __assign6({ d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" }, { fill, stroke }))
  );
}

// node_modules/react-loading-icons/dist/esm/components/oval.js
var import_react7 = __toESM(require_react());
var __assign7 = function() {
  __assign7 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign7.apply(this, arguments);
};
function Oval(props) {
  var _a, _b, _c, _d, _e;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var stroke = (_b = props.stroke) !== null && _b !== void 0 ? _b : "#fff";
  var strokeWidth = (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 2;
  var strokeOpacity = props.strokeOpacity;
  return import_react7.default.createElement(
    "svg",
    __assign7({}, __assign7(__assign7({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_d = props.height) !== null && _d !== void 0 ? _d : 38, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_e = props.width) !== null && _e !== void 0 ? _e : 38 }), { viewBox: "0 0 38 38", overflow: "visible" }),
    import_react7.default.createElement(
      "g",
      __assign7({ transform: "translate(1 1)", fill: "none", fillRule: "evenodd" }, { stroke, strokeWidth, strokeOpacity }),
      import_react7.default.createElement("circle", { strokeOpacity: 0.5, cx: 18, cy: 18, r: 18 }),
      import_react7.default.createElement(
        "path",
        { d: "M36 18c0-9.94-8.06-18-18-18" },
        import_react7.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "".concat(1 / speed, "s"), repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/puff.js
var import_react8 = __toESM(require_react());
var __assign8 = function() {
  __assign8 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign8.apply(this, arguments);
};
function Puff(props) {
  var _a, _b, _c, _d, _e;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var stroke = (_b = props.stroke) !== null && _b !== void 0 ? _b : "#fff";
  var strokeWidth = (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 2;
  var strokeOpacity = props.strokeOpacity;
  return import_react8.default.createElement(
    "svg",
    __assign8({}, __assign8(__assign8({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_d = props.height) !== null && _d !== void 0 ? _d : 44, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_e = props.width) !== null && _e !== void 0 ? _e : 44 }), { viewBox: "0 0 44 44" }),
    import_react8.default.createElement(
      "g",
      __assign8({ fill: "none", fillRule: "evenodd" }, { stroke, strokeWidth, strokeOpacity }),
      import_react8.default.createElement(
        "circle",
        { cx: 22, cy: 22, r: 1 },
        import_react8.default.createElement("animate", { attributeName: "r", begin: "0s", dur: "".concat(1.8 / speed, "s"), values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
        import_react8.default.createElement("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "".concat(1.8 / speed, "s"), values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })
      ),
      import_react8.default.createElement(
        "circle",
        { cx: 22, cy: 22, r: 1 },
        import_react8.default.createElement("animate", { attributeName: "r", begin: "-0.9s", dur: "".concat(1.8 / speed, "s"), values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }),
        import_react8.default.createElement("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "".concat(1.8 / speed, "s"), values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/rings.js
var import_react9 = __toESM(require_react());
var __assign9 = function() {
  __assign9 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign9.apply(this, arguments);
};
function Rings(props) {
  var _a, _b, _c, _d, _e;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var stroke = (_b = props.stroke) !== null && _b !== void 0 ? _b : "#fff";
  var strokeWidth = (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 2;
  var strokeOpacity = props.strokeOpacity;
  return import_react9.default.createElement(
    "svg",
    __assign9({}, __assign9(__assign9({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_d = props.height) !== null && _d !== void 0 ? _d : 45, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_e = props.width) !== null && _e !== void 0 ? _e : 45 }), { viewBox: "0 0 45 45" }),
    import_react9.default.createElement(
      "g",
      __assign9({ fill: "none", fillRule: "evenodd", transform: "translate(1 1)" }, { stroke, strokeWidth, strokeOpacity }),
      import_react9.default.createElement(
        "circle",
        { cx: 22, cy: 22, r: 6 },
        import_react9.default.createElement("animate", { attributeName: "r", begin: "1.5s", dur: "".concat(3 / speed, "s"), values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
        import_react9.default.createElement("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "".concat(3 / speed, "s"), values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
        import_react9.default.createElement("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "".concat(3 / speed, "s"), values: "2;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react9.default.createElement(
        "circle",
        { cx: 22, cy: 22, r: 6 },
        import_react9.default.createElement("animate", { attributeName: "r", begin: "3s", dur: "".concat(3 / speed, "s"), values: "6;22", calcMode: "linear", repeatCount: "indefinite" }),
        import_react9.default.createElement("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "".concat(3 / speed, "s"), values: "1;0", calcMode: "linear", repeatCount: "indefinite" }),
        import_react9.default.createElement("animate", { attributeName: "stroke-width", begin: "3s", dur: "".concat(3 / speed, "s"), values: "2;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react9.default.createElement(
        "circle",
        { cx: 22, cy: 22, r: 8 },
        import_react9.default.createElement("animate", { attributeName: "r", begin: "0s", dur: "".concat(1.5 / speed, "s"), values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/spinning-circles.js
var import_react10 = __toESM(require_react());
var __assign10 = function() {
  __assign10 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign10.apply(this, arguments);
};
function SpinningCircles(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react10.default.createElement(
    "svg",
    __assign10({}, __assign10(__assign10({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 58, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 58 }), { viewBox: "0 0 58 58" }),
    import_react10.default.createElement(
      "g",
      __assign10({ transform: "translate(2 1)", fillRule: "evenodd" }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react10.default.createElement(
        "circle",
        { cx: 42.601, cy: 11.462, r: 5 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "1;0;0;0;0;0;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 49.063, cy: 27.063, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;1;0;0;0;0;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 42.601, cy: 42.663, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;1;0;0;0;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 27, cy: 49.125, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;0;1;0;0;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 11.399, cy: 42.663, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;0;0;1;0;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 4.938, cy: 27.063, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;0;0;0;1;0;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 11.399, cy: 11.462, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;0;0;0;0;1;0", calcMode: "linear", repeatCount: "indefinite" })
      ),
      import_react10.default.createElement(
        "circle",
        { cx: 27, cy: 5, r: 5, fillOpacity: 0 },
        import_react10.default.createElement("animate", { attributeName: "fill-opacity", begin: "0s", dur: "".concat(1.3 / speed, "s"), values: "0;0;0;0;0;0;0;1", calcMode: "linear", repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/tail-spin.js
var import_react11 = __toESM(require_react());
var __assign11 = function() {
  __assign11 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign11.apply(this, arguments);
};
function TailSpin(props) {
  var _a, _b, _c, _d, _e;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var stroke = (_b = props.stroke) !== null && _b !== void 0 ? _b : "#fff";
  var strokeWidth = (_c = props.strokeWidth) !== null && _c !== void 0 ? _c : 2;
  var strokeOpacity = props.strokeOpacity;
  return import_react11.default.createElement(
    "svg",
    __assign11({}, __assign11(__assign11({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_d = props.height) !== null && _d !== void 0 ? _d : 38, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_e = props.width) !== null && _e !== void 0 ? _e : 38 }), { viewBox: "0 0 38 38" }),
    import_react11.default.createElement(
      "defs",
      null,
      import_react11.default.createElement(
        "linearGradient",
        { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "prefix__a" },
        import_react11.default.createElement("stop", { stopOpacity: 0, offset: "0%" }),
        import_react11.default.createElement("stop", { stopOpacity: 0.631, offset: "63.146%" }),
        import_react11.default.createElement("stop", { offset: "100%" })
      )
    ),
    import_react11.default.createElement(
      "g",
      { transform: "translate(1 1)", fill: "none", fillRule: "evenodd" },
      import_react11.default.createElement(
        "path",
        __assign11({ d: "M36 18c0-9.94-8.06-18-18-18" }, { stroke, strokeWidth, strokeOpacity }),
        import_react11.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "".concat(0.9 / speed, "s"), repeatCount: "indefinite" })
      ),
      import_react11.default.createElement(
        "circle",
        { cx: 36, cy: 18, r: 1 },
        import_react11.default.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "".concat(0.9 / speed, "s"), repeatCount: "indefinite" })
      )
    )
  );
}

// node_modules/react-loading-icons/dist/esm/components/three-dots.js
var import_react12 = __toESM(require_react());
var __assign12 = function() {
  __assign12 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign12.apply(this, arguments);
};
function ThreeDots(props) {
  var _a, _b, _c, _d;
  var speed = Number(String((_a = props.speed) !== null && _a !== void 0 ? _a : 1));
  var fill = (_b = props.fill) !== null && _b !== void 0 ? _b : "#fff";
  var stroke = props.stroke;
  var fillOpacity = props.fillOpacity;
  var strokeOpacity = props.strokeOpacity;
  return import_react12.default.createElement(
    "svg",
    __assign12({}, __assign12(__assign12({}, props), { className: props.className ? "icon-loading ".concat(props.className) : "icon-loading", fill: void 0, fillOpacity: void 0, height: (_c = props.height) !== null && _c !== void 0 ? _c : 30, speed: void 0, stroke: void 0, strokeOpacity: void 0, strokeWidth: void 0, width: (_d = props.width) !== null && _d !== void 0 ? _d : 120 }), { viewBox: "0 0 120 30" }),
    import_react12.default.createElement(
      "circle",
      __assign12({ cx: 15, cy: 15, r: 15 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react12.default.createElement("animate", { attributeName: "r", from: 15, to: 15, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
      import_react12.default.createElement("animate", { attributeName: "fill-opacity", from: 1, to: 1, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react12.default.createElement(
      "circle",
      __assign12({ cx: 60, cy: 15, r: 9 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react12.default.createElement("animate", { attributeName: "r", from: 9, to: 9, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }),
      import_react12.default.createElement("animate", { attributeName: "fill-opacity", from: 0.5, to: 0.5, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })
    ),
    import_react12.default.createElement(
      "circle",
      __assign12({ cx: 105, cy: 15, r: 15 }, { fill, stroke, fillOpacity, strokeOpacity }),
      import_react12.default.createElement("animate", { attributeName: "r", from: 15, to: 15, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }),
      import_react12.default.createElement("animate", { attributeName: "fill-opacity", from: 1, to: 1, begin: "0s", dur: "".concat(0.8 / speed, "s"), values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })
    )
  );
}

// node_modules/react-loading-icons/dist/esm/index.js
var Audio2 = Audio;
var BallTriangle2 = BallTriangle;
var Bars2 = Bars;
var Circles2 = Circles;
var Grid2 = Grid;
var Hearts2 = Hearts;
var Oval2 = Oval;
var Puff2 = Puff;
var Rings2 = Rings;
var SpinningCircles2 = SpinningCircles;
var TailSpin2 = TailSpin;
var ThreeDots2 = ThreeDots;
var LoadingIcons = {
  Audio: Audio2,
  BallTriangle: BallTriangle2,
  Bars: Bars2,
  Circles: Circles2,
  Grid: Grid2,
  Hearts: Hearts2,
  Oval: Oval2,
  Puff: Puff2,
  Rings: Rings2,
  SpinningCircles: SpinningCircles2,
  TailSpin: TailSpin2,
  ThreeDots: ThreeDots2
};
var esm_default = LoadingIcons;
export {
  Audio2 as Audio,
  BallTriangle2 as BallTriangle,
  Bars2 as Bars,
  Circles2 as Circles,
  Grid2 as Grid,
  Hearts2 as Hearts,
  Oval2 as Oval,
  Puff2 as Puff,
  Rings2 as Rings,
  SpinningCircles2 as SpinningCircles,
  TailSpin2 as TailSpin,
  ThreeDots2 as ThreeDots,
  esm_default as default
};
//# sourceMappingURL=react-loading-icons.js.map