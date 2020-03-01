import React, { Component } from "react";
import Layout from "../../components/Layouts";
import { Button, Form, Input, Message } from "semantic-ui-react";
import factory from "../../etherium/factory";
import web3 from "../../etherium/web3";
import { Router } from "../../routes";

class campaignNew extends Component {
  state = {
    minimumContibution: "",
    errorMessage: "",
    loading: false
  };

  // from submission
  onSubmit = async event => {
    event.preventDefault();
    // loading functionality and clear the eaarlier error message
    this.setState({ loading: true, errorMessage: "" });
    try {
      const accounts = await web3.eth.getAccounts();

      await factory.methods.createCampaign(this.state.minimumContibution).send({
        from: accounts[0]
        // noo neead to specify the value of gas metaa mask automatically takes the value of gas
      });
      Router.pushRoute("/");
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3>Create new campaign....!</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum contribution...! </label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minimumContibution}
              onChange={event =>
                this.setState({ minimumContibution: event.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default campaignNew;
