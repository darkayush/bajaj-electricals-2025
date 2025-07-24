import Appliances from "../../Components/Appliances"
import Lighting from "../../Components/Lighting"

const OurBusiness = () => {
    return (
        <div className="marginal text-lg text-[#4d4d4f]">
            <div>
                <div className="">
                    <h1 className="text-3xl text-[#005eac] font-extrabold">Our Businesses</h1>
                    <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-5"></div>
                    <h2 className="text-6xl text-black font-semibold mb-2">Business divisions in a nutshell
                    </h2>
                </div>
            </div>
            <div className="bg-[#005eac] p-5 rounded-3xl text-white">
                <h1 className="text-2xl mb-2">We have build a
                    consolidated yet flexible
                    portfolio, centred on
                    Consumer Centricity,
                    Product Innovation and
                    Brand Reinvention.
                </h1>
                <p className="mb-2">
                    By integrating multiple brands with
                    distinct identities under a unified
                    strategic platform, we are poised
                    to serve India’s diverse and rapidly
                    evolving customer base. This
                    structure empowers us to customise
                    our offerings across varied use
                    cases and geographies, bridging
                    the needs of both mass-markets
                    and premium segments alike. As
                    India’s urban and semi-urban spaces
                    expand with increasing demand
                    for efficiency, connected living and
                    sustainable choices, we continue to
                    strengthen our presence to deliver
                    value across every layer of society
                    and infrastructure.
                </p>
                <div className="flex items-center gap-3">
                    <div>
                        <div className="relative w-12 h-12 rounded-lg border-2 border-[#5fcbec] overflow-hidden">
                            <div className="absolute top-0 left-1/2 w-7 h-7 bg-[#201c59] rounded-bl-md z-0"></div>
                            <div className="relative flex items-center justify-center w-full h-full text-white text-2xl font-bold z-10">
                                01
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold">Consumer products</h1>
                </div>
                <div className="flex items-center gap-3 mt-2">
                    <div>
                        <div className="relative w-12 h-12 rounded-lg border-2 border-[#5fcbec] overflow-hidden">
                            <div className="absolute top-0 left-1/2 w-7 h-7 bg-[#201c59] rounded-bl-md z-0"></div>
                            <div className="relative flex items-center justify-center w-full h-full text-white text-2xl font-bold z-10">
                                02
                            </div>
                        </div>
                    </div>
                    <h1 className="text-xl font-bold">Lighting solutions</h1>
                </div>
                <img src="/CorporateOverview/Business/Picture3368-06.png" alt="" className="mt-5" />
            </div>
            <div className="bg-[#201c59] min-h-screen rounded-3xl text-white p-5 mt-5">
                <h1 className="text-3xl font-bold text-[#5fcbec] mb-2">Consumer Products</h1>
                <p className="mb-2">
                    The Consumer Products business
                    continues to evolve in line with
                    changing consumer aspirations
                    and increased demand for
                    multifunctional, energy-efficient
                    solutions. With a mix of legacy
                    and new-age brands including
                    Bajaj, Nex, Morphy Richards and
                    Nirlep, we address a wide variety
                    of consumer preferences across
                    functionality, design and price
                    segments. Our portfolio features a
                    diverse range of appliances, fans and
                    cookware, designed to suit compact
                    modern kitchens and larger family
                    households alike.
                </p>
                <p>
                    As convenience-first living and
                    health-conscious cooking gain
                    traction, we are re-engineering
                    our offerings to deliver intuitive
                    usability, faster performance and
                    minimal maintenance. Beyond
                    utility, the appliances are designed
                    with improved aesthetics and
                    finishes to complement aspirational
                    Indian homes. The category is also
                    expanding in Tier 2 and Tier 3 cities,
                    where rising disposable incomes
                    and greater brand awareness are
                    broadening the market base.
                </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                    <img src="/CorporateOverview/Business/3805-10.png" alt="" className="w-70" />
                    <img src="/CorporateOverview/Business/257-10.png" alt="" className="w-70" />
                    <img src="/CorporateOverview/Business/Iconwithbox-10.png" alt="" className="w-90" />
                </div>
                <Appliances />
            </div>

            <div className="bg-[#201c59] min-h-screen rounded-3xl text-white p-5 mt-5">
                <div className="flex md:flex-row flex-col items-center md:gap-5">
                    <div className="md:w-[70%] w-full">
                        <h1 className="text-3xl font-bold text-[#5fcbec] mb-2">Lighting Solutions</h1>
                        <p className="mb-2">
                            The Lighting Solutions business integrates design, technology
                            and sustainability to offer differentiated experiences across
                            residential and professional categories. For consumers, our
                            focus is on stylish, smart lighting solutions that enhance
                            ambience while promoting energy savings. Conversely, for
                            professionals, the emphasis shifts to reliability, configurability
                            and efficiency in complex applications such as infrastructure
                            projects, workspaces and public zones. This two-pronged
                            strategy allows Bajaj Electricals to address India’s diverse and
                            rapidly evolving lighting needs of modern India.
                        </p>
                    </div>
                    <div className="mt-5">
                        <img src="/CorporateOverview/Business/BajajLighting-12.png" alt="" className="w-90" />
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                    <img src="/CorporateOverview/Business/1022-12.png" alt="" className="w-50" />
                    <img src="/CorporateOverview/Business/672-12.png" alt="" className="w-70" />
                </div>
                <Lighting/>
            </div>
        </div>
    )
}

export default OurBusiness