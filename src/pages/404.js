import React from "react"
import { Layout } from "../components"
import { FourOfourWrapper } from "../styled-elements"

const notFound = () => {
  return (
    <Layout>
      <FourOfourWrapper>
        <div style={{ margin: "auto" }}>404 NOT FOUND </div>
      </FourOfourWrapper>
    </Layout>
  )
}

export default notFound

// export const notFoundQuery = graphql`
//     image
// `
