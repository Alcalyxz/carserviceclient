import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../shared/cliente/cliente.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  cliente: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private OwnerService: ClienteService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const name = params['name'];
      if (name) {
        this.OwnerService.get(name).subscribe((cliente: any) => {
          if (cliente) {
            this.cliente = cliente;
            this.cliente.href = cliente._links.self.href;
          } else {
            console.log(`owner with dni '${name}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/editar-usuario']);
  }

  save(form: NgForm) {
    this.OwnerService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.OwnerService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
