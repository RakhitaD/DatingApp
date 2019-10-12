import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { AlertifyService } from '../_services/alertify.service';

@Injectable({providedIn: 'root'})
export class PreventUnsavedChangesGuard implements CanDeactivate<MemberEditComponent> {

    constructor(private alertify: AlertifyService) {
    }

    canDeactivate(
        component: MemberEditComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        if (component.editForm.dirty) {
            return confirm('Are you sure you want to continue? Any unsaved changes will be lost.');
        }
        return true;
    }
}
