import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Button from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import TextArea from '@atlaskit/textarea';
import Select from '@atlaskit/select';


import { RadioGroup } from '@atlaskit/radio';
import './App.scss';

const radioValues = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
];


function App() {
  return (
    <Page>
      <Grid>
          <GridColumn medium={12}>
              <img src="https://static1.smartbear.co/zephyr/media/images/logos/zj_no-icon-clr.svg" alt="zephyr logo" className="logo-align"/>
              <div className="text-center">
                  <h2>Send Us Your Feedback About Zephyr for Jira</h2>
                  <p>Please visit our Support Center if you have would like to submit a ticket with our Support Team</p>
              </div>
              <form className="feedback-form" onSubmit={data=>console.log(data)}>
                <label htmlFor="event-handlers">*Work Email:</label>
                    <TextField
                      name="event-handlers"
                      className="form-field-align"
                    />
                      <label htmlFor="event-handlers">*First Name:</label>
                    <TextField
                      name="event-handlers"
                      className="form-field-align"
                    />
                      <label htmlFor="event-handlers">*Last Name:</label>
                    <TextField
                      name="event-handlers"
                      className="form-field-align"
                    />
                      <label htmlFor="event-handlers">*Phone Number:</label>
                    <TextField
                      name="event-handlers"
                      className="form-field-align"
                    />
                     <label htmlFor="event-handlers">*Type of Jira Instance:</label>
                    <Select
                        className="form-field-align"
                        classNamePrefix="react-select"
                        options={[
                          { label: 'cloud', value: 'cloud' },
                          { label: 'server', value: 'server' },
                          { label: 'Data center', value: 'Data center' }
                        ]}
                        placeholder="Select..."
                      />
                     <label htmlFor="event-handlers">*How satisfied are you with Zephyr for Jira? (4 is Highest)</label> 
                      <div className ="d-flex form-field-align">
                          <RadioGroup
                            label="Pick a color"
                            defaultValue={radioValues[2].value}
                            options={radioValues}
                          />
                      </div>
                     <label htmlFor="event-handlers">*Comments:</label> 
                      <TextArea resize="auto" name="area" isInvalid isCompact />
                      <label htmlFor="event-handlers">*Would you like follow-up on this feedback?</label>
                    <Select
                        className="single-select"
                        classNamePrefix="react-select"
                        options={[
                          { label: 'Yes', value: 'Yes' },
                          { label: 'No', value: 'No' },
                          { label: 'Indifferent', value: 'Indifferent' }
                        ]}
                        placeholder="Select ...."
                      />
                      <p>
                      We will use this information to respond to your feedback and keep you to date on best practices and trends we’ve learned from over 7.5 Million development, quality and operations experts just like you.
                      </p>
                      <Button>focus</Button>
              </form>
          </GridColumn>
      </Grid>
  </Page>
  );
}

export default App;
