import avatar from './avatar.jpg'
import htmlIco from './html-5.png'
import cssIco from './css-3.png'
import jsIco from './js.png'
import reactIco from './atom.png'
import vueIco from './brands.png'

//Страница контактов 
export default function About(){
  return(<>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <div className='about-page'>
      <img className='avatar animate__animated animate__rotateIn' src={avatar} alt='avatar'/>
      <div className='about-text'>
        <h1 className='about-greeting animate__animated animate__fadeInRightBig'>Привет!</h1>
        <h1 className='about-description animate__animated animate__fadeInRightBig animate__delay-1s'>Меня зовут Роман! Я - начинающий frontend-разработчик! Учусь в УрФУ! Жизнь прекрасна!</h1>
        <h1 className='about-description animate__animated animate__fadeInRightBig animate__delay-2s'>На данный момент я владею следующими навыками:</h1>
        <ul className='animate__animated animate__fadeInRightBig animate__delay-3s'>
          <li style={{marginLeft: '22px', marginBottom: '10px', listStyle: `url(${htmlIco})`}}><h1 style={{fontSize: '20px'}}>HTML5</h1></li>
          <li style={{marginLeft: '22px', marginBottom: '10px', listStyle: `url(${cssIco})`}}><h1 style={{fontSize: '20px'}}>CSS3</h1></li>
          <li style={{marginLeft: '22px', marginBottom: '10px', listStyle: `url(${jsIco})`}}><h1 style={{fontSize: '20px'}}>JS</h1></li>
          <li style={{marginLeft: '22px', marginBottom: '10px', listStyle: `url(${reactIco})`}}><h1 style={{fontSize: '20px'}}>ReactJS</h1></li>
          <li style={{marginLeft: '22px', marginBottom: '10px', listStyle: `url(${vueIco})`}}><h1 style={{fontSize: '20px'}}>Vue.js</h1></li>
        </ul>
        <h1 className='about-description animate__animated animate__fadeInRightBig animate__delay-4s'>
          <a  className='about vk' href="https://vk.com/romichhhh">VK</a>
          <a  className='about' href="https://github.com/LivingLeafFromTagil">GitHub</a>
        </h1>
        <div className='animate__animated animate__fadeInRightBig animate__delay-4s' style={{marginTop: '20px'}}>
          <a href='/' className='about' >На главную</a>
        </div>
      </div>
    </div>
    <div>
      
    </div>
    </>
  )
}