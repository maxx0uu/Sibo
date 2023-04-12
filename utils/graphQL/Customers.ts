const Customers = `
query Customers {
  allHomepages {
    edges {
      node {
        slices {
          ... on HomepageSlicesTestimonials {
            variation {
              ... on HomepageSlicesTestimonialsDefault {
                primary {
                  title
                }
                items {
                  testimonial {
                    ... on Testimonial {
                      body
                      user_image
                      user_signature
                      user_name
                      user_job
                      user_location
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
