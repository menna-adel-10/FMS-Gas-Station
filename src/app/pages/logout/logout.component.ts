import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  host: {
    'style': ' width: 100%; height: 100vh; justify-content: center;'
  }
})
export class LogoutComponent {

   constructor(private router: Router) { }

  ngOnInit(): void { }

  onLoginClick() {
    this.router.navigate(['control']);
  }
}
