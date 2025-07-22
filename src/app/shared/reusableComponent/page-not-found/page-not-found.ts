import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { shardModule } from '../../shared';

@Component({
  selector: 'app-page-not-found',
  imports: [shardModule],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.scss'
})
export class PageNotFound {

}
