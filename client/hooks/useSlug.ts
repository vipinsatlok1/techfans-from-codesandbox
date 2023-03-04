export const useSlug = (text: string) => {
    const space = new RegExp(" ", "g")
    return text.replace(space, "-").toLocaleLowerCase()
}