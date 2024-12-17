import * as PostAsync from "../../lib/call/post"
import {IPostForm, IPostModel} from "../types/post"

export const usePostFunction = () => {
   const createPost = async (body: IPostForm) => {
      try {
         const res = await PostAsync.createPost(body)
         console.log("🚀 ~ createPost ~ res:", res)
      } catch (error) {
         console.log("🚀 ~ createPost ~ error:", error)
      }
   }

   const getAllpost = async (userId: number) => {
      try {
         const res = await PostAsync.getAllpost(userId)

         return res
      } catch (error) {
         console.log("🚀 ~ getAllpost ~ error:", error)
      }
   }

   const getAllPostsByUserId = (userId: number) => {
      try {
         const res = PostAsync.getAllpost(userId)

         return res
      } catch (error) {
         console.log("🚀 ~ getAllPostsByUserId ~ error:", error)
         return error
      }
   }

   const toggleReadStatus = (id: number): Promise<IPostModel> => {
      try {
         const res = PostAsync.toggleReadStatus(id)

         return res
      } catch (error) {
         console.log("🚀 ~ toggleReadStatus ~ error:", error)
         throw error
      }
   }

   const updatePost = async (id: number, body: IPostForm) => {
      try {
         const res = await PostAsync.updatePost(id, body)

         return res
      } catch (error) {
         console.log("🚀 ~ updatePost ~ error:", error)
      }
   }

   const removePost = async (id: number) => {
      try {
         const res = await PostAsync.removePost(id)

         return res
      } catch (error) {
         console.log("🚀 ~ removePost ~ error:", error)
      }
   }

   return {
      createPost,
      getAllpost,
      updatePost,
      removePost,
      getAllPostsByUserId,
      toggleReadStatus,
      // markPostAsRead,
   }
}
