import { CommandLineAction } from '@rushstack/ts-command-line';
import { ApiModel } from '@microsoft/api-extractor-model';
export declare abstract class BaseAction extends CommandLineAction {
    protected inputFolder: string;
    protected outputFolder: string;
    protected configPath: string;
    private _inputFolderParameter;
    private _outputFolderParameter;
    private _configPathParameter;
    protected onDefineParameters(): void;
    protected setConfigPath(): void;
    protected buildApiModel(): ApiModel;
    private _applyInheritDoc;
    /**
     * Copy the content from `sourceDocComment` to `targetDocComment`.
     * This code is borrowed from DocCommentEnhancer as a temporary workaround.
     */
    private _copyInheritedDocs;
}
//# sourceMappingURL=BaseAction.d.ts.map