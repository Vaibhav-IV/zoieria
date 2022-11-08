import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';


import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HomeComponent } from './components/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio'



import { MouseEnterLeaveDebounceDirective } from '../app/directives/mouse-enter-leave-debounce.directive';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AddProductDialogComponent } from './components/add-product-dialog/add-product-dialog.component';
import { ViewProductComponent } from './components/view-product/view-product.component';
import { DeleteConfirmDialogComponent } from './components/delete-confirm-dialog/delete-confirm-dialog.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { InterceptorServiceService } from './services/interceptor-service.service';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MouseEnterLeaveDebounceDirective,
    SidenavComponent,
    HeaderComponent,
    CarouselComponent,
    ProductPageComponent,
    AdminProductsComponent,
    AddProductDialogComponent,
    ViewProductComponent,
    DeleteConfirmDialogComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTableModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatMenuModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatOptionModule,
    MatSnackBarModule,
    MatGridListModule,
    MatRadioModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServiceService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
