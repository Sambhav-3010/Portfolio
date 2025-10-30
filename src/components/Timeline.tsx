import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline({mode}: {mode: string}) {
  return (
    <div id="history" className="pt-16">
      <div className="py-[5%] px-[10%] text-left flex flex-col justify-center lg:px-[5%]">
        <h1 className="text-white font-['Lato',_sans-serif]">My Journey</h1>
        <VerticalTimeline lineColor={mode === 'dark' ? 'white' : '#e0e0e0'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? 'white' : '#e0e0e0'}` }}
            dateClassName={`font-['Courier_Prime',_monospace] ${mode === 'dark' ? 'text-white' : 'text-[#272822]'}`}
            date="2023 - 2027"
            iconStyle={{ background: '#5000ca', color: '#272822' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} className="text-white" />}
          >
            <h3 className="text-[#272822]">K.J. Somaiya College of Engineering</h3>
            <h4 className="text-[#272822]">Mumbai, India</h4>
            <p className="text-[#272822]">
              B.Tech Computer Engineering, CGPA: 9.46
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? 'white' : '#e0e0e0'}` }}
            dateClassName={`font-['Courier_Prime',_monospace] ${mode === 'dark' ? 'text-white' : 'text-[#272822]'}`}
            date="July 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#272822' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="text-[#272822]">Co Lead - KJSCE - Somaiya Machine Learning Research Association</h3>
            <h4 className="text-[#272822]">Mumbai, India</h4>
            <p className="text-[#272822]">
              Led a team of developers to build and maintain the council website and led the council events and workshops
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? 'white' : '#e0e0e0'}` }}
            dateClassName={`font-['Courier_Prime',_monospace] ${mode === 'dark' ? 'text-white' : 'text-[#272822]'}`}
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#272822' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="text-[#272822]">Full-stack Developer Intern - Naareecollections</h3>
            <h4 className="text-[#272822]">Delhi, India</h4>
            <p className="text-[#272822]">
              Building a comprehensive e-commerce website for a startup, including product listings, cart functionality, and order tracking. Deployed the entire website along with the dashboard on hostinger
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: '#272822' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? 'white' : '#e0e0e0'}` }}
            dateClassName={`font-['Courier_Prime',_monospace] ${mode === 'dark' ? 'text-white' : 'text-[#272822]'}`}
            date="Nov 2024 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: '#272822' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className="text-[#272822]">Full-stack Developer Intern - ZecBay</h3>
            <h4 className="text-[#272822]">Mumbai, India</h4>
            <p className="text-[#272822]">
              Built a fully functional prototype and developed and integrated a reverse auction system that supported concurrent bids, aligning with import logistics use cases.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;