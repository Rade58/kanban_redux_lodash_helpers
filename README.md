# lodash/fp/set

## YOU CAN START WITH src/reducers/lists-reducer

AFTER THAT YOU CAN USE set INSIDE cards-reducer

BUT ON CARD_CREATE ACTION YOU ARE CHANGING BOTH

- YOU ARE CHANGING &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`cards.entities`

BASICALLY YOU ARE ADDING NEW ENTITY (NEW CARD)

- AND YOU ARE ANDING NEW ID (OF THE NEW CARD) IN &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; `cards.ids`

*AND WHEN YOU HAVE MULTIPLE *lodash/fp/set* YOU CAN USE **lodash/fp/pipe**

CHECKOUT TO lodash_pipe TO SEE IMPLEMENTATION OF **pipe**

