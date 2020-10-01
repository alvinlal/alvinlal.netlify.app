import React from "react"
import { Layout, Seo } from "../components"
import config from "react-reveal/globals"

config({ ssrFadeout: true })
//TODO:-

//       Add schema markup https://www.youtube.com/watch?v=BIQGBKXc6AI
//       Add pagination for blog page // use react reveal for now // use pagination when no of posts get big
//       Add social share buttons
//       Add view counts
//       Add manifest
export default function Index() {
  return (
    <Layout>
      <Seo title={"alvin lal's portfolio website and blog"} />
      <div>Hello</div>
    </Layout>
  )
}
