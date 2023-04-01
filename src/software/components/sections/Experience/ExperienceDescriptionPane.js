import { Close } from "../../../../images/SVGs";
import Skills from "../Skills/Skills"
import styles from "./Experience.module.scss"

function ExperienceDescriptionPane(props) {
    const close = (event) => {
        event.stopPropagation()
        props.handleClose()
    }
    return (
        <div className={[styles.experienceDescriptionPane, props.jobTitle ? `${styles.slideIn} ${styles.slider} ${styles.experienceModal}` : ""].join(" ")}>
            {props.jobTitle ?       
                <>
                    <div className={styles.closeButton} onClick={close}><Close/></div>
                    <div>
                        <h2>{props.jobTitle}</h2>
                        <h4>{props.employer} - {props.duration}</h4>

                        <div className={styles.description}>
                            { props.description }
                        </div>
                    </div>

                    {props.skills.length > 0 ? 
                        <div>
                            <h3>Technologies:</h3>
                            <br/>
                            <Skills skills={props.skills}/>
                        </div>
                        : null
                    }
                </>      
            : null
            }    

        </div>
    )
}

export default ExperienceDescriptionPane;