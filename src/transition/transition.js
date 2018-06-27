"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticTransitionComponent = (function () {
    function SemanticTransitionComponent() {
    }
    SemanticTransitionComponent.prototype.show = function (animation) {
        jQuery(this.transition.nativeElement)
            .transition(animation || "fade out");
    };
    SemanticTransitionComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-transition",
                    template: "\n    <div #transition>\n        <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    SemanticTransitionComponent.ctorParameters = function () { return []; };
    SemanticTransitionComponent.propDecorators = {
        'transition': [{ type: core_1.ViewChild, args: ["transition",] },],
    };
    return SemanticTransitionComponent;
}());
exports.SemanticTransitionComponent = SemanticTransitionComponent;
