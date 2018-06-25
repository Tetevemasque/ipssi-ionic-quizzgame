interface Author {
    login: string,
    avatar: string
}

interface Score {
    author: Author,
    score: string,
    time: string,
    id?: string,
    avatar_url?: string
}

export { Score }