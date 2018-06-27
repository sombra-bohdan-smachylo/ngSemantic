"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticButtonComponent = (function () {
    function SemanticButtonComponent() {
        this.disabled = false;
    }
    SemanticButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-button",
                    template: "<button [ngClass]=\"{icon: icon}\" [attr.disabled]=\"disabled ? true : null\" class=\"ui {{class}} button\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n    <ng-content></ng-content>\n</button>"
                },] },
    ];
    SemanticButtonComponent.ctorParameters = function () { return []; };
    SemanticButtonComponent.propDecorators = {
        'class': [{ type: core_1.Input, args: ["class",] },],
        'icon': [{ type: core_1.Input, args: ["icon",] },],
        'disabled': [{ type: core_1.Input, args: ["disabled",] },],
    };
    return SemanticButtonComponent;
}());
exports.SemanticButtonComponent = SemanticButtonComponent;
