export default {
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    // This makes it a singleton (only one document)
    __experimental_actions: ['update', 'publish'],
    fields: [
        {
            name: 'businessHours',
            title: 'Business Hours',
            type: 'object',
            fields: [
                {
                    name: 'mondayToFriday',
                    title: 'Monday - Friday',
                    type: 'string',
                    description: 'e.g., "9:00 AM - 7:00 PM"',
                },
                {
                    name: 'saturday',
                    title: 'Saturday',
                    type: 'string',
                    description: 'e.g., "10:00 AM - 6:00 PM"',
                },
                {
                    name: 'sunday',
                    title: 'Sunday',
                    type: 'string',
                    description: 'e.g., "Closed" or "11:00 AM - 5:00 PM"',
                },
            ],
        },
        {
            name: 'contact',
            title: 'Contact Information',
            type: 'object',
            fields: [
                {
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                },
                {
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string',
                },
                {
                    name: 'email',
                    title: 'Email',
                    type: 'string',
                },
                {
                    name: 'googleMapsUrl',
                    title: 'Google Maps URL',
                    type: 'url',
                    description: 'Full Google Maps link',
                },
            ],
        },
        {
            name: 'socialMedia',
            title: 'Social Media Links',
            type: 'object',
            fields: [
                {
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                },
                {
                    name: 'instagram',
                    title: 'Instagram URL',
                    type: 'url',
                },
                {
                    name: 'tiktok',
                    title: 'TikTok URL',
                    type: 'url',
                },
            ],
        },
        {
            name: 'mapImage',
            title: 'Location Map Image',
            type: 'image',
            description: 'Upload a map image or leave empty to use Google Maps embed',
            options: {
                hotspot: true,
            },
        },
    ],
}