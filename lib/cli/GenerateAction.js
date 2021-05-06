"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const BaseAction_1 = require("./BaseAction");
const DocumenterConfig_1 = require("../documenters/DocumenterConfig");
const node_core_library_1 = require("@rushstack/node-core-library");
const MarkdownDocumenter_1 = require("../documenters/MarkdownDocumenter");
class GenerateAction extends BaseAction_1.BaseAction {
    constructor(parser) {
        super({
            actionName: 'generate',
            summary: 'generate markdown documentation based on a config file',
            documentation: 'Config file driven mode of operation for API Documenter' +
                ' Set --config --input-folder and --output-folder.'
        });
    }
    onExecute() {
        // override
        this.setConfigPath();
        let configFilePath = path.join(process.cwd(), this.configPath);
        // First try the current folder
        if (!node_core_library_1.FileSystem.exists(configFilePath)) {
            // Otherwise try the standard "config" subfolder
            configFilePath = path.join(process.cwd(), 'config', DocumenterConfig_1.DocumenterConfig.FILENAME);
            if (!node_core_library_1.FileSystem.exists(configFilePath)) {
                throw new Error(`Unable to find ${DocumenterConfig_1.DocumenterConfig.FILENAME} in the current folder or in a "config" subfolder`);
            }
        }
        const documenterConfig = DocumenterConfig_1.DocumenterConfig.loadFile(configFilePath);
        const apiModel = this.buildApiModel();
        if (documenterConfig.configFile.outputTarget === 'markdown') {
            const markdownDocumenter = new MarkdownDocumenter_1.MarkdownDocumenter(apiModel, documenterConfig);
            markdownDocumenter.generateFiles(this.outputFolder);
        }
        else {
            throw new Error(`output target ${documenterConfig.configFile.outputTarget} is not supported in this version of api-documenter.`);
        }
        return Promise.resolve();
    }
}
exports.GenerateAction = GenerateAction;
//# sourceMappingURL=GenerateAction.js.map