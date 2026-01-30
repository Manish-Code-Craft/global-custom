export default function FaqItem({
    question,
    answer
}) {
    return (
        <div className="accordion-slide group faq-slide bg-white text-color p-5 mb-5" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
            <h3 className="text-[20px] text-blue font-semibold flex justify-between items-center gap-5 cursor-pointer"><span itemProp="name">{question}</span><i className="fa fa-plus"></i></h3>
            <div className="faq-app-content h-0 scale-y-0 overflow-hidden group-[.active]:scale-y-100 group-[.active]:h-auto transition-all duration-[.3s]" itemScope="" itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                <div className="mt-5 faq-flex" itemProp="text"   dangerouslySetInnerHTML={{__html: answer}}>
                </div>
            </div>
        </div>  
    )
}