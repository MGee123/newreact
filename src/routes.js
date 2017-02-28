import Route from './components/app/route'

import Landing from './components/landing'
import ReactTasks from './components/reactTasks'
import ImportExportTasks from './components/importExportTasks'
import Banana from './components/importExportTasks/banana'
import Apple from './components/importExportTasks/apple'
import MyFunction from './components/importExportTasks/myfunction'
import Fruits from './components/importExportTasks/fruits'
export const routes = [
  { path: 'reactTasks', component: ReactTasks },
  { path: 'importExportTasks', component: ImportExportTasks }, { path: 'importExportTasks', component: Banana }, { path: 'apple', component: Apple }, { path: 'myfunction', component: MyFunction }, { path: 'fruits', component: Fruits }
]

export default {
  path: '/',
  component: Route,
  indexRoute: { component: Landing },
  childRoutes: routes
}
