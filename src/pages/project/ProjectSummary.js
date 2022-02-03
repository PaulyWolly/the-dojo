/* eslint-disable no-unused-vars */
import React from 'react';
import Avatar from '../../components/Avatar';
import { useFirestore } from '../../hooks/useFirestore';
import { useAuthContext } from '../../hooks/useAuthContext'
import { useHistory } from 'react-router-dom'

const ProjectSummary = ({ project }) => {

  const { dueDate, deleteDocument } = useFirestore('projects')
  const { user } = useAuthContext()
  const history = useHistory()

  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const theDueDate = project.dueDate.toDate().toLocaleDateString('en-us', options)

  const handleDelete = (e) => {
    deleteDocument(project.id)
    setTimeout(() => {
      history.push('/')
    }, 2000);

  }

  return (
    <div>
      <div className='project-summary'>
        <h2 className='page-title'>{project.name}</h2>
          <p>By {project.createdBy.displayName}</p>
          <p>{project.details}</p>
          <p>&nbsp;</p>
          <p className='due-date'>Due date:&nbsp;  <span className="dueDate-style">{theDueDate}</span></p>
          <div className="assigned-users">
              <h4>Project is assigned to:</h4>
              {project.assignedUsersList.map(user => (
                <div key={user.id}>
                  <Avatar src={user.photoURL} />
                </div>
              ))}
          </div>
      </div>
          {user.uid === project.createdBy.id && (
            <button className="btn" onClick={handleDelete}>Mark as Complete</button>
          )}
    </div>
  );
};

export default ProjectSummary;
