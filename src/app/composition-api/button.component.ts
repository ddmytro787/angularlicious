import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanColorDirective } from './can-color.directive';
import { CanAppearanceDirective } from './can-appearance.directive';
import { CanDisableDirective } from './can-disable.directive';

@Component({
	selector: 'button[compositionButton], a[compositionButton]',
	standalone: true,
	imports: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<span class="button-label">
			<ng-content></ng-content>
		</span>
	`,
	styles: [
		`
			:host {
				display: inline-flex;
				padding: 7px 13px;
				align-items: center;
				box-sizing: border-box;
				border: solid 2px;
				border-radius: 5px;
				font-size: 16px;
				transition: border-radius 0.2s ease-in-out;
				text-decoration: none;
				&:hover {
					opacity: 0.9;
					cursor: pointer;
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
				&:disabled,
				&.disabled {
					opacity: 0.6;
				}
			}
		`,
	],
	hostDirectives: [
		{
			directive: CanColorDirective,
			inputs: ['color'],
		},
		{
			directive: CanAppearanceDirective,
			inputs: ['appearance'],
		},
		{
			directive: CanDisableDirective,
			inputs: ['disabled'],
		},
	],
})
export class ButtonComponent {}
