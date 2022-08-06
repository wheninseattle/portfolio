import React from 'react';
import { projectVideo,projectInformation,projectName,projectDescription,projectStack } from './work.module.css';
import FridgeVideo from '../../images/projects/CommunityFridgeMap.mp4';
const ProjectPanel = ({ projectInfo }) => {
    const { name, activeTime, url, github, stack, description, featuredImage } = projectInfo.frontmatter

    return (
        <div className={featuredImage===''? 'project-panel project-panel-row' : 'project-panel'}>
            <div className={projectInformation}>
                <div className={projectName}>
                    {name}
                </div>
                <div className={projectStack}>
                    {stack}
                </div>
                <br />
                <div className={projectDescription}>
                    {description}
                </div>

            </div>
            {name === 'Community Fridges' ? <video className={projectVideo} autoplay muted loop controls>
                <source src={FridgeVideo} type='video/mp4' />
            </video> : null}
        </div>
    );
}

export default ProjectPanel;    