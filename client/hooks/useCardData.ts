import { createSlug } from "./useSlug"

export const getToolCardData = (data: []) => {

    const returnData = data.map((item: any, i) => {

        const slug = createSlug(item.title as string)

        let obj = {
            title: "",
            paragraph: "",
            like: "",
            src: "",
            slug: "",
        }

        obj.title = item.title
        obj.paragraph = item.dec
        obj.like = item.totalLikes
        obj.src = item.image,
            obj.slug = slug

        return obj
    })

    return returnData
}

export const getSidebarData = (categoryData: []) => {

    const returnData = categoryData.map((item: any, i) => {
        let obj = {
            title: "",
            svg: "",
            _id: ""
        }

        obj._id = item._id
        obj.title = item.name
        obj.svg = item.svg
        return obj
    })
    return returnData
}

export const getSidebarListData = (data: any) => {

    const returnData = data.map((item: any, i) => {
        let obj = {
            title: "",
            svg: "",
            _id: ""
        }

        console.log(item)

        obj._id = item._id
        obj.title = item.title
        obj.svg = item.svg
        return obj
    })
    return returnData
}