"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG_PATH = void 0;
exports.loadConfig = loadConfig;
exports.saveConfig = saveConfig;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const CONFIG_PATH = path_1.default.join(__dirname, "..", "config.json");
exports.CONFIG_PATH = CONFIG_PATH;
function loadConfig() {
    if (fs_1.default.existsSync(CONFIG_PATH)) {
        return JSON.parse(fs_1.default.readFileSync(CONFIG_PATH, "utf-8"));
    }
    return { hasSeenGuide: false };
}
function saveConfig(config) {
    fs_1.default.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf-8");
}
