import Navigation from "./navigations/Navigations";
import { NetworkConfig } from "./services/apiConfig";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./store/store";

let persistor = persistStore(store);

const App = () => {
  NetworkConfig();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
