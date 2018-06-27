"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticSegmentComponent = (function () {
    function SemanticSegmentComponent() {
    }
    SemanticSegmentComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-segment",
                    template: "<div class=\"ui segment {{class}}\">\n  <p><ng-content></ng-content></p>\n</div>"
                },] },
    ];
    SemanticSegmentComponent.ctorParameters = function () { return []; };
    SemanticSegmentComponent.propDecorators = {
        'class': [{ type: core_1.Input, args: ["class",] },],
    };
    return SemanticSegmentComponent;
}());
exports.SemanticSegmentComponent = SemanticSegmentComponent;
