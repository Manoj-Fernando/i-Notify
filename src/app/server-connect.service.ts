import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Notify } from './Notify';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerConnectService {

  constructor(private connectToServer : HttpClient) { }

  callToServer() : Observable<Notify>{
    debugger;
    return this.connectToServer.get<Notify>('http://localhost:8080/notify/getNotifyList');
  }
}
