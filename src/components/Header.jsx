import './Header.css'
import {FiSearch} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import {RxBarChart} from 'react-icons/rx'
import {BsMoon} from 'react-icons/bs'
import {SlSettings} from 'react-icons/sl'
import {CiLogout} from 'react-icons/ci'
import { useContext } from 'react'
import DarkTheme from '../contexts/ThemeContext'
import {MdOutlineLightMode} from 'react-icons/md'

const Header = ({open,setOpen}) => {




    const {setDark ,dark}=useContext(DarkTheme)
  return (
    <div className='header'>
      <div className="theLeft">
      <div className={`settings ${open && 'open'}`} onClick={()=>setOpen(v => !v)}>
        <div></div>
      <div></div>
      <div></div>
      </div>
        <div className="search"><input type="text" placeholder='Search ...'  /><FiSearch className='hIcon hSearch' /></div>
        </div>
        <div className="icons">
<BsPerson className='hIcon'/>
<HiOutlineChatAlt2 className='hIcon' />
<RxBarChart className='hIcon'/>
<div className="hDivide"></div>
{dark? <MdOutlineLightMode  className='hIcon'  onClick={()=> setDark(prev=>!prev)}/> :<BsMoon  className='hIcon'  onClick={()=> setDark(prev=>!prev)}/>}
< SlSettings className='hIcon' />
<CiLogout className='hIcon'/>
<div className="hDivide"></div>

<img src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />

        </div>
    </div>
  )
}

export default Header