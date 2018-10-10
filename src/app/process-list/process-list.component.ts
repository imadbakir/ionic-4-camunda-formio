import { Component, OnInit } from '@angular/core';
import { CamundaRestService } from '../camunda-rest.service';
import { ProcessDefinition } from '../schemas/ProcessDefinition';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent implements OnInit {
  processDefinitions: ProcessDefinition[] = [];
  constructor(public camundaService: CamundaRestService,
    public router: Router,
    public event: EventsService,
    public popoverCtrl: PopoverController) { }

  startProcess(processDefinitionId) {
    this.camundaService.processDefinitionSubmitForm(processDefinitionId, {}).subscribe(instance => {
      // this.router.navigate([`/tasks/edit/${instance.id}`]);
      alert('process started');
      this.popoverCtrl.dismiss();
      this.event.announceFiltersRefresh('');

    });
  }
  ngOnInit() {
    this.camundaService.getProcessDefinitions().subscribe((processDefinitions) => {
      this.processDefinitions = processDefinitions;
    });
  }

}