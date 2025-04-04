import { Component, OnInit } from '@angular/core';
import { HomepageService } from './homepage.service';
import { CommonModule } from '@angular/common'; // Yeni eklenen satır
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule,RouterModule], // Buraya CommonModule ekleyin
  standalone: true,
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {
  products: any;
  
  constructor(private homepageService: HomepageService) { }

  ngOnInit() {
    this.homepageService.getAllProducts().subscribe({
      next: (data:any) => {
        this.products = data.products; // JSON yapısına göre data.products şeklinde erişim
        console.log('Ürünler yüklendi:', this.products);
      },
      error: (err) => {
        console.error('Ürünler yüklenemedi:', err);
      }
    });
  }
}