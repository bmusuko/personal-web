import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Typography from '@material-ui/core/Typography';
import ExperienceData from '../../static/experience';
import './Experience.css';

const styles = {
    project: {
        paddingTop: '1rem',
        color: '#363636',
        fontWeight: 'bolder',
    },
}


const timelineElement = ExperienceData.map((exp)=>{
    return(
        <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: exp.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)', color: '#fff ' }}
        contentArrowStyle={{ borderRight: `7px solid  ${exp.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)'}` }}
        date={exp.date}
        iconStyle={{ background: exp.type === 'education' ? 'rgb(233, 30, 99)' : 'rgb(33, 150, 243)', color: '#fff' }}
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
    console.log(timelineElement);

    return(
        <React.Fragment>
            <Typography variant="h4" style={styles.project}>
                Experience
            </Typography>
            <VerticalTimeline>
                {timelineElement}
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#ffffff' }}
                icon={<StarIcon />}/>
            </VerticalTimeline>
        </React.Fragment>
    )
}

 export default Experience;


//  <VerticalTimelineElement
//  className="vertical-timeline-element--work"
//  contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
//  date="2011 - present"
//  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  icon={<WorkIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Creative Director</h3>
//  <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
//  <p>
//  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--work"
//  date="2010 - 2011"
//  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  icon={<WorkIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Art Director</h3>
//  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//  <p>
//  Creative Direction, User Experience, Visual Design, SEO, Online Marketing
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--work"
//  date="2008 - 2010"
//  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  icon={<WorkIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Web Designer</h3>
//  <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
//  <p>
//  User Experience, Visual Design
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--work"
//  date="2006 - 2008"
//  iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
//  icon={<WorkIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Web Designer</h3>
//  <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
//  <p>
//  User Experience, Visual Design
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--education"
//  date="April 2013"
//  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//  icon={<SchoolIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
//  <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
//  <p>
//  Strategy, Social Media
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--education"
//  date="November 2012"
//  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//  icon={<SchoolIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
//  <h4 className="vertical-timeline-element-subtitle">Certification</h4>
//  <p>
//  Creative Direction, User Experience, Visual Design
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  className="vertical-timeline-element--education"
//  date="2002 - 2006"
//  iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
//  icon={<SchoolIcon />}
// >
//  <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
//  <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
//  <p>
//  Creative Direction, Visual Design
//  </p>
// </VerticalTimelineElement>
// <VerticalTimelineElement
//  iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
//  icon={<StarIcon />}
// />