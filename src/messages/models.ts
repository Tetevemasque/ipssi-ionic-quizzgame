interface Author {
    login: string,
    avatar: string
}

interface Message {
    author: Author,
    content: string,
    date: string,
    type: number,
    id?: number,
    image?: string
}

export { Message }
