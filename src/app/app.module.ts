import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ElementNavbarComponent } from './shared/element-navbar/element-navbar.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AppRoutingModule } from './app-routing.module';
import { TasksComponent } from './pages/tasks/tasks.component';
import { FormComponent } from './pages/form/form.component';
import { MapsComponent } from './pages/maps/maps.component';
import { ChatComponent } from './pages/chat/chat.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

import { environment  } from '../environments/environment';
import { FormTasksComponent } from './modals/form-tasks/form-tasks.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule, } from '@angular/fire/compat';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ElementNavbarComponent,
    GalleryComponent,
    TasksComponent,
    FormComponent,
    MapsComponent,
    ChatComponent,
    FormTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp( environment.firebaseConfig )),
    provideFirestore(() => getFirestore()),
    AngularFireModule.initializeApp(environment.firebaseConfig ),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
