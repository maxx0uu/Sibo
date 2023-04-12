const Footer = `
query Footer {
  allHomepages {
    edges {
      node {
        slices {
          ... on HomepageSlicesFooter {
            variation {
              ... on HomepageSlicesFooterDefault {
                primary {
                  logo
                  right
                  legal
                  made_by
                }
              }
            }
          }
          ... on HomepageSlicesMap {
            variation {
              ... on HomepageSlicesMapDefault {
                items {
                  item {
                    ... on Mapitem {
                      title
                      list {
                        link
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
}
`;

// Cta content => null
