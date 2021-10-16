import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ Devices} from './Devices';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }
  public getDevices()  {
    return this.http.get<Devices[]>("http://localhost:9082/alldevices");
  }
}
