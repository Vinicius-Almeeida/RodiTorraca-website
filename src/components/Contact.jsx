// src/components/Contact.jsx

function Contact() {
    return (
      <section id="contato" className="py-24 px-6 bg-rt-white text-rt-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Contato</h2>
  
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulário */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block mb-1 font-medium">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block mb-1 font-medium">Mensagem</label>
                  <textarea
                    id="mensagem"
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
  
            {/* Informações de Contato */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Fale Conosco</h3>
                <p><strong>WhatsApp:</strong> <a href="https://wa.me/SEUNUMEROAQUI" target="_blank" className="text-blue-600 hover:underline">(XX) XXXXX-XXXX</a></p>
                <p><strong>E-mail:</strong> <a href="mailto:contato@rodietorraca.com.br" className="text-blue-600 hover:underline">contato@rodietorraca.com.br</a></p>
                <p><strong>Telefone:</strong> (XX) XXXX-XXXX</p>
              </div>
  
              <div>
                <h3 className="text-xl font-semibold mb-2">Endereço</h3>
                <p>Rua Exemplo, 123 - Centro<br />Itajaí - SC, 88301-000</p>
              </div>
  
              <div>
                <iframe
                  title="Localização"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.561354!2d-48.6563!3d-26.9105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzM3LjgiUyA0OMKwMzknMjMuMiJX!5e0!3m2!1spt-BR!2sbr!4vXXXXXXXX"
                  className="w-full h-64 border-0 rounded-md"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;