import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./fontawesome";

export const About = () => {
    return (
        <>
            <div className="container text-center about-center">
                <h2>Make your To-Do lists and keep a track of your tasks to be done.</h2>
                <h2 className="py-5">Find me on</h2>

            </div>

            <div className="container contact">
                <div className="row">
                    <div className="col text-center">
                        <a target="_blank" href="https://github.com/Raghav3095" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
                        </a>
                        <h4>Github</h4>
                    </div>
                    <div className="col text-center">
                        <a target="_blank" href="https://www.linkedin.com/in/raghav-awasty/" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={['fab', 'linkedin']} size="3x" />
                        </a>
                        <h4>LinkedIn</h4>
                    </div>
                    <div className="col text-center">
                        <a target="_blank" href="https://www.freecodecamp.org/raghawasty" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={['fab', 'free-code-camp']} size="3x" />
                        </a>
                        <h4>freecodecamp</h4>
                    </div>
                    <div className="col text-center">
                        <a target="_blank" href="https://codepen.io/RaghavAwasty" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={['fab', 'codepen']} size="3x" />
                        </a>
                        <h4>Codepen</h4>
                    </div>
                    <div className="col text-center">
                        <a target="_blank" href="https://twitter.com/Rawasty" rel="noopener noreferrer" className="icon-link">
                            <FontAwesomeIcon icon={['fab', 'twitter']} size="3x" />
                        </a>
                        <h4>Twitter</h4>
                    </div>
                </div>
            </div>

        </>

    )
}
