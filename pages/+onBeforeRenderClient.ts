export { onBeforeRenderClient };

import { PageContext } from "vike/types";

function onBeforeRenderClient(pageContext: PageContext) {
  if (!pageContext.config.redux?.store) {
    pageContext.config.redux ??= {};

    const makeStore = pageContext.config.redux.makeStore;
    if (makeStore) {
      pageContext.config.redux.store = makeStore(pageContext.redux?.state);
    }
  }
}
