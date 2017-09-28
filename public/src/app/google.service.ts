import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// var access_token = "Bearer ZjD8d4UK54e0s5EUBa6fNSGtWMmFn5EqOkHjR3IRjTwfCEReGytPnAgOpFIGq2QJTRIK6KTs2B9lBT21YkzOJPAMnLQIZWDeh1l0s3VAaf_aj2Pr26R1Yl1viQrMWXYx";
//
// let headers = new Headers();
// headers.append('Content-Type', 'x-www-form-urlencoded');
// headers.append('Authorization', access_token);
//
//
// let options = new RequestOptions({ headers: headers});


@Injectable()
export class GoogleService {

  constructor(private _http: Http) { }

  search(search) {
    console.log('hit search in Service', search);
    return this._http.post('/api/search', search)
    .map(Response=> Response.json())
    .toPromise();
  }
}
