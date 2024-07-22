import ReservationSidebar from '@/app/components/properties/ReservationSidebar'
import Image from 'next/image'
const PropertyDetailPage = ()=>{
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image fill src='/image.png' className='object-cover w-full h-full' alt='beach-house'/>

            </div>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='py-6 pr-6 col-span-3'>
                    <h1 className='mb-4 text-4xl'>Property</h1>
                    <span className='mb-6 block text-lg text-gray-600'>Guests: 5 2 bedroom 1 bathroom</span>
                    <hr />
                    <div className='py-6 flex items-center space-x-4 '>
                        <Image src='/profile.png' width={50} height={50} className='rounded-full' alt='user'/>
                        <p><strong>John Doe</strong>is your host</p>
                    </div>
                    <hr />

                    <p className='mt-6 text-lg '>
                        dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                    </p>
                </div>
                <ReservationSidebar/>
            </div>
        </main>
    )
}

export default PropertyDetailPage