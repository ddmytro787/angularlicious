import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'composition-api',
		loadComponent: () =>
			import('./composition-api/composition-api.component').then(
				(cmp) => cmp.CompositionApiComponent,
			),
	},
	{
		path: 'reusable-forms',
		loadComponent: () =>
			import('./reusable-forms/reusable-forms.component').then(
				(cmp) => cmp.ReusableFormsComponent,
			),
	},
];
