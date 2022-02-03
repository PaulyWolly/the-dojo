import { Link } from 'react-router-dom'
import Avatar from '../components/Avatar'

// styles
import './ProjectList.css'

export default function ProjectList({ projects }) {
  //console.log(projects)

  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
  //const  theDueDate = document.dueDate.toDate().toLocaleDateString('en-us', options)

  return (
    <div className="project-list">
      {projects.length === 0 && <p>No projects yet!</p>}
      {projects.map(project => (
        <Link to={`/projects/${project.id}`} key={project.id}>
          <h4>{project.name}</h4>
          <p>Due by {project.dueDate.toDate().toLocaleDateString('en-us', options)}</p>
          <div className="assigned-to">
            <p><strong>Assigned to:</strong></p>
            <ul>
              {project.assignedUsersList.map(user => (
                <li key={user.photoURL}>
                  <Avatar src={user.photoURL} />
                </li>
              ))}
            </ul>
          </div>
        </Link>
      ))}
    </div>
  )
}
