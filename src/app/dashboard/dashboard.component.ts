import { Component } from '@angular/core';
import { DashboardDatasourceService } from './dashboard-datasource.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    public datasource: DashboardDatasourceService,
  ) {}
}
