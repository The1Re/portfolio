interface IExperience {
    title: string,
    created: string,
    description: string[],
    skill: string[],
    image: any,
    link: string,
}

interface IAbout {
    content: string
}

interface ISkill {
    title: string,
    image: any
}

export {
    IExperience,
    IAbout,
    ISkill
}