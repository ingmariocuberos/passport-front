import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'tramites',
    loadChildren: () => import('./tramites/tramites.module').then(m=> m.TramitesModule)
  },
  {
    path: '**',
    redirectTo: 'tramites'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
