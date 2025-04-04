import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent }, // Anasayfa rotası
    { path: 'product/:id', component: ProductDetailComponent }
];
