export const initState = []
export const reducer = (state, action) => {
  const { payload, type } = action

  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload
      const productInCartIndex = state.findIndex(product => product.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...payload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_FROM_CART': {
      const { id } = payload
      return state.filter(product => product.id !== id)
    }

    case 'CLEAR_CART': {
      return initState
    }
  }

  return state
}
