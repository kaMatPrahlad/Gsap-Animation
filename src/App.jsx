import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import VideoCarousal from './components/VideoCarousel.jsx'

const App = () => {
  return (
    <main className='bg-black'>
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousal />

    </main>
  )
}

export default App