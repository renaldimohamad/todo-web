import * as PostAsync from "../../lib/call/post"
import {IPostForm} from "../types/post"

export const usePostFunction = () => {
   const createPost = async (body: IPostForm) => {
      try {
         const res = await PostAsync.createPost(body)
         console.log("🚀 ~ createPost ~ res:", res)
      } catch (error) {
         console.log("🚀 ~ createPost ~ error:", error)
      }
   }

   const getAllpost = async () => {
      try {
         const res = await PostAsync.getAllpost()

         return res
      } catch (error) {
         console.log("🚀 ~ getAllpost ~ error:", error)
      }
   }

   return {createPost, getAllpost}
}
