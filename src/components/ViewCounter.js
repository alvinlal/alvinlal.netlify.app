import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"
import { ViewCountWrapper } from "../styled-elements"
import { ThemeContext } from "../providers/provider"
import { useStaticQuery, graphql } from "gatsby"

export const ViewCounter = ({ postUrl, title }) => {
  const { theme } = React.useContext(ThemeContext)
  const [currentViews, setCurrentViews] = useState(0)
  const data = useStaticQuery(graphql`
    query eyeQuery {
      eyeIconLight: file(relativePath: { eq: "lightEye.svg" }) {
        publicURL
      }
      eyeIconDark: file(relativePath: { eq: "darkEye.svg" }) {
        publicURL
      }
    }
  `)
  useEffect(() => {
    firebase
      .firestore()
      .collection("views")
      .where("postUrl", "==", postUrl)
      .get()
      .then(res => {
        const data = res.docs.map(doc => {
          return {
            ...doc.data(),
          }
        })
        if (data.length <= 0) {
          return firebase
            .firestore()
            .collection("views")
            .add({
              post: title,
              postUrl,
              views: 0,
            })
            .then(() => 0)
        } else {
          return data[0].views
        }
      })
      .then(views => {
        setCurrentViews(views)
        return views
      })
      .then(views => {
        firebase
          .firestore()
          .collection("views")
          .where("postUrl", "==", postUrl)
          .get()
          .then(res => {
            res.docs.forEach(doc => doc.ref.update({ views: views + 1 }))
          })
      })
  }, [postUrl, title])
  return (
    <ViewCountWrapper>
      {theme === "dark" ? (
        <img src={data.eyeIconDark.publicURL} alt="eye icon" />
      ) : (
        <img src={data.eyeIconLight.publicURL} alt="eye icon" />
      )}
      {currentViews}
    </ViewCountWrapper>
  )
}
