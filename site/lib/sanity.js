import createSanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: "production",
  projectId: "u4zq14dw",
  apiVersion: "2021-10-21",
  useCdn: true,
}

export const sanityClient = createSanityClient(options)
export const imageBuilder = sanityImage(sanityClient)

export function createPreviewClient() {
  return createSanityClient({
    ...options,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
  })
}

export function getSanityClient(preview) {
  if (preview) {
    return createPreviewClient()
  } else {
    return sanityClient
  }
}
