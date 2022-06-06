import { Suspense } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import { CookiesProvider } from 'react-cookie';

import { AppRoutes } from "./routes";

import GlobalStyle from "theme/global-style";

import { darkTheme } from "theme/dark-theme";
// import { Alert } from '@mui/material';

import SuperTokens from "supertokens-auth-react";
import EmailPassword from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import ThirdParty from "supertokens-auth-react/recipe/thirdparty";
import { getAnonymousToken } from "services/resources/token";
import { setStorageItem } from "shared/utils/storage";

SuperTokens.init({
  // enableDebugLogs: true,
  appInfo: {
    // learn more about this on https://supertokens.com/docs/emailpassword/appinfo
    appName: "Flowbuild Studio",
    apiDomain: "http://studio-api.flowbuild.com.br:3000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      onHandleEvent: async (context) => {
        if (context.action === "SESSION_ALREADY_EXISTS") {
          // TODO:
        } else {
          if (context.action === "SUCCESS") {
            if (context.isNewUser) {
              // TODO: Sign up
            } else {
              // TODO: Sign in
              const token = await getAnonymousToken(context.user.id);
              if (token) {
                setStorageItem('TOKEN', token);
              }
            }
          }
        }
      }
    }),
    Session.init()
  ],
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />

      <Suspense fallback={<div></div>}>
        <SnackbarProvider maxSnack={3}>
          <CookiesProvider>
            <AppRoutes />
          </CookiesProvider>
        </SnackbarProvider>
      </Suspense>
    </ThemeProvider>
  );
}

/* content={(key, message) => (<Alert onClose={() => { }} severity='success' sx={{ width: '100%' }} >{message}</Alert>)} */

export default App;
