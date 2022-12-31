import './Card.css'

const Card = ({Icon,title,value}) => {
  return (
    <div className='card'>
        <span>{<Icon style={{fontSize:'1.1rem'}}/>}</span>
        <span>{title}</span>
        <span>{value}</span>
    </div>
  )
}

export default Card