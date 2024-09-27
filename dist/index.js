"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = require("react-dom/client");
var CommentsSection_1 = __importDefault(require("./CommentsSection"));
var container = document.getElementById('root');
var root = (0, client_1.createRoot)(container);
root.render(react_1.default.createElement(react_1.default.StrictMode, null,
    react_1.default.createElement("h1", null, "CommentSection.site React sandbox"),
    react_1.default.createElement(CommentsSection_1.default, { threadId: "cm0quhmaj0001hbo8o5po5otc" })));
