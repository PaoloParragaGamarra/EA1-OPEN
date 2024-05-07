import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    RouterLink,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
