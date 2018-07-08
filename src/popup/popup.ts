import { ElementRef, Component, ViewChild, Input, ChangeDetectionStrategy } from "@angular/core";

declare var jQuery: any;

/**
 * Component, implementation of Semantic UI popup components.
 *
 * This component is triggered by UIPopupDirective.
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-popup",
  template: `<div class="ui popup very wide {{class}}" #popup>
    <div class="content">
        <ng-content></ng-content>
    </div>
</div>`
})
export class SemanticPopupComponent {
  @ViewChild("popup") public popup: ElementRef;
  @Input() public class: string;

  private visible: boolean = false;
  private element: Element;

  public show(element: Event, data: {} = {}) {

    if (!this.visible) {

      this.visible = true;
      this.element = <Element>element.target;

      const options: {} = Object.assign({
        closable: true,
        exclusive: true,
        lastResort: true,
        on: "click",
        onHide: () => this.hide(),
        popup: this.popup.nativeElement,
        position: "bottom center",
        preserve: true,
      }, data);

      jQuery(this.element)
        .popup(options)
        .popup("show");
    }
  }

  public hide() {
    if (this.visible && this.element) {

      this.visible = false;

      jQuery(this.element)
        .popup("hide");
    }
  }
}
