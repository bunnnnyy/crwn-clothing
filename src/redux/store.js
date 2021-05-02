import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const Store = createStore(rootReducer, applyMiddleware(...middleware));

export const persistor = persistStore(Store);

// export default { Store, persistor };
