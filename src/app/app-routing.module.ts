import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { FormComponent } from './pages/form/form.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { MapsComponent } from './pages/maps/maps.component';
import { TasksComponent } from './pages/tasks/tasks.component';


const routes: Routes = [
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'maps',
    component: MapsComponent
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: '**',
    redirectTo: 'gallery'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
