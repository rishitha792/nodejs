const load=require('lodash')
const items=[1,[2,[3,[4,[5]]]]]
const newItems=load.flattenDeep(items)
console.log(newItems)