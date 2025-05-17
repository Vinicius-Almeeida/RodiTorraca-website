// src/components/PracticeAreas.jsx
import { useState } from 'react';
import { Briefcase, Users, FileText, Gavel, ShieldCheck, Handshake, Banknote } from 'lucide-react';

const areas = [
  {
    id: 1,
    icon: <Gavel size={32} />,
    title: 'Assessoria Judicial',
    summary: 'Atuação estratégica e personalizada na esfera judicial.',
    details:
      'Prestamos apoio técnico completo na condução de ações judiciais, com foco em resultados concretos e defesa qualificada dos interesses do cliente.',
  },
  {
    id: 2,
    icon: <ShieldCheck size={32} />,
    title: 'Direito do Consumidor',
    summary: 'Defesa de direitos em relações de consumo.',
    details:
      'Aconselhamento jurídico e atuação em demandas contra práticas abusivas, cobranças indevidas e descumprimentos contratuais.',
  },
  {
    id: 3,
    icon: <Briefcase size={32} />,
    title: 'Direito Trabalhista',
    summary: 'Representação em ações individuais e coletivas.',
    details:
      'Experiência sólida em ações trabalhistas, tanto no âmbito empresarial quanto individual, garantindo segurança jurídica.',
  },
  {
    id: 4,
    icon: <FileText size={32} />,
    title: 'Direito Contratual Civil',
    summary: 'Elaboração e análise de contratos civis e empresariais.',
    details:
      'Atuamos na prevenção e solução de litígios envolvendo contratos de prestação de serviço, locações, parcerias comerciais e obrigações.',
  },
  {
    id: 5,
    icon: <Users size={32} />,
    title: 'Direito de Família e Sucessões',
    summary: 'Atuação sensível e técnica em conflitos familiares.',
    details:
      'Auxiliamos em divórcios, guarda, pensão, inventários e partilhas com foco em soluções equilibradas e humanas.',
  },
  {
    id: 6,
    icon: <Handshake size={32} />,
    title: 'Direito Condominial',
    summary: 'Gestão jurídica preventiva e contenciosa.',
    details:
      'Atendimento a síndicos, administradoras e condôminos em questões legais envolvendo convenções, inadimplência e mediações.',
  },
  {
    id: 7,
    icon: <Banknote size={32} />,
    title: 'Cobranças',
    summary: 'Recuperação de créditos de forma legal e eficaz.',
    details:
      'Atuamos na cobrança judicial e extrajudicial, buscando o recebimento célere e eficiente de valores devidos.',
  },
];

function PracticeAreas() {
  const [selectedArea, setSelectedArea] = useState(null);

  return (
    <section id="areas" className="py-24 px-6 bg-rt-gray text-rt-black">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Áreas de Atuação</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area) => (
            <div
              key={area.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="mb-4 text-blue-600">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.summary}</p>
              <button
                onClick={() => setSelectedArea(area)}
                className="text-blue-600 hover:underline font-medium"
              >
                Saiba mais
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArea && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white max-w-3xl w-[90%] p-8 rounded-xl shadow-lg relative animate-fade-in-scale">
            <button
              onClick={() => setSelectedArea(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">
              {selectedArea.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{selectedArea.details}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default PracticeAreas;
