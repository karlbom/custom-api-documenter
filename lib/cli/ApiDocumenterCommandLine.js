"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
const ts_command_line_1 = require("@rushstack/ts-command-line");
const MarkdownAction_1 = require("./MarkdownAction");
//import { YamlAction } from './YamlAction';
const GenerateAction_1 = require("./GenerateAction");
class ApiDocumenterCommandLine extends ts_command_line_1.CommandLineParser {
    constructor() {
        super({
            toolFilename: 'api-documenter',
            toolDescription: 'Reads *.api.json files produced by api-extractor, ' +
                ' and generates API documentation in Markdown+HTML format.'
        });
        this._populateActions();
    }
    onDefineParameters() {
        // override
        // No parameters
    }
    _populateActions() {
        this.addAction(new MarkdownAction_1.MarkdownAction(this));
        this.addAction(new GenerateAction_1.GenerateAction(this));
    }
}
exports.ApiDocumenterCommandLine = ApiDocumenterCommandLine;
//# sourceMappingURL=ApiDocumenterCommandLine.js.map