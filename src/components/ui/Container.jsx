export default function Container({children, ContainerClass}) {
  return <div className={`xl:max-w-[1400px] 2xl:max-w-[1500px] mx-auto px-3 lg:px-5 ${ContainerClass}`}>{children}</div>;
}