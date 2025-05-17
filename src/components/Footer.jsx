// src/components/Footer.jsx

function Footer() {
    return (
      <footer className="bg-rt-black text-rt-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-sm">
          {/* Logo ou nome do escritório */}
          <div>
            <h4 className="text-xl font-bold mb-4">Rodi & Torraca</h4>
            <p className="text-gray-400">
              Advocacia com excelência e compromisso, atendendo com ética e responsabilidade.
            </p>
          </div>
  
          {/* Links úteis */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Links úteis</h5>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline text-gray-300">Quem Somos</a></li>
              <li><a href="#areas" className="hover:underline text-gray-300">Áreas de Atuação</a></li>
              <li><a href="#contato" className="hover:underline text-gray-300">Contato</a></li>
            </ul>
          </div>
  
          {/* Contato rápido */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Contato</h5>
            <p className="text-gray-300">WhatsApp: <a href="https://wa.me/SEUNUMEROAQUI" className="hover:underline">(XX) XXXXX-XXXX</a></p>
            <p className="text-gray-300">E-mail: <a href="mailto:contato@rodietorraca.com.br" className="hover:underline">contato@rodietorraca.com.br</a></p>
            <p className="text-gray-300">Endereço: Rua Exemplo, 123 - Itajaí/SC</p>
          </div>
        </div>
  
        <div className="mt-12 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Rodi & Torraca Advocacia. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  
  export default Footer;
  