import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule



@Component({
  selector: 'app-header',
  standalone: true,
  imports:[MatButtonModule, MatToolbarModule, RouterModule, RouterOutlet, CommonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
 
})
export class HeaderComponent {

}
