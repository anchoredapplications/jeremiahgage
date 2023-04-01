
import styles from "./Experience.module.scss"
import {FormatDateTimeAsString, FormatDurationAsString} from '../../../system'

function ExperiencePane(props) {
    const startDate = FormatDateTimeAsString(props.startDate);
    const endDate = props.endDate ? FormatDateTimeAsString(props.endDate) : 'Present';
    const duration = props.endDate ? FormatDurationAsString(props.startDate, props.endDate) : FormatDurationAsString(props.startDate, new Date())
    const experience = {
        jobTitle: props.title, 
        jobType: props.jobType,
        employer: props.employer,
        displayDate: `${startDate} - ${endDate}`,
        duration: duration, 
        location: props.location,
        description: props.description,
        skills: props.skills
    }
    const emitDescription = (event) => {
        event.stopPropagation(); 
        props.handleClick(experience)
    }

    return (
        <div className={[styles.experiencePane, styles.experienceModal].join(" ")} onClick={emitDescription}>
            <table>
                <tbody>
                    <tr>
                        <td><h3>{props.title}</h3></td>
                        <td><h4>{startDate} - {endDate}</h4></td>
                    </tr>
                    <tr>
                        <td><h4>{props.employer}</h4></td>
                        <td>
                            <h5>
                                {duration} · {props.jobType}
                            </h5>
                        </td>
                    </tr>
                    <tr>
                        <td><h5>{props.location}</h5></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ExperiencePane;