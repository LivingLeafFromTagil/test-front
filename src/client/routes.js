import OrgAdd from './OrgAdd'
import OrgList from './OrgList/OrgList'
import OrgCard from './OrgCard/OrgCard'
import About from './About/About'
import Auth from './Auth'
import { ORG_ADD, ORG_LIST, ORG_CARD, ABOUT, LOGIN, REGISTRATION } from './utils/consts'

// function Content(){
//   return(
//     <Routes>
//       <Route path="/OrgAdd" component={OrgAdd}/>
//       <Route exact path="/" component={OrgList}/>
//       <Route path="/OrgCard" component={OrgCard}/>
//       <Route path="/OrgCard/:key" component={OrgCard}/>
//       <Route exact path="/about" component={About}/>
//     </Routes>
//   )
// }

export const authRoutes = [
  {
    path: ORG_ADD,
    Component: <OrgAdd/>,
  },
  {
    path: ORG_LIST,
    Component: <OrgList/>,
  },
  {
    path: ORG_CARD + '/:key',
    Component: <OrgCard/>,
  },
  {
    path: ABOUT,
    Component: <About/>,
  },
];

export const unauthRoutes = [
  {
    path: LOGIN,
    Component: <Auth/>,
  },
  {
    path: REGISTRATION,
    Component: <Auth/>,
  }
]