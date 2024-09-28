"use strict";
'use client';
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
;
exports.default = (function (_a) {
    var threadId = _a.threadId;
    (0, react_1.useEffect)(function () {
        var script = document.createElement('script');
        script.src = "https://www.commentssection.site/embed.js?threadId=".concat(threadId);
        script.async = true;
        document.head.appendChild(script);
        return function () {
            document.head.removeChild(script);
        };
    }, [threadId]);
    if (!threadId) {
        console.warn('CommentsSection was not rendered, threadId was not provided.');
        return null;
    }
    return (react_1.default.createElement("div", { id: "commentsSection", "data-testid": "commentsSection" },
        react_1.default.createElement("noscript", null, "Please enable Javascript.")));
});
