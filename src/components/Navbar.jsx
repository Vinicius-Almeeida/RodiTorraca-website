function Navbar() {
    return (
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold">Rodi & Torraca</span>
          <ul className="flex gap-6 text-sm">
            <li><a href="#quem-somos" className="hover:text-blue-600">Quem Somos</a></li>
            <li><a href="#areas" className="hover:text-blue-600">Áreas</a></li>
            <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Navbar;
  