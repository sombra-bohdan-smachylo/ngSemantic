"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticProgressComponent = (function () {
    function SemanticProgressComponent() {
        this._progress = 0;
    }
    Object.defineProperty(SemanticProgressComponent.prototype, "progress", {
        set: function (value) {
            this._progress = (value >= 100) ? 100 : value;
        },
        enumerable: true,
        configurable: true
    });
    SemanticProgressComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-progress",
                    template: "<div [ngClass]=\"{'success': _progress === 100}\" class=\"ui {{class}} progress\" [attr.data-percent]=\"_progress\">\n  <div class=\"bar\" [ngStyle]=\"{'width': _progress + '%'}\">\n    <div class=\"progress\">{{_progress}}%</div>\n  </div>\n  <div class=\"label\" *ngIf=\"label\">{{label}}</div>\n</div>"
                },] },
    ];
    SemanticProgressComponent.ctorParameters = function () { return []; };
    SemanticProgressComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'progress': [{ type: core_1.Input },],
    };
    return SemanticProgressComponent;
}());
exports.SemanticProgressComponent = SemanticProgressComponent;
