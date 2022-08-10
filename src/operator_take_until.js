import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

const onMouseMove$ = fromEvent(document, 'mousemove');
const onMouseDown$ = fromEvent(document, 'mousedown');

const result$ = onMouseMove$.pipe(
  takeUntil(onMouseDown$)
);

result$.subscribe(console.log);