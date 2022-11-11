import { SVGQuadraticStroker } from '../../../src/renderer/svg/SVGQuadraticStroker'
import { DefaultPenStyle } from '../../../src/style/DefaultPenStyle'
import { TStroke } from '../../../src/@types/model/Stroke'

describe('SVGQuadraticStroker.ts', () =>
{

  const stroke: TStroke = {
    type: 'pen',
    pointerType: 'pen',
    pointerId: 0,
    id: 'test',
    "-myscript-pen-fill-color": DefaultPenStyle['-myscript-pen-fill-color'],
    "-myscript-pen-fill-style": DefaultPenStyle['-myscript-pen-fill-color'],
    "-myscript-pen-width": DefaultPenStyle['-myscript-pen-width'],
    color: DefaultPenStyle.color,
    width: DefaultPenStyle.width,
    x:[1, 2, 3],
    y:[1, 2, 3],
    t:[3, 3, 3],
    p:[4, 4, 4],
    l:[4, 4, 4],
  }

  test('should instanciate', () =>
  {
    const stroker = new SVGQuadraticStroker()
    expect(stroker).toBeDefined()
  })

  test('should drawStroke', () =>
  {
    const svgElement: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg') as SVGElement
    const stroker = new SVGQuadraticStroker()
    stroker.drawStroke(svgElement, stroke)
    const pathElement = svgElement.querySelector('path')
    expect(pathElement?.getAttribute('id')).toBe(stroke.id)
    expect(pathElement?.getAttribute('color')).toBe(stroke.color)
    expect(pathElement?.getAttribute('style')).toBe(`fill:${stroke.color};stroke:transparent;`)
    expect(pathElement?.classList).toContain('pending-stroke')
  })

  test('should drawErasingStroke', () =>
  {
    const svgElement: SVGElement = document.createElementNS("http://www.w3.org/2000/svg", 'svg') as SVGElement
    const stroker = new SVGQuadraticStroker()
    stroker.drawErasingStroke(svgElement, stroke)
    const pathElement = svgElement.querySelector('path')
    expect(pathElement?.getAttribute('id')).toBe(stroke.id)
    expect(pathElement?.getAttribute('style')).toBe('fill:grey;stroke:transparent;shadowBlur:5;opacity:0.2;')
    expect(pathElement?.classList).toContain('erasing-stroke')
  })


})