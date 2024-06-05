import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ControlContainer, ReactiveFormsModule } from '@angular/forms';

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
export class AddressFormGroupComponent {}
