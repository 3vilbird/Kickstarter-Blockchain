import React ,{Component} from 'react';
import { Button,Form,Input,Message } from 'semantic-ui-react'
import Campaign from '../etherium/campaign';
import web3 from '../etherium/web3';
import {Router} from '../routes';


class  contributeForm extends Component{
    state={
        value:'',
        errMessage:'',
        loading:false
    }; 
    onSubmit= async (event)=>{
        event.preventDefault();
        const campaign = Campaign(this.props.address);
        this.setState({loading:true,errMessage:''});
        try {
            const accounts = await  web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from:accounts[0],
                value:web3.utils.toWei(this.state.value,'ether')
            });
            // refreshing the page 
            Router.replaceRoute(`/campaigns/${this.props.address}`);            
        } catch (error) {
            this.setState({errMessage:error.message});
            
        }
        this.setState({loading:false,value:''});

    };


    render(){
        return(
            <Form onSubmit={this.onSubmit} error={!!this.state.errMessage} >
            <Form.Field>
            <label>Amount to contribute</label>
                <Input
                 value ={this.state.value}
                 onChange={event=>this.setState({value:event.target.value})}
                 label='ether' 
                 labelPosition='right' 
                 />
            </Form.Field>
            <Message error header="Oops..!" content={this.state.errMessage} />
            <Button primary loading={this.state.loading} >contribute !</Button>            
            </Form>

        );

    }
}
export default contributeForm;
