"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SMTooltipDirective = (function () {
    function SMTooltipDirective(element) {
        this.element = element;
    }
    SMTooltipDirective.prototype.ngOnInit = function () {
        this.element.element.nativeElement.setAttribute("data-position", this.smDirPosition || "top center");
        this.element.element.nativeElement.setAttribute("data-tooltip", this.smDirTooltip);
    };
    SMTooltipDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[smDirTooltip]"
                },] },
    ];
    SMTooltipDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
    ]; };
    SMTooltipDirective.propDecorators = {
        'smDirTooltip': [{ type: core_1.Input },],
        'smDirPosition': [{ type: core_1.Input },],
    };
    return SMTooltipDirective;
}());
exports.SMTooltipDirective = SMTooltipDirective;
