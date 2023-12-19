// export const routes: Routes = [];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: '', component: CocktailListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
