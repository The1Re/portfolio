
function Navbar() {
  return (
    <nav className="w-full flex justify-between bg-navbar p-4 lg:px-48 py-8 sticky top-0 z-10">
        <div className="nav-left">
            <span className="text-3xl font-bold text-primary">Port<span className="text-white">folio</span></span>
        </div>
        <div className="nav-right flex space-x-10 items-center">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Skill">Skill</a>
            <a href="#Experience">Experience</a>
            <a href="#Contact">Contact</a>
        </div>
    </nav>
  )
}

export default Navbar