const Hero = `
query Hero {
  allHomepages {
    edges {
      node {
        slices {
        	... on HomepageSlicesHero {
            variation {
              ... on HomepageSlicesHeroDefault {
                primary {
                  title
                  subtitle
                  card_body
                  card_cta {
                    ... on Cta {
                      text
                      url {
                        _linkType
                      }
                    }
                  }
                }
                items {
                  image
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
