import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VoyagesComponent } from './voyages/voyages.component';
import { ErrorComponent } from './error/error.component';
import { GeneratorComponent } from './generator/generator.component';

export const routes: Routes = [
    {
        component: HomePageComponent,
        path: 'home',
    },
   {
        component: VoyagesComponent,
        path: 'voyage/:id',
    },
    {
        component: ErrorComponent,
        path: '404',
    },
    {
        component: GeneratorComponent,
        path: 'generator'
    }
];