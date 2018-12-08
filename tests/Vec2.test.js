const Lize = require('../src/Lize')

class Vec2 extends Lize.Class {
  constructor () {
    super()
    this.set(...arguments)
  }

  components () {
    return { x: this.x, y: this.y }
  }
}

Vec2.LizePrototype('set', {
  x: Number,
  y: Number
}, function ({ x, y }) {
  this.x = x
  this.y = y
})

Vec2.LizeStatic('Info', {}, function () {
  return 'LizeAPI'
})

describe('Vec2 test', () => {
  test('Vec2.set', () => {
    let pos1 = new Vec2(0, 0)

    expect(pos1.components()).toEqual({ x: 0, y: 0 })
  })

  test('Vec2.Info', () => {
    expect(Vec2.Info()).toBe('LizeAPI')
  })
})