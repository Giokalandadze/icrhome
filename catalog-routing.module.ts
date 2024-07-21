import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'products', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
