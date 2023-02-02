import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CountryProps } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = `https://restcountries.com/v3.1`
    private filterUrl: string = `?fields=name,capital,currencies,altSpellings,flags,population,timezones`

    get httpParams() {
        return new HttpParams()
            .set('fields', 'name,capital,currencies,altSpellings,flags,population,timezones')
    }

    constructor(
        private http: HttpClient
    ) { }

    searchCountry(term: string): Observable<CountryProps[]> {

        const url = `${this.apiUrl}/name/${term}${this.filterUrl}`
        return this.http.get<CountryProps[]>(url)
    }

    searchCapital(term: string): Observable<CountryProps[]> {

        const url = `${this.apiUrl}/capital/${term}`
        return this.http.get<CountryProps[]>(url, { params: this.httpParams })
    }

    getCodeById(id: string): Observable<CountryProps> {

        const url = `${this.apiUrl}/alpha/${id}`
        return this.http.get<CountryProps>(url)
    }

    getRegion(region: string): Observable<CountryProps[]> {

        const url = `${this.apiUrl}/region/${region}`
        return this.http.get<CountryProps[]>(url, { params: this.httpParams })
    }
}