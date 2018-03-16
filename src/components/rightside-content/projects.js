import React , {Component} from 'react'
import Modal from '../modal/popup';

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            projects:[
                {
                    title:"Potluck",
                    imageUrl:"data:image/png;base64,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",
                    links:[
                        {
                            name:"Website",
                            url:"https://potluck.preventanyl.com/"
                        },
                        {
                            name:"Mobile App (Using Expo to Open)",
                            url:"https://expo.io/@mobilepotluck/potluck-project"                        
                        }
                    ],
                    description:"Potluck is a cross-platform application that aims to solve food wastage problems after potluck events by providing the ultimate event management experience. Users are able to host detailed events, send out invitations, and pledge food items.The project consisted of 23 members split into 4 main teams: UI/UX (Figma), Backend API (.NET Core 2.0, Swagger), Frontend Application (React), and Native Mobile (React Native, Expo).",
                    skills:[
                        {
                            name:"React-Native"
                        },
                        {
                            name:"RESTful"
                        },
                        {
                            name:"ASP.NET API"
                        }
                    ]
                },
                {
                    title:"Zenith Society",
                    imageUrl:"https://www.shareicon.net/download/2015/09/25/107080_network_512x512.png",
                    links:[
                        {
                            name:"Front-End",
                            url:"http://zenithsocietycore2.azurewebsites.net/"                        
                        },
                        {
                            name:"Back-End-API",
                            url:"http://zenithsocietycore2.azurewebsites.net/swagger/"
                        }
                    ],                    
                    description:"Personal Project to show user the current week event and activity. Admin role can manage events and activity.",
                    skills:[
                        {
                            name:"ASP.NET"
                        },
                        {
                            name:"Azure"
                        },
                        {
                            name:"Angular"
                        }
                    ]
                },
                {
                    title:"YoutubeAPIplayer",
                    imageUrl:"https://images.vexels.com/media/users/3/137425/isolated/preview/f2ea1ded4d037633f687ee389a571086-youtube-icon-logo-by-vexels.png" ,
                    links:[
                        {
                            name:"DEMO",
                            url:"https://potluck.preventanyl.com/"
                        },

                    ],                    
                    description:"A small youtube player, quickliy load and search video",
                    skills:[
                        {
                            name:"ReactJS"
                        },
                        {
                            name:"YoutubeAPI"
                        }
                    ]
                },
                {
                    title:"Smart-Eye-FaceDetection",
                    imageUrl:"https://cdn1.iconfinder.com/data/icons/smart-home-sysyem/512/20-512.png" ,
                    links:[
                        {
                            name:"DEMO",
                            url:"http://smart-frontend.herokuapp.com/"
                        }
                    ],                    
                    description:"Face detection app, user can enter the image link the app will detect faces in the image.",
                    skills:[
                        {
                            name:"ReactJs"
                        },
                        {
                            name:"NodeJs"
                        },
                        {
                            name:"PosgreSQL"
                        }
                    ]
                },
                {
                    title:"Pass The Bear - HTML5 GAME",
                    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9CaPk3YYVNsmk2dYbrpxHHgs6bFmQ8kwiqhJLD8CMKANNPw5OOw",
                    links:[
                        {
                            name:"DEMO",
                            url:"https://pass-bear.herokuapp.com/index.html"
                        }
                    ],
                    description:"HTML5 Game User control the man to pass a sleep bear, by switch keyboard arrow key",
                    skills:[
                        {
                            name:"HTML"
                        },
                        {
                            name:"JavaScript"
                        },
                        {
                            name:"CSS"
                        }
                    ]
                },
                {
                    title:"ChoiceMaker",
                    imageUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABI1BMVEWm2uj///+awtn8YR//djvmRQCh2Oej3u3/WwbmQgCZw9rxZCqf1+an3On/eDzoVxzOqJ3/dDacvtLtTg2/5O7lOADlNACTxuD4dD2w3urm9Pj8Xxv/cSz8VADx+fvrYSzP6vKfzeD/biaeyt66rbHb7/X6d0DhkHelssDs9/r8Ww/d8PbjSxO+wcH8aSv+3tTsf2Lwm4T+9vPDp6byhVuq1N/40Mbdn4r1vq+w0OL2xrr+49rni2z9flHqakX9jmnpYjn9oIPyqZbI3uroeFX0taX87OfWjX39hFrsfmDgf2W/t7XHnJj9rJPyq5jxnonrcU/BjIjZX0DDh4LSblnujne5mJqprbnMemzdUSfqaUPCvbuxoqnJfnOyy9HOlYvWoo+g5rx4AAAS00lEQVR4nM2dC1fbRhbHZYMFMhhqkOT4GQdCEgzl4exmCWweJEBJtqHsdmma9LXf/1OspBmNNO87o7HDPaenp61i+9f/nfuYl7za7G3U29sZj8Ow2+22Wl6rlfw9DMfjnb3eaA7f7s3yw0e9nbDr+Zl5jPn4X3fDndmCzopw1Bt3/VUBGWfJM6t+dzwzzFkQjvbCFoSN4WyFe7OgdE6YaLdqBlfCXE20dP2D3BLuhabaCbQM95z+JoeEvbAiXUEZOlTSFeFo7LnBw5De2NWYdEO403UkX4nR7+44+W0OCEdj53g5pAshKxOOXI0+MWNYmbEi4Si0Tg1AxtWqjJUIE/1miochqzFWIEz0mwNfapV0tCccz0O/3Pzx3Al3nKY/AKJnmzvsCHe78+XLGLu78yOcS4ARMFq5qgVhb84OWkL0LOpVc8K5RVCRrYYzJ9z9ZgIi8z3T0WhIOP6WAmJGw9FoRvgNQihvfndmhL1vzUbMJOAYEN4DD81t1cBT4YTfKAmKzYfHVDDhvRiChcEHI5Bw9K2JBAbsN2CEvfslIDIfFm9AhDv3J8aUbRXUbkAI7ykgEBFAeI+yBGuQrKEnnGsvb2qAEk5LeI8VTE2voo7wngMCEDWE9zbIFKYLN2rCvfsPmCCqV+OUhD1LwCW3CDpbVaZ+FeHILoouLf3253wZfVUBpyK0+ralpe//tjX4x9/ny2hH2LX4poyvvbjY3povo6LTkBNa9IM5X2rzZVT0i1JC81ImGX+EL2Ocp6/KixsZoXEYLetHGOeoozSgSghNw6iIL7XB/HSUBVQJoVmUkfHNV0dJtBETGg1CFd88dZQMRSGhySDU8c1RR1844S8khH8ohG9+OraghOBMCOWbF6MwKwoIoRNrJnxzYhSlDAHhbPjmxAghBPmoDd88GAV+yhHuAgBt+ebAyMdTjlCf66vwZYwzzR1c3mcJd3QSavnaW4O15C/VI7PU0WenbVjCqnyLW+eHycdMT14NlDrOkFFNqC7XAP45eJF/1LkScXaMbPFGE6pbCsD4G1wWH6YbqrNiZJoMmjBU/ck/AfFl66z4sHPt04PB/2ZA6IVywpGq4l76rv9gTfubXxSfdq0jXHvyMNpouSdcHUkJlRIufbfcX9Extp+QDzvd0vI1gmBj2z0hLWKZUDMKv1teWNAytp8cog/7pAbM+BqNYKO+7V5FaiSWCZUSIkI9Y3tr8fzTpzdbykiK+VLCZn0GKoZiQuUoJIQJ44FOx4Ey3xd8iLD+yLmK5ZFYIlRLWBACfBXIhwlngBiKCHXTayVCgI4gvpyw/sg1YWkkFoS62SeK0FJHho8QOkcsFTYFobbkpgktdOT4CkL3iDyhvqlAhJPliZ2OAr4SYd3xfoiixSCE2r4QES6fX74ZWujIjr8oYAhdI3ZZQv00fkY4TKuyF0NTX2X54qOb25ghrPtOIyqJNTmhfpY7JZxcZw9TiHpfZf0zCNL6/DhiCOueS0QSa3JC/R9JCZdxc/RmsrAA1XHtATv+YtSABCyhW0SPJtzTj4KM8BQ9fkiJqNJREF+id+hDjgKWsOkS0N+jCDX1DCHMG1wmcch05PVLJZyizzjmCN0ihhQhZAoxHYfnmPC6zyHyjML80Ag+4M+44wmdIvplQshEfkrYn9SEA1HEKNSv5KS1dQGhS0S8w9aDOinOFqdyDSlGsX4Z4Qn6iKuYizSpOeylwhIhaCI/64D7aBCxkYZhlOlX1vCOyxauEf2CELTahGqayWKKeC500oJRzpdAvc6++IzL+ATRVc5AbpoRgha18x5/+OnkjVzC7JEVOV8aS9O66CwKZITOEFHSzwhB+xJIb1GuvcW2QvSKIgFs9NPpHV+XlsxVR9zNCTXTFyyh3nLCoPHu5CISIBJuMaGrXiqbzEgJtY2TJWHwdZpHFOmgFBM6QsxaKA+YKywIg0YWUqY2hI4QQ0wIe9qYMMbz328VcUdK6AgREQJ3eJkSBuu4drm1InTSEadNogfqK2wIo59qVTR0gpj2Fx54i5eIcDJcFpVviBBXZ7ViclRQhisIHbSLaUb0wLv0BITDT4cnbUFyXCkPwxcxpokbX2IjQgeI3YwQukGII1y+kbQZlIZfcW6PkqL9kI2rasLqjYafEsLyvWi+tI8Q2pyjokhzlP3XS6xblE1dnEQmhImKFS3J+R58kxdH+Aq7IVel4myRrrOdYMD4UpgcdYRVVUyKbw+8l5QjnLypSUTENU10fPkaAwb7+Nn9ItpsJqFHR1hvVhuKSajxgBWNQsPaJ3YkkrqU1J8kdRSEmwtrK+tBs6MmrNpohAkhdMOzdBzWTtgQRHoLYnlgLbx0c6HfXltr//N5vdNU6lgNsZsQQp/lY+kQ/+xTAOEVkzo2k8cO1rLV1H8+3+ioGKs1/QkheLssR9jH2xIuAYR4F8pRUAAuLKApnfYgUbKpULKKin7NA587EGb87Ge/kkSakuHkeBiXAftkLbw92FIpWaEK90ce+Ki9qGobpjn/RJItqKyQTc5M8fTNJn7uoDS/mikpG5P2Tb/f82Dtr4RwYbl9fs1P2vCEjehuOj0NaMDcTQtI6Zi0VtHf88BHK8S9RX8iKL0FhOmUTcwC9rktG1IlbRH9cVVCoYkIiW2WHjwQLOfkSjadICaE0ITvinCTelK8YCV0V8t2MZw3YQZI2kreTSlI2l3tEEMPfIbLCWEK2B+evzh9gCo9kZtKlbRaBu/OlzADnGTZ/6CvcFMKsigGbDri+RJmLrqMypsbtEbwQEm4yBQDFohzJUSAN+WuUk+4iFLIswzRol3swv+v6Aj7RWIUE26ip2pU37wC244zeIq6LHPEljPC5YUDMu9WEAZBQAEW6+TIS5PqHUS4uIiHotOVfiPCtEK9ejWhCYP49m6f6ibIbo7aE5wvIG6aivg4R5zBxnBCOJQsbac/FG0lwoj5ykwjDSqvgxIg6SnJfhWgm7af5pMBhu2igZd6recPhfO/JWmm6AFMiNrebL2eVDLLeI5xkXwS0E3bJC+aIbbgsTRRsfP8gYRxmO9fnxSEEd588yUolWp431gxydqHARZuatgRG2SL1Dqdx2LGnPBsSAjx4lq6MlOuRdMBe/aqNKSN3dSsXTQkbDWbncevBYwkgGTNFCK8w//qdYN+dLhMD2hoNLXriA0JE8S6kJGeO6VXZjYXlCaMpm2+JC+5qUkv1YX3Fti2k4Dd+XzB7lYY4s1qB4Qwn0A8VW/cELnpoP3mmjuwUXZTA0SD7glba7suYswzeTEOo9Ny7aISkXXTQTrBNeUO3QyoyWMoYgjv8SnElPGIYhyeFBOLaBweI0B5Es0JWbHwXPohg0i5KRTRZBaDQUwYn30sMw7Pr/LZb5wtrkCAnJu288KOORtGuymwI04IwXNtJduuE8ZhwTgZDnESwHsx9k9PIYBsNG3nUYs7wchM3UB+ub8Hny8VIHI65qLkZTes32KjaTsnvKJFZNwU1PT7PfictxAxZXw6lKw9adJE6XnaTYujtoz7PmUXqvQ1pz+Cr1tIEBPGjaeMjitmgFw0JWdtX9FuOmCnUfW9lG+w9iRFTBl/oBhXzAD5aNpGiFN1NM1U1JnB+qECMWOcFIXOihmgIOlvXSYVxPQNe7MW56ZaFbsGa8BKRJpxxRBQUJsOBtfXgnOa/JqGBjE0WMfXIKaMf/VxfxgYAopqU0FpKnJTNWK2jl/hJutt5rs69b8WUsYVQ0CrFoqYqiPO9mJA99MAEDPGRMcDU0DwhFRbtPSm6Iiz/TSW6UKMmDA2fzwAT6wWhKYTUkAVfZN9bUJrcYj1eqf5lzmiagFD56aKjrhrsjcRjtjsHIDKUcqquKm00cB7E4H7S2UmUvEH3W5+zqq5qQwR7y+1vEw3N4GKzc/mblolmkoR8R5h27qNGI9o4abg6X0xoASxZrJXX268ihZuuvDwwRpERpmbChHzvfo2TTBtj6q76XoQ7EMgpW4q6IjJeYsqOR9Zi0XsrBi66TpqmQGQkmiaITJJg5yZqZQRxYidv8zcdJ0cE9JCyt2U64jJuScXL3hgEJvPjNx0vbySqoFUuCmDWDq75uI1Mgxi56GBm66zxxTUkHJAuiMunT+sVJqKETsGldt6Q2BySJWbUr1U6Qxp5XzBIxq46XoBFUAglW5aRiyfA3bztiMKsfMV6Kbr+Yp48PVinz1yIoQcKPeGk2Vw6iy3EzelEaFuigHji2wF8oXg4BAHqXTTopeizuO7cVOvnPqbG9olmTJgvv7IHjkRQardlCDSdypU7C+IlVQEuWkOSK7qO+OORokglYC46WfuxahcffOInR/1borTBDmNUaudIsIgiuOYPV9DIDVuihFrNKGztzoRxOYGRVis23AKkrMKtfwcWLz/7sXZi2P+qBuC1Llp2vRz99NUbBJFiJ3bwk37w/OzqxtmZJJEHxNAdC1PvkB+KnDZDLKtAUwQuTuGHNSmxB7xboo2CtHHh4pET4bhXXZXRoNIuik8fpqkTd1xqXr9ZY0lrN5CEcMqltwUXxhyNRQCJr85/e9XN0E28uLiDlREGET0xQVB45kWsP6eI3SUEpEhxM4FdlOyU6O0f5Eu1eJgv4EjC9mlgg+gBPHtzenlReGwQfBMNwwTq/GELt8gh1QkbjrEqkyXJYCN0iFhsksFnZGOj5DP5gcZgYDvBYTuYk1qj0pu2j/AX3E2lAIWFpH10dtE1Jjw4iPhMMC66N5EZ3VNgdi5mFBOSiKNArARbKKtOaf7KeAN+XnoWD8Q8GVNRFh9MoNFbD5HFxGe42/IJeT6QRoxuju5PN5MT9gED4ufFxkA1neFhI5FzFRE29XRfkSyIVGlIGbEwZPcKZVnSiBgSUKDe4RtEDsfM6hhFizOhxAFKSvKuexIOBSw3pMQuhbRe4TdtL94OD28XgYqWBazgcbk9MgIsCyhwX3eNubXJ7hoGw6hLkojBpeHhydH2ak3MGB9V0roXERv9SMzq2gGiJqMyCSKshIa3atvYUv/GlYCLKsJBayr7tWfwatx+30BIFtpOgV8X1MROuuEc1t6OuEAo/jD5Sm5bsE1YJ0lYv7ZYYuBCH8r3BSnifgYBch3qguk7AHfawhd9okIkRwU5uZkZgLYZIGs3hVkRJi7aa5g8X6I0nKMO0DunVaW73syIPx+WFYwuCBfdIUnndK+MFbdJWUAyPlohXd2wRGzFe88ipa6vw9ZGo+PUlGnR9JBaQTIhhkxoe17jmWE6Yo3yYMF4TGak8GHbfLLlioCCl7vXOndeTDCxE2LRJ/3Q1e3qNIkk06SyGoG+FJAU/H9hyBEetJp/SSpND+ggVcKO3eZz0YxuXrBAlDgoxLCXad+uvT4S1yqYIpKs7hbCV/NEwXvzqbTw9vIDpCPo1JCx8Xb0qNnP3+JRPfRfSTfmJ7DjPNuML+H0FBBPo7KCV3n/e1O59nP+zELSQ7wTelJJ7wAZQi4LUZx9D5gnaVH3jqf/9hn6u3gQ1rAXb1Lh15peebSaE4m91Gz9wG7ThleOknd7DQ//9qgp6+jt6+/oKngaEq+/K1Zw4vM8J3O7vso/D+60/mdhswX74O35KtvjKYssIkHoYrQcVZsecSbOs3f/xvw7WGQf/G7DDAyAxRlQh2h62jjk1/TzCDZHjhC9ywevrZRUBJlNISuC1RqM0qzU/+FgYwadz/d7RtOOmGTRBkdofv507IlkBu//IeqBQKcNE0Bm8LXVQMIXQdUbgcjguSmbIwBZWFUT1jbcZwzBBumk1rg329jKroaBpn6WMmgJnSNKNrZjyC/ECWNFZTmCRCh67TYEi9Pp5A/r2ej0FhBDaCWsDaeQXEjg/xjPVHSrYIAQueIil+blK6/fnYMCCB0jNhSIGYFjwmg1kVhhK7Dja//4Q4BQYS1Pefr306syb6C257Q0Q5b14jKRG9IWBs5JeSKGxtTlmrmhEmn4VJGYeY3M0U3YUnouF+siijvB+0J3WYNSXEDNUgQNSd0HG+qIAom750Q1kZOB6M137ai361I6NRT1cWN3ACFWhXC2m7LnYxWxY263XVAmMRUdzKaIzbhMdSesNbznMlomvmbJiHGnnAWRxdgZjgCKxA6DKoGmX8bWKY5IUw6KkeuCq7fmur5JveEzlwVWNxYOWhFwtrIUVQFIL40yvHOCFNGJzrqEF/aDUAXhG501BQ31fgqE2Y6VhZSkfmr8jkgTBjHlRlliO8rjD+HhIntdCtCCjJ/c9s+fpbNDWEqZKUEyRc31d0TmyvCxHpVRiSV+ZsvQfOEMHNImNheAmlLSRBd4tVcEybWG3dXrSDRBcXvLboHtTknTGy0E3qmWqbPv3QROjmbBWFqo0RLfxWE6SfPdce9WdClNivCzBLMsNvykfGipdbqhrODy2ymhNhGvb2d8TgMu91uq+W1Wsnfw3A83tmbLRq2/wM0rmlSePGD7AAAAABJRU5ErkJggg==",
                    links:[
                        {
                            name:"DEMO",
                            url:"https://choice-maker.herokuapp.com/index.html"
                        }
                    ],
                    description:"HTML5 Application, help user to make a random choice!",
                    skills:[
                        {
                            name:"HTML"
                        },
                        {
                            name:"JavaScript"
                        },
                        {
                            name:"CSS"
                        }
                    ]
                },
                {
                    title:"Drizzle Environmental Society (Youth Environment Challenge Platform)",
                    imageUrl:"https://static1.squarespace.com/static/53f3ac53e4b02d7a9a62a7a2/t/592a76bfe58c62d37d000787/1520314519388/?format=1500w" ,
                    links:[
                        {
                            name:"Website",
                            url:"https://www.drizzlesociety.org/yec/"
                        }
                    ],                    
                    description:"By signing up to the YEC, user will be pledging to complete 10 environmentally-friendly actions over the course of the school year.",
                    skills:[
                        {
                            name:"JavaScript"
                        },
                        {
                            name:"PHP"
                        }
                        ,
                        {
                            name:"Boostrap"
                        }
                    ]
                },
                {
                    title:"QiiQ Healthcare",
                    imageUrl:"https://d1qb2nb5cznatu.cloudfront.net/startups/i/2235427-066b7f17af6aa13baa0a1d69941d4a8f-medium_jpg.jpg?buster=1473714483" ,
                    links:[
                        {
                            name:"Website",
                            url:"http://qiiqhealthcare.com/"
                        }
                    ],                    
                    description:"Nurse can use this application to take patient notes by detecting Radbeacon which is already setup for a particular patient and using voice to text.",
                    skills:[
                        {
                            name:"Firebase"
                        },
                        {
                            name:"Radbeacon"
                        },
                        {
                            name:"Android"
                        }
                    ]
                },
            ]
        }
    }
    render(){
        return (
            <div id="projects" className="h-100" >
                <article className="pa1 pa2-ns">
                <h1>PROJECTS</h1>
                    <div class="cf pa2">
                    {
                        this.state.projects.map((project) => 
                        <Modal key={project.title} project={project}/>)
                    }
                    </div>
                </article>
            </div>        
        )
    };
}
export default Projects;