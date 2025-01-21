import { AppStore, RootState } from "./pages/+redux";

declare global {
  namespace Vike {
    interface PageContext {
      redux?: {
        state?: RootState;
      };
    }
    interface Config {
      redux?: {
        makeStore?: (preloadedState?: any) => AppStore;
        store?: AppStore;
      };
    }
  }
}

export {};
