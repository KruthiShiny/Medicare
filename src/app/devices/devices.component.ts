import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { DeviceService } from '../device.service';
import { Devices } from '../Devices';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {
  public devices : Devices[]=[];

  constructor(private router: Router,private deviceService:DeviceService,private cartService:CartService) { }
  
  ngOnInit(): void {
    this.getDevices();
  }
  public getDevices():void{
    this.deviceService.getDevices().subscribe(
      (response: Devices[]) => {
        this.devices = response;
        console.log(this.devices);
     },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );
  }
  addtoCart(device:any){
    this.cartService.addtoCart(device);
  }
  }


