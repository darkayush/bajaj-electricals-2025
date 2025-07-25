import React from 'react'

const LightningSolution = () => {
    return (
        <div className='marginal text-lg text-[#4d4d4f]'>
            <div className="">
                <h1 className="text-3xl text-[#005eac] font-extrabold">Lighting Solutions</h1>
                <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-5"></div>
                <h2 className="text-6xl text-black font-semibold mb-2">Innovating Light
                    for Every Space
                </h2>
                <h3 className="text-[#005eac] text-2xl mb-2">
                    Our Lighting Solutions delivers innovative and energy-efficient
                    lighting products for both consumer and professional applications.
                    We offer a comprehensive range of LED lamps and fixtures, including
                    panels, battens and specialised solutions for street, sports, industrial
                    and infrastructural lighting. With a strong focus on sustainability and
                    aesthetic appeal, we design our products to enhance the visual quality
                    of spaces while ensuring optimal performance.
                </h3>
                <p className='mb-3'>
                    We are renowned for our ability to undertake turnkey illumination projects, providing customised solutions to
                    meet specific client needs. Additionally, we focus on smart lighting technologies that improve energy efficiency
                    and contribute positively to urban infrastructure.
                </p>
                <img src="\CorporateOverview\LightingSolution\Innovating-Light-46.png" alt="" />
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font-bold text-[#55439f] mb-1'>Consumer lighting
                </h1>
                <p className='mb-3'>
                    We are dedicated to fulfilling the lighting requirements of residential and personal spaces, seamlessly blending
                    aesthetics with reliability. We offer consumers a diverse selection of high-performance and durable lighting solutions,
                    allowing them to illuminate their homes according to their unique preferences. Our product range includes energyefficient LED bulbs, elegant decorative fixtures and advanced smart lighting systems, empowering consumers to create
                    spaces that reflect their lifestyles.
                </p>
            </div>
            <div className='mt-5'>
                <div className=''>
                    <h1 className='text-xl font-bold text-[#19839b] mb-1 mt-2'>
                        New product launches under
                    </h1>
                </div>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {[
                    {
                        name: "Celesta Modular Surface Downlights – 9w, 15w, 20w",
                        src: "/CorporateOverview/LightingSolution/ConsumerLighting/Celesta Modular Surface Downlights.png"
                    },
                    {
                        name: "Celesta Bulk Head – 10w, 20w",
                        src: "/CorporateOverview/LightingSolution/ConsumerLighting/Celesta Bulk Head.png"
                    },
                    {
                        name: "Robusta Led Flood Light 50w Auto Colour Change",
                        src: "/CorporateOverview/LightingSolution/ConsumerLighting/Robusta Led Flood Light 50w Auto.png"
                    }
                ].map((item, index) => (
                    <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                        <img src={item.src} alt={item.name} className="max-h-40 object-contain" />
                        <h1 className="text-sm font-medium text-[#333] mt-2">{item.name}</h1>
                    </div>
                ))}
            </div>
            <div className='mt-5'>
                <h1 className='text-xl font-bold text-[#55439f] mb-1'>Professional lighting
                </h1>
                <p className='mb-3'>
                    We specialise in a wide array of offerings, including smart street lighting, sports lighting and industrial illumination, ensuring
                    optimal performance and energy efficiency across diverse sectors.
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                {[
                    { name: "Vista", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Vista.png", heading: "Street Lighting" },
                    { name: "Gleam XT", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Gleam XT.png", heading: "Flood Lighting" },
                    { name: "Praze", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Praze.png" },
                    { name: "Flair", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Flair Solar Street Light.png", heading: "Solar Street Lighting" },
                    { name: "Verdant Dura Wellglass", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Verdant Dura Wellglass.png", heading: "Industrial Lighting" },
                    { name: "Novabay Highbay", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Novabay Highbay.png" },
                    { name: "Skylux Surface Troffer 2X2", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Skylux Surface 2x2 Troffer.png", heading: "Commercial Lighting" },
                    { name: "Skylux Surface Troffer 1X4", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Skylux Surface 1x4 Troffer.png" },
                    { name: "Glint Recessed Down Light", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Glint Recessed Down light.png" },
                    { name: "Tllum Bollard", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Tllum Bollard.png", heading: "Landscape Lighting" },
                    { name: "Borage NX Post Top", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Borage NX.png" },
                    { name: "Arian Plus NX Post Top", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/BAJAJ ARIAN PLUS Nx.png" },
                    { name: "AuraCrest Post Top", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/AuraCrest Posttop.png" },
                    { name: "Torcia Bollard", src: "/CorporateOverview/LightingSolution/ProfessionalLighting/Bajaj Torcia LED Bollard.png" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col justify-between items-center text-center h-[250px]">
                        <h2 className="font-bold text-black mb-3">{item.heading}</h2>
                        <img src={item.src} alt={item.name} className="max-h-40 object-contain" />
                        <h1 className="text-sm font-medium text-[#333] mt-2">{item.name}</h1>
                    </div>
                ))}
            </div>
            <div className='mt-5'>
                <h1 className='font-bold text-black mb-3'>Lighting Solutions Projects</h1>
                <div className='flex gap-5'>
                    <div className='w-[70%]'>
                        <h1 className='text-[#0399d1] font-semibold'>Illuminating Faith: Lighting the Kumbh Mela</h1>
                        <p>Bajaj Lighting powers the Maha Kumbh Mela with
                            30,000+ LED and 1,000 solar hybrid streetlights,
                            illuminating over 4,000 hectares. From
                            Sangam to shelter homes, its energy-efficient
                            solutions ensure safety, ease of movement, and
                            sustainability—reinforcing Bajaj’s legacy of trust,
                            innovation, and nation-building at one of the
                            world’s largest spiritual gatherings.
                        </p>
                    </div>
                    <div className='w-[30%]'>
                        <img src="\CorporateOverview\LightingSolution\01 Bajaj inside 07.07.2025.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LightningSolution