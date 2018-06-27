"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticShapeComponent = (function () {
    function SemanticShapeComponent() {
        this.options = {};
        this.beforeChange = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
    }
    SemanticShapeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.options = Object.assign({
            beforeChange: function () { return _this.beforeChange.emit(true); },
            onChange: function () { return _this.onChange.emit(true); }
        }, this.options);
    };
    SemanticShapeComponent.prototype.show = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        jQuery(this.shape.nativeElement)
            .shape(this.options)
            .shape(args.join(","));
    };
    SemanticShapeComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-shape",
                    template: "\n    <div #shape class=\"ui shape {{class}}\">\n        <ng-content></ng-content>\n    </div>\n    "
                },] },
    ];
    SemanticShapeComponent.ctorParameters = function () { return []; };
    SemanticShapeComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'beforeChange': [{ type: core_1.Output },],
        'onChange': [{ type: core_1.Output },],
        'shape': [{ type: core_1.ViewChild, args: ["shape",] },],
    };
    return SemanticShapeComponent;
}());
exports.SemanticShapeComponent = SemanticShapeComponent;
