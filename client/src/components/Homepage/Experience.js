import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from '@material-ui/core/Typography';
import ExperienceData from '../../static/experience';
import './Experience.css';
import colors from '../../static/dracula';


const styles = {
    project: {
        paddingTop: '1rem',
        paddingBottom: '1rem',
        color: colors.Foreground,
        fontWeight: 'bolder',
    },
}


const timelineElement = ExperienceData.map((exp)=>{
    return(
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: exp.type === 'education' ? colors.Comment : colors.Selection, color: colors.Foreground }}
        contentArrowStyle={{ borderRight: `7px solid  ${exp.type === 'education' ? colors.Comment : colors.Selection}` }}
        date={exp.date}
        iconStyle={{ background: exp.type === 'education' ? colors.Comment : colors.Selection, color: colors.Foreground }}
        icon={exp.type === 'education' ? <SchoolIcon />  : <WorkIcon /> }
        style={{boxShadow:'0!important'}}
    >
        <h3 className="vertical-timeline-element-title">{exp.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
        <p>
        {exp.location}
        </p>
    </VerticalTimelineElement>
)})


function Experience(){
    return(
        <React.Fragment>
            <Typography variant="h4" style={styles.project}>
                Experience
            </Typography>
            <VerticalTimeline>
                {timelineElement}
                <VerticalTimelineElement
                    iconStyle={{ background: colors.Pink, color: colors.Foreground }}
                icon={<StarIcon />}/>
            </VerticalTimeline>
        </React.Fragment>
    )
}

 export default Experience;
 