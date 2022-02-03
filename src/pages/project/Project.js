/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom"
import { useDocument } from '../../hooks/useDocument'
import { useFirestore } from "../../hooks/useFirestore"

// styles
import './Project.css'
import ProjectComments from "./ProjectComments";
import ProjectSummary from "./ProjectSummary";

export default function Project() {
  const { id } = useParams()
  const { document, error } = useDocument('projects', id)


  if (error) {
    return <div className="error">{error}</div>
  }
  if (!document) {
    return <div className="loading">Loading...</div>
  }


  return (

    <div className="project-details">
      <div>
        <ProjectSummary project={document} />
      </div>
      <div>
        <ProjectComments project={document} />
      </div>

    </div>
  )
}
