import '../OrgList/OrgList.css';
import {Component} from 'react';
import {Link} from 'react-router-dom';

class OrgElem extends Component{
  
  

  render(){
    return(
      <tr className="org-table-elem">
        <td className="elem-name">
          <Link to="/OrgCard">
            {this.props.name}
            <p>{this.props.tin}</p>
          </Link>
        </td>
        <td className="elem-leader">{this.props.leader}<p className="elem-space">&nbsp;</p></td>
        <td className="elem-category">{this.props.category}<p className="elem-space">&nbsp;</p></td>
        <td className="elem-region">{this.props.region}<p className="elem-space">&nbsp;</p></td>
      </tr>
    );
  }
}

// function OrgElem(props){
//   return(
    
//   );
// }

export default OrgElem;