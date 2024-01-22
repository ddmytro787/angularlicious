import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanColorDirective } from './can-color.directive';
import { CanAppearanceDirective } from './can-appearance.directive';
import { CanDisableDirective } from './can-disable.directive';

@Component({
	selector: 'app-banner',
	standalone: true,
	imports: [],
	template: `
		<h5>Notification:</h5>
		<div class="banner-content">
			<ng-content></ng-content>
		</div>
	`,
	styles: [
		`
			:host {
				display: block;
				padding: 10px 20px;
				box-sizing: border-box;
				border-radius: 20px;
				background-color: var(--bg-color);
				color: var(--text-color);
				border: solid 2px;
				box-shadow: #00000029 0 2px 4px 3px;

				h5 {
					margin-bottom: 5px;
					margin-top: 0;
					font-size: 20px;
				}

				&.composition-solid {
					background-color: var(--bg-color);
					border-color: var(--bg-color);
					color: var(--text-color);
				}
				&.composition-stroked {
					background-color: transparent;
					border-color: var(--bg-color);
					color: var(--bg-color);
				}
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	hostDirectives: [
		{
			directive: CanColorDirective,
			inputs: ['color'],
		},
		{
			directive: CanAppearanceDirective,
			inputs: ['appearance'],
		},
	],
})
export class BannerComponent {}
