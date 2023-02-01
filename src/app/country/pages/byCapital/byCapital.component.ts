import { Component } from '@angular/core';
import { CountryProps } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-byCapital',
  templateUrl: './byCapital.component.html',
})
export class ByCapitalComponent {

  term = ''
  getError: boolean = false
  countries: CountryProps[] = []


  constructor(
    private countryService: CountryService


  ) { }

  search(term: string) {
    this.getError = false
    this.term = term

    this.countryService.searchCapital(term)
      .subscribe((countries) => {
        console.log(countries)
        this.countries = countries


      }, (err) => {
        console.log(err)
        this.getError = true
        this.countries = []
      })
  }

}
