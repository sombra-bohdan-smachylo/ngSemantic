import {
  Component, Input, ChangeDetectionStrategy, Output, ViewContainerRef,
  EventEmitter, OnInit
} from "@angular/core";
import { FormControl } from "@angular/forms";

/**
 * Implementation of Input element
 *
 * @link http://semantic-ui.com/elements/input.html
 *
 * @example
 * <sm-input icon="dollar" type="number" [(model)]="model" class="right fluid" placeholder="Enter a sum..."></sm-input>
 */
@Component({
  selector: "sm-input",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty && isInsideForm) }">
  <label *ngIf="label && isInsideForm">{{label}}</label>
  <div class="ui input {{class}}" [ngClass]="{'icon': icon, 'error': (!control.valid && control.dirty &&!isInsideForm)}">
  <label *ngIf="label && !isInsideForm" class="ui label">{{label}}</label>
  <input [type]="type" [formControl]="control" (keyup)="modelChange.emit(input.value)" #input placeholder="{{placeholder}}">
  <i *ngIf="icon" class="{{icon}} icon"></i>
</div>
</div>`
})
export class SemanticInputComponent implements OnInit {
  @Input() public label: string;
  @Input() public class: string;
  @Input() public icon: string;
  @Input() public type: string = "text";
  @Input() public placeholder: string;
  @Input() public model: {};
  @Input() public control: FormControl = new FormControl();
  @Output() public modelChange: EventEmitter<string|number> = new EventEmitter<string|number>();

  public isInsideForm: boolean = false;

  constructor(public viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    // if input field is inside form
    if (this.inForm(this.viewRef.element.nativeElement, "form")) {
      this.isInsideForm = true;
    }
  }

  inForm(el: Node, classname: string): boolean {
    if (el.parentNode) {
      if (el.parentNode.nodeName.toLowerCase() === classname.toLowerCase()) {
        return !!el.parentNode;
      } else {
        return this.inForm(el.parentNode, classname);
      }
    } else {
      return false;
    }
  }
}

/**
 * Implementation of Checkbox element
 *
 * @link http://semantic-ui.com/modules/checkbox.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-checkbox",
  template: `<div class="field" [ngClass]="{error: (!control.value && control?.validator) }">
    <div class="ui {{classType}} checkbox">
      <input type="checkbox" 
      [attr.value]="value"
      [attr.type]="inputType" tabindex="0" [attr.name]="name" [formControl]="control" [attr.disabled]="disabled">
      <label *ngIf="label">{{label}}</label>
    </div>
  </div>`
})
export class SemanticCheckboxComponent {
  @Input() public control: FormControl = new FormControl();
  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public value: string|number;
  @Input() public name: string;

  @Input("type")
  set type(data: string) {
    if (data && data !== "checkbox") {
      this.classType = data;
      if (data === "radio") {
        this.inputType = data;
      }
    }
  }

  public inputType: string = "checkbox";
  public classType = "checkbox";
}

/**
 * Implementation of Textarea element
 *
 * @link http://semantic-ui.com/collections/form.html#text-area
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-textarea",
  template: `<div class="field" [ngClass]="{error: (!control.valid && control.dirty) }">
    <label *ngIf="label">{{label}}</label>
    <textarea rows="{{rows}}" [formControl]="control"></textarea>
  </div>`
})
export class SemanticTextareaComponent {
  @Input() public control: FormControl = new FormControl();
  @Input() public label: string;
  @Input() public rows: string;
}