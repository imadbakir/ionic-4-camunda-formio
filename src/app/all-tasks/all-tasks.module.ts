import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AllTasksPage } from './all-tasks.page';
import { GridComponent } from './grid/grid.component';
import { OnCreateDirective } from '../on-create.directive';
import { GridsterModule } from 'angular-gridster2';
import { TaskGridComponent } from './task-grid/task-grid.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { FormioModule } from 'angular-formio';
import { MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatInputModule } from '@angular/material';
import { RouteReuseStrategy } from '@angular/router';
import {
  FormioResource,
  FormioResourceConfig,
  FormioResourceService,
} from 'angular-formio/resource';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskEditComponent } from './task-edit/task-edit.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { TaskIndexComponent } from './task-index/task-index.component';
import { IonicRouteStrategy } from '@ionic/angular';

import { ResourceService } from '../resource.service';
import { AppFormioComponent } from '../formio/formio.component';
import { FormComponent } from '../form/form.component';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';
import { ProcessListComponent } from '../process-list/process-list.component';
import { SharedModule } from '../shared/shared.module';
import { FilterOptionsComponent } from '../filter-options/filter-options.component';
import { ProcessFormComponent } from '../process-form/process-form.component';

const routes: Routes = [
  {
    path: '',
    component: AllTasksPage,
    children: [
      { path: 'edit/:taskId', component: TaskEditComponent },
      { path: 'new/:processDefinitionId', component: ProcessFormComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridsterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule, MatInputModule,
    FormioModule,
    FormioResource,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [ProcessFormComponent, FilterOptionsComponent, ProcessListComponent, FilterModalComponent,
    AppFormioComponent, FormComponent, TaskGridComponent, TaskItemComponent, TaskDetailsComponent,
    TaskEditComponent,
    TaskCreateComponent, TaskViewComponent, TaskIndexComponent],
  declarations: [ProcessFormComponent, FilterOptionsComponent, ProcessListComponent, FilterModalComponent,
    AppFormioComponent, FormComponent, TaskEditComponent, TaskViewComponent,
    TaskCreateComponent, TaskIndexComponent, AllTasksPage, OnCreateDirective, GridComponent, TaskGridComponent,
    TaskItemComponent, TaskDetailsComponent],
  providers: [
    FormioResourceService,
    ResourceService,
    {
      provide: FormioResourceConfig,
      useValue: {
        name: 'servicerequest',
        form: 'task',
        parents: [
          {
            field: 'user',
            resource: 'currentUser',
            filter: false
          }
        ]
      }
    },
    ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ]
})
export class AllTasksPageModule { }
