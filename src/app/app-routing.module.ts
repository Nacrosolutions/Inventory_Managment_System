import { FormTodoComponent } from './form-todo/form-todo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormComponent } from './form/form.component';
import { InvComponent } from './inv/inv.component';
import { InventoryBarComponent } from './inventory/inventory-bar/inventory-bar.component';
import { InventoryTableComponent } from './inventory/inventory-table/inventory-table.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { HeaderBarComponent } from './header-bar/header/header/header.component';
import { AboutComponent } from './about/about.component';
import { DemoProjComponent } from './demo-proj/demo-proj.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DemoProj2Component } from './demo-proj2/demo-proj2.component';
import { TimesComponent } from './times/times.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { StockPageComponent } from './stock-page/stock-page.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { NewTempComponent } from './new-temp/new-temp.component';





const appRoutes: Routes = [
  { path: '', redirectTo: '/temp', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate:[AuthGuard], 
    children: [
      { path: 'recipes', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {path:'registration',component:FormTodoComponent},
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService]
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService]
      }
    ],
  


  },


  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: AuthComponent},
  { path: 'muscles', component: FormComponent, pathMatch: 'full'},
  { path: 'muscles/add', component: InvComponent },
  {path:'inventory-bar',component:InventoryBarComponent,
  canActivate:[AuthGuard]},

  {path:'adduser',component:InventoryBarComponent,
  canActivate:[AuthGuard]},
  {path:'users',component:InventoryTableComponent,
  canActivate:[AuthGuard]},
  {path:'head',component:HeaderComponent,
  canActivate:[AuthGuard]},
  {path:'register',component:DashboardComponent,
  canActivate:[AuthGuard]},
  {path:'customer-list',component:CustomerListComponent,
  canActivate:[AuthGuard]},
  { path: 'update/:id', component: EditComponentComponent,
  canActivate:[AuthGuard] },
  { path: 'employees', component: InventoryTableComponent ,
  canActivate:[AuthGuard]
},
{ path: 'emp', component: DemoProjComponent,
canActivate:[AuthGuard] },
{path:'product-list',component:ProductListComponent,
canActivate:[AuthGuard]},
{path:'order-details',component:OrderDetailsComponent,
canActivate:[AuthGuard]},
{path:'stock-details',component:StockPageComponent,
canActivate:[AuthGuard]},
{path:'invoice',component:InvoiceComponent,
canActivate:[AuthGuard]},
{path:'date',component:TimesComponent},
{path:'up/:id',component:DemoProj2Component,
canActivate:[AuthGuard]},

  {path:'registration',component:HeaderBarComponent
  ,
    canActivate:[AuthGuard]
},
{path:'about',component:AboutComponent
,
  canActivate:[AuthGuard]
},
{path:'temp',component:NewTempComponent

},
{path:'**',component:NewTempComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
