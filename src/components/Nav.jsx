import './Nav.css'

const Nav = ({Icon,title,setDark}) => {
  return (
    <div className='nav' onClick={()=>setDark(prev=>!prev)}>
      <span className="icon"> {<Icon className='icon' />}</span>  <h3>{title}</h3>
    </div>
  )
}

export default Nav

