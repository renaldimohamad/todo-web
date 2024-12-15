import {Col, FormText, Row} from "react-bootstrap"
import {CustomButton} from "../../common/custom-button/button"
import CustomInput from "../../common/custom-input"
import {usePostValidation} from "../../services/posts/use-post-validation"
import {usePostFunction} from "../../services/posts/use-post-function"
import {IPostForm} from "../../services/types/post"
import {Controller} from "react-hook-form"
import {useEffect, useState} from "react"
import useStore from "../../stores/hook"

export const PostTodo = () => {
   const {
      control,
      handleSubmit,
      reset,
      setValue,
      formState: {errors},
   } = usePostValidation()
   const postFunc = usePostFunction()
   const {user} = useStore()
   const [updatedPost, setUpdatedPost] = useState<number | null>(null)
   const [ posts, setPosts] = useState([])

   const fetchPosts = async () => {
      try {
         const res = await postFunc.getAllpost(user.id)
         setPosts(res)
      } catch (error) {
         console.error("Error fetching posts:", error)
      }
   }

   useEffect(() => {
      fetchPosts()

      const interval = setInterval(() => {
         fetchPosts()
      }, 500)

      return () => clearInterval(interval)
   }, [user.id])
  
   const onSubmit = async (data: IPostForm) => {
      if (updatedPost) {
         await postFunc.updatePost(updatedPost, data)
         setUpdatedPost(null)
      } else {
         await postFunc.createPost(data)
      }
      
      await fetchPosts()
      reset()
   }

   const onDelete = async (id: number) => {
      await postFunc.removePost(id)
      await fetchPosts()
   }

   const onEdit = async (post: {
      id: number
      content: string
      isCompleted: boolean
   }) => {
      setUpdatedPost(post.id)
      setValue("content", post.content)
   }

   const onError = (errors: any) => {
      console.log("🚀 ~ onError ~ errors:", errors)
   }

   return (
      <>
         <div className="classname">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
               <div className="className">
                  <h1 className="text-center">Post Todo</h1>

                  <div className="className">
                     <Row className="align-items-center justify-content-center">
                        <Col md={6} className="d-flex gap-3">
                           <Controller
                              control={control}
                              name="content"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="Enter your todo"
                                       type="text"
                                       {...field}
                                    />
                                    {errors.content && (
                                       <FormText className="text-danger">
                                          {errors.content.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />
                           <CustomButton
                              customtext={"Post"}
                              className="custom-button px-4 py-2 rounded-5"
                              type="submit"
                           />
                        </Col>
                     </Row>
                  </div>
               </div>
              </form>
            <div className="className">
               {posts.map((post: any) => (
                  <div
                     key={post.id}
                     className="classname d-flex justify-content-between align-items-center"
                  >
                     <p>{post.content}</p>
                     <div className="d-flex align-items-center"></div>
                     <div className="d-flex gap-2">
                        <CustomButton
                           customtext={"Edit"}
                           className="btn btn-warning"
                           onClick={() => onEdit(post)}
                        />
                        <CustomButton
                           customtext={"Delete"}
                           className="btn btn-danger"
                           onClick={() => onDelete(post.id)}
                        />
                     </div>
                  </div>
               ))}
            </div>
          
         </div>
      </>
   )
}
