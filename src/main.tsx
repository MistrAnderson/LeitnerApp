import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store/store.ts'
import Router from '@/Router.tsx'
import '@/index.css'
import { loadCardsFromIDB } from './store/cardsData/cardsSlice'

store.dispatch(loadCardsFromIDB())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </StrictMode>,
)
