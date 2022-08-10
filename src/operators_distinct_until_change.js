import { of } from 'rxjs';
import { distinct, distinctUntilChanged, distinctUntilKeyChanged } from 'rxjs/operators';

const repeatedNumbers$ = of(1, 1, 2, 3, 3, 2, 4, 4, 5, 5, 6, 6, 5, 7, 7, 8, 8, 9, 9, 10, 10).pipe(
  // distinct()
  distinctUntilChanged()
);

const repeatedObjects$ = of(
  { name: 'Diego', age: 12 },
  { name: 'Lucas', age: 14 },
  { name: 'Lucas', age: 14 },
  { name: 'Fernando', age: 18 },
  { name: 'Fernando', age: 18 },
  { name: 'Diego', age: 12 }
).pipe(
  distinctUntilKeyChanged('name')
)

// repeatedNumbers$.subscribe(console.log);
repeatedObjects$.subscribe(console.log);