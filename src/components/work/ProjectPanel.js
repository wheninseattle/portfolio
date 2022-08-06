import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { projectPanel,projectPanelRow, projectVideo,projectInformation,projectName,projectDescription,projectStack } from './work.module.css';
import TestImage from '../../images/projects/DSC_2409.jpg';
import FridgeVideo from '../../images/projects/CommunityFridgeMap.mp4';
import { GatsbyImage } from 'gatsby-plugin-image';
const ProjectPanel = ({ projectInfo }) => {
    const { name, activeTime, url, github, stack, description, featuredImage } = projectInfo.frontmatter

    return (
        <div className={featuredImage===''? 'projectPanel projectPanelRow' : 'project panel'}>
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