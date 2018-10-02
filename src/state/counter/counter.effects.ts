import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { CounterActionTypes } from './counter.actions';

@Injectable()
export class CounterEffects {

    constructor(private http: HttpClient, private actions$: Actions) { }

    @Effect()
    login$: Observable<Action> = this.actions$.pipe(
        ofType(CounterActionTypes.LOAD),
        mergeMap(action =>
            this.http.get('//localhost:3000/counter').pipe(

                map(data => ({ type: CounterActionTypes.LOAD_SUCCEEDED, payload: data })),

                catchError(() => of({ type: CounterActionTypes.LOAD_FAILED }))
            )
        )
    );
}
