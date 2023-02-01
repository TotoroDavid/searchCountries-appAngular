import { Component, Input, OnInit } from '@angular/core';
import { CountryProps } from '../../interfaces/country.interface';

@Component({
  selector: 'app-tableCountry',
  templateUrl: './tableCountry.component.html',
})
export class TableCountryComponent {

  @Input() countries: CountryProps[] = []

}
