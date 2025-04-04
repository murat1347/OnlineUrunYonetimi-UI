// product-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from '../homepage/homepage.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ProductDetailService, ProductResponse } from './product-detail.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductDetailService]
})
export class ProductDetailComponent implements OnInit {
  product: ProductResponse | null = null; // This will store the actual product data
  isLoading = true;
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private productDetailService: ProductDetailService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productDetailService.getProductById(id).subscribe({
        next: (data) => {
          this.product = data.product; // API'nin döndüğü product nesnesini al
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = 'Ürün bulunamadı veya yüklenemedi';
          this.isLoading = false;
        }
      });
    }
  }}