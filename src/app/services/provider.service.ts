import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  //urlProviders = 'http://127.0.0.1:8383/amssecure/providers';
  //urlProviders = 'http://127.0.0.1:8383/ams/providers';
  urlProviders = 'http://127.0.0.1:8080/providers';
  provider: any;
  username = sessionStorage.getItem('username');
  password = sessionStorage.getItem('password');

  constructor(private Http: HttpClient) { }
/*
  listProviders() {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(this.urlProviders + '/list', { headers });
  }


  createProvider(myform) {

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider,{ headers });
  }

  updateProvider(myObj) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj, { headers });

  }


  deleteProvider(myObj) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    return this.Http.delete(this.urlProviders + '/' + myObj['id'],{ headers })
  }

  getProvider(id) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    return this.Http.get(this.urlProviders + '/' + id, { headers })
  }
*/

  listProviders() {
    return this.Http.get(this.urlProviders + '/list');
  }
  createProvider(myform: any) {
    this.provider = {
      'name': myform.value.providerName,
      'email': myform.value.providerEmail,
      'address': myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders + '/add', this.provider);
  }
  updateProvider(myObj: any) {
    return this.Http.put(this.urlProviders + '/' + myObj['id'], myObj);
  }
  deleteProvider(myObj: any) {
    return this.Http.delete(this.urlProviders + '/' + myObj['id'])
  }
  getProvider(id: any) {
    return this.Http.get(this.urlProviders + '/' + id)
  }
}
