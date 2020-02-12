import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { CarouselComponent } from './carousel/carousel.component';
import { GridBatchEditingComponent } from './grid-batch-editing/grid-batch-editing.component';
import { DialogComponent } from './dialog/dialog.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { text: 'Home' } },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'carousel', component: CarouselComponent, data: { text: 'Carousel' } },
  { path: 'grid-batch-editing', component: GridBatchEditingComponent, data: { text: 'Grid Batch Editing' } },
  { path: 'dialog', component: DialogComponent, data: { text: 'Dialog' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
}), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
