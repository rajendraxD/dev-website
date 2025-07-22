import { Component } from '@angular/core';
import { shardModule } from '../../shared';

@Component({
  selector: 'app-header',
  imports: [shardModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

}
