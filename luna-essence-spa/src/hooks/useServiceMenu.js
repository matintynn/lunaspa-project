import { useState, useEffect } from 'react'
import { fetchServicesByCategory, formatServices } from '../lib/sanity-queries'

/**
 * Custom hook to fetch services for a specific category from Sanity
 * Falls back to provided default services until CMS content exists.
 */
export function useServiceMenu(category, fallbackServices = []) {
    const [services, setServices] = useState(fallbackServices)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true

        const loadServices = async () => {
            try {
                const data = await fetchServicesByCategory(category)
                if (isMounted && Array.isArray(data) && data.length > 0) {
                    const formatted = formatServices(data).map((service) => ({
                        title: service.title,
                        price: service.price,
                        description: service.description,
                        noteTitle: service.noteTitle,
                        addNote: service.addNote || [],
                        image: service.image,
                    }))
                    setServices(formatted)
                }
            } catch (error) {
                console.error(`Failed to load ${category} services:`, error)
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        }

        loadServices()
        console.log('SANITY ENV CHECK', {
            projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
            dataset: import.meta.env.VITE_SANITY_DATASET,
        })


        return () => {
            isMounted = false
        }
    }, [category])

    return { services, loading }
}
