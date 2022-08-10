import { fromEvent, interval, from, combineLatest, forkJoin } from 'rxjs';
import { map, mergeWith, mergeAll, mergeMap } from 'rxjs/operators';

// TODO: MERGE WITH (OR MERGE, it's deprecated)
// const onClick$ = fromEvent(document, 'click').pipe(
//   map(event => event.type)
// );
// const onMouseMove$ = fromEvent(document, 'mousemove').pipe(
//   map(event => event.type)
// );

// // onClick$.subscribe(console.log);
// // onMouseMove$.subscribe(console.log);

// const eventDocument$ = onMouseMove$.pipe(
//   mergeWith(onClick$)
// );

// eventDocument$.subscribe(value => {
//   console.log(`obs: ${value}`);
// });

// TODO: MERGE ALL
// const onClick$ = fromEvent(document, 'click');
// const higherOrder$ = onClick$.pipe(map(() => interval(2000)));
// const firstOrder$ = higherOrder$.pipe(mergeAll());

// firstOrder$.subscribe(console.log);

// TODO: MERGE MAP
// const letters$ = from([ 'a', 'b', 'c' ]);
// const numbers$ = from([ 1, 2, 3 ]);
// const result$ = letters$.pipe(
//   mergeMap(letter => interval(1000).pipe(
//     map(i => `${letter}${i}`)
//   ))
// );

// const result2$ = letters$.pipe(
//   mergeMap(letter => numbers$.pipe(
//     map(number => `${letter}${number}`)
//   ))
// )

// result$.subscribe(console.log); // a0, b0, c0, a1, b1, c1, a2, b2, c2,...
// result2$.subscribe(console.log); // a1, a2, a3, b1, b2, b3, c1, c2, c3

// TODO: USING FORK JOIN AND COMBINE LATEST, SEE DIFFERENCE. This isn't in the course.
// const letters$ = from([ 'a', 'b', 'c' ]);
// const numbers$ = from([ 1, 2, 3 ]);

// forkJoin([letters$, numbers$]).subscribe(console.log);
// combineLatest([letters$, numbers$]).subscribe(console.log);