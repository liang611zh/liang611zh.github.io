import React from "react";
import Popup from "reactjs-popup";
import "./popup.css"
import ModalContent from "./modal-content";

const Modal = ({project})=>{
    console.log(project.skills)
        return(   
        <Popup
            trigger={
                <div class="fl w-100 w-25-ns pa2">
                    <a class="bg-white db link dim grow tc">
                        <img src={project.imageUrl} alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
                        <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 f5 black truncate w-100">{project.title}</dd>
                            <dt class="clip">Artist</dt>
                            <dd class="ml0 gray truncate w-100">
                                {project.skills.map((skill)=>{
                                    return(
                                    <div key={skill.name} class="br2 no-underline near-white bg-animate bg-near-black inline-flex items-center tc mr1" title="Facebook">
                                        <span class="f7 pa1">{skill.name}</span>
                                    </div>)
                                })}
                            </dd>
                        </dl>
                    </a>
                </div>
            }
            modal
            closeOnDocumentClick>
            <ModalContent project={project}/>
          </Popup>
        )
    };
export default Modal;