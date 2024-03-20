import {CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule} from '@angular/core';
import {CustomButtonComponent} from 'projects/custom-button/src/lib/custom-button.component';
import {createCustomElement} from '@angular/elements';


@NgModule({
  declarations: [
    CustomButtonComponent
  ],
  imports: [],
  exports: [
    CustomButtonComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CustomButtonModule {
  constructor(private injector: Injector) {
    const customButtonElement = createCustomElement(CustomButtonComponent, {injector: this.injector});
    customElements.define('npm-custom-button', customButtonElement);

    console.log('Initialized...')
  }
}
