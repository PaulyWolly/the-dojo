import { useCollection } from '../../hooks/useCollection'
import ProjectFilter from './ProjectFilter'

// components
import ProjectList from '../../components/ProjectList'

// styles
import './Dashboard.css'

export default function Dashboard() {

  // listener to the collection
  const { documents, error } = useCollection('projects')

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {documents && <ProjectFilter />}
      {documents && <ProjectList projects={documents} />}
    </div>
  )
}
