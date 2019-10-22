import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetingComponent } from './greeting/greeting.component';
import { Product } from './product';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { pipe } from '../../node_modules/rxjs';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { ProductFormComponent } from './product-form/product-form.component';


const routes: Routes = [{path : 'greet',
component : GreetingComponent},
{path : 'product',
component : ProductListComponent},
{path : 'datepicker',
component : DatepickerTestComponent},
{path : 'timepicker',
component : TimepickerTestComponent},
{path : 'pipe',
component : PipeTestComponent},
{path : 'rating',
component : RatingTestComponent},
{path : 'switch',
component :SwitchTestComponent},
{path : 'carousel',
component :CarouselTestComponent},
{path : 'productForm',
component :ProductFormComponent},
{path : '**',redirectTo :'/greet', pathMatch : 'full'},
{path : '',redirectTo :'/greet', pathMatch : 'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }
