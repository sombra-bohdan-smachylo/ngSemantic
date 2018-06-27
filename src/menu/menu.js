"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticMenuComponent = (function () {
    function SemanticMenuComponent() {
        this.logoClass = "logo";
    }
    SemanticMenuComponent.prototype.ngAfterViewInit = function () {
        Array.from(this.innerElement.nativeElement.childNodes)
            .filter(function (element) { return element.nodeName === "SM-MENU"; })
            .map(function (element) { return element.firstElementChild.classList.remove("ui"); });
    };
    SemanticMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-menu",
                    template: "<div class=\"ui menu {{class}}\" #innerElement>\n<a href=\"#/\" *ngIf=\"logo\" class=\"header item\">\n    <img class=\"{{logoClass}}\" alt=\"{{title}}\" src=\"{{logo}}\">\n</a>\n\n<a href=\"#/\" *ngIf=\"title && !logo\" class=\"header item\">\n    {{title}}\n</a>\n\n<ng-content></ng-content>\n</div>\n"
                },] },
    ];
    SemanticMenuComponent.ctorParameters = function () { return []; };
    SemanticMenuComponent.propDecorators = {
        'logo': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'logoClass': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'innerElement': [{ type: core_1.ViewChild, args: ["innerElement",] },],
    };
    return SemanticMenuComponent;
}());
exports.SemanticMenuComponent = SemanticMenuComponent;
