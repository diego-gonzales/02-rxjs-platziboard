import { fromEvent } from 'rxjs';
import { map, mergeAll, takeUntil } from 'rxjs/operators';

const canvas = document.getElementById('reactive-canvas');

const cursorPosition = { x: 0, y: 0 };

const updateCursorPosition = (event) => {
  cursorPosition.x = event.clientX - canvas.offsetLeft;
  cursorPosition.y = event.clientY - canvas.offsetTop;
  console.log(cursorPosition);
};

const onMouseDown$ = fromEvent(canvas, 'mousedown');
const onMouseUp$ = fromEvent(canvas, 'mouseup');
const onMouseMove$ = fromEvent(canvas, 'mousemove').pipe(
  takeUntil(onMouseUp$)
)

onMouseDown$.subscribe(updateCursorPosition);

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

startPaint$.subscribe(paintStroke);