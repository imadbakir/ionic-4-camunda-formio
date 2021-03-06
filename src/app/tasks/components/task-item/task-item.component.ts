import { Component, Input, ViewChild } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CamundaRestService } from '../../../core/services/camunda-rest.service';


/**
 * Task List Item Component
 */
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent  {
  /**
   * Camunda Task Object
   */
  @Input() task;
  @Input() active;
  @ViewChild('trigger') input;

  users: any = [];

  constructor(
    public auth: AuthService,
    private camundaService: CamundaRestService) {

  }



  openAssignee() {
    setTimeout(() => {
      if (this.task.assignee) {
        this.input.nativeElement.focus();
        this.task.assignee = null;
      } else {
        this.task.assignee = this.auth.getUser().username;
      }
      this.camundaService.postAssignTask(this.task.id, { userId: this.task.assignee });


    }, 100);

  }


  /**
   * get Priority Class by priority Value
   * @param priority
   */
  getPriority(priority) {
    let value = '';
    switch (true) {
      case priority >= 75:
        value = 'app-bg-danger';
        break;
      case priority >= 50:
        value = 'app-bg-warning';
        break;
      case priority >= 25:
        value = 'app-bg-primary';
        break;
      case priority < 25:
        value = '';
        break;



    }
    return value;
  }
  /**
   * Get Status as string By priority Value
   * @param priority
   */
  getStatus(priority) {
    let value = '';
    switch (true) {
      case priority >= 75:
        value = 'Critical';
        break;
      case priority >= 50:
        value = 'Important';
        break;
      case priority >= 25:
        value = 'Normal';
        break;
      case priority < 25:
        value = 'Low';
        break;

    }
    return value;
  }

}
