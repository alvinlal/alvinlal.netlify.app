import React from "react"
import {
  ProjectPreviewWrapper,
  ProjectImageWrapper,
  InfoWrapper,
  TitleWrapper,
} from "../styled-elements"

export const ProjectPreview = ({ info }) => {
  const { type, description, techUsed, name, repoLink, image } = info

  return (
    <a
      href={repoLink}
      target="_blank"
      rel="noreferrer"
      style={{ appearance: "none", textDecoration: "none" }}
    >
      <ProjectPreviewWrapper>
        <ProjectImageWrapper className={"featureImage"}>
          <img src={image} alt="github og" />
        </ProjectImageWrapper>
        <InfoWrapper>
          <TitleWrapper>{name}</TitleWrapper>
          <p>{type}</p>
          <p>{description}</p>
          <p>Techlogies used : {techUsed.join(", ")}</p>
        </InfoWrapper>
      </ProjectPreviewWrapper>
    </a>
  )
}
