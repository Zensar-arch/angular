import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductNotifyComponent } from './product-notify/product-notify.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { DatepickerTestComponent } from './datepicker-test/datepicker-test.component';
import { TimepickerTestComponent } from './timepicker-test/timepicker-test.component';
import { RatingTestComponent } from './rating-test/rating-test.component';
import { SwitchTestComponent } from './switch-test/switch-test.component';
import { ReverseStringPipe } from './reverse-string.pipe';
import { CarouselTestComponent } from './carousel-test/carousel-test.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { ColorDirective } from './color.directive';
@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    FooterComponent,
    ProductListComponent,
    ProductNotifyComponent,
    PipeTestComponent,
    DatepickerTestComponent,
    TimepickerTestComponent,
    RatingTestComponent,
    SwitchTestComponent,
    ReverseStringPipe,
    CarouselTestComponent,
    ProductFormComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    
   
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
