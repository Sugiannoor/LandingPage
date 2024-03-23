import { LandingPageLayout } from '@/layout/LandingPageLayout'
import { Home } from '@/pages/Home'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPageLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    </Routes>
  )
}
