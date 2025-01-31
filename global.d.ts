import type { AppStore, RootState } from "./pages/+redux";

declare global {
  namespace Vike {
    interface PageContext {
      reduxStore?: AppStore;
      reduxState?: RootState;
    }
    interface Config {
      redux?: {
        createStore?: (preloadedState?: any) => PageContext["reduxStore"];
      };
    }
  }
}

export {};
