import {
  Component, OnInit, AfterViewChecked, Input, DoCheck
} from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { EventsService } from '../../../core/services/events.service';
import { CamundaRestService } from '../../../core/services/camunda-rest.service';
import { ModalController, LoadingController } from '@ionic/angular';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-task-grid',
  templateUrl: './task-grid.component.html',
  styleUrls: ['./task-grid.component.scss']
})
export class TaskGridComponent implements OnInit, AfterViewChecked, DoCheck {
  @Input() filterItems;
  @Input() filterEvent;
  @Input() formKey;
  tsks: any = [];
  filtered: any = [];
  properties: any = ['Name'];
  dataLoaded: Boolean = false;
  currentFilter: any = {
    id: ''
  };
  filter: any = {
    createdAt: '',
    dueAt: '',
    sortingProp: { name: 'priority', type: 'number' },
    sortingDirection: -1,
    textSearch: '',
  };
  tasksOrigin: any = [];
  loading;
  items: Array<GridsterItem>;
  iterableDiffer;
  static itemChange(item, itemComponent) {
  }

  static itemResize(item, itemComponent) {
  }
  constructor(private event: EventsService, private camundaService: CamundaRestService,
    public modalController: ModalController, private auth: AuthService, public loadingController: LoadingController) {

  }

  ngDoCheck() {
  }

  search(event) {
    this.performSearch(this.filter.textSearch);
  }

  toggleExpand(item) {
    if (item.x < 5) {
      item.x = 5;

    } else {
      item.x = 2;

    }
  }
  async presentLoading() {
    this.loading = await this.loadingController.create({});
    return await this.loading.present();
  }
  async dismissLoading() {
    return await this.loading.dismiss();
  }
  clearSearch(event) {
    this.filter.textSearch = '';
    this.performSearch('');
  }
  performSearch(value) {
    this.tsks = this.tasksOrigin.filter(function (item) {
      return (item['name'] ? item['name'].toString().toLowerCase().includes(value.toLowerCase()) : false) ||
        (item['assignee'] ? item['assignee'].toString().toLowerCase().includes(value.toLowerCase()) : false) ||
        (item['description'] ? item['description'].toString().toLowerCase().includes(value.toLowerCase()) : false) ||
        (item['due'] ? item['due'].toString().toLowerCase().includes(value.toLowerCase()) : false);
    });
  }
  setSortingDirection() {
    this.filter.sortingDirection === 1 ? this.filter.sortingDirection = -1 : this.filter.sortingDirection = 1;
    this.sortArray(this.filter.sortingDirection);
  }

  sortArray(dir) {
    const config = this.filter.sortingProp;
    switch (config.type) {
      case 'datetime':
        this.tsks.sort(function (a, b) {
          const dateA = new Date(a[config.name]), dateB = new Date(b[config.name]);
          const left = dir === 1 ? dateA : dateB;
          const right = dir === 1 ? dateB : dateA;
          return left.getTime() - right.getTime();
        });
        break;

      case 'number':
        this.tsks.sort(function (a, b) {
          const left = dir === 1 ? a : b;
          const right = dir === 1 ? b : a;
          // tslint:disable-next-line:radix
          return parseInt(left[config.name]) - parseInt(right[config.name]);
        });
        break;
      default:
        this.tsks.sort(function (a, b) {
          const valueA = a[config.name].toLowerCase(), valueB = b[config.name].toLowerCase();
          if (valueA < valueB) {
            return -1 * dir;
          }
          if (valueA > valueB) {
            return 1 * dir;
          }
          return 0;
        });
    }

  }

  showDetails(task) {
    task.showDetails ? task.showDetails = false : task.showDetails = true;
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  listArchive(event) {
    if (event.bool) {
      this.presentLoading().then(() => {
        this.camundaService.listHistory(this.auth.getUser().username).subscribe(data => {
          this.tsks = data;
          this.tasksOrigin = data;
          this.dismissLoading();

        });
      });



    } else {
      this.camundaService.listHistory(this.auth.getUser().username).subscribe(data => {
        data.forEach(entry => this.tasksOrigin.splice(this.tasksOrigin.indexOf(entry), 1));
        this.tsks = this.tasksOrigin;

      });

    }
  }
  ListFilter(event) {
    if (event.bool) {
      this.presentLoading().then(() => {
        this.camundaService.listFilter(event.item.id).subscribe(data => {
          this.tasksOrigin = data;
          this.tsks = this.tasksOrigin;
          this.dismissLoading();
        });
      });


    }
  }

  ngOnInit() {
    this.event.itemChange$.subscribe(data => {
      if (data.complete) {
        this.tasksOrigin.filter(item => {
          if (data.taskId === item.id) {
            item.complete = true;
            this.tsks = this.tasksOrigin;
            setTimeout(() => {
              this.tasksOrigin.splice(this.tasksOrigin.indexOf(item), 1);
              this.tsks = this.tasksOrigin;
            }, 400);
          }
        });
      }
    });
    this.event.filterAnnounced$.subscribe(data => {
      if (data.hasOwnProperty('bool')) {
        if (data.bool) {
          this.ListFilter(data);
        }
      }
    });
    /*this.filterEvent.subscribe(event => {
      this.ListFilter(event);

    });*/

    this.event.archiveAnnounced$.subscribe(event => {
      this.listArchive(event);

    });
  }
  ngAfterViewChecked() {
    // this.resizeAllGridItems();
  }

  onResize(event) {
    // this.resizeAllGridItems();
  }

  resizeGridItem(item) {
    const grid = document.getElementsByClassName('flex-container')[0];
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'), 10);
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'), 10);
    const rowSpan = Math.ceil((item.querySelector('.card').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = 'span ' + rowSpan;
  }

  resizeAllGridItems() {
    const allItems = document.getElementsByClassName('flex-item');
    for (let x = 0; x < allItems.length; x++) {
      this.resizeGridItem(allItems[x]);
    }
  }

}