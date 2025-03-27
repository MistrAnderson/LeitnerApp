import { ICard } from "@/idb/interfaces"
import Card from "@components/card/Card"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { add, clear } from "@/store/cardsData/cardsSlice"
import CardForm from "../cardForm/CardForm"

export default function Cards() {
  // TODO: Understand type 'state' and why it does not have 'cards'
  const cards: ICard[] = useAppSelector(state => state.cards.cards)
  const dispatch = useAppDispatch()

  console.log(cards)

  const card1: ICard = { name: "card1", question: "q1", answer: "a1", level: 1, previousEncounter: "2025-02-18" }
  const card2: ICard = { name: "card2", question: "q2", answer: "a2", level: 1, previousEncounter: "2025-02-18" }
  const card3: ICard = { name: "card3", question: "q3", answer: "a3", level: 1, previousEncounter: "2025-02-18" }
  const card4: ICard = { name: "card4", question: "q4", answer: "a4", level: 1, previousEncounter: "2025-02-18" }
  const card5: ICard = { name: "card5", question: "q5", answer: "a5", level: 1, previousEncounter: "2025-02-18" }

  return (
    <div>
      <CardForm />
      <button onClick={() => dispatch(add(card1))}> add card1 </button>
      <button onClick={() => dispatch(add(card2))}> add card2 </button>
      <button onClick={() => dispatch(add(card3))}> add card3 </button>
      <button onClick={() => dispatch(add(card4))}> add card4 </button>
      <button onClick={() => dispatch(add(card5))}> add card5 </button>

      <button onClick={() => dispatch(clear())} > clear all </button>

      <div>
        {cards?.map((card) => (
          <Card key={card.id} cardInfo={card} />
        ))}
      </div>
    </div>
  )
}
