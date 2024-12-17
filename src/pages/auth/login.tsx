import {Button, Col, Container, FormText, Image, Row} from "react-bootstrap"
import CustomInput from "../../common/custom-input"
import {Link, Navigate} from "react-router-dom"
import todoimg from "../../assets/images/todo-photo.png"
import {useloginFunction} from "../../services/auth/login/use-login-function"
import {useLogin} from "../../services/auth/login/use-login"
import {Controller, SubmitHandler} from "react-hook-form"
import {ILoginForm} from "../../services/types/login"
import useStore from "../../stores/hook"
import {useState} from "react"

export const LoginForm = () => {
   const {isLogin} = useStore()

   const loginFunc = useloginFunction()
   const {
      control,
      handleSubmit,
      reset,
      formState: {errors},
   } = useLogin()

   const [alert, setAlert] = useState({
      show: false,
      message: "",
      variant: "",
   })

   const handleSubmitForm: SubmitHandler<ILoginForm> = async (data: any) => {
      try {
         await loginFunc.login(data.email, data.password)
         setAlert({
            show: true,
            message: "Login successful!",
            variant: "success",
         })

         reset()
      } catch (error: any) {
         console.log("🚀 ~ handleSubmitForm ~ r:")
         setAlert({
            show: true,
            message: error.message || "Invalid Password or Email",
            variant: "danger",
         })

         setTimeout(() => {
            setAlert({...alert, show: false})
            reset()
         }, 3000)
      }
   }

   if (isLogin) {
      return <Navigate to="/todo" />
   }

   return (
      <form onSubmit={handleSubmit(handleSubmitForm)}>
         <div>
            <Container
               fluid
               className="vh-100 d-flex align-items-center justify-content-center"
            >
               <Row className="vw-100 h-100 shadow-lg">
                  <Col
                     md={7}
                     className="h-100 d-flex align-items-center justify-content-center"
                  >
                     <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="mb-3">
                           <h5 className="text-center fw-bold ">
                              Log In to Your Account
                           </h5>
                           <p className="text-center">
                              Please enter your credentials to continue.
                           </p>
                        </div>
                        <Col md={5} className="d-flex flex-column gap-3">
                           {alert.show && (
                              <div
                                 className={`alert alert-${alert.variant} alert-dismissible fade show`}
                                 role="alert"
                              >
                                 {alert.message}
                                 <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                 ></button>
                              </div>
                           )}

                           <Controller
                              control={control}
                              name="email"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="email"
                                       type="email"
                                       {...field}
                                    />
                                    {errors.email && (
                                       <FormText className="text-danger">
                                          {errors.email.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />

                           <Controller
                              control={control}
                              name="password"
                              render={({field}) => (
                                 <>
                                    <CustomInput
                                       placeholder="Password"
                                       type="password"
                                       {...field}
                                    />
                                    {errors.password && (
                                       <FormText className="text-danger">
                                          {errors.password.message}
                                       </FormText>
                                    )}
                                 </>
                              )}
                           />

                           <Button className="button-register" type="submit">
                              Login
                           </Button>

                           <p>
                              Do you have an account?{"  "}
                              <Link
                                 to="/auth/register"
                                 className="text-decoration-none cursor-pointer"
                                 style={{
                                    color: "rgb(106, 151, 151)",
                                 }}
                              >
                                 Create
                              </Link>
                           </p>
                        </Col>
                     </div>
                  </Col>

                  {/* SESION 2 */}
                  <Col
                     md={5}
                     className="container-auth p-5 h-100 d-flex align-items-center"
                  >
                     <div className="w-100 d-flex flex-column align-items-center justify-content-center">
                        <Col md={10} className="text-center ">
                           <p className="footer">Achieve Productivity!</p>
                           <Image
                              src={todoimg}
                              alt="todo-img"
                              style={{
                                 width: "50%",
                              }}
                              className="img-fluid "
                           />
                           <div className="mt-2 w-100">
                              <p className="footer">
                                 Embark on your productive journey. Add tasks
                                 and achieve your goals!
                              </p>
                           </div>
                        </Col>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </form>
   )
}
