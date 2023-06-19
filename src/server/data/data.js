// Initial data setup, import instead of database.js
// Once populated, migrate data to prisma
// via `npx prisma migrate dev --name "init"`

const data = [
    {
        id: 0,
        name: "Information Location"
    },
    {
        id: 1,
        name: "Lorem Ipsum"
    },
]

module.exports = {
    data,
}