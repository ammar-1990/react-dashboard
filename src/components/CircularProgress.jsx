import './CircularProgress.css'

const CircularProgress = ({num , value,color}) => {
  return (
    <div className='circularProgress'>
        <div className="info">
            <div className="details">
                <h1>{num}</h1>
                <p>%</p>
            </div>
        </div>

        <svg >
            <circle
            cx='55'
            cy='55'
            r='50'
            className='circleGray'>

            </circle>
            <circle
            cx='55'
            cy='55'
            r='50'
            className='circle'
            style={{'--theValue':value,stroke:color}}>

            </circle>
        </svg>

    </div>
  )
}

export default CircularProgress