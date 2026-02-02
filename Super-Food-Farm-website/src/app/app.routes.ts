import { Routes } from '@angular/router';
import { Router } from 'express';
import { HomePage } from './features/auth/pages/home-page/home-page';
import { ListingPage } from './features/auth/pages/listing-page/listing-page';
import { Layout } from './shared/components/layout/layout';

export const routes: Routes = [
    { path: '', redirectTo: "home", pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'listing', component: ListingPage }
];
// app.routes.ts example
// export const routes: Routes = [
//   {
//     path: '',
//     component: Layout, // Isme Header aur Footer pehle se hain
//     children: [
//       { path: '', component: HomePage },       // Default path pe Home dikhega
//       { path: 'products', component: ListingPage } // /products pe Listing dikhega
//     ]
//   }
// ];
