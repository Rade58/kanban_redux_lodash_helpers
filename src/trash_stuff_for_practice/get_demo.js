const get = require('lodash/fp/get')

const randomObject = {
  something: {somethingElse: {somethingNice: "anything"}}
}

const anything = get(['something', 'somethingElse', 'somethingNice'])(randomObject)

console.log(anything)
