import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

import { ByCapitalComponent } from './pages/byCapital/byCapital.component'
import { ByCountryComponent } from './pages/byCountry/byCountry.component'
import { ByRegionComponent } from './pages/byRegion/byRegion.component'
import { SeeCountryComponent } from './pages/seeCountry/seeCountry.component'
import { RouterModule } from '@angular/router';
import { TableCountryComponent } from './components/tableCountry/tableCountry.component';
import { InputCountryComponent } from './components/inputCountry/inputCountry.component';

@NgModule({
    declarations: [
        ByCapitalComponent,
        ByCountryComponent,
        ByRegionComponent,
        SeeCountryComponent,
        TableCountryComponent,
        InputCountryComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        ByCapitalComponent,
        ByCountryComponent,
        ByRegionComponent,
        SeeCountryComponent,
        TableCountryComponent,
        InputCountryComponent

    ],
    providers: [],
})
export class CountryModule { }