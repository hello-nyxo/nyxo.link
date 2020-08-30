import React, { FC } from "react"
import { device } from "./devices"
import styled from "styled-components"
import Image, { FluidObject } from "gatsby-image"

type Props = {
  post: {
    id: string
    likes: number
    comments: number
    mediaType: string
    preview: string
    original: string
    timestamp: string
    caption: string
    localFile: {
      childImageSharp: {
        fluid: FluidObject
      }
    }
  }
}

const Post: FC<Props> = ({ post }) => {
  const { isLink, link } = hasLink(post.caption)

  return (
    <Container {...(isLink && { a: "a", href: link })}>
      <PostImage fluid={post.localFile.childImageSharp.fluid} />
    </Container>
  )
}

export default Post

const hasLink = (caption: string) => {
  const isLink = caption.includes("#nyxo")
  const link = "https://nyxo.app"
  return { isLink: isLink, link: link }
}

const Container = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  @media ${device.desktopL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
    margin: 1rem;
  }
  @media ${device.desktop} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
    margin: 1rem;
  }

  @media ${device.laptopL} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
    margin: 1rem;
  }
  @media ${device.laptop} {
    max-width: calc(33.333% - 2 * 1rem);
    flex: 1 1 calc(33.333% - 2 * 1rem);
    margin: 1rem;
  }
  @media ${device.tabletL} {
    max-width: calc(33.333% - 2 * 0.2rem);
    flex: 1 1 calc(33.333% - 2 * 0.2rem);
    margin: 0.2rem;
  }
  @media ${device.tablet} {
    max-width: calc(33.333% - 2 * 0.2rem);
    flex: 1 1 calc(33.333% - 2 * 0.2rem);
    margin: 0.2rem;
  }
  @media ${device.mobileL} {
    max-width: calc(33.333% - 2 * 0.2rem);
    flex: 1 1 calc(33.333% - 2 * 0.2rem);
    margin: 0.2rem;
  }
  @media ${device.mobileM} {
    max-width: calc(33.333% - 2 * 0.2rem);
    flex: 1 1 calc(33.333% - 2 * 0.2rem);
    margin: 0.2rem;
  }
  @media ${device.mobileS} {
    max-width: calc(33.333% - 2 * 0.2rem);
    flex: 1 1 calc(33.333% - 2 * 0.2rem);
    margin: 0.2rem;
  }
`

const PostImage = styled(Image)`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
