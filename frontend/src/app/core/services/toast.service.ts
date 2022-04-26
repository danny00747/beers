import {Injectable} from "@angular/core";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from "@angular/material/snack-bar";

@Injectable()
export class ToastService {

  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  show(message: string) {
    this.snackBar.open(message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

}
