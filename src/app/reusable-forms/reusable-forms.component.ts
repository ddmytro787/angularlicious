import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'app-reusable-forms',
	standalone: true,
	imports: [],
	template: ` <p>reusable-forms works!</p> `,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableFormsComponent {}
