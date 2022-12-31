import DarkTheme from '../contexts/ThemeContext'
import './Main.css'
import { useContext } from 'react'
import Header from './Header'
import Content from './Content'

const Main = ({open ,setOpen}) => {
    const {dark}=useContext(DarkTheme)
   
  return (
    <div className={`main ${dark && 'dark'}`}>
        <Header open={open} setOpen={setOpen}/>
        <Content />
    </div>
  )
}

export default Main