import {Route} from 'react-router-dom'
import OrgAdd from '../OrgAdd'
import OrgList from '../OrgList/OrgList'
import OrgCard from '../OrgCard/OrgCard'

function Content(){
  return(
    <>
    <Route path="/OrgAdd" component={OrgAdd}/>
    <Route exact path="/" component={OrgList}/>
    <Route path="/OrgCard" component={OrgCard}/>
    <Route path="/OrgCard/:key" component={OrgCard}/>
    </>
  )
}

export default Content