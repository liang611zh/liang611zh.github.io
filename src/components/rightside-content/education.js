import React , {Component} from 'react'

class Education extends Component{
    render(){
        return (
            <div id="education" className="h-100">
                <section class="pa2 pa4-m pa5-l">
                <h1>EDUCATION</h1>
                <blockquote className="ml0 mt4 pl4 black-90 bl bw2 b--green">
                    <div className="pa3 bt cf ph2-ns">
                        <p className="fl f6 w-70-ns f5-ns fw6-ns lh-copy measure mv0">
                        British Columbia Institute of Technology (BCIT), BC, Canada <br/>
                        <span className="green">Diploma of Computer Systems Technology – Web & Mobile</span>
                        </p>
                        <p className="fl f6 w-30-ns f5-ns lh-copy measure mv0">
                        2016.1 – 2017.12
                        </p>
                    </div>
                </blockquote>
                <blockquote className="ml0 mt5 pl4 black-90 bl bw2 b--green">
                    <div className="pa3 bt cf ph2-ns">
                        <p className="fl f6 w-70-ns f5-ns fw6-ns lh-copy measure mv0">
                        Xi’an University of Science and Technology, Shaanxi, China<br/>
                        <span className="green">Bachelor’s Degree of Microelectronic Engineering</span>
                        </p>
                        <p className="fl f6 w-30-ns f5-ns lh-copy measure mv0">
                        2009.9 - 2013.7
                        </p>
                    </div>
                </blockquote>
                </section>
            </div>       
        )
    };

}

export default Education;