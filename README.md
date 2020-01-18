# JUST WANTED TO MENTIONED THAT THERE'S ALSO A *lodash/fp**get**

get METHOD WORKS LIKE THIS

- ARGUMENT IS A PATH (ARRAY OF STRINGS THAT REPRESENT THE PATH TO SOME PROPERTI)

- IT RETURNS NEW FUNCTION, AND THAT FUNCTIONS REQUIRES OBJECT AS AN ARGUMENT

- **AFTER YOU PASS AN OBJECT, YOU'LL GET THE THING DESCRIBED BY *MENTIONED PATH***

## YOU CAN SEE EXAMPLE OF IT IN HERE

src/trash_stuff_for_practice/get_demo.js

```javascript
const get = require('lodash/fp/get')

const randomObject = {
  something: {somethingElse: {somethingNice: "anything"}}
}

const anything = get(['something', 'somethingElse', 'somethingNice'])(randomObject)

console.log(anything)       // -->    'anything'

```

## I WILL USE THIS METHOD IN SOME OF THE NEXT BRANCHES