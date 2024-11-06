import React, { useState, useEffect } from 'react';
import "../CSS/projectinfo.css";
import { ProjectData } from '../Components/data/Projects';
import { useParams } from 'react-router-dom';

const ProjectInfo = () => {
  const { projectId } = useParams();
  const [selectedProject, setSelectedProject] = useState(projectId || ProjectData[0].id);

  useEffect(() => {
    setSelectedProject(projectId);
  }, [projectId]); 

  return (
    <div className='project_info_page'>
      <div className='project_side_navigation'>
        {ProjectData.map((project) => (
          <div 
            key={project.id} 
            className={`project_image ${selectedProject === project.id  ? 'sidebar_active' : ''}`}
            onClick={() => setSelectedProject(project.id)}
          >
           <p style={{fontWeight:"700", fontSize:17}}> {project.name}</p>
            
          </div>
        ))}
      </div>
      <div className='project_infocard_section'>
        {selectedProject && (
          <div className='project_info_card'>
            <div className='project_info_text'>
              <h1>{ProjectData[selectedProject - 1].name}</h1>
              <h3>Duration: {ProjectData[selectedProject - 1].duration}</h3>
              <div>
                <p>Description: {ProjectData[selectedProject - 1].description}</p>
                <p>Stack: {JSON.stringify(ProjectData[selectedProject - 1].stack)}</p>
                <p>Problem Faced: {ProjectData[selectedProject - 1].issues_faced}</p>
                <p>Problem Solution: {ProjectData[selectedProject - 1].issue_solution}</p>
              </div>
            </div>
            <div className='project_info_image'>
            <img src={ProjectData[selectedProject - 1].image} alt={ProjectData[selectedProject - 1].name} className='selected_project_image' />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectInfo;
