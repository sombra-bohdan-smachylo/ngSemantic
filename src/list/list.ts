import { Component, Input, ChangeDetectionStrategy, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

/**
 * Implementation of List collection
 *
 * @link http://semantic-ui.com/elements/list.html
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-list",
  template: `
<div class="ui list {{class}}" #innerElement>
<ng-content></ng-content>
</div>
`
})
export class SemanticListComponent implements AfterViewInit {
  @Input() public class: string;
  @ViewChild("innerElement") public innerElement: ElementRef;

  ngAfterViewInit() {

    Array.from(this.innerElement.nativeElement.childNodes)
      .filter((element: Element) => element.nodeName === "SM-LIST")
      .map((element: Element) => element.firstElementChild.classList.remove("ui"));
  }
}
