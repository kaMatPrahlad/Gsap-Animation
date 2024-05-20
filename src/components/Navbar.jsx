import { appleImg, searchImg } from '../utils'

const Navbar = () => {
  return (
    <header className='w-full p-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width '>
        <img src={appleImg} width={14} height={18} />

        <div>
          {[
            'Phones, Mackbooks, Tablets'
          ].map((nav) => (
            <div key={nav}>
              {nav}
            </div>

          ))}
        </div>
        <div>
          <img src={searchImg} alt="search" width={18}/>
        </div>
      </nav>
    </header>
  )
}

export default Navbar