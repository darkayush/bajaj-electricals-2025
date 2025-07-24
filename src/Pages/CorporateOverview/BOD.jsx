import React from 'react'

const BOD = () => {
    return (
        <div className='marginal text-lg text-[#4d4d4f]'>
            <div>
                <div className="">
                    <h1 className="text-3xl text-[#005eac] font-extrabold">Board of Directors</h1>
                    <div className="bg-[#00aea7] rounded-2xl h-1 w-6 mb-5"></div>
                    <h2 className="text-6xl text-black font-semibold mb-2">Leading from
                        the front
                    </h2>
                </div>
            </div>
            <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                    {[
                        { name: 'Shekhar Bajaj', title: 'Chairman', img: '\\CorporateOverview\\BOD\\Shekhar Bajaj-36.png' },
                        { name: 'Sanjay Sachdeva', title: 'Managing Director & CEO', img: '\\CorporateOverview\\BOD\\Sanjay-Sachdeva-36.png' },
                        { name: 'Rajiv Bajaj', title: 'Non-Executive Director', img: '\\CorporateOverview\\BOD\\Rajiv-Bajaj-36.png' },
                        { name: 'Pooja Bajaj', title: 'Executive Director', img: '\\CorporateOverview\\BOD\\Pooja-Bajaj-36.png' },
                        { name: 'Nirav Bajaj', title: 'Additional Non-Executive Director', img: '\\CorporateOverview\\BOD\\Nirav-Bajaj-36.png' },
                        { name: 'Shailesh Haribhakti', title: 'Independent Director', img: '\\CorporateOverview\\BOD\\Shailesh-36.png' },
                        { name: 'Sudarshan Sampathkumar', title: 'Independent Director', img: '\\CorporateOverview\\BOD\\Sudarshan-36.png' },
                        { name: 'Vikram Hosangady', title: 'Independent Director', img: '\\CorporateOverview\\BOD\\Vikram-36.png' },
                        { name: 'Swati Salgaocar', title: 'Independent Director', img: '\\CorporateOverview\\BOD\\Swati-36.png' },
                        { name: 'Saurabh Kumar', title: 'Independent Director', img: '\\CorporateOverview\\BOD\\Saurabh-36.png' }
                    ].map((person, idx) => (
                        <div className='text-center' key={idx}>
                            <img
                                src={person.img}
                                alt={person.name}
                                className='w-full h-80 object-cover bg-[#d3e3f3] rounded-3xl'
                            />
                            <h1 className='text-[#554194] text-xl font-semibold mt-2 mb-2'>
                                {person.name}
                            </h1>
                            <h2>{person.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BOD