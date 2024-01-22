import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'composition-api',
		loadComponent: () =>
			import('./composition-api/composition-api.component').then(
				(cmp) => cmp.CompositionApiComponent,
			),
	},
];
