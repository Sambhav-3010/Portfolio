import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline({mode}: {mode: string}) {
  return (
    <div id="history" className="py-16 w-full flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-12">
        <h2 className={`text-4xl font-extrabold text-center mb-12 ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          My Journey
        </h2>
        <VerticalTimeline lineColor={mode === 'dark' ? '#4a5568' : '#cbd5e0'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: mode === 'dark' ? '#2d3748' : '#ffffff', color: mode === 'dark' ? '#ffffff' : '#2d3748', boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? '#2d3748' : '#ffffff'}` }}
            dateClassName={`font-mono text-sm md:text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            date="2023 - 2027"
            iconStyle={{ background: '#5000ca', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} className="text-white" />}
          >
            <h3 className={`vertical-timeline-element-title text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>K.J. Somaiya College of Engineering</h3>
            <h4 className={`vertical-timeline-element-subtitle text-md font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Mumbai, India</h4>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              B.Tech Computer Engineering, CGPA: 9.46
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: mode === 'dark' ? '#2d3748' : '#ffffff', color: mode === 'dark' ? '#ffffff' : '#2d3748', boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? '#2d3748' : '#ffffff'}` }}
            dateClassName={`font-mono text-sm md:text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            date="July 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className={`vertical-timeline-element-title text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Co Lead - KJSCE - Somaiya Machine Learning Research Association</h3>
            <h4 className={`vertical-timeline-element-subtitle text-md font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Mumbai, India</h4>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Led a team of developers to build and maintain the council website and led the council events and workshops
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: mode === 'dark' ? '#2d3748' : '#ffffff', color: mode === 'dark' ? '#ffffff' : '#2d3748', boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? '#2d3748' : '#ffffff'}` }}
            dateClassName={`font-mono text-sm md:text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            date="June 2025 - Present"
            iconStyle={{ background: '#5000ca', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className={`vertical-timeline-element-title text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Full-stack Developer Intern - Naareecollections</h3>
            <h4 className={`vertical-timeline-element-subtitle text-md font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Delhi, India</h4>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Building a comprehensive e-commerce website for a startup, including product listings, cart functionality, and order tracking. Deployed the entire website along with the dashboard on hostinger
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: mode === 'dark' ? '#2d3748' : '#ffffff', color: mode === 'dark' ? '#ffffff' : '#2d3748', boxShadow: '0 3px 0 rgba(0, 0, 0, 0.1)' }}
            contentArrowStyle={{ borderRight: `7px solid ${mode === 'dark' ? '#2d3748' : '#ffffff'}` }}
            dateClassName={`font-mono text-sm md:text-base ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
            date="Nov 2024 - Jan 2025"
            iconStyle={{ background: '#5000ca', color: '#ffffff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} className="text-white" />}
          >
            <h3 className={`vertical-timeline-element-title text-xl font-bold ${mode === 'dark' ? 'text-white' : 'text-gray-900'}`}>Full-stack Developer Intern - ZecBay</h3>
            <h4 className={`vertical-timeline-element-subtitle text-md font-medium ${mode === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Mumbai, India</h4>
            <p className={`text-base ${mode === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Built a fully functional prototype and developed and integrated a reverse auction system that supported concurrent bids, aligning with import logistics use cases.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
