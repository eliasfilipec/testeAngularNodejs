import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormEnvioComponent } from './form-envio/form-envio.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NovoFormComponent } from './NovoForm/NovoForm.component';
import { CarouselComponent } from './Carousel/Carousel.component';

@NgModule({
   declarations: [
      AppComponent,
      FormEnvioComponent,
      NovoFormComponent,
      CarouselComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent,
      FormEnvioComponent,
      NovoFormComponent,
      CarouselComponent
   ]
})

export class AppModule { }
