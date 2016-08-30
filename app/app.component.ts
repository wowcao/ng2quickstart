import { Component } from '@angular/core';
import { HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App.</h1>',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent { }
