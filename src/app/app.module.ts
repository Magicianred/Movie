import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import  {HttpClientModule}from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './shared/card/card.component';
import { RouterModule } from '@angular/router';
import { CommentComponent } from './shared/card/comment/comment.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {UserService} from './user.service';
import  {MovieService} from './movie.service';
import { HomeComponent } from './home/home.component';
import { OwlComponent } from './shared/owl/owl.component';
import { CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';
import { SwipperComponent } from './shared/swipper/swipper.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ChatComponent } from './chat/chat.component';
import { DatePipe } from '@angular/common';
import { AngularFireAuthModule } from 'angularfire2/auth';



@NgModule({
  declarations: [
    AppComponent,
    NewAccountComponent,
    LoginComponent,
    MovieComponent,
    FavoriteComponent,
    NavbarComponent,
    CardComponent,
    CommentComponent,
    HomeComponent,
    OwlComponent,
    SwipperComponent,
    FooterComponent,
    PricingComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    BrowserAnimationsModule,
    SwiperModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule 
  ],
  providers: [
    UserService,
    MovieService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
