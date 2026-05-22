export const users = [
    {
        id: "u1",
        email: "user@devstash.com",
        name: "John Doe",
        pro: true,
        deleted: false,
        created_at: "2026-05-01T08:30:00Z",
        updated_at: "2026-05-20T14:12:00Z",
    },
];

export const categories = [
    {
        id: "c1",
        title: "Technology",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-02T10:00:00Z",
        updated_at: "2026-05-20T16:00:00Z",
    },
    {
        id: "c2",
        title: "Health & Wellness",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-03T11:00:00Z",
        updated_at: "2026-05-19T09:00:00Z",
    },
];

export const collections = [
    {
        id: "col1",
        title: "Frontend Libraries",
        category_id: "c1",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-04T12:00:00Z",
        updated_at: "2026-05-20T13:30:00Z",
    },
    {
        id: "col2",
        title: "Productivity Tools",
        category_id: "c1",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-05T09:30:00Z",
        updated_at: "2026-05-18T18:20:00Z",
    },
    {
        id: "col3",
        title: "Nutrition Guides",
        category_id: "c2",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-06T08:45:00Z",
        updated_at: "2026-05-19T12:15:00Z",
    },
];

export const tags = [
    {
        id: "t1",
        title: "JavaScript",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-07T10:20:00Z",
        updated_at: "2026-05-20T10:20:00Z",
    },
    {
        id: "t2",
        title: "UI Design",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-08T11:25:00Z",
        updated_at: "2026-05-20T11:25:00Z",
    },
    {
        id: "t3",
        title: "Wellness",
        deleted: false,
        user_id: "u1",
        created_at: "2026-05-09T12:30:00Z",
        updated_at: "2026-05-20T12:30:00Z",
    },
];

export const items = [
    {
        id: "i1",
        title: "Next.js 15 Features",
        text: "A quick overview of the new app router and middleware improvements.",
        link: "https://nextjs.org/blog/next-15",
        image_link: "https://example.com/nextjs-card.png",
        description: "Summary of the latest Next.js release and migration tips.",
        deleted: false,
        user_id: "u1",
        collection_id: "col1",
        created_at: "2026-05-10T08:00:00Z",
        updated_at: "2026-05-21T14:00:00Z",
    },
    {
        id: "i2",
        title: "Notion vs Obsidian",
        text: "Comparing note-taking and knowledge management workflows.",
        link: "https://example.com/notes-comparison",
        image_link: "https://example.com/notes-card.png",
        description: "Pros and cons for personal knowledge systems.",
        deleted: false,
        user_id: "u1",
        collection_id: "col2",
        created_at: "2026-05-11T09:10:00Z",
        updated_at: "2026-05-21T10:45:00Z",
    },
    {
        id: "i3",
        title: "Daily Hydration Plan",
        text: "Practical hydration strategies for better energy and focus.",
        link: "https://example.com/hydration-plan",
        image_link: "https://example.com/hydration-card.png",
        description: "A simple daily schedule for water intake and reminders.",
        deleted: false,
        user_id: "u1",
        collection_id: "col3",
        created_at: "2026-05-12T07:45:00Z",
        updated_at: "2026-05-20T16:10:00Z",
    },
];

export const itemTags = [
    { item_id: "i1", tag_id: "t1" },
    { item_id: "i1", tag_id: "t2" },
    { item_id: "i2", tag_id: "t2" },
    { item_id: "i3", tag_id: "t3" },
];
