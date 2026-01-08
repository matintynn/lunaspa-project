export default {
    name: 'teamMember',
    title: 'Team Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'title',
            title: 'Job Title',
            type: 'string',
            description: 'e.g., "Esthetician and Lash tech"',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'yearsExperience',
            title: 'Years of Experience',
            type: 'number',
            description: 'Enter number only (e.g., 5)',
            validation: (Rule) => Rule.required().min(0),
        },
        {
            name: 'bio',
            title: 'Biography',
            type: 'text',
            rows: 4,
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'image',
            title: 'Profile Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (1, 2, 3, etc.)',
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'title',
            media: 'image',
        },
    },
}