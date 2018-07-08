import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

/**
 * Implementation of Button component
 *
 * @link http://semantic-ui.com/elements/button.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-button",
  template: `<button [ngClass]="{icon: icon}" [attr.disabled]="disabled ? true : null" class="ui {{class}} button">
  <i *ngIf="icon" class="{{icon}} icon"></i>
    <ng-content></ng-content>
</button>`
})
export class SemanticButtonComponent {
  @Input("class") public class: string;
  @Input("icon") public icon: string;
  @Input("disabled") public disabled: boolean = false;
}
