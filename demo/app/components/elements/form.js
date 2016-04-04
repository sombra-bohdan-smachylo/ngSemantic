System.register(["angular2/core", "angular2/common", "ng-semantic/semantic"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, semantic_1;
    var FormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (semantic_1_1) {
                semantic_1 = semantic_1_1;
            }],
        execute: function() {
            FormComponent = (function () {
                function FormComponent(fb) {
                    this.agreeControl = new common_1.Control("", common_1.Validators.required);
                    this.emailControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.formSubmited = false;
                    this.nameControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.nameFControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(4)]));
                    this.textControl = new common_1.Control("", common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(10)]));
                    this.form = fb.group({
                        emailControl: this.emailControl,
                        nameControl: this.nameControl,
                    });
                    this.formFeedback = fb.group({
                        nameFControl: this.nameFControl,
                        textControl: this.textControl
                    });
                }
                FormComponent.prototype.checkboxValidator = function (control) {
                    var value = (typeof control.value === "boolean") ? control.value : false;
                    return (value) ? "" : "yes";
                };
                FormComponent.prototype.submit = function () {
                    this.formSubmited = true;
                };
                FormComponent = __decorate([
                    core_1.Component({
                        directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
                        selector: "test-form",
                        template: "\n\t<div class=\"ui masthead vertical segment\">\n    <div class=\"ui container\">\n\t<h1>Form</h1>\n\t<p>Semantic UI Form collection <i class=\"icon external\"></i>\n\t<a href=\"http://semantic-ui.com/collections/form.html\" target=\"_blank\">Semantic UI Form</a></p>\n    </div>\n</div>\n<div class=\"main ui container\">\n    <h4 class=\"ui header\">Demo login</h4>\n    <form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n\t<sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n\t</div>\n\t<sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n    </form>\n    <h4 class=\"ui header\">Code</h4>\n <div class=\"ui form\">\n\t<div class=\"field\">\n<textarea rows=\"14\" readonly class=\"code\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n<form sm-form class=\"ui form\" [ngFormModel]=\"form\">\n    <sm-loader [complete]=\"!formSubmited\" class=\"inverted\" text=\"Loading...\"></sm-loader>\n    <div class=\"field\">\n\t<sm-input label=\"Name\" [control]=\"nameControl\" placeholder=\"Enter name...\"></sm-input>\n    </div>\n    <div class=\"field\">\n\t<sm-input label=\"E-mail\" [control]=\"emailControl\" placeholder=\"Enter e-mail...\"></sm-input>\n    </div>\n    <div class=\"field\">\n\t<sm-checkbox label=\"I agree to the Terms and Conditions\" [control]=\"agreeControl\"></sm-checkbox>\n    </div>\n    <sm-button (click)=\"submit()\" [disabled]=\"!form.valid\" class=\"primary\">Login</sm-button>\n</form>\n</textarea>\n\t</div>\n      </div>\n\n      <h4 class=\"ui header\">Demo feedback</h4>\n      <form sm-form class=\"ui form\" [ngFormModel]=\"formFeedback\">\n\t<div class=\"field\">\n\t    <sm-input label=\"Name\" [control]=\"nameFControl\" placeholder=\"Enter name...\"></sm-input>\n\t</div>\n\t<div class=\"field\">\n\t    <sm-textarea label=\"Name\" rows=\"10\" [control]=\"textControl\"></sm-textarea>\n\t</div>\n\t<sm-button (click)=\"send()\" class=\"primary\">Send</sm-button>\n      </form>\n\n\n      <br/><br/>\n      Page source: <a target=\"_blank\" href=\"https://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\">\n\thttps://github.com/vladotesanovic/ngSemantic/blob/master/src/app/components/elements/form.ts\n      </a>\n</div>\n"
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], FormComponent);
                return FormComponent;
            }());
            exports_1("FormComponent", FormComponent);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9lbGVtZW50cy9mb3JtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBc0VBO2dCQVlJLHVCQUFZLEVBQWU7b0JBWDNCLGlCQUFZLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFJNUcsaUJBQVksR0FBWSxLQUFLLENBQUM7b0JBQzlCLGdCQUFXLEdBQVksSUFBSSxnQkFBTyxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLG1CQUFVLENBQUMsUUFBUSxFQUFFLG1CQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUUzRyxpQkFBWSxHQUFZLElBQUksZ0JBQU8sQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxtQkFBVSxDQUFDLFFBQVEsRUFBRSxtQkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUcsZ0JBQVcsR0FBWSxJQUFJLGdCQUFPLENBQUMsRUFBRSxFQUFFLG1CQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsbUJBQVUsQ0FBQyxRQUFRLEVBQUUsbUJBQVUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBRy9HLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQzt3QkFFakIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUMvQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7cUJBQ2hDLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO3FCQUNoQyxDQUFDLENBQUM7Z0JBQ0EsQ0FBQztnQkFFRCx5Q0FBaUIsR0FBakIsVUFBa0IsT0FBZ0I7b0JBQ3JDLElBQUksS0FBSyxHQUFHLENBQUMsT0FBTyxPQUFPLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUN6RSxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixDQUFDO2dCQUVELDhCQUFNLEdBQU47b0JBQ0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7Z0JBbEdMO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsVUFBVSxFQUFFLENBQUMsOEJBQW1CLEVBQUUsOEJBQW1CLENBQUM7d0JBQ3RELFFBQVEsRUFBRSxXQUFXO3dCQUNyQixRQUFRLEVBQUUseXJGQTZEYjtxQkFDQSxDQUFDOztpQ0FBQTtnQkFrQ0Ysb0JBQUM7WUFBRCxDQUFDLEFBakNELElBaUNDO1lBakNELHlDQWlDQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcbmltcG9ydCB7IENvbnRyb2wsIFZhbGlkYXRvcnMsIENvbnRyb2xHcm91cCwgRm9ybUJ1aWxkZXIgfSBmcm9tIFwiYW5ndWxhcjIvY29tbW9uXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIm5nLXNlbWFudGljL3NlbWFudGljXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIGRpcmVjdGl2ZXM6IFtTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTXSxcbiAgICBzZWxlY3RvcjogXCJ0ZXN0LWZvcm1cIixcbiAgICB0ZW1wbGF0ZTogYFxuXHQ8ZGl2IGNsYXNzPVwidWkgbWFzdGhlYWQgdmVydGljYWwgc2VnbWVudFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ1aSBjb250YWluZXJcIj5cblx0PGgxPkZvcm08L2gxPlxuXHQ8cD5TZW1hbnRpYyBVSSBGb3JtIGNvbGxlY3Rpb24gPGkgY2xhc3M9XCJpY29uIGV4dGVybmFsXCI+PC9pPlxuXHQ8YSBocmVmPVwiaHR0cDovL3NlbWFudGljLXVpLmNvbS9jb2xsZWN0aW9ucy9mb3JtLmh0bWxcIiB0YXJnZXQ9XCJfYmxhbmtcIj5TZW1hbnRpYyBVSSBGb3JtPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cIm1haW4gdWkgY29udGFpbmVyXCI+XG4gICAgPGg0IGNsYXNzPVwidWkgaGVhZGVyXCI+RGVtbyBsb2dpbjwvaDQ+XG4gICAgPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybVwiPlxuXHQ8c20tbG9hZGVyIFtjb21wbGV0ZV09XCIhZm9ybVN1Ym1pdGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+PC9zbS1sb2FkZXI+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBuYW1lLi4uXCI+PC9zbS1pbnB1dD5cblx0PC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiRS1tYWlsXCIgW2NvbnRyb2xdPVwiZW1haWxDb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBlLW1haWwuLi5cIj48L3NtLWlucHV0PlxuXHQ8L2Rpdj5cblx0PGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdCAgICA8c20tY2hlY2tib3ggbGFiZWw9XCJJIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uc1wiIFtjb250cm9sXT1cImFncmVlQ29udHJvbFwiPjwvc20tY2hlY2tib3g+XG5cdDwvZGl2PlxuXHQ8c20tYnV0dG9uIChjbGljayk9XCJzdWJtaXQoKVwiIFtkaXNhYmxlZF09XCIhZm9ybS52YWxpZFwiIGNsYXNzPVwicHJpbWFyeVwiPkxvZ2luPC9zbS1idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkNvZGU8L2g0PlxuIDxkaXYgY2xhc3M9XCJ1aSBmb3JtXCI+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuPHRleHRhcmVhIHJvd3M9XCIxNFwiIHJlYWRvbmx5IGNsYXNzPVwiY29kZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIGF1dG9jb3JyZWN0PVwib2ZmXCIgYXV0b2NhcGl0YWxpemU9XCJvZmZcIiBzcGVsbGNoZWNrPVwiZmFsc2VcIj5cbjxmb3JtIHNtLWZvcm0gY2xhc3M9XCJ1aSBmb3JtXCIgW25nRm9ybU1vZGVsXT1cImZvcm1cIj5cbiAgICA8c20tbG9hZGVyIFtjb21wbGV0ZV09XCIhZm9ybVN1Ym1pdGVkXCIgY2xhc3M9XCJpbnZlcnRlZFwiIHRleHQ9XCJMb2FkaW5nLi4uXCI+PC9zbS1sb2FkZXI+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdDxzbS1pbnB1dCBsYWJlbD1cIk5hbWVcIiBbY29udHJvbF09XCJuYW1lQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG5cdDxzbS1pbnB1dCBsYWJlbD1cIkUtbWFpbFwiIFtjb250cm9sXT1cImVtYWlsQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgZS1tYWlsLi4uXCI+PC9zbS1pbnB1dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0PHNtLWNoZWNrYm94IGxhYmVsPVwiSSBhZ3JlZSB0byB0aGUgVGVybXMgYW5kIENvbmRpdGlvbnNcIiBbY29udHJvbF09XCJhZ3JlZUNvbnRyb2xcIj48L3NtLWNoZWNrYm94PlxuICAgIDwvZGl2PlxuICAgIDxzbS1idXR0b24gKGNsaWNrKT1cInN1Ym1pdCgpXCIgW2Rpc2FibGVkXT1cIiFmb3JtLnZhbGlkXCIgY2xhc3M9XCJwcmltYXJ5XCI+TG9naW48L3NtLWJ1dHRvbj5cbjwvZm9ybT5cbjwvdGV4dGFyZWE+XG5cdDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxoNCBjbGFzcz1cInVpIGhlYWRlclwiPkRlbW8gZmVlZGJhY2s8L2g0PlxuICAgICAgPGZvcm0gc20tZm9ybSBjbGFzcz1cInVpIGZvcm1cIiBbbmdGb3JtTW9kZWxdPVwiZm9ybUZlZWRiYWNrXCI+XG5cdDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuXHQgICAgPHNtLWlucHV0IGxhYmVsPVwiTmFtZVwiIFtjb250cm9sXT1cIm5hbWVGQ29udHJvbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgbmFtZS4uLlwiPjwvc20taW5wdXQ+XG5cdDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiZmllbGRcIj5cblx0ICAgIDxzbS10ZXh0YXJlYSBsYWJlbD1cIk5hbWVcIiByb3dzPVwiMTBcIiBbY29udHJvbF09XCJ0ZXh0Q29udHJvbFwiPjwvc20tdGV4dGFyZWE+XG5cdDwvZGl2PlxuXHQ8c20tYnV0dG9uIChjbGljayk9XCJzZW5kKClcIiBjbGFzcz1cInByaW1hcnlcIj5TZW5kPC9zbS1idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cblxuICAgICAgPGJyLz48YnIvPlxuICAgICAgUGFnZSBzb3VyY2U6IDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS50c1wiPlxuXHRodHRwczovL2dpdGh1Yi5jb20vdmxhZG90ZXNhbm92aWMvbmdTZW1hbnRpYy9ibG9iL21hc3Rlci9zcmMvYXBwL2NvbXBvbmVudHMvZWxlbWVudHMvZm9ybS50c1xuICAgICAgPC9hPlxuPC9kaXY+XG5gXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQge1xuICAgIGFncmVlQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgIGVtYWlsQ29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNCldKSk7XG5cbiAgICBmb3JtOiBDb250cm9sR3JvdXA7XG4gICAgZm9ybUZlZWRiYWNrOiBDb250cm9sR3JvdXA7XG4gICAgZm9ybVN1Ym1pdGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbmFtZUNvbnRyb2w6IENvbnRyb2wgPSBuZXcgQ29udHJvbChcIlwiLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXSkpO1xuXG4gICAgbmFtZUZDb250cm9sOiBDb250cm9sID0gbmV3IENvbnRyb2woXCJcIiwgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV0pKTtcbiAgICB0ZXh0Q29udHJvbDogQ29udHJvbCA9IG5ldyBDb250cm9sKFwiXCIsIFZhbGlkYXRvcnMuY29tcG9zZShbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXSkpO1xuXG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKSB7XG5cdHRoaXMuZm9ybSA9IGZiLmdyb3VwKHtcbi8vICAgICAgICAgICAgYWdyZWVDb250cm9sOiB0aGlzLmFncmVlQ29udHJvbCxcblx0ICAgIGVtYWlsQ29udHJvbDogdGhpcy5lbWFpbENvbnRyb2wsXG5cdCAgICBuYW1lQ29udHJvbDogdGhpcy5uYW1lQ29udHJvbCxcblx0fSk7XG5cblx0dGhpcy5mb3JtRmVlZGJhY2sgPSBmYi5ncm91cCh7XG5cdCAgICBuYW1lRkNvbnRyb2w6IHRoaXMubmFtZUZDb250cm9sLFxuXHQgICAgdGV4dENvbnRyb2w6IHRoaXMudGV4dENvbnRyb2xcblx0fSk7XG4gICAgfVxuXG4gICAgY2hlY2tib3hWYWxpZGF0b3IoY29udHJvbDogQ29udHJvbCkge1xuXHRsZXQgdmFsdWUgPSAodHlwZW9mIGNvbnRyb2wudmFsdWUgPT09IFwiYm9vbGVhblwiKSA/IGNvbnRyb2wudmFsdWUgOiBmYWxzZTtcblx0cmV0dXJuICh2YWx1ZSkgPyBcIlwiIDogXCJ5ZXNcIjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG5cdHRoaXMuZm9ybVN1Ym1pdGVkID0gdHJ1ZTtcbiAgICB9XG59XG4iXX0=