function SectionTitle({ eyebrow, title, className = '' }) {
  return (
    <div className={`text-center ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c9964a]">{eyebrow}</p>
      <h2 className="font-display mt-2 text-3xl font-semibold text-[#0d1b2a] dark:text-white md:text-[34px]">{title}</h2>
      <div className="mx-auto mt-3 h-px w-20 bg-[#c9964a]" />
    </div>
  );
}

export default SectionTitle;
