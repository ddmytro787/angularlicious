import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from './banner.component';
import { ChipComponent } from './chip.component';
import { ButtonComponent } from './button.component';
import { CanColorDirective } from './can-color.directive';
import { CanDisableDirective } from './can-disable.directive';
import { CanAppearanceDirective } from './can-appearance.directive';

@Component({
	selector: 'app-composition-api',
	standalone: true,
	imports: [
		BannerComponent,
		ChipComponent,
		ButtonComponent,
		CanColorDirective,
		CanDisableDirective,
		CanAppearanceDirective,
	],
	template: `
		<h5 class="mat-headline-5">Composition API</h5>
		<div class="content">
			<button compositionButton>Hi There!</button>
			<button compositionButton [appearance]="'stroked'">Hi There!</button>
			<app-chip [appearance]="'solid'"> What's up? </app-chip>
			<app-chip [appearance]="'stroked'"> What's up? </app-chip>
			<app-banner [appearance]="'solid'"> What's up? </app-banner>
			<app-banner [appearance]="'stroked'"> What's up? </app-banner>
		</div>
	`,
	styles: [
		`
			.composition-primary {
				--bg-color: #4378db;
				--text-color: #faf0e6;
			}

			.composition-secondary {
				--bg-color: rgb(249, 186, 11);
				--text-color: #333;
			}

			.content {
				display: flex;
				flex-direction: column;
				row-gap: 20px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompositionApiComponent {}
