"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticAccordionComponent = (function () {
    function SemanticAccordionComponent() {
    }
    SemanticAccordionComponent.prototype.ngAfterViewInit = function () {
        var inAccordion = this.inAccordion(this.accordion.nativeElement, "accordion");
        if (inAccordion) {
            this.accordion.nativeElement.classList.remove("ui");
            jQuery(inAccordion).accordion(this.options || {});
        }
        else {
            jQuery(this.accordion.nativeElement).accordion(this.options || {});
        }
    };
    SemanticAccordionComponent.prototype.inAccordion = function (el, className) {
        if (el.parentNode) {
            if (el.parentNode.classList && el.parentNode.classList.contains(className)) {
                return el.parentNode;
            }
            else {
                return this.inAccordion(el.parentNode, className);
            }
        }
        else {
            return false;
        }
    };
    SemanticAccordionComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-accordion",
                    styles: ["sm-accordion sm-accordion-item:first-child .title { border-top: none !important; }"],
                    template: "\n<div class=\"ui accordion {{class}}\" #accordion>\n    <ng-content></ng-content>\n</div>\n"
                },] },
    ];
    SemanticAccordionComponent.ctorParameters = function () { return []; };
    SemanticAccordionComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'options': [{ type: core_1.Input },],
        'accordion': [{ type: core_1.ViewChild, args: ["accordion",] },],
    };
    return SemanticAccordionComponent;
}());
exports.SemanticAccordionComponent = SemanticAccordionComponent;
var SemanticAccordionItemComponent = (function () {
    function SemanticAccordionItemComponent() {
    }
    SemanticAccordionItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-accordion-item",
                    template: "\n<div class=\"{{class}} title\">\n    <i class=\"dropdown icon\"></i>\n    <ng-content select=\"accordion-title\"></ng-content>\n</div>\n<div class=\"{{class}} content\">\n    <ng-content select=\"accordion-content\"></ng-content>\n</div>\n"
                },] },
    ];
    SemanticAccordionItemComponent.ctorParameters = function () { return []; };
    SemanticAccordionItemComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
    };
    return SemanticAccordionItemComponent;
}());
exports.SemanticAccordionItemComponent = SemanticAccordionItemComponent;
