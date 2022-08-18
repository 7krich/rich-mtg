import React from 'react';
import { IoMdSchool } from 'react-icons/io';
import { AiFillBank } from 'react-icons/ai';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    return (
        <main>
            <VerticalTimeline
                lineColor={ 'rgb(11, 123, 174)' }
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(11, 123, 174)', color: 'white', 'border-radius': '25px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(11, 123, 174)' }}
                    date="2016 - 2018"
                    dateClassName={ 'date-class' }
                    iconStyle={{ background: 'rgb(11, 123, 174)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Bachelors of Arts, Economics</h3>
                <h4 className="vertical-timeline-element-subtitle">University of Maryland - College Park</h4>
                <h4 className="vertical-timeline-element-subtitle">Minor - Sustainability</h4>
                <p>
                    Financial Markets, Business Statistics, Economic Geography, Game Theory, 
                </p>
                <p>
                    The university laid a foundation of knowledge that expands beyond financial markets. This helped instill fundamental values of cost benefit analysis on an individual and market level. Human decision making is driven by incentives. These incentives lead our core values of doing right by our clients so they come back and enjoy their experience. It also ensures that we help you make the right moves during life's most important moments.
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2020"
                    iconStyle={{ background: 'rgb(11, 123, 174)', color: '#fff' }}
                    icon={<AiFillBank />}
                >
                <h3 className="vertical-timeline-element-title">Mortgage Loan Originator</h3>
                <h4 className="vertical-timeline-element-subtitle">NewDay USA</h4>
                <p>
                    Processed and closed over $1.5 million in loan volume monthly.
                </p>
                <p>
                    Spent over a year working on a dedicated team working to restructure and revive loans that were denied or withdrawn previously.
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020 - 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<AiFillBank />}
                >
                <h3 className="vertical-timeline-element-title">Senior Banker</h3>
                <h4 className="vertical-timeline-element-subtitle">Rocket Mortgage</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<IoMdSchool />}
            />
            </VerticalTimeline>
        </main>
        
    )
}

export default About;