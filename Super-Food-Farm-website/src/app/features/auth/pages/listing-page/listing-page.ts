import { Component } from '@angular/core';
import { ProductCard } from '../../../../shared/components/product-card/product-card';
import { Layout } from '../../../../shared/components/layout/layout';

@Component({
  selector: 'app-listing-page',
  imports: [ProductCard, Layout],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
})
export class ListingPage {

}
