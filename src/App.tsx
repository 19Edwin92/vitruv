import * as Pages from './pages'
import * as Router from 'react-router-dom'

function App() {
  return (
    <Router.Routes>
      <Router.Route path='/' element={<Pages.Home />}>
        <Router.Route index element={<Pages.Total />} />
        <Router.Route path='/class2' element={<Pages.SecondClass />} />
      </Router.Route>
    </Router.Routes>
  )
}

export default App