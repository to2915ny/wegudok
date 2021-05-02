import { Component, OnInit, Input, Pipe } from '@angular/core';
import { Account} from '../providers/account'

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string 

  balance : any;
  constructor(public account: Account) {}

  ngOnInit() {

  }
  
  

}
