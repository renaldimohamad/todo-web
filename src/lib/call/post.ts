import {api} from ".."
import {IPostForm} from "../../services/types/post"

export const createPost = async (body: IPostForm) => {
   const res = await api.post("/posts", body)
   return res.data
}

export const getAllpost = async () => {
   const res = await api.get("/posts")

   return res.data
}

export const getPostById = async (id: string) => {
   const res = await api.get(`/posts/${id}`)

   return res.data
}
