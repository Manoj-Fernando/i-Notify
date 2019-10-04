import { Component, OnInit } from '@angular/core';
import { ServerConnectService } from '../server-connect.service';
import { Notify } from '../Notify';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public notifyList : Notify;

  constructor(private service : ServerConnectService) { }

  ngOnInit() {
  }

  buttonClick(){
    debugger;
    this.service.callToServer().subscribe(reponse => this.notifyList = reponse);
  }

}
