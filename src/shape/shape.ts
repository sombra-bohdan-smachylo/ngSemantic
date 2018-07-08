import {
  Component, ChangeDetectionStrategy, ViewChild, ElementRef, Input, Output, EventEmitter,
  AfterViewInit
} from "@angular/core";

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-shape",
  template: `
    <div #shape class="ui shape {{class}}">
        <ng-content></ng-content>
    </div>
    `
})
export class SemanticShapeComponent implements AfterViewInit {
  @Input() public class: string;
  @Input() public options: {} = {};
  @Output() public beforeChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() public onChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @ViewChild("shape") public shape: ElementRef;

  ngAfterViewInit() {

    this.options = Object.assign({
      beforeChange: (): void => this.beforeChange.emit(true),
      onChange: (): void => this.onChange.emit(true)
    }, this.options);
  }

  /**
   * Show shape element
   *
   * @param args
   */
  public show(...args: string[]) {


    jQuery(this.shape.nativeElement)
      .shape(this.options)
      .shape(args.join(","));
  }

}
