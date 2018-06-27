"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SemanticInputComponent = (function () {
    function SemanticInputComponent(viewRef) {
        this.viewRef = viewRef;
        this.type = "text";
        this.control = new forms_1.FormControl();
        this.modelChange = new core_1.EventEmitter();
        this.isInsideForm = false;
    }
    SemanticInputComponent.prototype.ngOnInit = function () {
        if (this.inForm(this.viewRef.element.nativeElement, "form")) {
            this.isInsideForm = true;
        }
    };
    SemanticInputComponent.prototype.inForm = function (el, classname) {
        if (el.parentNode) {
            if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
                return !!el.parentNode;
            }
            else {
                return this.inForm(el.parentNode, classname);
            }
        }
        else {
            return false;
        }
    };
    SemanticInputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "sm-input",
                    template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty && isInsideForm) }\">\n  <label *ngIf=\"label && isInsideForm\">{{label}}</label>\n  <div class=\"ui input {{class}}\" [ngClass]=\"{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}\">\n  <label *ngIf=\"label && !isInsideForm\" class=\"ui label\">{{label}}</label>\n  <input [type]=\"type\" [formControl]=\"control\" (keyup)=\"modelChange.emit(input.value)\" #input placeholder=\"{{placeholder}}\">\n  <i *ngIf=\"icon\" class=\"{{icon}} icon\"></i>\n</div>\n</div>"
                },] },
    ];
    SemanticInputComponent.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
    ]; };
    SemanticInputComponent.propDecorators = {
        'label': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'model': [{ type: core_1.Input },],
        'control': [{ type: core_1.Input },],
        'modelChange': [{ type: core_1.Output },],
    };
    return SemanticInputComponent;
}());
exports.SemanticInputComponent = SemanticInputComponent;
var SemanticCheckboxComponent = (function () {
    function SemanticCheckboxComponent() {
        this.control = new forms_1.FormControl();
        this.inputType = "checkbox";
        this.classType = "checkbox";
    }
    Object.defineProperty(SemanticCheckboxComponent.prototype, "type", {
        set: function (data) {
            if (data && data !== "checkbox") {
                this.classType = data;
                if (data === "radio") {
                    this.inputType = data;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticCheckboxComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-checkbox",
                    template: "<div class=\"field\" [ngClass]=\"{error: (!control.value && control?.validator) }\">\n    <div class=\"ui {{classType}} checkbox\">\n      <input type=\"checkbox\" \n      [attr.value]=\"value\"\n      [attr.type]=\"inputType\" tabindex=\"0\" [attr.name]=\"name\" [formControl]=\"control\" [attr.disabled]=\"disabled\">\n      <label *ngIf=\"label\">{{label}}</label>\n    </div>\n  </div>"
                },] },
    ];
    SemanticCheckboxComponent.ctorParameters = function () { return []; };
    SemanticCheckboxComponent.propDecorators = {
        'control': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input, args: ["type",] },],
    };
    return SemanticCheckboxComponent;
}());
exports.SemanticCheckboxComponent = SemanticCheckboxComponent;
var SemanticTextareaComponent = (function () {
    function SemanticTextareaComponent() {
        this.control = new forms_1.FormControl();
    }
    SemanticTextareaComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-textarea",
                    template: "<div class=\"field\" [ngClass]=\"{error: (!control.valid && control.dirty) }\">\n    <label *ngIf=\"label\">{{label}}</label>\n    <textarea rows=\"{{rows}}\" [formControl]=\"control\"></textarea>\n  </div>"
                },] },
    ];
    SemanticTextareaComponent.ctorParameters = function () { return []; };
    SemanticTextareaComponent.propDecorators = {
        'control': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'rows': [{ type: core_1.Input },],
    };
    return SemanticTextareaComponent;
}());
exports.SemanticTextareaComponent = SemanticTextareaComponent;
