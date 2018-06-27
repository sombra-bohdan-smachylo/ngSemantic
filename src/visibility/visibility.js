"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SMVisibilityDirective = (function () {
    function SMVisibilityDirective(element) {
        this.element = element;
        this.onTopVisible = new core_1.EventEmitter();
        this.onTopPassed = new core_1.EventEmitter();
        this.onUpdate = new core_1.EventEmitter();
    }
    SMVisibilityDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.element.element.nativeElement) {
            jQuery(this.element.element.nativeElement)
                .visibility({
                onTopPassed: function (calculations) { return _this.onTopPassed.emit(calculations); },
                onTopVisible: function (calculations) { return _this.onTopVisible.emit(calculations); },
                onUpdate: function (calculations) { return _this.onUpdate.emit(calculations); },
            });
        }
    };
    SMVisibilityDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[smDirVisibility]"
                },] },
    ];
    SMVisibilityDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
    ]; };
    SMVisibilityDirective.propDecorators = {
        'smDirVisibility': [{ type: core_1.Input },],
        'onTopVisible': [{ type: core_1.Output },],
        'onTopPassed': [{ type: core_1.Output },],
        'onUpdate': [{ type: core_1.Output },],
    };
    return SMVisibilityDirective;
}());
exports.SMVisibilityDirective = SMVisibilityDirective;
var SMDeviceVisibilityDirective = (function () {
    function SMDeviceVisibilityDirective(element) {
        this.element = element;
    }
    SMDeviceVisibilityDirective.prototype.ngOnInit = function () {
        (_a = this.element.element.nativeElement.classList).add.apply(_a, this.smDeviceVisibility.split(" "));
        var _a;
    };
    SMDeviceVisibilityDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[smDeviceVisibility]"
                },] },
    ];
    SMDeviceVisibilityDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef, },
    ]; };
    SMDeviceVisibilityDirective.propDecorators = {
        'smDeviceVisibility': [{ type: core_1.Input },],
    };
    return SMDeviceVisibilityDirective;
}());
exports.SMDeviceVisibilityDirective = SMDeviceVisibilityDirective;
