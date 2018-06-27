"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticDimmerComponent = (function () {
    function SemanticDimmerComponent() {
    }
    SemanticDimmerComponent.prototype.show = function (options) {
        jQuery(this.dimmer.nativeElement)
            .dimmer(options || {})
            .dimmer("toggle");
    };
    SemanticDimmerComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-dimmer",
                    template: "<div class=\"ui page dimmer\" #dimmer>\n  <div class=\"content\">\n    <ng-content></ng-content>\n  </div>\n</div>"
                },] },
    ];
    SemanticDimmerComponent.ctorParameters = function () { return []; };
    SemanticDimmerComponent.propDecorators = {
        'dimmer': [{ type: core_1.ViewChild, args: ["dimmer",] },],
    };
    return SemanticDimmerComponent;
}());
exports.SemanticDimmerComponent = SemanticDimmerComponent;
