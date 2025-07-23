import React from 'react'

const FinancialHighlights = () => {
    return (
        <div className='marginal text-lg text-[#4d4d4f]'>
            <div>
                <div className="">
                    <h1 className="text-3xl text-[#005eac] font-extrabold">Financial Highlights</h1>
                    <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-5"></div>
                    <h2 className="text-6xl text-black font-semibold mb-3">Our Performance at a glance
                    </h2>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                    <img src="/CorporateOverview/Financial Highlights/Graphs/1.png" alt="" className='w-50' />
                    <img src="/CorporateOverview/Financial Highlights/Graphs/2.png" alt="" className='w-50' />
                    <img src="/CorporateOverview/Financial Highlights/Graphs/3.png" alt="" className='w-74' />
                    <img src="/CorporateOverview/Financial Highlights/Graphs/4.png" alt="" className='w-50' />
                    <img src="/CorporateOverview/Financial Highlights/Graphs/5.png" alt="" className='w-50' />
                </div>
            </div>
            <div>
                <div class="mt-10">
                    <h1 className="text-3xl text-[#005eac] font-bold">अब महा ठण्ड से महा मुकाबला हुआ महा आसान</h1>
                    <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-5"></div>
                    <h2 className="text-6xl text-black font-semibold mb-3">
                        Pilgrims Embrace Bajaj's 24x7 Seva Kendra at the Maha Kumbh Mela 2025 for Warmth and Comfort
                    </h2>
                </div>
                <div>
                    <img src="/CorporateOverview/Financial Highlights/Box-17.png" alt="" />
                </div>
                <div class="flex justify-between gap-6 mt-5">
                    <div class="flex flex-col items-start p-6 bg-[#e9f3f1] rounded-lg shadow-md max-w-sm w-full md:w-1/3">
                        <div class="mb-4">
                            <img src="/CorporateOverview/Financial Highlights/Icon1-17.png" alt="Life-Size Installation icon" class="h-25 w-25 text-[#06aea7]" />
                        </div>
                        <h3 class="text-xl font-bold text-[#00aea7] mb-2">Life-Size Installation</h3>
                        <p class=" text-left">
                            Bajaj Pentacle Digi Geyser providing steaming water for relief
                        </p>
                    </div>

                    <div class="flex flex-col items-start p-6 bg-[#e6e2f0] rounded-lg shadow-md max-w-sm w-full md:w-1/3 ">
                        <div class="mb-4">
                            <img src="/CorporateOverview/Financial Highlights/Icon2-17.png" alt="Hot Water Bags icon" class="h-25 w-25 text-[#e6e2f0]" />
                        </div>
                        <h3 class="text-xl font-bold text-[#554194] mb-2">1000+ Hot Water Bags</h3>
                        <p class=" text-left">
                            Free rotating service for devotees' warm compresses
                        </p>
                    </div>

                    <div class="flex flex-col items-start p-6 bg-[#fff8e1] rounded-lg shadow-md max-w-sm w-full md:w-1/3 ">
                        <div class="mb-4">
                            <img src="/CorporateOverview/Financial Highlights/Icon3-17.png" alt="24/7 Seva icon" class="h-25 w-25 text-[#f8f1e3]" />
                        </div>
                        <h3 class="text-xl font-bold text-[#d4a12a] mb-2">24/7 Seva</h3>
                        <p class=" text-left">
                            Dedicated sevaks ensuring unwavering support throughout
                        </p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center md:justify-between items-center mt-5 gap-y-6">
                    <div class="text-center md:text-left w-full md:w-auto">
                        <h3 class="text-3xl font-extrabold text-black">One month</h3>
                        <p class="text-lg text-[#035dac]">of uninterrupted seva</p>
                    </div>

                    <div class="text-center md:text-left w-full md:w-auto">
                        <h3 class="text-lg text-[#035dac]">Served</h3>
                        <p class="text-3xl font-extrabold text-black">~100,000</p>
                        <p class="text-lg text-[#035dac] ">pilgrims</p>
                    </div>

                    <div class="text-center md:text-right w-full md:w-auto">
                        <h3 class="text-3xl font-extrabold text-black">Overwhelming</h3>
                        <h3 class="text-3xl font-extrabold text-black">response from</h3>
                        <h3 class="text-3xl font-extrabold text-black">pilgrims in Prayagraj</h3>
                    </div>
                </div>

                <div class="mt-5">
                    <p class="text-lg font-semibold text-gray-800">
                        Inspired by the pilgrims' unwavering spirit, Bajaj Geysers stand resilient- enduring every challenge, just like them.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FinancialHighlights