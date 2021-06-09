import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../services/auth.service';

@Component({
  selector: 'app-menu-public',
  templateUrl: './menu-public.component.html',
  styleUrls: ['./menu-public.component.scss']
})
export class MenuPublicComponent implements OnInit {
    showLogin = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
