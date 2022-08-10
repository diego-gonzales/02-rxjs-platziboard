import { fromEvent } from 'rxjs';
import { debounceTime, auditTime, throttleTime, sampleTime } from 'rxjs/operators';

const onClikc$ = fromEvent(document, 'click').pipe(
  // debounceTime(1000),

  // serviría para un boton de descarga o submit
  // auditTime(1000),

  // serviría para un boton de descarga o submit
  // throttleTime(1000),

  // Es parecido a un interval
  sampleTime(4000)
);

onClikc$.subscribe(console.log);