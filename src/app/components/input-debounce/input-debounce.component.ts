import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-input-debounce',
  templateUrl: './input-debounce.component.html',
  styleUrls: ['./input-debounce.component.css'],
})
export class InputDebounceComponent {
  // name = 'Angular 6';
  public consoleMessages: string[] = [];
  public userQuestion: string;
  userQuestionUpdate = new Subject<string>();

  constructor() {
    // Debounce search.
    this.userQuestionUpdate
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        this.consoleMessages.push(value);
      });
  }
}
