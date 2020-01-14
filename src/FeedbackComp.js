import React from 'react';
import Page, { Grid, GridColumn } from '@atlaskit/page';
import Button from '@atlaskit/button';

import './App.scss';




function FeedbackComp() {
  return (
    <Page>
      <Grid>
          <GridColumn medium={12}>
            <h5>FeedBack Component</h5>
                      <Button>focus</Button>
          </GridColumn>
      </Grid>
  </Page>
  );
}

export default FeedbackComp;
