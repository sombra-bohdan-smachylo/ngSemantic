"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticItemComponent = (function () {
    function SemanticItemComponent() {
    }
    SemanticItemComponent.prototype.ngAfterViewInit = function () {
        this.innerItemElement.nativeElement.parentElement.classList.add("item");
    };
    SemanticItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "a[sm-item], sm-item",
                    template: "<i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n<img *ngIf=\"image\" class=\"ui avatar image\" src=\"{{image}}\">\n<div class=\"content\" #innerItemElement>\n  <div *ngIf=\"header\" class=\"header\">\n    {{header}}\n  </div>\n  <ng-content></ng-content>\n</div>"
                },] },
    ];
    SemanticItemComponent.ctorParameters = function () { return []; };
    SemanticItemComponent.propDecorators = {
        'icon': [{ type: core_1.Input },],
        'header': [{ type: core_1.Input },],
        'image': [{ type: core_1.Input },],
        'innerItemElement': [{ type: core_1.ViewChild, args: ["innerItemElement",] },],
    };
    return SemanticItemComponent;
}());
exports.SemanticItemComponent = SemanticItemComponent;
