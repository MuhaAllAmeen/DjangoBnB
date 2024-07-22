import Image from "next/image"
export default function MyReservationsPage() {
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Reservations</h1>
            <div className="space-y-4">
            <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image src='/image.png' fill className='hover:scale-110 object-cover transition h-full w-full' alt='beach house' />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 ">
                        <h2 className="wb-4 text-xl ">Property name</h2>
                        <p className="mb-2"><strong>Chech out Date:</strong>14/02/2024</p>
                        <p className="mb-2"><strong>Number of nights</strong>4</p>
                        <p className="mb-2"><strong>Price</strong>600</p>
                        <p className="mb-2"><strong>Chech in Date:</strong>14/02/2024</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                            Go to Property
                        </div>
                    </div>
                </div>
                <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image src='/image.png' fill className='hover:scale-110 object-cover transition h-full w-full' alt='beach house' />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 ">
                        <h2 className="wb-4 text-xl ">Property name</h2>
                        <p className="mb-2"><strong>Chech out Date:</strong>14/02/2024</p>
                        <p className="mb-2"><strong>Number of nights</strong>4</p>
                        <p className="mb-2"><strong>Price</strong>600</p>
                        <p className="mb-2"><strong>Chech in Date:</strong>14/02/2024</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                            Go to Property
                        </div>
                    </div>
                </div>
                <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image src='/image.png' fill className='hover:scale-110 object-cover transition h-full w-full' alt='beach house' />
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 ">
                        <h2 className="wb-4 text-xl ">Property name</h2>
                        <p className="mb-2"><strong>Chech out Date:</strong>14/02/2024</p>
                        <p className="mb-2"><strong>Number of nights</strong>4</p>
                        <p className="mb-2"><strong>Price</strong>600</p>
                        <p className="mb-2"><strong>Chech in Date:</strong>14/02/2024</p>
                        <div className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                            Go to Property
                        </div>
                    </div>
                </div>
            </div>
    </main>
    )
}