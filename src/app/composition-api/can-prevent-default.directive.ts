import { Directive, HostListener, inject } from '@angular/core';
import { CanDisableDirective } from './can-disable.directive';

@Directive({
	selector: '[canPreventDefault]',
	standalone: true,
})
export class CanPreventDefaultDirective {
	canDisable = inject(CanDisableDirective, {
		optional: true,
	});

	@HostListener('click', ['$event'])
	@HostListener('dblclick', ['$event'])
	onClick(e: Event) {
		if (this.canDisable?.disabled) {
			e.preventDefault();
			e.stopImmediatePropagation();
		}
	}
}
