import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

fromEvent(document, 'mousemove').pipe(
  // pluck('clientX') // pluck is deprecated, use map instead
  map(x => x?.clientX)
).subscribe(console.log);