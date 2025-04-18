export { Wrapper }

import React, { useRef } from "react"
import { Provider } from "react-redux"
import { usePageContext } from "vike-react/usePageContext"
import { PageContext } from "vike/types"

function Wrapper({ children }: { children: React.ReactNode }) {
    const pageContext = usePageContext()
    const storeRef = useRef<PageContext['reduxStore']>(undefined)
    const { reduxStore } = pageContext

    if (!pageContext.config.redux) {
        return <>{children}</>
    }

    if (!storeRef.current) {
        storeRef.current = reduxStore
    }

    return <Provider store={storeRef.current!}>{children}</Provider>
}