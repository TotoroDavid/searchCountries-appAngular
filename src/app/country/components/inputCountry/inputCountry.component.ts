import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-inputCountry',
  templateUrl: './inputCountry.component.html'
})

export class InputCountryComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter
  @Output() onDebounce: EventEmitter<string> = new EventEmitter

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject()

  term: string = ''

  ngOnInit() {

    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value)
        console.log(`this is the ngOnInit`, value)
      })

  }

  search() {
    this.onEnter.emit(this.term)
  }

  keystroke() {
    this.debouncer.next(this.term)
    // const value = event.target.value
    // console.log(value)

  }

}
