import { TPartialXYPoint } from '../../@types/renderer/Point'
import { drawLine } from './CanvasRendererShapeSymbol'
import { TSymbol, TTextUnderlineDataSymbol, TTextUnderlineSymbol, TUnderLineSymbol } from '../../@types/renderer/Symbol'

export const TextSymbols = {
  inputCharacter: 'inputCharacter',
  char: 'char',
  string: 'string',
  textLine: 'textLine'
}

function drawUnderline(context2D: CanvasRenderingContext2D, underline: TUnderLineSymbol, label: string, data: TTextUnderlineDataSymbol)
{
  const delta = data.width / label.length
  const p1: TPartialXYPoint = {
    x: data.topLeftPoint.x + (underline.data.firstCharacter * delta),
    y: data.topLeftPoint.y + data.height
  }
  const p2: TPartialXYPoint = {
    x: data.topLeftPoint.x + (underline.data.lastCharacter * delta),
    y: data.topLeftPoint.y + data.height
  }
  drawLine(context2D, p1, p2)
}

function drawText(context2D: CanvasRenderingContext2D, label: string, data: TTextUnderlineDataSymbol)
{
  context2D.save()
  try {
    context2D.font = `${ data.textHeight }px serif`
    context2D.textAlign = (data.justificationType === 'CENTER') ? 'center' : 'left'
    context2D.textBaseline = 'bottom'
    context2D.fillStyle = context2D.strokeStyle
    context2D.fillText(label, data.topLeftPoint.x, (data.topLeftPoint.y + data.height))
  } finally {
    context2D.restore()
  }
}

function drawTextLine(context2D: CanvasRenderingContext2D, textLine: TTextUnderlineSymbol)
{
  drawText(context2D, textLine.label, textLine.data)
  textLine.underlineList.forEach((underline) =>
  {
    drawUnderline(context2D, underline, textLine.label, textLine.data)
  })
}

/**
 * Draw a text symbol
 * @param {Object} context Current rendering context
 * @param {Object} symbol Symbol to draw
 */
export function drawTextSymbol(context2D: CanvasRenderingContext2D, symbol: TSymbol)
{
  context2D.save()
  try {
    context2D.lineWidth = symbol.width
    context2D.strokeStyle = symbol.color
    const type: string = symbol.elementType || symbol.type

    switch (type) {
      case TextSymbols.textLine:
        drawTextLine(context2D, symbol as TTextUnderlineSymbol)
        break
      default:
        // logger.error(`${symbol.elementType} not implemented`)
        break
    }

  } finally {
    context2D.restore()
  }
}