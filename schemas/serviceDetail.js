export default {
    name: 'serviceDetail',
    title: 'Service Details',
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Service Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Lash Services', value: 'lash' },
                    { title: 'Facial Treatments', value: 'facial' },
                    { title: 'Body Treatments', value: 'body' },
                    { title: 'Medical Treatments', value: 'medical' },
                    { title: 'Eyebrows Treatments', value: 'eyebrows' },
                ],
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'price',
            title: 'Price',
            type: 'string',
            description: 'e.g., "$99"',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'image',  // ← NEW FIELD
            title: 'Service Image',
            type: 'image',
            description: 'Upload an image for this service',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'noteTitle',
            title: 'Note Section Title',
            type: 'string',
            description: 'e.g., "Classic Refill:" (optional)',
        },
        {
            name: 'addNote',
            title: 'Additional Notes',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'List of additional notes or information',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'price',
            category: 'category',
            media: 'image',  // ← Show image in preview
        },
        prepare({ title, subtitle, category, media }) {
            return {
                title: title,
                subtitle: `${subtitle} - ${category}`,
                media: media,
            }
        },
    },
}