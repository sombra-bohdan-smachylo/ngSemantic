"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
jQuery.fn.fixSidebar = function () {
    var allModules = jQuery(this);
    allModules
        .each(function () {
        var selector = { pusher: ".pusher" }, module = jQuery(this), context = jQuery("body");
        if (module.nextAll(selector.pusher).length === 0) {
            module.detach().prependTo(context);
        }
    });
    return this;
};
var SemanticSidebarComponent = (function () {
    function SemanticSidebarComponent(renderer) {
        this.renderer = renderer;
    }
    SemanticSidebarComponent.prototype.show = function (options) {
        jQuery(this.sidebar.nativeElement)
            .sidebar(options || {})
            .sidebar("toggle");
    };
    SemanticSidebarComponent.prototype.hide = function () {
        jQuery(this.sidebar.nativeElement)
            .sidebar("hide");
    };
    SemanticSidebarComponent.prototype.ngOnInit = function () {
        jQuery(this.sidebar.nativeElement)
            .fixSidebar();
    };
    SemanticSidebarComponent.prototype.ngOnDestroy = function () {
        this.renderer.detachView([this.sidebar.nativeElement]);
    };
    SemanticSidebarComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-sidebar",
                    template: "<div class=\"ui sidebar {{class}}\" #sidebar>\n<ng-content></ng-content>\n</div>"
                },] },
    ];
    SemanticSidebarComponent.ctorParameters = function () { return [
        { type: core_1.Renderer, },
    ]; };
    SemanticSidebarComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'sidebar': [{ type: core_1.ViewChild, args: ["sidebar",] },],
    };
    return SemanticSidebarComponent;
}());
exports.SemanticSidebarComponent = SemanticSidebarComponent;
