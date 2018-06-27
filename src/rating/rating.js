"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticRatingComponent = (function () {
    function SemanticRatingComponent() {
        this.onRate = new core_1.EventEmitter();
    }
    SemanticRatingComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery(this.rating.nativeElement)
            .rating({
            initialRating: this.initialRating || 0,
            maxRating: this.maxRating || 5,
            onRate: function (value) {
                _this.onRate.emit(value);
            }
        });
    };
    SemanticRatingComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-rating",
                    template: "<div class=\"ui {{class}} rating\" #rating></div>"
                },] },
    ];
    SemanticRatingComponent.ctorParameters = function () { return []; };
    SemanticRatingComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'initialRating': [{ type: core_1.Input },],
        'maxRating': [{ type: core_1.Input },],
        'onRate': [{ type: core_1.Output },],
        'rating': [{ type: core_1.ViewChild, args: ["rating",] },],
    };
    return SemanticRatingComponent;
}());
exports.SemanticRatingComponent = SemanticRatingComponent;
