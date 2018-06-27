"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticPopupComponent = (function () {
    function SemanticPopupComponent() {
        this.visible = false;
    }
    SemanticPopupComponent.prototype.show = function (element, data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        if (!this.visible) {
            this.visible = true;
            this.element = element.target;
            var options = Object.assign({
                closable: true,
                exclusive: true,
                lastResort: true,
                on: "click",
                onHide: function () { return _this.hide(); },
                popup: this.popup.nativeElement,
                position: "bottom center",
                preserve: true,
            }, data);
            jQuery(this.element)
                .popup(options)
                .popup("show");
        }
    };
    SemanticPopupComponent.prototype.hide = function () {
        if (this.visible && this.element) {
            this.visible = false;
            jQuery(this.element)
                .popup("hide");
        }
    };
    SemanticPopupComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-popup",
                    template: "<div class=\"ui popup very wide {{class}}\" #popup>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                },] },
    ];
    SemanticPopupComponent.ctorParameters = function () { return []; };
    SemanticPopupComponent.propDecorators = {
        'popup': [{ type: core_1.ViewChild, args: ["popup",] },],
        'class': [{ type: core_1.Input },],
    };
    return SemanticPopupComponent;
}());
exports.SemanticPopupComponent = SemanticPopupComponent;
