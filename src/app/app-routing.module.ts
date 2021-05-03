import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [  
{path:"movie" , component:MovieComponent},
{path:"favourite",component:FavoriteComponent},
{path:"login",component:LoginComponent},
{path:"create",component:NewAccountComponent},
{path:'home',component:HomeComponent},
{path:'pricing',component:PricingComponent},
{path:"",redirectTo:'home',pathMatch:'full'},
{path:'**',redirectTo:'home',pathMatch:'full'}//for 404 error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
