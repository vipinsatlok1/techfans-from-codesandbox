export const createSlug = (title: string) => {
    const space = new RegExp(" ", "g")
    return title.replace(space, "-").toLocaleLowerCase()
}