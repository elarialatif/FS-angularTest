import { HttpRequest, HttpHandler, HttpErrorResponse, HttpResponse, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(
    private readonly injector: Injector,
    private _translateService: TranslateService,
    private _messageService: MessageService
  ) { }

  showSuccess(summary: string = 'Success', detail: string | undefined = undefined) {
    console.log('sss');

    this._messageService.add({severity: 'success', summary: this._translateService.instant(summary), detail: detail? this._translateService.instant(detail): undefined});
  }

  showError(summary: string = 'Error', detail: string | undefined = undefined) {
    this._messageService.add({ severity: 'error', summary: this._translateService.instant(summary), detail: detail? this._translateService.instant(detail): undefined});
  }
  //   interceptService(request?: HttpRequest<any>, next?: HttpHandler): Observable<HttpEvent<any>> {
  //     // const messageService = this.injector.get(MessageService);

  //     return next!.handle(request!).pipe(
  //       tap(
  //         (event: any) => {
  //           // console.log(event);

  //           if (event?.body?.isSuccess == false) {
  //             alert('1111')
  //          //   messageService.add({ severity: 'error', summary: translateService.instant("couldn't complete action"), detail: event?.body?.errorMessage });
  //           }
  //           if (event instanceof HttpResponse) {
  //             if (event.body.errorMessage && event.body.statusCode) {
  //               switch (event.body.statusCode) {
  //                 case 404:
  //                   alert('404')
  //               //    messageService.add({ severity: 'error', summary: translateService.instant("couldn't complete action") });
  //                   break;
  //                 default:
  //                   return;
  //               }
  //             }
  //           }
  //         },
  //         (err: any) => {
  //           if (err instanceof HttpErrorResponse) {
  //             switch (err.status) {
  //               case 500:
  //                // messageService.add({ severity: 'error', summary: translateService.instant("couldn't complete action") });
  //                 break;
  //               case 400:
  //               //  messageService.add({ severity: 'error', summary: translateService.instant("couldn't complete action") });
  //                 break;
  //               case 401:
  //                 //securityService.logout();
  //                 break;
  //               case 403:
  //               //  messageService.add({ severity: 'error', summary: translateService.instant('You are not authorized to access resource') });
  //                 break;
  //               case 404:
  //                 alert('heee')
  //               //  messageService.add({ severity: 'error', summary: translateService.instant("couldn't complete action") });
  //                 break;
  //               default:
  //                // messageService.add({ severity: 'error', summary: translateService.instant('error getting data') });
  //                 console.error(`
  //                   returned code ${err.status},
  //                    `);
  //                 break;
  //             }
  //           }
  //         }
  //       )
  //     );


  // }
}
