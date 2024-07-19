import { test, expect } from 'vitest'
const sum = require('./index')

test("Add 1 + 2 equals 3", () => {
    expect(sum(1,2)).toEqual(3)
})