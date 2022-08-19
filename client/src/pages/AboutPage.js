import React from 'react';
import { IoMdSchool, IoIosRocket } from 'react-icons/io';
import { AiFillBank } from 'react-icons/ai';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    return (
        <main>
            <div className="intro">
                <h1 className="header">
                    Our Story
                </h1>
            </div>
            <VerticalTimeline
                lineColor={ 'rgb(74, 74, 74)' }
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--school"
                    contentStyle={{ background: 'rgb(2, 170, 161)', color: 'white', 'border-radius': '25px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(2, 170, 161)' }}
                    date="2016 - 2018"
                    dateClassName={ 'date-class' }
                    iconStyle={{ background: 'rgb(2, 170, 161)', color: '#fff' }}
                    icon={<IoMdSchool />}
                >
                <h3 className="vertical-timeline-element-title">University of Maryland - College Park</h3>
                <p>
                    Our founder, Kyle Richnafsky, completes a Bachelors Degree in Economics which lays a foundation of financial literacy and efficient decision-making. The experiences here expand beyond financial markets by instilling the fundamental values of cost benefit analysis on an individual and market level. It's made abundantly clear that human decision making is driven by incentives. These incentives lead our core values of doing right by our clients, so they come back and enjoy their experience. It also ensures that we help you make the right moves during life's most important moments.
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(11, 123, 174)', color: 'white', 'border-radius': '25px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(11, 123, 174)' }}
                    date="2018 - 2020"
                    dateClassName={ 'date-class' }
                    iconStyle={{ background: 'rgb(11, 123, 174)', color: '#fff' }}
                    icon={<AiFillBank />}
                >
                <h3 className="vertical-timeline-element-title">Mortgage Loan Originator</h3>
                <h4 className="vertical-timeline-element-subtitle">NewDay USA</h4>
                <p>
                    Kyle's first foray into mortgage lending provided experiences good and bad. This was a career springboard and a positive experience, but not a place to spend a lifetime. During this time Kyle encountered new clients and processed loans with efficiency. Spending the full life cycle of a loan with the client was a positive experience and provided a deeper understanding of the do's and dont's in the mortgage industry. Here he also spent over a year working on a dedicated team working to restructure and revive loans that were previously denied or withdrawn. This means we know the guidelines in and out, how to identify common pitfalls and solve obstacles that arise.
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(2, 170, 161)', color: 'white', 'border-radius': '25px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(2, 170, 161)' }}
                    date="2020 - 2021"
                    dateClassName={ 'date-class' }
                    iconStyle={{ background: 'rgb(2, 170, 161)', color: '#fff' }}
                    icon={<IoIosRocket />}
                >
                <h3 className="vertical-timeline-element-title">Senior Banker</h3>
                <h4 className="vertical-timeline-element-subtitle">Rocket Mortgage</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(2, 170, 161)', color: 'white', 'border-radius': '25px' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(2, 170, 161)' }}
                    date="2021 - 2022"
                    dateClassName={ 'date-class' }
                    iconStyle={{ background: 'rgb(2, 170, 161)', color: '#fff' }}
                    icon={<IoIosRocket />}
                >
                <h3 className="vertical-timeline-element-title">Credit Underwriter</h3>
                <h4 className="vertical-timeline-element-subtitle">Rocket Mortgage</h4>
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