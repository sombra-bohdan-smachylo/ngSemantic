"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SemanticSelectComponent = (function () {
    function SemanticSelectComponent() {
        this.control = new forms_1.FormControl();
        this.options = {};
        this.modelChange = new core_1.EventEmitter();
        this.onChange = new core_1.EventEmitter();
        this.multiple = false;
    }
    Object.defineProperty(SemanticSelectComponent.prototype, "disabled", {
        set: function (data) {
            var _this = this;
            setTimeout(function () {
                if (data) {
                    jQuery(_this.select.nativeElement.parentNode).addClass("disabled");
                }
                else {
                    jQuery(_this.select.nativeElement.parentNode).removeClass("disabled");
                }
            }, 1);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(SemanticSelectComponent.prototype, "model", {
        set: function (data) {
            var _this = this;
            if (data) {
                setTimeout(function () {
                    jQuery(_this.select.nativeElement).dropdown("set selected", data);
                }, 1);
            }
        },
        enumerable: true,
        configurable: true
    });
    SemanticSelectComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (typeof this.class === "string" && this.class.search("multiple") >= 0) {
            this.select.nativeElement.setAttribute("multiple", true);
        }
        var options = Object.assign({
            onChange: function (value) {
                _this.modelChange.emit(value);
                _this.onChange.emit(value);
            },
            onHide: function () { return _this.control.markAsTouched(); }
        }, this.options);
        jQuery(this.select.nativeElement)
            .dropdown(options);
    };
    SemanticSelectComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-select",
                    template: "<div class=\"field\" [ngClass]=\"{error: (!control?.valid && control?.touched) }\">\n  <label *ngIf=\"label\">{{label}}</label>\n<select [formControl]=\"control\" class=\"ui {{class}} dropdown\"  #select>\n    <option value=\"\">{{placeholder}}</option>\n    <ng-content></ng-content>\n</select>\n</div>"
                },] },
    ];
    SemanticSelectComponent.ctorParameters = function () { return []; };
    SemanticSelectComponent.propDecorators = {
        'control': [{ type: core_1.Input },],
        'class': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input, args: ["disabled",] },],
        'options': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'modelChange': [{ type: core_1.Output },],
        'onChange': [{ type: core_1.Output },],
        'select': [{ type: core_1.ViewChild, args: ["select",] },],
        'model': [{ type: core_1.Input, args: ["model",] },],
    };
    return SemanticSelectComponent;
}());
exports.SemanticSelectComponent = SemanticSelectComponent;
