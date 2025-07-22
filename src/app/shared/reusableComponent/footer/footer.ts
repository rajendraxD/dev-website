import { Component } from '@angular/core';
import { shardModule } from '../../shared';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [shardModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  constructor(public router: Router) {}
}
