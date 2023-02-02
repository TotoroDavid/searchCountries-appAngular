import { Component, OnInit } from '@angular/core';
import { CountryProps } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-byRegion',
  templateUrl: './byRegion.component.html',
})
export class ByRegionComponent {

  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActive: string = ''
  countries: CountryProps[] = []

  constructor(
    private countryServices: CountryService
  ) { }

  getClassCss(region: string) {
    return ((region) === this.regionActive
      ? 'btn btn-dark'
      : 'btn btn-outline-dark')
  }

  activeRegion(region: string) {

    if (region === this.regionActive) return
    //if we don't use it it will refresh everyTime we select the continent 

    this.regionActive = region

    this.countries = []

    this.countryServices.getRegion(region)
      .subscribe((countries) => {
        this.countries = countries
        console.log(countries)
      })
  }

}
