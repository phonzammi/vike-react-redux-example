export { onBeforeRenderHtml };

import { PageContext } from "vike/types";

function onBeforeRenderHtml(pageContext: PageContext) {
  pageContext.config.redux ??= {};

  const makeStore = pageContext.config.redux.makeStore;
  if (makeStore) {
    pageContext.config.redux.store = makeStore();
  }
}
