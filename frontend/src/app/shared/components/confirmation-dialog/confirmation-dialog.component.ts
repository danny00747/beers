 import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
 import {LoadingService} from "../../../core/services/loading.service";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  message!: string;
  title!: string;
  loading$ = this.loadingService.isLoading$;

  constructor(
    private readonly dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    private readonly loadingService: LoadingService,
    @Inject(MAT_DIALOG_DATA) private readonly data: Record<string, string>,
  ) {
  }

  ngOnInit(): void {
    this.message = this.data.message;
    this.title = this.data.title;
  }

  close(confirm: boolean) {
    this.dialogRef.close(confirm);
  }

}
