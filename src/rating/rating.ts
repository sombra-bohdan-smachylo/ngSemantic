import {
  Component,
  Input,
  ViewChild,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";

declare var jQuery: any;

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-rating",
  template: `<div class="ui {{class}} rating" #rating></div>`
})
export class SemanticRatingComponent implements AfterViewInit {
  @Input() public class: string;
  @Input() public initialRating: number;
  @Input() public maxRating: number;
  @Output() public onRate: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild("rating") public rating: ElementRef;

  ngAfterViewInit(): void {

    jQuery(this.rating.nativeElement)
      .rating({
        initialRating: this.initialRating || 0,
        maxRating: this.maxRating || 5,
        onRate: (value: number) => {
          this.onRate.emit(value);
        }
      });
  }
}
