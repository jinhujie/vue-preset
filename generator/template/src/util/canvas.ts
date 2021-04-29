export type t_Point = [
  x: number,
  y: number,
]
type t_Line = t_Point[];

export function drawLines (ctx, lines: t_Line[]): void {
  lines.forEach((line, lineIndex) => {
    drawLine(ctx,line);
  })
}

// t_Line: [ startPoint, ...lineTo ]
export function drawLine(ctx, line: t_Line) {
  if (line.length < 2) {
    throw Error('drawLine excpect at least 2 point');
  }

  const drawLine = canvasNiceLine.bind(null, ctx);

  ctx.lineWidth = 1;
  ctx.strokeStyle = "RGB(242, 247, 53)";
  ctx.beginPath();
  line.forEach((point, pointIndex) => {
    const [ x, y ] = point;
    if (pointIndex === 0) {
      ctx.moveTo(x, y);
    }else {
      drawLine(x, y);
    }
  })
  ctx.stroke();
  ctx.closePath();
}
function canvasNiceLine(ctx, x, y) {
  ctx.lineTo(x + 0.5, y + 0.5);
}