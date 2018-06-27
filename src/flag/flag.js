"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticFlagComponent = (function () {
    function SemanticFlagComponent() {
    }
    SemanticFlagComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-flag",
                    template: "<i class=\"{{flag}} flag\"></i>"
                },] },
    ];
    SemanticFlagComponent.ctorParameters = function () { return []; };
    SemanticFlagComponent.propDecorators = {
        'flag': [{ type: core_1.Input, args: ["flag",] },],
    };
    return SemanticFlagComponent;
}());
exports.SemanticFlagComponent = SemanticFlagComponent;
