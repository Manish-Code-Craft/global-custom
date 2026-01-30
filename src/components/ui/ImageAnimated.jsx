

import Image from "next/image";
export default function ImageAnimated({
    src,
    width,
    height,
    alt,
    classname
}) {
    return (
    <div className={`group hway relative w-[${width}px] h-[${height}px] ${classname} overflow-hidden`}>
        <div className="absolute w-full h-0 group-[.hway-active]:h-full bg-blue opacity-50 transition-all duration-[.5s]"></div>
        <div className="absolute w-full h-0 group-[.hway-active]:h-full bg-blue opacity-50 transition-all duration-[.5s] group-[.hway-active]:delay-[.25s]"></div>
        <Image className={`absolute top-0 left-0 w-full h-0 group-[.hway-active]:h-full object-cover object-center transition-all duration-[.5s] group-[.hway-active]:delay-[.5s]`} src={src} width={width} height={height} alt={alt}/>
    </div>
    );
};