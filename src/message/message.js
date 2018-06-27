"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticMessageComponent = (function () {
    function SemanticMessageComponent(renderer) {
        this.renderer = renderer;
    }
    SemanticMessageComponent.prototype.close = function () {
        this.renderer.detachView([this.message.nativeElement]);
    };
    SemanticMessageComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    encapsulation: core_1.ViewEncapsulation.None,
                    selector: "sm-message",
                    styles: ["sm-message { display: block; margin: 1em 0; } message-header {display: block}"],
                    template: "<div class=\"ui message {{class}}\" [ngClass]=\"{'icon': icon}\" #message>\n<i class=\"close icon\" (click)=\"close()\"></i>\n<i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n  <div class=\"content\">\n    <div class=\"header\">\n      <ng-content select=\"message-header\"></ng-content>\n    </div>\n    <ng-content select=\"message-content\"></ng-content>\n  </div>\n</div>"
                },] },
    ];
    SemanticMessageComponent.ctorParameters = function () { return [
        { type: core_1.Renderer, },
    ]; };
    SemanticMessageComponent.propDecorators = {
        'icon': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'message': [{ type: core_1.ViewChild, args: ["message",] },],
    };
    return SemanticMessageComponent;
}());
exports.SemanticMessageComponent = SemanticMessageComponent;
