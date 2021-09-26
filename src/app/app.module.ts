import { BrowserModule } from '@angular/platform-browser';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FormTodoComponent } from './form-todo/form-todo.component';
import { InventoryComponent } from './form-todo/inventory/inventory.component';
import { FormComponent } from './form/form.component';
import { InvComponent } from './inv/inv.component';
import { InventoryBarComponent } from './inventory/inventory-bar/inventory-bar.component';
import { InventoryTableComponent } from './inventory/inventory-table/inventory-table.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
// import { HeaderComponent, HeaderBarComponent } from './header-bar/header/header/header.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { HeadComponent } from './head/head.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HeaderBarComponent } from './header-bar/header/header/header.component';
import { AboutComponent } from './about/about.component';
import { DemoProj2Component } from './demo-proj2/demo-proj2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DemoProjComponent } from './demo-proj/demo-proj.component';
import { TimesComponent } from './times/times.component';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';
import { TimePurchaseComponent } from './time-purchase/time-purchase.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule, PaginationService } from 'ngx-pagination';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatDatepickerModule,MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import {MatIconModule} from '@angular/material/icon';
import { NewTempComponent } from './new-temp/new-temp.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    FormTodoComponent,
    InventoryComponent,
    FormComponent, InvComponent, InventoryBarComponent, InventoryTableComponent,
    UserListComponent,
    UserFormComponent,
    SidebarComponent,
    DashboardComponent,
    HeadComponent,
    CustomerListComponent,
    HeaderBarComponent,
    EditComponentComponent,
    AboutComponent,DemoProj2Component,
    ProductListComponent,DemoProjComponent, TimesComponent, OrderDetailsComponent,
    TableComponent,Table2Component, StockDetailsComponent, TimePurchaseComponent, StockPageComponent, InvoiceComponent, DataTableComponent, NewTempComponent,



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,DlDateTimeDateModule,  // <--- Determines the data type of the model
    DlDateTimePickerModule, NgbModule, BrowserAnimationsModule, MatTableModule, MatPaginatorModule, MatSortModule,
    Ng2SearchPipeModule,MDBBootstrapModule,NgxPaginationModule,MatDatepickerModule,MatNativeDateModule,MatButtonModule,
    MatFormFieldModule,
    MatIconModule,BrowserAnimationsModule],
  providers: [
    ShoppingListService,
    RecipeService,
    MatDatepickerToggle,

    PaginationService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
