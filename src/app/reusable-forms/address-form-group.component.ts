import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-address-form-group',
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<fieldset formGroupName="deliveryAddress">
			<legend>Delivery Address</legend>
			<div class="form-field">
				<label for="zip_code">Zip Code</label>
				<input type="text" name="zipCode" id="zip_code" formControlName="zipCode" />
			</div>
			<div class="form-field">
				<label for="address">Street</label>
				<input type="text" name="address" id="address" formControlName="address" />
			</div>
		</fieldset>
	`,
	styles: ``,
	changeDetection: ChangeDetectionStrategy.OnPush,
	viewProviders: [
		{
			provide: ControlContainer,
			useFactory: () => inject(ControlContainer, { skipSelf: true }),
		},
	],
})
export class AddressFormGroupComponent implements OnInit {
	parentContainer = inject(ControlContainer);

	get parentFormGroup(): FormGroup {
		return this.parentContainer.control as FormGroup;
	}

	ngOnInit(): void {
		this.parentFormGroup.addControl(
			'deliveryAddress',
			new FormGroup({
				zipCode: new FormControl(),
				address: new FormControl(),
			}),
		);
	}
}
