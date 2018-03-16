import React , {Component} from 'react'
import Home from './rightside-content/home';
import Education from './rightside-content/education';
import Projects from './rightside-content/projects';
import Contact from './rightside-content/contact';
import Skills from './rightside-content/skills';
class RightSide extends Component{
    render(){
        return (
            <div class="fr w-70 w-80-ns pa2 bg-light-grey vh-100 relative">
                <Home/>
                <Education/>
                <Skills/>
                <Projects/>
            </div>
        )
    };
}

export default RightSide;