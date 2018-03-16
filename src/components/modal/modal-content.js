import React from "react";
import Popup from "reactjs-popup";
import "./popup.css"

const ModalContent = ({project})=>{
        return(   
            // <article class="center hidden ba">
            // <h1 class="f4 bg-green white mv0 pv2 ph3">{project.title}</h1>
            // <hr/>
            // <div class="pa3 bt">
            //     <p class="f6 f4-ns lh-copy measure mv0 tc">
            //         {project.description}
            //     </p>
            //     <hr/>
            // </div>
            // <div className="f5 white mv0 pv2 ph3"><a class='link' href={project.links} target="_blank">DEMO</a></div>
            // </article> 
            <div class="br3 hidden ba b--black-10 mv0">
            <h1 class="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph6">{project.title}</h1>
            <div class="pa3 bt b--black-10">
              <p class="f6 f5-ns lh-copy tl">
                {project.description}
              </p>
              {project.links.map((info) => 
                        <a class="pa2" key={info.name} href={info.url}>{info.name}</a>)
              }
            </div>
          </div> 
        )
    };
export default ModalContent;