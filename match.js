const myCards = {
  lookingFor: [],
  repeated: []
}

const someoneElseCards = {
  lookingFor: [],
  repeated: []
}

const forMeList = myCards.lookingFor.filter(card => someoneElseCards.repeated.includes(card))
const forThemList = someoneElseCards.lookingFor.filter(card => myCards.repeated.includes(card))

const totalMatches = {
  forMe: {
    list:  forMeList,
    quantity: forMeList.length
  },
  forThem: {
    list: forThemList,
    quantity: forThemList.length
  }
}

const result = `Result: 

List of cards for me: ${totalMatches.forMe.list}
Quantity: ${totalMatches.forMe.quantity}

List of cards for them: ${totalMatches.forThem.list}
Quantity: ${totalMatches.forThem.quantity}
`

console.log(result)