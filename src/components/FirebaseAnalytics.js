import { useEffect } from "react"
import firebase from "gatsby-plugin-firebase"

export const FirebaseAnalytics = ({ title }) => {
  useEffect(() => {
    firebase.analytics().logEvent(`${title}`)
  }, [title])
  return
}
