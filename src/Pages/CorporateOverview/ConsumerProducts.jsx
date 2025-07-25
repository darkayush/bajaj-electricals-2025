import React from 'react'

const ConsumerProducts = () => {
    return (
        <div className='marginal text-lg text-[#4d4d4f]'>
            <div>
                <div>
                    <h1 className="text-3xl text-[#005eac] font-extrabold">Consumer Products</h1>
                    <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-3"></div>
                    <h3 className="text-[#005eac] text-2xl mb-2 mt-2">
                        Our diverse product range includes innovative kitchen and domestic
                        appliances, fans and cookware, designed to meet the evolving needs of
                        our customers. With a strong emphasis on research and development, we
                        continuously integrate advanced technologies to ensure our products are not
                        only functional but also aesthetically appealing.
                    </h3>
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold text-[#55439f] mb-1'>Bajaj - Engineered for
                        Everyday Life
                    </h1>
                    <p>
                        Bajaj is redefining its legacy in the consumer appliances space by emphasising durability, energy efficiency and
                        modern relevance. Under its ‘Built for Life’ positioning, the brand is creating products that offer long-term value,
                        withstand everyday use and meet evolving lifestyle needs. From kitchen essentials to comfort-focused fans and air
                        coolers, Bajaj appliances are thoughtfully engineered to simplify life without compromising on performance. With
                        an integrated approach to product development and after-sales support, the brand continues to nurture strong,
                        enduring relationships with consumers who prioritise reliability, efficiency and trust.
                    </p>
                    <div className='flex gap-10 mt-5'>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#55439f] mb-1 mt-2'>
                                New product launches under
                            </h1>
                        </div>
                        <div className=''>
                            <img src="\ConsumerProducts\195.jpg" alt="" className='w-40' />
                        </div>
                    </div>
                </div>
                <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    {[
                        { name: "Eurostos Ceiling Fan", src: "/ConsumerProducts/BajajBFL/Eurostos Ceiling Fan.png" },
                        { name: "Airlark Ceiling Fan", src: "/ConsumerProducts/BajajBFL/Airlark Ceiling Fan.png" },
                        { name: "Voittaa Ceiling Fan", src: "/ConsumerProducts/BajajBFL/Voittaa Ceiling Fan.png" },
                        { name: "Arioso Hue Ceiling Fan", src: "/ConsumerProducts/BajajBFL/Arioso Hue Ceiling Fan.png" },
                        { name: "Robusto HS TPW Fan", src: "/ConsumerProducts/BajajBFL/Robusto HS TPW Fan.png" },
                        { name: "Breeze Master TPW Fan", src: "/ConsumerProducts/BajajBFL/Breeze Master TPW Fan.png" },
                        { name: "Shield Series - Elevate 90 Digi Desert Cooler", src: "/ConsumerProducts/BajajBFL/Shield Series - Elevate 90 Digi Desert Cooler.png" },
                        { name: "Shield Series - Glanza 42 Digi Personal Cooler", src: "/ConsumerProducts/BajajBFL/Shield Series - Glanza 42 Digi Personal Cooler.png" },
                        { name: "Eternal Series - Pentacle Digi (15L, 25L) Water Heater", src: "/ConsumerProducts/BajajBFL/Eternal Series - Pentacle Digi.png" },
                        { name: "Armor Series - Contempo (6L, 10L, 15L, 25L) Water Heater", src: "/ConsumerProducts/BajajBFL/Armor Series - Contempo.png" },
                        { name: "Military Series - Evoque 4 Jar 1000W Mixer Grinder", src: "/ConsumerProducts/BajajBFL/Bajaj Evoque Mixer Grinder.png" },
                        { name: "Military Series - Glamore 4 Jar 1000W Mixer Grinder", src: "/ConsumerProducts/BajajBFL/Bajaj Glamore Mixer Grinder.png" },
                        { name: "Armor Series - QuadraMax 4 Jar 1000W Mixer Grinder", src: "/ConsumerProducts/BajajBFL/Bajaj Armor Series QuadraMax 4 Jar 1000W Mixer Grinder.png" },
                        { name: "Ninja Series - PowerBlend 1000W Juicer Mixer Grinder", src: "/ConsumerProducts/BajajBFL/Bajaj Ninja Series PowerBlend 1000W Juicer Mixer Grinder.png" },
                        { name: "ICX 190FS Induction Stove", src: "/ConsumerProducts/BajajBFL/Bajaj ICX 190FS Induction Stove.png" },
                        { name: "4BRGP8 Neo Dual Hob Top", src: "/ConsumerProducts/BajajBFL/4BRGP8 Neo Dual Hob Top.png" }
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                            <img src={item.src} alt={item.name} className="max-h-50 object-contain" />
                            <h1 className="">{item.name}</h1>
                        </div>
                    ))}
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold text-[#55439f] mb-1'>Nex
                    </h1>
                    <p>
                        Nex represents a premium, technology-first extension of the Bajaj Electricals portfolio. It was created to address the
                        demands of design-savvy consumers who demand more from everyday appliances. Every product, whether a sleek
                        fan or a smart kitchen device, is built to elevate functionality while delivering a refined user experience. Notably, Nex
                        ceiling fans utilise advanced aeirology technology, delivering 20% higher air thrust for superior performance. Backed
                        by robust engineering and a strong service infrastructure, Nex brings future-ready innovation to homes across India.
                        It stands as a symbol of performance-driven living in an era where comfort, control and aesthetics intersect.
                    </p>
                    <div className='flex gap-10 mt-5'>
                        <div className='flex items-center'>
                            <h1 className='text-xl font-bold text-[#00aea7] mb-1 mt-2'>
                                New product launches under
                            </h1>
                        </div>
                        <div className=''>
                            <img src="\ConsumerProducts\193.jpg" alt="" className='w-15' />
                        </div>
                    </div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                        {[
                            { name: "Nex DAC1 54L Desert Cooler", src: "/ConsumerProducts/Nex/Nex DAC1 54L Desert Cooler.png" },
                            { name: "Nex DAC2 75L Desert Cooler", src: "/ConsumerProducts/Nex/Nex DAC2 75L Desert Cooler.png" },
                            { name: "Nex Dryft A90 BLDC All White", src: "/ConsumerProducts/Nex/Nex Dryft A90 BLDC All White.png" },
                            { name: "Nex Glyde A5 Pedestal White", src: "/ConsumerProducts/Nex/Nex Glyde A5 Pedestal White.png" },
                            { name: "Nex Glyde A5 Table White", src: "/ConsumerProducts/Nex/Nex Glyde A5 Table White.png" },
                            { name: "Nex Glyde A5 Wall Black", src: "/ConsumerProducts/Nex/Nex Glyde A5 Wall Black.png" },
                            { name: "Nex Glyde A25 Pristine White", src: "/ConsumerProducts/Nex/Nex Glyde A25 Pristine White.png" },
                            { name: "Nex Glyde A80 Steel Blue", src: "/ConsumerProducts/Nex/Nex Glyde A80 Steel Blue.png" },
                            { name: "Nex Glyde A95 BLDC IOT Granite Grey", src: "/ConsumerProducts/Nex/Nex Glyde A95 BLDC IOT Granite Grey.png" },
                            { name: "Nex PAC1 25L Personal Cooler", src: "/ConsumerProducts/Nex/Nex PAC1 25L Personal Cooler.png" },
                            { name: "Nex PAC2 45L Personal Cooler", src: "/ConsumerProducts/Nex/Nex PAC2 45L Personal Cooler.png" },
                            { name: "Nex TAC1 40L Tower Cooler", src: "/ConsumerProducts/Nex/Nex TAC1 40L Tower Cooler.png" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                                <img src={item.src} alt={item.name} className="max-h-50 object-contain" />
                                <h1 className="">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold text-[#55439f] mb-1'>Morphy Richards
                    </h1>
                    <p>
                        With a legacy rooted in functionality and finesse, Morphy Richards has established itself as a go-to brand for
                        appliances that add both elegance and utility. Each product is crafted to enhance daily moments, offering precision
                        and ease with a refined sense of style. Its deep understanding of Indian households ensures relevance in both form
                        and use, whether through compact designs, versatile features or contemporary finishes. Morphy Richards continues
                        to be the preferred choice for those who seek both value and sophistication in their appliances.
                    </p>
                    <div className='flex gap-10 mt-5'>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#201c59] mb-1 mt-2'>
                                New product launches under
                            </h1>
                        </div>
                        <div className=''>
                            <img src="\ConsumerProducts\194.jpg" alt="" className='w-25' />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        {[
                            { name: "Kingsman 15 in 1 digital", src: "/ConsumerProducts/Morphy/Kingsman Digital 15-in-1_.png" },
                            { name: "Estella Straightener Brush", src: "/ConsumerProducts/Morphy/Estella Straightener brush_.png" },
                            { name: "Stylist Care Hot Air Brush", src: "/ConsumerProducts/Morphy/Stylist Care hot hair brush.png" },
                            { name: "6.5L Crystal Crysp Air fryer", src: "/ConsumerProducts/Morphy/6.5L Crystal Crisp Air fryer.png" },
                            { name: "GrindPro Maxx Mixer Grinder", src: "/ConsumerProducts/Morphy/GrindPro Maxx 1000W_Mixer Grinder_.png" },
                            { name: "TetraBlend Mixer Grinder", src: "/ConsumerProducts/Morphy/Tetrablend_Mixer Grinder_.png" },
                            { name: "Intellitemp Steam Iron", src: "/ConsumerProducts/Morphy/Intellitemp_Steam Iron_.png" },
                            { name: "Cordless Steam Ease Steam Iron", src: "/ConsumerProducts/Morphy/Steam Iron_Cordless Steam Ease 2200W_.png" },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                                <img src={item.src} alt={item.name} className="max-h-50 object-contain" />
                                <h1 className="">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mt-5'>
                    <h1 className='text-xl font-bold text-[#55439f] mb-1'>Nirlep
                    </h1>
                    <p>
                        Nirlep is reimagining health-focused cooking through its 'Every Day Health' proposition. The brand offers non-stick and
                        pressure cookware designed for low-oil cooking, nutritional retention and ease of use. With a growing focus on wellness,
                        Nirlep also supports educational content, recipes and cooking tips aimed at promoting informed food choices. Whether
                        preparing simple meals or experimenting with new dishes, Nirlep helps consumers make healthy eating part of everyday
                        life without compromising on taste or convenience.
                    </p>
                    <div className='flex gap-10 mt-5'>
                        <div className=''>
                            <h1 className='text-xl font-bold text-[#16a049] mb-1 mt-2'>
                                New product launches under
                            </h1>
                        </div>
                        <div className=''>
                            <img src="\ConsumerProducts\192.jpg" alt="" className='w-40' />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                        {[
                            { name: "NHPro 5 SS", src: "/ConsumerProducts/Nirlep/NHPro 5 SS.png" },
                            { name: "NHPro 35 H", src: "/ConsumerProducts/Nirlep/NHPro 35 H.png" },
                            { name: "NHPro 35 AL", src: "/ConsumerProducts/Nirlep/NHPro 35 AL.png" },
                            { name: "NHP 35", src: "/ConsumerProducts/Nirlep/NHP 35.png" },
                            { name: "NHP 65HD", src: "/ConsumerProducts/Nirlep/NHP 65HD Front.png" },
                            { name: "NHP 5", src: "/ConsumerProducts/Nirlep/NHP 5.png" },
                            { name: "NHP 45 SS", src: "/ConsumerProducts/Nirlep/NHP 45 SS.png" },
                            { name: "NHPIDKGL24", src: "/ConsumerProducts/Nirlep/NHPIDKGL24.png" },
                            { name: "NHPIFPGL24", src: "/ConsumerProducts/Nirlep/NHPIFPGL24.png" },
                            { name: "Nirlep Cookware Happynest Set", src: "/ConsumerProducts/Nirlep/Nirlep Cookwear Happynest set.png" },
                            { name: "IEDK26GL", src: "/ConsumerProducts/Nirlep/IEDK26GL-01.png" },
                            { name: "IECG26N", src: "/ConsumerProducts/Nirlep/IECG26N.png" },
                            { name: "NHPIFG28", src: "/ConsumerProducts/Nirlep/NHPIFG28.png" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                                <img src={item.src} alt={item.name} className="max-h-40 object-contain" />
                                <h1 className="text-sm font-medium text-[#333] mt-2">{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsumerProducts