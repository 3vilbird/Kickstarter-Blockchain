import React ,{Component} from 'react';
import factory  from '../etherium/factory';
import { Card, Button } from 'semantic-ui-react';
import Layouts from '../components/Layouts';
import {Link} from '../routes';



class campaignIndex extends Component{

    static async getInitialProps(){
        const campaigns  = await factory.methods.getdeployedCampaigns().call() ;
        return {campaigns}
    }
    // rendering the campaign lists

    renderCampaigns(){
        const items = this.props.campaigns.map(address =>{

            return{
                header:address,
                description:(
                    <Link route={`campaigns/${address}`}>
                    <a>View campaign </a>
                    </Link>
                    ),
                fluid:true
            };
        });
        return <Card.Group items={items}/>;    
    }


   


    
    render(){
        return(
        <Layouts>         
            <div>
                <h3>Open campaigns</h3>
                <Link route='/campaigns/new' ><a>
                <Button
                floated='right' 
                content='Create campaign'
                icon='add circle'
                primary         
                />
                </a></Link>
                {this.renderCampaigns()} 
            </div>  
        </Layouts>
        );
    }
}

export default campaignIndex;