"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticDropdownComponent = (function () {
    function SemanticDropdownComponent() {
        this.options = {};
        this.onChange = new core_1.EventEmitter();
    }
    SemanticDropdownComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var options = Object.assign({
            onChange: function (value, a, b) {
                if (b != null && b.length) {
                    _this.onChange.emit(b[0].innerText);
                }
            }
        }, this.options);
        jQuery(this.dropdown.nativeElement)
            .dropdown(options);
    };
    SemanticDropdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-dropdown",
                    template: "\n    <div class=\"ui {{class}} dropdown item\" #dropdown>\n        <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n        <div *ngIf=\"title\" class=\"text\">{{title}}</div>\n        <i class=\"dropdown icon\"></i>\n        <div class=\"menu\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n"
                },] },
    ];
    SemanticDropdownComponent.ctorParameters = function () { return []; };
    SemanticDropdownComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'onChange': [{ type: core_1.Output },],
        'dropdown': [{ type: core_1.ViewChild, args: ["dropdown",] },],
    };
    return SemanticDropdownComponent;
}());
exports.SemanticDropdownComponent = SemanticDropdownComponent;
