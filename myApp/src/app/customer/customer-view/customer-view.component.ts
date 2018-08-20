import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'angular-formio/resource';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent extends FormioResourceViewComponent implements OnInit, OnDestroy {
  id: number;
  limit: number;
  private sub: any;
  constructor(service: FormioResourceService, config: FormioResourceConfig, private route: ActivatedRoute) {
    super(service, config);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.limit = 5;
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
