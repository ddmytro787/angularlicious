import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddressFormGroupComponent } from './address-form-group.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-reusable-forms',
	standalone: true,
	imports: [AddressFormGroupComponent, ReactiveFormsModule],
	template: `
		<form [formGroup]="form" (ngSubmit)="submit()">
			<div class="form-field">
				<label for="display_name">Display Name</label>
				<input
					type="text"
					name="displayName"
					id="display_name"
					formControlName="displayName"
				/>
			</div>
			<app-address-form-group></app-address-form-group>
			<button>Submit</button>
		</form>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReusableFormsComponent {
	form = new FormGroup({
		displayName: new FormControl(),
	});

	submit(): void {
		console.log('Submit', this.form.value);
	}
}
