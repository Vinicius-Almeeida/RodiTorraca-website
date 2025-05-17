const colorMap = {
    black: 'from-[#000000]',
    white: 'from-rt-white',
    gray: 'from-rt-gray',
    gold: 'from-rt-gold',
    blue: 'from-rt-blue',
    // adicione mais se precisar
  };
  
  const toColorMap = {
    black: 'to-[#000000]',
    white: 'to-rt-white',
    gray: 'to-rt-gray',
    gold: 'to-rt-gold',
    blue: 'to-rt-blue',
  };
  
  function SectionTransition({ from = 'white', to = 'black', height = 'h-12', blur = false }) {
    const fromClass = colorMap[from] || `from-${from}`;
    const toClass = toColorMap[to] || `to-${to}`;
    const blurClass = blur ? 'blur-sm' : '';
  
    return (
      <div className={`${height} bg-gradient-to-b ${fromClass} ${toClass} ${blurClass}`} />
    );
  }
  
  export default SectionTransition;
  