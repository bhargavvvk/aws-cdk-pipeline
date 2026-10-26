"use strict";
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
exports.AppStage = void 0;
const cdk = __importStar(require("aws-cdk-lib"));
const s3_stack_1 = require("./s3-stack");
// A Stage groups one or more application stacks that are deployed together.
// The pipeline deploys one Stage at a time (e.g. dev → prod).
class AppStage extends cdk.Stage {
    constructor(scope, id, props) {
        super(scope, id, props);
        new s3_stack_1.S3Stack(this, 'S3Stack', {
            description: 'Day5 PoC — S3 bucket deployed via CDK Pipelines',
        });
    }
}
exports.AppStage = AppStage;
