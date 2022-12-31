import './Content.css'
import {BiMessageRounded} from 'react-icons/bi'
import {AiFillSetting} from 'react-icons/ai'
import {SlPeople} from 'react-icons/sl'

import {AiOutlineLike} from 'react-icons/ai'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import Card from './Card'
import Analitycs from './Analitycs'
import {FaTools} from 'react-icons/fa'
import {RiSettings4Fill} from 'react-icons/ri'
import {IoMdPeople} from 'react-icons/io'
import {IoIosOptions} from 'react-icons/io'
import {RiMailSettingsFill} from 'react-icons/ri'
import {MdSettingsSuggest} from 'react-icons/md'
import {FiSettings} from 'react-icons/fi'
import {RiListSettingsLine} from 'react-icons/ri'
import {BsFileEarmarkLock} from 'react-icons/bs'
import {AiFillEdit} from 'react-icons/ai'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {AiOutlineGithub} from 'react-icons/ai'
import CircularProgress from './CircularProgress'



const Content = () => {
  return (
    <div className='content'>
<div className="row header">
<svg
        className='waves'
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#f0f0f0', width: '247%', height: 265, }}
      >
        <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
      />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
<p> Current Notifications</p>
<div className="cDivider"></div>
<div className="cIconsContainer">
<BiMessageRounded  className='cIcon'/>
<BiMessageRounded  className='cIcon'/>
<BiMessageRounded  className='cIcon'/>
<BiMessageRounded  className='cIcon'/>

</div>
<AiFillSetting  className='settingsIcon'/>


</div>
<div className="row header">
   <Card  Icon={SlPeople}  title='Followers' value='500'/>
   <div className="cardDivider"></div>
   <Card  Icon={BiMessageRounded}  title='Messages' value='15'/>
   <div className="cardDivider"></div>
   <Card  Icon={AiOutlineLike}  title='Likes' value='16'/>
   <div className="cardDivider"></div>
   <Card  Icon={RiMoneyDollarCircleLine}  title='Earnings' value='552.32 $'/>

   <svg
        className='waves'
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#f0f0f0', width: '247%', height: 265, }}
      >
        <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
      />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
   
</div>

<span className='brief'>Brief Overview</span>
<div className="row middle">
    <Analitycs chart_i/>
</div>
<div className="row middle">
<Analitycs  chart_ii />
</div>
<div className="row middle">
<Analitycs  chart_iii/>
</div>
<div className="row middle">
<Analitycs chart_iv />
</div>

<span className='brief'>Analitycs Tools</span>

<div className="row cLeft">
<svg
        className='waves'
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: '#f0f0f0', width: '247%', height: 265, }}
      >
        <path
        d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
        opacity=".25"
      />
        <path
          d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
          opacity=".5"
        />
        <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
      </svg>
  <span className='theTitle'>  Frequently Used</span>

  <div className="tools">
    <span className='symbole'>
        <FaTools />
    </span>
    <span className='symbole'><RiSettings4Fill /></span>
    <span className='symbole' style={{fontSize:'25px'}}><IoMdPeople/></span>
    <span className='symbole'><FaTools/></span>
    <span className='symbole' style={{fontSize:'25px'}}><IoIosOptions /></span>
    <span className='symbole'  style={{fontSize:'25px'}}><RiMailSettingsFill/></span>
   

  
    
  
  </div>
  <span className='theTitle'>More Tools</span>
  <div className="tools">
        <span className="symbole"style={{fontSize:'25px'}} ><MdSettingsSuggest/></span>
        <span className="symbole" ><RiSettings4Fill /></span>
        <span className="symbole"style={{fontSize:'25px'}}><IoIosOptions /></span>
        <span className="symbole" > <FaTools/></span>
        <span className="symbole"style={{fontSize:'25px'}}><IoMdPeople/></span>
       
   
    </div>
    <span className="theTitle">Advanced Tools</span>
    <div className="tools">
        <span className="symbole" style={{fontSize:'25px'}}><FiSettings /></span>
        <span className="symbole"  style={{fontSize:'25px'}}><RiListSettingsLine /></span>
        <span className="symbole" style={{fontSize:'25px'}}><BsFileEarmarkLock/></span>
    </div>
 
</div>
<div className="row cLeft column">
<svg
className='waves'
    preserveAspectRatio="none"
    viewBox="0 0 1200 120"
    xmlns="http://www.w3.org/2000/svg"
    style={{ fill: '#f0f0f0', width: '247%', height: 265, transform: 'rotate(180deg)' }}
  >
    <path
    d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
    opacity=".25"
  />
    <path
      d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
      opacity=".5"
    />
    <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
  </svg>
    <div className="top">
        <span className="left"><AiFillEdit/></span>
        <span className="right">
            <span><RiMailSettingsFill/></span>
            <span><IoIosOptions/></span>
            <span><MdOutlineManageAccounts /></span>
        </span>
    </div>
    <div className="end">
        <img src="https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="title">
            <div className="name">Creative Ambition</div>
            <div className="details">Frontend-Developer & Project Manager</div>
        </div>
        <div className="socials">
            <span><BsInstagram/></span>
            <span><FiFacebook/></span>
            <span><FiTwitter/></span>
            <span><AiOutlineGithub/></span>
            
        </div>
    </div>
</div>
<div className="row cRight">
    <div className="section">
        <CircularProgress num='50' value='165' color='#810551'/>
        <div className="summary">
            <div className="summary_title">Performance</div>
            <div className="summary_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis ullam quasi vel harum accusamus facere nesciunt similique quod, nobis magnam unde eligendi illo!</div>
        </div>
        <CircularProgress num='65' value='120' color='#05454d'/>
    </div>
</div>
<div className="row cRight">
    <div className="section">
    <CircularProgress color='#810551' value='30'  num='93'/>
    <div className="summary" style={{textAlign:'left'}}>
            <div className="summary_title">Detailed Analysis</div>
            <div className="summary_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis ullam quasi vel harum accusamus facere nesciunt similique quod, nobis magnam unde eligendi illo!</div>
        </div>

    </div>
</div>
<div className="row cRight">
<div className="section">
    <CircularProgress color='#810551' value='120'  num='66'/>
    <div className="summary" style={{textAlign:'left'}}>
            <div className="summary_title">Detailed Analysis</div>
            <div className="summary_info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis ullam quasi vel harum accusamus facere nesciunt similique quod, nobis magnam unde eligendi illo!</div>
        </div>

    </div>
</div>


    </div>
  )
}

export default Content