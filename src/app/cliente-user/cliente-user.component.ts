import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../shared/cliente/cliente.service';


@Component({
  selector: 'app-cliente-user',
  templateUrl: './cliente-user.component.html',
  styleUrls: ['./cliente-user.component.css']
})
export class ClienteUserComponent implements OnInit {

  clientes: Array<any>;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getAll().subscribe(data => {
      this.clientes = data._embedded.owners; 
    });
  }

}
