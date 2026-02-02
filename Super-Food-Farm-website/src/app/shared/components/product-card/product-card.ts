import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css', '../../../../assets/styles/theme.css'],
})
export class ProductCard implements OnInit {
  // 1. Data (Jo aapke script tag mein tha)
  products = [
    {
      id: 1,
      name: 'Organic Strawberries',
      category: 'fruits',
      price: 6.99,
      originalPrice: 8.99,
      rating: 4.8,
      reviewCount: 124,
      image:
        'https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      description: 'Sweet, juicy organic strawberries packed with antioxidants.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock', 'sale'],
      isNew: false,
    },
    {
      id: 2,
      name: 'Farm Fresh Eggs',
      category: 'dairy',
      price: 8.49,
      originalPrice: 8.49,
      rating: 4.9,
      reviewCount: 89,
      image:
        'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Free-range eggs from pasture-raised chickens.',
      dietary: ['organic', 'non-gmo'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 3,
      name: 'Organic Avocados',
      category: 'fruits',
      price: 4.99,
      originalPrice: 4.99,
      rating: 4.7,
      reviewCount: 203,
      image:
        'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Creamy, nutrient-rich organic avocados.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock', 'new'],
      isNew: true,
    },
    {
      id: 4,
      name: 'Organic Quinoa',
      category: 'pantry',
      price: 9.99,
      originalPrice: 9.99,
      rating: 4.6,
      reviewCount: 56,
      image:
        'https://images.unsplash.com/photo-1598965675045-45c2d0c8d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'High-protein ancient grain, perfect for healthy meals.',
      dietary: ['organic', 'gluten-free', 'vegan', 'non-gmo'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 5,
      name: 'Organic Spinach',
      category: 'vegetables',
      price: 3.99,
      originalPrice: 3.99,
      rating: 4.5,
      reviewCount: 78,
      image:
        'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Fresh, leafy organic spinach rich in iron.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 6,
      name: 'Organic Almond Milk',
      category: 'beverages',
      price: 5.49,
      originalPrice: 5.49,
      rating: 4.8,
      reviewCount: 112,
      image:
        'https://images.unsplash.com/photo-1626631791016-0c3c6b03c8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Creamy, dairy-free almond milk with no added sugar.',
      dietary: ['organic', 'gluten-free', 'vegan', 'non-gmo'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 7,
      name: 'Organic Honey',
      category: 'pantry',
      price: 12.99,
      originalPrice: 15.99,
      rating: 4.9,
      reviewCount: 67,
      image:
        'https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Pure, raw honey from local beekeepers.',
      dietary: ['organic', 'gluten-free'],
      availability: ['instock', 'sale'],
      isNew: false,
    },
    {
      id: 8,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      price: 4.49,
      originalPrice: 4.49,
      rating: 4.7,
      reviewCount: 91,
      image:
        'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Vine-ripened organic tomatoes with rich flavor.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock', 'new'],
      isNew: true,
    },
    {
      id: 9,
      name: 'Blueberries',
      category: 'fruits',
      price: 7.99,
      originalPrice: 7.99,
      rating: 4.8,
      reviewCount: 145,
      image:
        'https://images.unsplash.com/photo-1498557850523-fd3d118b962e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Antioxidant-rich organic blueberries.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 10,
      name: 'Greek Yogurt',
      category: 'dairy',
      price: 5.99,
      originalPrice: 6.99,
      rating: 4.6,
      reviewCount: 203,
      image:
        'https://images.unsplash.com/photo-1567306301408-9b74779a11af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Creamy organic Greek yogurt, high in protein.',
      dietary: ['organic', 'gluten-free'],
      availability: ['instock', 'sale'],
      isNew: false,
    },
    {
      id: 11,
      name: 'Organic Carrots',
      category: 'vegetables',
      price: 3.49,
      originalPrice: 3.49,
      rating: 4.4,
      reviewCount: 89,
      image:
        'https://images.unsplash.com/photo-1598170845058-78131a90f4f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Sweet organic carrots, perfect for snacking.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock'],
      isNew: false,
    },
    {
      id: 12,
      name: 'Organic Green Tea',
      category: 'beverages',
      price: 8.99,
      originalPrice: 8.99,
      rating: 4.9,
      reviewCount: 167,
      image:
        'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      description: 'Premium organic green tea leaves.',
      dietary: ['organic', 'gluten-free', 'vegan'],
      availability: ['instock', 'new'],
      isNew: true,
    },
    // ... baki products bhi isi tarah add kar sakte hain
  ];

  // 2. State Management
  filteredProducts = [...this.products];
  currentView: 'grid' | 'list' = 'grid';
  currentSort = 'default';

  activeFilters = {
    category: [] as string[],
    price: 50,
    rating: [] as number[],
    diet: [] as string[],
    availability: ['instock'] as string[],
  };

  ngOnInit() {
    this.applyFiltersAndSort();
  }

  // 3. Logic Functions (Directly from your JS)
  setSort(event: any) {
    this.currentSort = event.target.value;
    this.applyFiltersAndSort();
  }

  setView(view: 'grid' | 'list') {
    this.currentView = view;
  }

  applyFiltersAndSort() {
    // Filtering
    let result = this.products.filter(product => {
      const categoryMatch = this.activeFilters.category.length === 0 || this.activeFilters.category.includes(product.category);
      const priceMatch = product.price <= this.activeFilters.price;
      const ratingMatch = this.activeFilters.rating.length === 0 || this.activeFilters.rating.some(r => product.rating >= r);
      return categoryMatch && priceMatch && ratingMatch;
    });

    // Sorting
    if (this.currentSort === 'price-low') result.sort((a, b) => a.price - b.price);
    else if (this.currentSort === 'price-high') result.sort((a, b) => b.price - a.price);
    else if (this.currentSort === 'rating') result.sort((a, b) => b.rating - a.rating);
    else if (this.currentSort === 'name-a') result.sort((a, b) => a.name.localeCompare(b.name));

    this.filteredProducts = result;
  }

  resetFilters() {
    this.activeFilters = { category: [], price: 50, rating: [], diet: [], availability: ['instock'] };
    this.applyFiltersAndSort();
  }

  addToCart(productId: number) {
    console.log(`Product ${productId} added to cart`);
    // Cart logic yahan likhein
  }

  // Helper for Stars
  getStars(rating: number) {
    return Array(Math.floor(rating)).fill(0);
  }

}
