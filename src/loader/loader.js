"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticLoaderComponent = (function () {
    function SemanticLoaderComponent() {
        this.complete = false;
    }
    SemanticLoaderComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-loader",
                    template: "<div *ngIf=\"!complete\" class=\"ui active dimmer {{class}}\">\n    <div [ngClass]=\"{text: text}\" class=\"ui loader\">{{text}}</div>\n  </div>"
                },] },
    ];
    SemanticLoaderComponent.ctorParameters = function () { return []; };
    SemanticLoaderComponent.propDecorators = {
        'class': [{ type: core_1.Input, args: ["class",] },],
        'text': [{ type: core_1.Input, args: ["text",] },],
        'complete': [{ type: core_1.Input, args: ["complete",] },],
    };
    return SemanticLoaderComponent;
}());
exports.SemanticLoaderComponent = SemanticLoaderComponent;
