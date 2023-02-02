import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-inputCountry',
  templateUrl: './inputCountry.component.html'
})

export class InputCountryComponent implements OnInit {


  @Output() onEnter: EventEmitter<string> = new EventEmitter
  /* 
  we sent the children this case the value of input 'country'
  */
  @Output() onDebounce: EventEmitter<string> = new EventEmitter

  @Input() placeholder: string = ''

  debouncer: Subject<string> = new Subject()

  term: string = ''

  ngOnInit() {

    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(value => {
        this.onDebounce.emit(value)
        // console.log(`this is the ngOnInit`, value)
      })

  }

  search() {
    this.onEnter.emit(this.term)
    //console.log(this.term) this is the value we emit

  }

  keystroke() {
    this.debouncer.next(this.term)
    // const value = event.target.value
    // console.log(value)

  }

}
