const Header = `
query Header {
  allHomepages {
    edges {
      node {
        slices {
          ... on HomepageSlicesHeader {
            variation {
              ... on HomepageSlicesHeaderDefault {
                primary {
                  logo
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
          ... on HomepageSlicesNav {
            variation {
              ... on HomepageSlicesNavDefault {
                items {
                  item {
                    ... on Navitem {
                      title
                      subitem {
                        content {
                          ... on Post {
                            icon
                            title
                            body
                          }
                          ... on Testimonial {
                            user_name
                            user_image
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

// Problème Nav => Content = null
