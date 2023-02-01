import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { CountryProps } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = `https://restcountries.com/v3.1`

    constructor(
        private http: HttpClient
    ) { }

    searchCountry(term: string): Observable<CountryProps[]> {

        const url = `${this.apiUrl}/name/${term}`
        return this.http.get<CountryProps[]>(url)
    }

    searchCapital(term: string): Observable<CountryProps[]> {

        const url = `${this.apiUrl}/capital/${term}`
        return this.http.get<CountryProps[]>(url)
    }

    getCodeById(id: string): Observable<CountryProps> {

        const url = `${this.apiUrl}/alpha/${id}`
        return this.http.get<CountryProps>(url)
    }
}