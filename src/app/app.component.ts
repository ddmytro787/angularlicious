import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule],
	template: `
		<div class="ags-layout">
			<mat-toolbar color="primary">
				<button mat-icon-button (click)="drawer.toggle()">
					<mat-icon>menu</mat-icon>
				</button>
				<span>Angularlicious</span>
				<span class="spacer"></span>
			</mat-toolbar>

			<mat-drawer-container autosize>
				<mat-drawer #drawer mode="side">Menu</mat-drawer>
				<div class="ags-page">
					Page Here
					<router-outlet></router-outlet>
				</div>
			</mat-drawer-container>
		</div>
	`,
	styles: [
		`
			.ags-layout {
				display: flex;
				flex-direction: column;
				height: 100%;
				overflow: hidden;

				mat-toolbar {
					.spacer {
						flex: 1 1 auto;
					}
				}

				mat-drawer-container {
					flex: 1;

					mat-drawer {
						min-width: 280px;
					}
				}

				.ags-page {
					padding: 30px;
				}
			}
		`,
	],
})
export class AppComponent {}
