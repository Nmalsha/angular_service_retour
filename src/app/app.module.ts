import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from './cocktail.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, CocktailListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
