import { graphql, PageProps } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import React, { FC } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { device } from "../components/devices"
import Post from "../components/post"

type Props = {
  allInstaNode: {
    nodes: {
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
    }[]
  }
}

const IndexPage: FC<PageProps<Props>> = ({
  data: {
    allInstaNode: { nodes: posts },
  },
}) => (
  <Layout>
    <SEO title="Instagram links" />
    <Container>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  </Layout>
)

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  transition: 0.3s all ease-in-out;

  @media ${device.desktopL} {
    margin: 0 -1rem;
  }
  @media ${device.desktop} {
    margin: 0 -1rem;
  }
  @media ${device.laptopL} {
    margin: 0 -1rem;
  }
  @media ${device.laptop} {
    margin: 0 -1rem;
  }
  @media ${device.tabletL} {
    margin: 0 -0.2rem;
  }
  @media ${device.tablet} {
    margin: 0 -0.2rem;
  }
  @media ${device.mobileL} {
    margin: 0 -0.2rem;
  }
  @media ${device.mobileM} {
    margin: 0 -0.2rem;
  }
  @media ${device.mobileS} {
    margin: 0 -0.2rem;
  }
`

export const query = graphql`
  {
    allInstaNode(sort: { fields: timestamp, order: DESC }) {
      nodes {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
  }
`
