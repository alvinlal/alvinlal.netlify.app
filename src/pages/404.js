import React from "react"
import { Layout } from "../components"
import { FourOfourWrapper } from "../styled-elements"

const notFound = () => {
  return (
    <Layout>
      <FourOfourWrapper>
        <h1>404 not found</h1>
      </FourOfourWrapper>
    </Layout>
  )
}

export default notFound

// export const notFoundQuery = graphql`
//     image
// `
