import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';

of('A', 'B', 'C').pipe(
  // startWith('X'),
  endWith('Y')
).subscribe(console.log);