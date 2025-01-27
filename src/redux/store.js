import { configureStore } from '@reduxjs/toolkit'
import counterslice from './slice/counterslice'


export const store = () => {
  return configureStore({
    reducer: {
        counter:counterslice
    }
  })
}