import React , {Component} from 'react'
import Tilt from 'react-tilt'


class LeftSide extends Component{
    render(){
        return (
        <div class="fl w-30 w-20-ns pa2 bg-green tc vh-100 fixed">
            <header class="tc pv3 pv5-ns">
            <Tilt className="Tilt"  >
                <div className="Tilt-inner"> 
                    <img src="https://avatars1.githubusercontent.com/u/16942462?s=460&v=4" class="br-100 pa1 ba b--black-10 h3 w3 h4-ns w4-ns" alt="avatar" />
                </div>
            </Tilt>
            <h1 class="f5 f4-ns fw5 white">Victor Zhao</h1>
            <h3 class="f6 f5-ns fw6 light-grey">Vancouver, BC</h3>
          </header>
          <div class="pt-0 lh-copy">
            <a class="f7 f3-ns fw5-ns db white link dim" href="#home">Home </a>
            <a class="f7 f3-ns fw5-ns db white link dim" href="#education">Education </a>
            <a class="f7 f3-ns fw5-ns db white link dim" href="#skills">Skills </a>
            <a class="f7 f3-ns fw5-ns db white link dim" href="#projects">Projects</a>
            </div>
        </div>    
        )
    };
}

export default LeftSide;