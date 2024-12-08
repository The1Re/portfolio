interface IExperience {
    title: string,
    created: string,
    description: string[],
    skill: string[],
    image: string,
    link: string,
}

interface IAbout {
    content: string
}

export {
    IExperience,
    IAbout
}