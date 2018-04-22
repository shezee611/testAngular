// Angular Libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

// Custom Components
import { AppComponent } from './_components/app.component';
import { HomeComponent } from './_components/home';
import { PostsComponent } from './_components/posts';
import { PostsDetailsComponent } from './_components/postsdetails';

// Custom Pipes
import { SpaceToHyphenPipe } from './_pipes/pipe.space.to.hyphen';
import { CapitalizePipe } from './_pipes/pipe.capitalize';
import { SearchNewsPipe } from './_pipes/pipe.search.news';

@NgModule({
  declarations: [AppComponent, HomeComponent, PostsComponent, PostsDetailsComponent, SpaceToHyphenPipe, CapitalizePipe, SearchNewsPipe],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
