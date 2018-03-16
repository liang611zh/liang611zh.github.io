import React , {Component} from 'react'

class Contact extends Component{
    render(){
        return (
            <div id="contact" className="h-100" >
                <main className="pa4 black-80">
                    <form className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f4 fw6 ph0 mh0">Contact Me</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" for="name">Name</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name"/>
                        </div>
                        <div className="mv3">
                            <label for="comment" className="f6 b db mb2">Comments <span className="normal black-60">(optional)</span></label>
                            <textarea id="comment" name="comment" className="db border-box hover-black h-100 w-100 measure ba b--black-20 pa5 br2 mb2" aria-describedby="comment-desc"></textarea>                    
                        </div>
                        </fieldset>
                        <div className="submit">
                        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Send"/>
                        </div>
                    </form>
                </main>
            </div>          
        )
    };
}
export default Contact;