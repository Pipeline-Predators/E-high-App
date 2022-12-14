import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { persistor, store } from "./Redux/Store";
import { Provider } from "react-redux";

import AdminLayout from "layouts/Admin/Admin.js";
import MainLayout from "layouts/Main/Main.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/css/custom.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";
import { PersistGate } from "redux-persist/lib/integration/react";
import { AuthProvider } from "Guards/Auth";
import RequireAuth from "Guards/RequireAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ThemeContextWrapper>
        <BackgroundColorWrapper>
          <BrowserRouter>
            <AuthProvider>
              <Switch>
                <Route
                  path="/admin"
                  render={(props) => (
                    <RequireAuth>
                      <AdminLayout {...props} />
                    </RequireAuth>
                  )}
                />

                <Route path="/" render={(props) => <MainLayout {...props} />} />
              </Switch>
            </AuthProvider>
          </BrowserRouter>
        </BackgroundColorWrapper>
      </ThemeContextWrapper>
    </PersistGate>
  </Provider>
);
