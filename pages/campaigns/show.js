import React ,{Component} from 'react';
import Layout from '../../components/Layouts';
import Campaign from '../../etherium/campaign';
import { Card, Grid, GridColumn,Button} from 'semantic-ui-react'
import web3 from '../../etherium/web3';
import ContributeForm from '../../components/contributeForm';
import {Link} from '../../routes';


class CampaignShow extends Component{
    static async getInitialProps(props){
        // address is the token on url specified in router.js file :)
        const campaign = Campaign(props.query.address);

        const summary = await  campaign.methods.getSummery().call();
        console.log(summary);
        return{
       address:props.query.address,     
       minimumContribution: summary[0],
       balance:summary[1],
       requestsCount:summary[2],
       approversCount:summary[3],
       manager:summary[4]
      };
    }

    renderCards(){
        const{
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        }=this.props;
        const items=[

            {
                header:manager,
                meta: 'Address of manager',
                description:'The manager created this campaign and can withdrow money',
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minium  contribution (wei)',
                description:'You must contribute at least this much wei to become an approver'
            },
            {
                header:requestsCount,
                meta:'Number of Requests',
                description:'a request tries to withdraw money fro the contractRequest must be approved by the approvers'
            },
            {
                header:approversCount,
                meta:'Number of approvers',
                description:'number of peoples  who have donated already'
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Campaign Balance (ether)',
                description:'The balance is how much the campaign is left to spend'
            }

        ];
       return  <Card.Group items={items} />;

    }

    render(){

        return (
            <Layout>
              <h3>Campaign show </h3>
              <Grid>
                <Grid.Row>
                        <GridColumn width={10}>
                        {this.renderCards()}                        
                        </GridColumn>
                        <GridColumn width={6}>
                            <ContributeForm  address={this.props.address}/>
                        </GridColumn>
                    </Grid.Row>
                    <Grid.Row>
                    <GridColumn>
                            <Link route={`/campaigns/${this.props.address }/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link> 
                        </GridColumn>                   
                    </Grid.Row>
              </Grid>        
             </Layout>
        );
    }
}
export default CampaignShow;