import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryProps } from '../../interfaces/country.interface';

@Component({
  selector: 'app-byCountry',
  templateUrl: './byCountry.component.html',
})

export class ByCountryComponent {

  @Input() placeholder: string = ''

  term = 'ia'
  getError: boolean = false
  countries: CountryProps[] = []


  constructor(
    private countryService: CountryService


  ) { }

  search(term: string) {
    this.getError = false
    this.term = term

    this.countryService.searchCountry(term)
      .subscribe((countries) => {
        console.log(countries);
        this.countries = countries


      }, (err) => {
        console.log(err)
        this.getError = true
        this.countries = []
      })
  }
  suggestion(term: string) {

    this.getError = false


  }

}
