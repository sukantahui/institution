import { Component, OnInit } from '@angular/core';

export interface NavItem {
  displayName: string;
  disabled?: boolean;
  iconName: string;
  route?: string;
  children?: NavItem[];
}

@Component({
  selector: 'app-menu-owner',
  templateUrl: './menu-owner.component.html',
  styleUrls: ['./menu-owner.component.scss']
})
export class MenuOwnerComponent implements OnInit {
  openElements: boolean[] = [];
  menu = [
    {
      title: 'Menu Item 1',
      url: "/",
      target: "_blank"
    },
    {
      title: "Menu Item 2",
      active: true,
      navigationItems: [
        {
          title: "Sub-Menu Item 1",
          url: "/"
        },
        {
          title: "Sub-Menu Item 2",
          url: "/"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
