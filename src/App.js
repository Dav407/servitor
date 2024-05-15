import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './main/Home'
import About from './main/About'
import Blog from './main/Blog'
import Contact from './main/Contact'
import Services from './main/Services'
import Header from './components/Header'



const App = () => {
  return (
    <div>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

// import React from 'react'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Home from './main/Home'
// import About from './main/About'
// import Blog from './main/Blog'
// import Contact from './main/Contact'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>} />
//           <Route path='/about' element={<About/>} />
//           <Route path='/blog' element={<Blog/>} />
//           <Route path='/contact' element={<Contact/>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App