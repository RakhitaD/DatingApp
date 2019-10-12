import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallBack: () => any) {
    alertify.confirm(message, function(e){
      if (e) {
        okCallBack();
      } else {}
    });
  }

  success(message){
    alertify.success(message);
  }

  error(message){
    alertify.error(message);
  }

  warning(message){
    alertify.warning(message);
  }

  message(message){
    alertify.message(message);
  }

}
