/* eslint-disable deprecation/deprecation */
import {
  AsyncSubject,
  auditTime,
  BehaviorSubject,
  combineLatest,
  concat,
  concatMap,
  defer,
  EMPTY,
  endWith,
  expand,
  filter,
  firstValueFrom,
  forkJoin,
  from,
  fromEvent,
  identity,
  interval,
  lastValueFrom,
  map,
  merge,
  mergeMap,
  MonoTypeOperatorFunction,
  Observable,
  Observer,
  of,
  OperatorFunction,
  pipe,
  race,
  range,
  ReplaySubject,
  startWith,
  Subject,
  Subscriber,
  Subscription,
  switchMap,
  tap,
  throwError,
  timer,
  UnaryFunction,
  zipWith,
} from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  distinctUntilChanged,
  finalize,
  last,
  mergeAll,
  pairwise,
  reduce,
  retry,
  shareReplay,
  skip,
  take,
  takeUntil,
  takeWhile,
  timeout,
  toArray,
  withLatestFrom,
} from 'rxjs/operators';

export {
  Observable,
  filter,
  mergeMap,
  Subscription,
  finalize,
  defer,
  pairwise,
  from,
  toArray,
  auditTime,
  Subject,
  pipe,
  concat,
  MonoTypeOperatorFunction,
  UnaryFunction,
  shareReplay,
  AsyncSubject,
  BehaviorSubject,
  mergeAll,
  takeUntil,
  retry,
  skip,
  reduce,
  ReplaySubject,
  Subscriber,
  of,
  concatMap,
  forkJoin,
  timer,
  interval,
  startWith,
  map,
  tap,
  withLatestFrom,
  take,
  takeWhile,
  debounceTime,
  fromEvent,
  distinctUntilChanged,
  switchMap,
  zipWith,
  EMPTY,
  race,
  range,
  delay,
  throwError,
  firstValueFrom,
  lastValueFrom,
  catchError,
  merge,
  identity,
  combineLatest,
  endWith,
  Observer,
  OperatorFunction,
  expand,
  last,
  timeout,
};
