import { Component, OnInit, Input } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { CountryProps } from '../../interfaces/country.interface';

@Component({
  selector: 'app-byCountry',
  templateUrl: './byCountry.component.html',
})

export class ByCountryComponent {

  @Input() placeholder: string = ''

  term = ''
  getError: boolean = false
  countries: CountryProps[] = []
  suggestedCountries: CountryProps[] = []
  showSuggested: boolean = false


  constructor(
    private countryService: CountryService


  ) { }

  search(term: string) {

    this.showSuggested = false
    this.getError = false
    this.term = term
    console.log(term)


    this.countryService.searchCountry(term)
      .subscribe((countries) => {
        // console.log(countries)
        this.countries = countries


      }, (err) => {
        console.log(err)
        this.getError = true
        this.countries = []
      })
  }
  suggestion(term: string) {

    this.showSuggested = true
    this.getError = false
    this.term = term
    this.countryService.searchCountry(term)
      .subscribe(
        countries => this.suggestedCountries = countries.splice(0, 5),
        (err) => this.suggestedCountries = []
      )
  }

  searchSuggested(term: string) {

    this.search(term)
    this.showSuggested = false

  }

}
