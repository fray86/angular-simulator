import { FormGroup, FormControl } from "@angular/forms";

export type FormControls<T> = {
  [K in keyof T]:
    T[K] extends object
      ? T[K] extends Date
        ? FormControl<T[K]>
        : FormGroup<FormControls<T[K]>>
      : FormControl<T[K]>;
}