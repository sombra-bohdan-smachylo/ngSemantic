import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

/**
 * <sm-search placeholder="Search..." (onSearch)="element.innerText = $event" ></sm-search>
 */
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "sm-search",
  template: `<div class="ui search" [ngClass]="{'loading': loading}">
 <div class="ui icon input {{class}} ">
  <input class="prompt" [formControl]="searchControl" type="text" [attr.placeholder]="placeholder">
  <i *ngIf="icon" class="search icon"></i>
  </div>
  <div class="results"></div>
</div>`
})
export class SemanticSearchComponent implements AfterViewInit {
  @Input() public class: string;
  @Input() public icon: boolean;
  @Input() public loading: boolean;
  @Input() public debounce: number = 0;
  @Input() public placeholder: string;
  @Output() public onSearch: EventEmitter<string|number> = new EventEmitter<string|number>();
  public searchControl: FormControl = new FormControl();

  ngAfterViewInit() {
    this.searchControl
      .valueChanges
      .distinctUntilChanged()
      .debounceTime(this.debounce)
      .subscribe((data: string|number) => this.onSearch.emit(data));
  }
}
