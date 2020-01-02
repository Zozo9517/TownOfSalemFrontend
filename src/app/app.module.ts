import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }                                          from '@angular/forms';
import { ReactiveFormsModule }                                  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './answer/answer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatFormFieldModule, MatFormFieldControl } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { LoginmodalComponent } from './loginmodal/loginmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    HeaderComponent,
    ModalComponent,
    LoginmodalComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule
  ],
  providers: [
    {provide: ErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
