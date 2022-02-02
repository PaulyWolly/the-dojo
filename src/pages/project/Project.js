/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import { useFirestore } from "../../hooks/useFirestore"

// styles
import './Project.css'

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)
  const { dueDate } = useFirestore('projects')


  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }

  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  const  theDueDate = document.dueDate.toDate().toLocaleDateString('en-us', options)

  return (

    <div className="project-details">
      <div>
        <h1>{document.name}</h1>
        <p>{document.details}</p>
        <p>&nbsp;</p>
        <small>Due date:&nbsp;  <b>{theDueDate}</b></small>
      </div>

    </div>
  )
}
