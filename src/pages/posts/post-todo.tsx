import {Col, FormCheck, FormText, ListGroup, Row} from "react-bootstrap"
import {CustomButton} from "../../common/custom-button/button"
import CustomInput from "../../common/custom-input"
import {usePostValidation} from "../../services/posts/use-post-validation"
import {usePostFunction} from "../../services/posts/use-post-function"
import {IPostForm} from "../../services/types/post"
import {Controller} from "react-hook-form"
import {useEffect, useState} from "react"
import useStore from "../../stores/hook"
import {FaEdit, FaTrash} from "react-icons/fa"
import {useRef} from "react"
import "./post.css"

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
   const [posts, setPosts] = useState<IPostForm[]>([])
   const inputRef = useRef<HTMLInputElement>(null)

   const fetchPosts = async () => {
      try {
         const res = await postFunc.getAllpost(user.id)
         setPosts(res)
      } catch (error) {
         console.error("Error fetching posts:", error)
      }
   }

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

      if (inputRef.current) {
         inputRef.current.focus()
      }
   }

   const onError = (errors: any) => {
      console.log("🚀 ~ onError ~ errors:", errors)
   }

   const handleMarkAsRead = async (id: number) => {
      try {
         await postFunc.markPostAsRead(id)
         setPosts((prevPosts) =>
            prevPosts.map((post) =>
               post.id === id ? {...post, isRead: true} : post
            )
         )
      } catch (error) {
         console.error("Error marking post as read:", error)
      }
   }

   useEffect(() => {
      fetchPosts()
   }, [user.id])

   return (
      <>
         <div className="classname">
            <form onSubmit={handleSubmit(onSubmit, onError)}>
               <div className="className">
                  <div className="className">
                     <Row className="align-items-center justify-content-center">
                        <Col className="d-flex">
                           <Controller
                              control={control}
                              name="content"
                              render={({field}) => (
                                 <div className="d-flex flex-column w-100">
                                    <CustomInput
                                       placeholder="Enter your todo"
                                       type="text"
                                       className="custom-input-with-button"
                                       {...field}
                                       ref={inputRef}
                                    />
                                    {errors.content && (
                                       <FormText className="text-danger mt-1">
                                          {errors.content.message}
                                       </FormText>
                                    )}
                                 </div>
                              )}
                           />
                           <CustomButton
                              customtext={"Post"}
                              className="custom-button-inside-input"
                              type="submit"
                           />
                        </Col>
                     </Row>
                  </div>
               </div>
            </form>

            {posts.length === 0 ? (
               <>
                  <ListGroup variant="flush" className="text-center mt-3">
                     <ListGroup.Item
                        style={{
                           color: " rgb(106, 151, 151)",
                           fontWeight: "bold",
                        }}
                     >
                        No todo found
                     </ListGroup.Item>
                  </ListGroup>
               </>
            ) : (
               <>
                  {posts.map((post: any) => {
                     return (
                        <div className="mb-3 shadow-sm mt-3 " key={post.id}>
                           <ListGroup>
                              <ListGroup.Item className="post-list">
                                 <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex flex-row gap-2">
                                       <FormCheck
                                          type="checkbox"
                                          label=""
                                          checked={post.isRead}
                                          onChange={() =>
                                             handleMarkAsRead(post.id)
                                          }
                                       />
                                       <span
                                          className="post-content"
                                          style={{
                                             textDecoration: post.isRead
                                                ? "line-through"
                                                : "none",
                                          }}
                                       >
                                          {post.content}
                                       </span>
                                    </div>
                                    <div className="d-flex gap-2 justify-content-end">
                                       <FaEdit
                                          onClick={() => onEdit(post)}
                                          className="icons-edit me-1"
                                          size={18}
                                       />

                                       <FaTrash
                                          onClick={() => onDelete(post.id)}
                                          className="icons-trash"
                                          size={18}
                                       />
                                    </div>
                                 </div>
                              </ListGroup.Item>
                           </ListGroup>
                        </div>
                     )
                  })}
               </>
            )}
         </div>
      </>
   )
}
