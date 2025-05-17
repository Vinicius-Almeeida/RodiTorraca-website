import { useEffect, useRef } from 'react';

function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      section.style.setProperty('--x', `${x}px`);
      section.style.setProperty('--y', `${y}px`);
    };
    section.addEventListener('mousemove', handleMouseMove);
    return () => section.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-metal-mouse text-rt-white flex flex-col justify-center items-center text-center pt-24 px-4"
    >
      <h1 className="text-5xl font-bold tracking-wide">Rodi & Torraca</h1>
      <p className="text-xl text-rt-gray mt-4 max-w-xl">
        Advocacia de excelência com atuação ética e estratégica em Itajaí-SC
      </p>
      <a
        href="#contato"
        className="mt-8 px-6 py-3 rounded-md bg-rt-gold text-rt-black font-semibold hover:bg-rt-white hover:text-rt-gold transition"
      >
        Agende uma Consulta
      </a>
    </section>
  );
}

export default Hero;
