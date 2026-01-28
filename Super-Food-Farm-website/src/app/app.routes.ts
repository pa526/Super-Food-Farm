import { Routes } from '@angular/router';
import { Router } from 'express';
import { HomePage } from './features/auth/pages/home-page/home-page';

export const routes: Routes = [
    {path: '', redirectTo:"home", pathMatch: 'full'},
    {path: 'home', component: HomePage}
];
