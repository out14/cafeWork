import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RootLayout } from '@/components/layout/root-layout'
import { CafeList } from '@/pages/cafeList'

import { HomePage } from '@/pages'
import { BookMark } from './pages/bookmark'
// import { FormPage } from '@/pages/form'
// import { PostsPage } from '@/pages/posts'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* 
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/form" element={<FormPage />} /> 
          */}
          <Route path="/cafeList" element={<CafeList />} />
          <Route path="/bookmark" element={<BookMark />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
