import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { ByCountryComponent } from './country/pages/byCountry/byCountry.component';
import { ByRegionComponent } from './country/pages/byRegion/byRegion.component';
import { ByCapitalComponent } from './country/pages/byCapital/byCapital.component';
import { SeeCountryComponent } from './country/pages/seeCountry/seeCountry.component';

const routes: Routes = [

    { path: '', component: ByCountryComponent, pathMatch: 'full' },
    { path: 'region', component: ByRegionComponent, },
    { path: 'capital', component: ByCapitalComponent, },
    { path: 'country/:id', component: SeeCountryComponent, },
    { path: '**', redirectTo: '' },

]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }