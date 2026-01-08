import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Use environment variables with hardcoded fallbacks
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || '10k5i38n'
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'

export const client = createClient({
    projectId,
    dataset,
    useCdn: true,
    apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => {
    return builder.image(source)
}
