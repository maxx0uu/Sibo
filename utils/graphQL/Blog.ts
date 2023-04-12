const blogQuery = `
query Blog {
  allHomepages {
    edges {
      node {
        slices {
          ... on HomepageSlicesBlog {
            variation {
              ... on HomepageSlicesBlogDefault {
                primary {
                  title
                  subtitle
                  body
                }
                items {
                  post {
                    ... on Post {
                      image
                      icon
                      title
                      body
                      list
                      cta {
                        ... on Cta {
                          text
                          url {
                            _linkType
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
