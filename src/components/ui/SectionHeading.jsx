export default function SectionHeading({
  align,
  minititle,
  title,
  description
}) {
  return (
    <div className={align}>
        <div className='text-primary font-bold'>{minititle}</div>
        <h2 className='lg:text-[50px] text-[24px] font-bold'>{title}</h2>
        <p className='mt-5 text-[18px] lg:text-[20px]'>{description}</p>
    </div>
  );
}