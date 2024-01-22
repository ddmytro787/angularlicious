import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CanColorDirective } from './can-color.directive';
import { CanAppearanceDirective } from './can-appearance.directive';
import { CanDisableDirective } from './can-disable.directive';

@Component({
	selector: 'app-chip',
	standalone: true,
	imports: [],
	template: `
		<span class="chip-text">
			<ng-content></ng-content>
		</span>
		<i class="chip-remove-icon"></i>
	`,
	styles: [
		`
			@mixin _draw-line() {
				content: '';
				position: absolute;
				width: 15px;
				height: 2px;
				background-color: currentColor;
				top: 6.5px;
			}

			:host {
				display: inline-flex;
				align-items: center;
				padding: 5px 13px;
				border-radius: 20px;
				border: solid 2px;

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
			.chip-remove-icon {
				display: inline-block;
				color: currentColor;
				position: relative;
				margin: 0 0 0 5px;
				opacity: 0.5;
				width: 15px;
				height: 15px;
				cursor: pointer;
				&:hover {
					opacity: 1;
				}
				&:before {
					@include _draw-line();
					transform: rotate(45deg);
				}
				&:after {
					@include _draw-line();
					transform: rotate(-45deg);
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
		{
			directive: CanDisableDirective,
			inputs: ['disabled'],
		},
	],
})
export class ChipComponent {}
