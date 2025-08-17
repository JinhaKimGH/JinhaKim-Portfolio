export interface Experience{
    title: string
    company: string
    date: string
    icon: string
    description: string
    location: string
}

export interface Project{
    name: string
    description: string
    languages: Array<string>
    image: string
    link: string
    live: string | undefined
    progress?: boolean | undefined
}

export interface AwardType{
    icon: string
    name: string
}