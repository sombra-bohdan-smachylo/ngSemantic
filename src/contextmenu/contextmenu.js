"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticContextMenuComponent = (function () {
    function SemanticContextMenuComponent() {
        this._position = { x: 0, y: 0 };
        this.show = false;
    }
    Object.defineProperty(SemanticContextMenuComponent.prototype, "position", {
        set: function (data) {
            if (data) {
                this._position = data;
                this.show = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticContextMenuComponent.prototype.clickedOutside = function () {
        this.show = false;
    };
    SemanticContextMenuComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-contextmenu",
                    styles: [".sm-contextmenu { position: fixed; z-index: 1000; }"],
                    template: "<div \n[style.left.px]=\"_position?.x\" [style.top.px]=\"_position?.y\"\n[ngClass]=\"{'active visible': show}\" class=\"ui dropdown sm-contextmenu\">\n <div \n [ngClass]=\"{'visible animating slide down in': show, 'hidden': !show}\"  class=\"ui menu transition\">\n <a (click)=\"menu.action()\" *ngFor=\"let menu of items\" class=\"item\">\n <i class=\"{{menu.icon}} icon\"></i>\n {{menu.title}}\n </a>\n </div>\n </div>\n"
                },] },
    ];
    SemanticContextMenuComponent.ctorParameters = function () { return []; };
    SemanticContextMenuComponent.propDecorators = {
        'items': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input, args: ["position",] },],
        'clickedOutside': [{ type: core_1.HostListener, args: ["document:click",] },],
    };
    return SemanticContextMenuComponent;
}());
exports.SemanticContextMenuComponent = SemanticContextMenuComponent;
