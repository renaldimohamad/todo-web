import {Carousel, Container} from "react-bootstrap"
import "./home-pages.css"
import {CustomButton} from "../../common/custom-button/button"
import useStore from "../../stores/hook"
import {Navigate} from "react-router-dom"

export const HomePages = () => {
   const {isLogin} = useStore()

   if (isLogin) {
      return <Navigate to="/todo" />
   }

   const logoRow = [
      {
         photos:
            "https://seeklogo.com/images/S/sotreq-logo-BAB24615EB-seeklogo.com.png",
      },
      {
         photos:
            "https://images.seeklogo.com/logo-png/43/1/canva-logo-png_seeklogo-438258.png?v=638686986770000000",
      },
      {
         photos:
            "https://seeklogo.com/images/L/Lionsgate-logo-B8E4F63078-seeklogo.com.png",
      },
      {
         photos:
            "https://seeklogo.com/images/O/Oxy_Mentholatum-logo-912BBAED5C-seeklogo.com.gif",
      },
      {
         photos:
            "https://seeklogo.com/images/S/Sprite-logo-0D17C14EB6-seeklogo.com.png",
      },
      {
         photos:
            "https://seeklogo.com/images/P/panoramedia-logo-270D68964E-seeklogo.com.png",
      },
      {
         photos:
            "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
      },
   ]

   const cardContent = [
      {
         id: 1,
         src: "https://seeklogo.com/images/S/sotreq-logo-BAB24615EB-seeklogo.com.png",
         alt: "Third slide",
         title: "Collaborate with your team",
         content:
            "Create a shared board and invite your team to join. You can also use Slack, Asana, and Jira to keep track of your projects and tasks.",
      },
      {
         id: 2,
         src: "https://images.seeklogo.com/logo-png/43/1/canva-logo-png_seeklogo-438258.png?v=638686986770000000",
         alt: "Third slide",
         title: "Collaborate with your team",
         content:
            "Create a shared board and invite your team to join. You can also use Slack, Asana, and Jira to keep track of your projects and tasks.",
      },
      {
         id: 3,
         src: "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
         alt: "Third slide",
         title: "Collaborate with your team",
         content:
            "Create a shared board and invite your team to join. You can also use Slack, Asana, and Jira to keep track of your projects and tasks.",
      },
      {
         id: 4,
         src: "https://seeklogo.com/images/G/glossier-logo-B9986A0849-seeklogo.com.png",
         alt: "Third slide",
         title: "Collaborate with your team",
         content:
            "Create a shared board and invite your team to join. You can also use Slack, Asana, and Jira to keep track of your projects and tasks.",
      },
   ]

   return (
      <>
         <div className="text-center d-flex flex-column">
            <Container fluid className="mt-5 d-flex flex-column gap-4 ">
               <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
                  <h2 className="fw-bold ">Enhance your productivity.</h2>
                  <span className="mb-0 fs-6 text-muted text-center">
                     Start for free now!
                  </span>
               </div>
               <p className="text-muted">
                  Unlimited boards and workflows. No credit card needed.
               </p>
               <div>
                  <p className="fw-bold text-muted fs-6">
                     Create account to kickstart your journey for free!
                  </p>
               </div>
               <div className="className">
                  <CustomButton
                     className="custom-button px-4 py-2 rounded-5"
                     path="/auth/register "
                     customtext="Get Started"
                  />
               </div>
               <div className="mt-4">
                  <p>225,000+ customers worldwide rely on</p>
                  <p>todo.com</p>
               </div>
               <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap px-5">
                  {logoRow.map((item, index) => {
                     return (
                        <div key={index}>
                           <img
                              src={item.photos}
                              alt="logo"
                              style={{width: "10rem", height: "auto"}}
                           />
                        </div>
                     )
                  })}
               </div>

               <Carousel data-bs-theme="dark" interval={3000}>
                  {cardContent.map((card, index) => (
                     <Carousel.Item key={index} style={{position: "relative"}}>
                        <Carousel.Caption
                           style={{
                              position: "absolute",
                              zIndex: 0,
                           }}
                        >
                           <div className="d-flex flex-column justify-content-center align-items-center ">
                              <h5>{card.title}</h5>
                              <p>{card.content}</p>
                           </div>
                        </Carousel.Caption>
                     </Carousel.Item>
                  ))}
               </Carousel>
            </Container>
         </div>
      </>
   )
}
