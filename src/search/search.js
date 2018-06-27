"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var SemanticSearchComponent = (function () {
    function SemanticSearchComponent() {
        this.debounce = 0;
        this.onSearch = new core_1.EventEmitter();
        this.searchControl = new forms_1.FormControl();
    }
    SemanticSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.searchControl
            .valueChanges
            .distinctUntilChanged()
            .debounceTime(this.debounce)
            .subscribe(function (data) { return _this.onSearch.emit(data); });
    };
    SemanticSearchComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: "sm-search",
                    template: "<div class=\"ui search\" [ngClass]=\"{'loading': loading}\">\n <div class=\"ui icon input {{class}} \">\n  <input class=\"prompt\" [formControl]=\"searchControl\" type=\"text\" [attr.placeholder]=\"placeholder\">\n  <i *ngIf=\"icon\" class=\"search icon\"></i>\n  </div>\n  <div class=\"results\"></div>\n</div>"
                },] },
    ];
    SemanticSearchComponent.ctorParameters = function () { return []; };
    SemanticSearchComponent.propDecorators = {
        'class': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'loading': [{ type: core_1.Input },],
        'debounce': [{ type: core_1.Input },],
        'placeholder': [{ type: core_1.Input },],
        'onSearch': [{ type: core_1.Output },],
    };
    return SemanticSearchComponent;
}());
exports.SemanticSearchComponent = SemanticSearchComponent;
