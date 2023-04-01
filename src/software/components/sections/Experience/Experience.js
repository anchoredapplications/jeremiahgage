import { useState } from 'react'
import Section from '../../Section';
import ExperiencePaneList from './ExperiencePaneList';
import ExperienceDescriptionPane from './ExperienceDescriptionPane';
import styles from './Experience.module.scss'

function Experience(props) {
    const nullExperience = {
        jobTitle: null, 
        jobType: null,
        employer: null,
        displayDate: null,
        duration: null, 
        location: null,
        description: null,
        skills: []
    }
    var [selectedExperience, setSelectedExperience] = useState(nullExperience);
    const handleClick = (value) => {
        if (value.jobTitle !== selectedExperience.jobTitle) {
            setSelectedExperience(nullExperience);
            setTimeout(() => {
                setSelectedExperience(value);
            }, selectedExperience ? 100 : 0)
        }
    }

    return (
        <Section
            heading="experience"
            demoPath="/repos/anchoredapplications/jeremiahgage/contents/src/Components/Software/Experience/"
            footerPath="/blob/master/src/Components/Software/Experience/Experience.js"
            description={props.descriptions.experience}
        >
            <div className={styles.experiences}>
                <ExperiencePaneList experiences={props.experiences} handleClick={handleClick}/>
                <ExperienceDescriptionPane handleClose={() => {handleClick(nullExperience)}}
                    jobTitle={selectedExperience.jobTitle}
                    jobType={selectedExperience.jobType}
                    employer={selectedExperience.employer}
                    displayDate={selectedExperience.displayDate}
                    duration={selectedExperience.duration} 
                    location={selectedExperience.location}
                    description={selectedExperience.description}
                    skills={selectedExperience.skills}
                />
            </div>
        </Section>
    );
}

export default Experience;