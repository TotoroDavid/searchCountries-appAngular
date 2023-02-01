import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs';
import { CountryProps } from '../../interfaces/country.interface';

@Component({
  selector: 'app-seeCountry',
  templateUrl: './seeCountry.component.html',
})
export class SeeCountryComponent implements OnInit {

  country!: CountryProps[]

  constructor(
    private activateRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.countryService.getCodeById(id)),
        tap(console.log)
      )
      .subscribe(country => this.country = country)
  }
}






/**
 * this is the other way to get the observable 
    this.activateRoute.params
      .subscribe(({ id }) => {
        // console.log(id) // we define in the url 'country/:id' id is the param
        this.countryService.getCodeById(id)
          .subscribe(country => {
            console.log(country)
          })
      })
     */