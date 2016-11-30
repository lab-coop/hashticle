import React from 'react';
import {Box, Page} from 'react-layout-components';

const CurryLoginPage = (LoginController) => {
  const LoginPage = (props) => (
    <Page>
      <Box alignItems="center" height="90%" justifyContent="center">
        <LoginController {...props} title="Lab.coop" subtitle="Please log in" />
      </Box>
    </Page>
  )
  return LoginPage;
}

CurryLoginPage.deps=['LoginController'];
export default CurryLoginPage;
