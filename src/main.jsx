import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Paragraph from './Paragraph.jsx'
import Store from './Store.jsx'
import SearchBar from './Store.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Counter inc={1} color="#00FFFF"/>
    <Counter inc={2} color="#FF0000"/>
    <Paragraph />
    <Store />
  </StrictMode>,
)
