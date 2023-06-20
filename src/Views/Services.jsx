import React from 'react'
import Navbar from '../Components/Navbar1'
import Tick from '../Components/Tick'
import {AiOutlineArrowRight} from "react-icons/ai"

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className="ServicesSection">
        <div className="serviceCardHolder">
          <div className="serviceCard">
            <div className="rocketHolder">
              <img
                src="data:image/png;base64,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"
                width={33}
              />
            </div>
            <div className="servicesTextSection">
              <p>App</p>
              <p>Development.</p>
            </div>
            <div className="serviceskeyPoints">
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
            </div>
          </div>
          <div className="serviceCard">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAA
          ACVUlEQVR4nO3dMY7UQBCF4ToAArExGxPBOeBWiIATwCF2hcRhEBKELISAYJMV0UMt2QEWjavHZbva83/SRFvdM/3e
          ejyZzQAAAAAAAIDOSbqQ9ErSJ0m/haVKhh+HTC9ay3gq6evij4CaL5KeeMt4KOmmuhWifJb0wFPIy7C3xJwXnkI+TBa
          9lnTPdXmhqmQo6c0k2/eehXeTRfdnF8GlfEVNsr3zLPqL763g1Zwvhayr20LUOe+5moOwnahz3nM1B1GZuZT0VtLt8H
          on6fF/9myaL9Q5q/DOuRcM4X7/x2f4Uf62dH6kzlmFd869YPhPr7leOn/yB9/ZnoWUr5yaX0vnRxTiDGIm4J9L50cU4
          gxiuCHXXC2dH1GIM4jy62i4IU99k/Ro6fxInbMK71zTguGX03W5Bwyvq5lwm+YLdc4qvHOnL1iJOuc9V3MQthN1znuu
          5iCigz53opBcKCQZCjlaIVgXhSRDIclQSDLxNx00oZBkKCQZCkmGQpKhkHMpRJ2xjc9BITMoJBnjCsnFzq0QS0Ybn4NCZlBIMuIKyUUUkosoJBedeyHZWVRAwbmttnF2FhVQcG6rbZydRQUUnNtqG2dnUQEF5xa28VGIQnIRheQiCslFRylEnbGogIJzW23j7CwqoODcVts4O4sKKDi31TbOzqICCs5tv403JgrJRRSSiygkF1FILqKQXHTu
          hWRnG5+DQmZQSDLGFZKLHb0QnIZCkqGQZCgkGQpJhkKOVgjWRSEdFlIeeoht3HgKec6DJTdRHt75zHvvAQAAAAAAACyZP0PAi4wOAAO8AAAAAElFTkSuQmCC"
              width={70}
            />
            <div className="servicesTextSection">
              <p>Website</p>
              <p>Development.</p>
            </div>
            <div className="serviceskeyPoints">
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
              <div className="TickHolder">
                <Tick />
                <p>FrontEnd Dev</p>
              </div>
            </div>
          </div>
        </div>
        <div className="serviceTexts">
          <p>Our Services</p>
          <p style={{ fontSize: 30 }}>How can I be of Services to You.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim
            nesciunt optio veniam nulla, natus doloribus. Rerum, cupiditate
            inventore. Explicabo aperiam nisi, accusantium enim illo autem quia
            tempore molestias deserunt.
          </p>
          {/* <div className="serveiceBtn">
            <p>Explore All Services</p>
            <AiOutlineArrowRight style={{ fontWeight: "bolder" }} />
          </div> */}
        </div>
      </div>
        </div>

  )
}

export default Services