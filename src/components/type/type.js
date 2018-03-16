import React,{ Component } from 'react';
import Typed from 'react-typed';

class TypedText extends Component {
    render() {
        return (
            <div>
                <Typed className="f6 gray fw2 ttu tracked"
                strings={[
                    'Hello World',
                    'This is my website',
                    'Try more, create more']}
                    typeSpeed={30}
                    backSpeed={50}  
                    loop >
                </Typed>
            </div>
        );
    }
}
export default TypedText;