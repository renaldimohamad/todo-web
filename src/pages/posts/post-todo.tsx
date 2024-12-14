import {Col, FormText, Row} from "react-bootstrap"
import {CustomButton} from "../../common/custom-button/button"
import CustomInput from "../../common/custom-input"
import {usePostValidation} from "../../services/posts/use-post-validation"
import {usePostFunction} from "../../services/posts/use-post-function"
import {IPostForm} from "../../services/types/post"
import {Controller} from "react-hook-form"
import {useEffect} from "react"
import useStore from "../../stores/hook"
export const PostTodo = () => {
   const {
      control,
      handleSubmit,
      reset,
      formState: {errors},
   } = usePostValidation()
   const postFunc = usePostFunction()
   const {getPosts, posts} = useStore()

   useEffect(() => {
      getPosts()
   }, [])

   const onSubmit = async (data: IPostForm) => {
      await postFunc.createPost(data)
      await getPosts()
      reset()
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

               <div className="classname">
                  {posts.map((post) => (
                     <div key={post.id} className="classname">
                        <p>{post.content}</p>
                     </div>
                  ))}
               </div>
            </form>
         </div>
      </>
   )
}
