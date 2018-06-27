"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SemanticModalComponent = (function () {
    function SemanticModalComponent() {
        this.onModalShow = new core_1.EventEmitter();
        this.onModalHide = new core_1.EventEmitter();
    }
    SemanticModalComponent.prototype.show = function (data) {
        jQuery(this.modal.nativeElement)
            .modal(data || {})
            .modal("toggle");
        this.onModalShow.next(true);
    };
    SemanticModalComponent.prototype.hide = function () {
        jQuery(this.modal.nativeElement)
            .modal("hide");
        this.onModalHide.emit(true);
    };
    SemanticModalComponent.prototype.ngOnDestroy = function () {
        var parent = this.modal.nativeElement.parentElement;
        parent.removeChild(this.modal.nativeElement);
    };
    SemanticModalComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-modal",
                    template: "<div class=\"ui modal {{class}}\" #modal>\n    <i class=\"close icon\"></i>\n    <div [ngClass]=\"{'icon': icon}\" class=\"ui header\">\n        <i *ngIf=\"icon\" class=\"icon {{icon}}\"></i>\n        {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content select=\"modal-content\"></ng-content>\n    </div>\n    <div class=\"actions\">\n        <ng-content select=\"modal-actions\"></ng-content>\n    </div>\n</div>"
                },] },
    ];
    SemanticModalComponent.ctorParameters = function () { return []; };
    SemanticModalComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'modal': [{ type: core_1.ViewChild, args: ["modal",] },],
        'onModalShow': [{ type: core_1.Output },],
        'onModalHide': [{ type: core_1.Output },],
    };
    return SemanticModalComponent;
}());
exports.SemanticModalComponent = SemanticModalComponent;
var SMModalTagsDirective = (function () {
    function SMModalTagsDirective() {
    }
    SMModalTagsDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: 'modal-content, modal-actions' },] },
    ];
    SMModalTagsDirective.ctorParameters = function () { return []; };
    return SMModalTagsDirective;
}());
exports.SMModalTagsDirective = SMModalTagsDirective;
