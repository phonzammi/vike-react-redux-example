export { Wrapper }

import React, { useRef } from "react"
import { Provider } from "react-redux"
import { usePageContext } from "vike-react/usePageContext"
import { AppStore } from "./+redux"

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageContext = usePageContext()
    const storeRef = useRef<AppStore>()

    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = pageContext.config.redux?.store
    }

    return (
        <Provider store={storeRef.current!}>
            {children}
        </Provider>
    )
}