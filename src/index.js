import { fromEvent, merge } from 'rxjs';
import { map, mergeAll, takeUntil } from 'rxjs/operators';

const canvas = document.getElementById('reactive-canvas');
const restartButton = document.querySelector('#restart-button');

const cursorPosition = { x: 0, y: 0 };

const updateCursorPosition = (event) => {
  cursorPosition.x = event.clientX - canvas.offsetLeft;
  cursorPosition.y = event.clientY - canvas.offsetTop;
  // console.log(cursorPosition);
};

const onMouseDown$ = fromEvent(canvas, 'mousedown');
const onMouseUp$ = fromEvent(canvas, 'mouseup');
const onMouseMove$ = fromEvent(canvas, 'mousemove').pipe(
  takeUntil(onMouseUp$)
);

let onMouseDownSubscription = onMouseDown$.subscribe(updateCursorPosition);

const canvasContext = canvas.getContext('2d');
canvasContext.lineWidth = 5;
canvasContext.lineCap = 'round';
canvasContext.lineJoin = 'round';
canvasContext.strokeStyle = '#fff';

const paintStroke = (event) => {
  canvasContext.beginPath();
  canvasContext.moveTo(cursorPosition.x, cursorPosition.y);
  updateCursorPosition(event);
  canvasContext.lineTo(cursorPosition.x, cursorPosition.y);
  canvasContext.stroke();
  canvasContext.closePath();
};

const startPaint$ = onMouseDown$.pipe(
  map(() => onMouseMove$),
  mergeAll()
);

let startPaintSubscription = startPaint$.subscribe(paintStroke);

const onLoadWindow$ = fromEvent(window, 'load');
const onRestartClick$ = fromEvent(restartButton, 'click');

const restartWhiteboard$ = merge(onLoadWindow$, onRestartClick$);

restartWhiteboard$.subscribe(() => {
  startPaintSubscription.unsubscribe();
  onMouseDownSubscription.unsubscribe();
  canvasContext.clearRect(0, 0, canvas.width, canvas.height);
  startPaintSubscription = startPaint$.subscribe(paintStroke);
  onMouseDownSubscription = onMouseDown$.subscribe(updateCursorPosition);
})