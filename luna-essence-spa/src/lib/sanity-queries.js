import { client, urlFor } from './sanity'

/**
 * SITE SETTINGS QUERIES
 */

/**
 * Fetch global site settings (business hours, contact info, social media)
 * @returns {Promise<Object>} Site settings object
 */
export async function fetchSiteSettings() {
    const query = `
    *[_type == "siteSettings"][0] {
      businessHours,
      contact,
      socialMedia,
      mapImage
    }
  `
    try {
        const settings = await client.fetch(query)
        return settings || null
    } catch (error) {
        console.error('Error fetching site settings:', error)
        return null
    }
}

/**
 * TEAM MEMBERS QUERIES
 */

/**
 * Fetch all team members sorted by display order
 * @returns {Promise<Array>} Array of team member objects
 */
export async function fetchTeamMembers() {
    const query = `
    *[_type == "teamMember"] | order(order asc) {
      _id,
      name,
      title,
      yearsExperience,
      bio,
      image {
        asset->{
          _id,
          url
        },
        alt,
        hotspot
      },
      order
    }
  `
    try {
        const members = await client.fetch(query)
        return members || []
    } catch (error) {
        console.error('Error fetching team members:', error)
        return []
    }
}

/**
 * Fetch a single team member by ID
 * @param {string} id - Team member document ID
 * @returns {Promise<Object>} Team member object
 */
export async function fetchTeamMember(id) {
    const query = `
    *[_type == "teamMember" && _id == $id][0] {
      _id,
      name,
      title,
      yearsExperience,
      bio,
      image {
        asset->{
          _id,
          url
        },
        alt,
        hotspot
      }
    }
  `
    try {
        const member = await client.fetch(query, { id })
        return member || null
    } catch (error) {
        console.error('Error fetching team member:', error)
        return null
    }
}

/**
 * SERVICES QUERIES
 */

/**
 * Fetch all services sorted by display order
 * @returns {Promise<Array>} Array of service objects
 */
export async function fetchServices() {
    const query = `
    *[_type == "serviceDetail"] | order(order asc) {
      _id,
      category,
      title,
      price,
      description,
      image {
        asset->{
          _id,
          url
        },
        alt,
        hotspot
      },
      noteTitle,
      addNote,
      order
    }
  `
    try {
        const services = await client.fetch(query)
        return services || []
    } catch (error) {
        console.error('Error fetching services:', error)
        return []
    }
}

/**
 * Fetch services by category
 * @param {string} category - Service category (lash, facial, body, medical)
 * @returns {Promise<Array>} Array of service objects for the category
 */
export async function fetchServicesByCategory(category) {
    const query = `
    *[_type == "serviceDetail" && category == $category] | order(order asc) {
      _id,
      category,
      title,
      price,
      description,
      image {
        asset->{
          _id,
          url
        },
        alt,
        hotspot
      },
      noteTitle,
      addNote,
      order
    }
  `
    try {
        const services = await client.fetch(query, { category })
        return services || []
    } catch (error) {
        console.error(`Error fetching ${category} services:`, error)
        return []
    }
}

/**
 * Fetch a single service by ID
 * @param {string} id - Service document ID
 * @returns {Promise<Object>} Service object
 */
export async function fetchService(id) {
    const query = `
    *[_type == "serviceDetail" && _id == $id][0] {
      _id,
      category,
      title,
      price,
      description,
      image {
        asset->{
          _id,
          url
        },
        alt,
        hotspot
      },
      noteTitle,
      addNote,
      order
    }
  `
    try {
        const service = await client.fetch(query, { id })
        return service || null
    } catch (error) {
        console.error('Error fetching service:', error)
        return null
    }
}

/**
 * HELPER FUNCTIONS
 */

/**
 * Convert Sanity image object to URL string
 * @param {Object} image - Sanity image object
 * @returns {string} Image URL string
 */
export function getImageUrl(image) {
    if (!image || !image.asset) return null
    return urlFor(image).url()
}

/**
 * Format team member data for display
 * @param {Object} member - Raw team member from Sanity
 * @returns {Object} Formatted team member object
 */
export function formatTeamMember(member) {
    if (!member) return null
    return {
        ...member,
        image: getImageUrl(member.image),
        experience: `${member.yearsExperience} years experience`,
    }
}

/**
 * Format service data for display
 * @param {Object} service - Raw service from Sanity
 * @returns {Object} Formatted service object
 */
export function formatService(service) {
    if (!service) return null
    return {
        ...service,
        image: getImageUrl(service.image),
    }
}

/**
 * Format multiple team members
 * @param {Array} members - Array of team members from Sanity
 * @returns {Array} Array of formatted team members
 */
export function formatTeamMembers(members) {
    return members.map(formatTeamMember)
}

/**
 * Format multiple services
 * @param {Array} services - Array of services from Sanity
 * @returns {Array} Array of formatted services
 */
export function formatServices(services) {
    return services.map(formatService)
}
