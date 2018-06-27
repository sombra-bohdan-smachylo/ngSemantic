"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticListComponent = (function () {
    function SemanticListComponent() {
    }
    SemanticListComponent.prototype.ngAfterViewInit = function () {
        Array.from(this.innerElement.nativeElement.childNodes)
            .filter(function (element) { return element.nodeName === "SM-LIST"; })
            .map(function (element) { return element.firstElementChild.classList.remove("ui"); });
    };
    SemanticListComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-list",
                    template: "\n<div class=\"ui list {{class}}\" #innerElement>\n<ng-content></ng-content>\n</div>\n"
                },] },
    ];
    SemanticListComponent.ctorParameters = function () { return []; };
    SemanticListComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'innerElement': [{ type: core_1.ViewChild, args: ["innerElement",] },],
    };
    return SemanticListComponent;
}());
exports.SemanticListComponent = SemanticListComponent;
