"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticCardComponent = (function () {
    function SemanticCardComponent() {
    }
    SemanticCardComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-card",
                    template: "<div class=\"ui {{class}}\">\n<div class=\"image\" *ngIf=\"image\">\n    <img src=\"{{image}}\">\n  </div>\n  <div class=\"content\">\n    <ng-content select=\"card-title\"></ng-content>\n    <div class=\"meta\">\n      <ng-content select=\"card-subtitle\"></ng-content>\n    </div>\n    <div class=\"description\">\n      <ng-content select=\"card-content\"></ng-content>\n    </div>\n  </div>\n  <div class=\"extra content\">\n    <ng-content select=\"card-extra\"></ng-content>\n  </div>\n  <ng-content></ng-content>\n</div>"
                },] },
    ];
    SemanticCardComponent.ctorParameters = function () { return []; };
    SemanticCardComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'image': [{ type: core_1.Input },],
    };
    return SemanticCardComponent;
}());
exports.SemanticCardComponent = SemanticCardComponent;
var SemanticCardsComponent = (function () {
    function SemanticCardsComponent() {
    }
    SemanticCardsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-cards",
                    template: "<div class=\"ui cards {{class}}\"><ng-content></ng-content></div>"
                },] },
    ];
    SemanticCardsComponent.ctorParameters = function () { return []; };
    SemanticCardsComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
    };
    return SemanticCardsComponent;
}());
exports.SemanticCardsComponent = SemanticCardsComponent;
