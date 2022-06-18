import {Route} from 'react-router-dom'
import OrgAdd from '../OrgAdd'
import OrgList from '../OrgList/OrgList'
import OrgCard from '../OrgCard/OrgCard'
import About from '../About/About'

//Компонент, отображающий нужную страницу в зависимости от адреса
function Content(){
  return(
    <>
    <Route path="/OrgAdd" component={OrgAdd}/>
    <Route exact path="/" component={OrgList}/>
    <Route path="/OrgCard" component={OrgCard}/>
    <Route path="/OrgCard/:key" component={OrgCard}/>
    <Route exact path="/about" component={About}/>
    </>
  )
}

export default Content