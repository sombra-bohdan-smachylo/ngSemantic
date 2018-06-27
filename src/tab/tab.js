"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticTabComponent = (function () {
    function SemanticTabComponent() {
    }
    SemanticTabComponent.prototype.ngAfterViewInit = function () {
        this.tabEl.nativeElement.parentElement.classList.add("ui", "tab", "bottom", "attached", "segment");
        if (this.active) {
            this.tabEl.nativeElement.parentElement.classList.add("active");
        }
    };
    SemanticTabComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "sm-tab",
                    template: "\n<div #tab>\n    <ng-content></ng-content>\n</div>  "
                },] },
    ];
    SemanticTabComponent.ctorParameters = function () { return []; };
    SemanticTabComponent.propDecorators = {
        'tab': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'active': [{ type: core_1.Input },],
        'tabEl': [{ type: core_1.ViewChild, args: ["tab",] },],
    };
    return SemanticTabComponent;
}());
exports.SemanticTabComponent = SemanticTabComponent;
var SemanticTabsComponent = (function () {
    function SemanticTabsComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {};
    }
    SemanticTabsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initItemsIndices();
        this.initTabs();
        this.updateTabContentIndices();
        this.tabs
            .changes
            .debounceTime(100)
            .subscribe(function () {
            _this.initItemsIndices();
            _this.updateTabContentIndices();
        });
    };
    SemanticTabsComponent.prototype.initItemsIndices = function () {
        Array
            .from(this.menu.nativeElement.getElementsByClassName("item"))
            .map(function (element, index) {
            element.setAttribute("data-tab", "tab-" + index);
            jQuery(element).data("tab", "tab-" + index);
        });
    };
    SemanticTabsComponent.prototype.updateTabContentIndices = function () {
        this.tabs
            .map(function (cmp, index) {
            cmp.tabEl.nativeElement.parentElement.setAttribute("data-tab", "tab-" + index.toString());
        });
        this.initTabs();
    };
    SemanticTabsComponent.prototype.initTabs = function () {
        this.options = Object.assign({
            childrenOnly: true,
            context: this.elementRef.nativeElement
        }, this.options);
        var tab = jQuery(this.menu.nativeElement.getElementsByClassName("item"))
            .tab(this.options);
        if (!this.menu.nativeElement.getElementsByClassName("item active").length) {
            tab.tab("change tab", "tab-0");
        }
    };
    SemanticTabsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "sm-tabs",
                    template: "<div class=\"ui top attached tabular menu\" #menu>\n  <a class=\"item\" [ngClass]=\"{'active': tab.active}\" *ngFor=\"let tab of tabs\">{{tab.title}}</a>\n</div>\n<ng-content></ng-content>\n"
                },] },
    ];
    SemanticTabsComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    SemanticTabsComponent.propDecorators = {
        'tabs': [{ type: core_1.ContentChildren, args: [SemanticTabComponent,] },],
        'menu': [{ type: core_1.ViewChild, args: ["menu",] },],
        'options': [{ type: core_1.Input, args: ["options",] },],
    };
    return SemanticTabsComponent;
}());
exports.SemanticTabsComponent = SemanticTabsComponent;
