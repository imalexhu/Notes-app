import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditingViewComponent } from './pages/editing-view/editing-view.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { NewTaskPageComponent } from './pages/new-task-page/new-task-page.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  { path: "" , component : MainLayoutComponent, children : [
    {path : "", component: NoteListComponent}
  ]},
  {path : "new-task-page", component: NewTaskPageComponent},
  {path : "tasks/edit/:_id", component: EditingViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
