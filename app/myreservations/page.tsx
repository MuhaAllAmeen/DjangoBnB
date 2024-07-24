import Image from "next/image"
import apiService from "../services/apiService"
import Link from "next/link"

export default async function MyReservationsPage() {
    const reservations = await apiService.get('/api/auth/myreservations/')
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl">My Reservations</h1>
            <div className="space-y-4">
            {reservations.map((reservation:any)=>{
                return(
                <div className="rounded-xl p-5 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300">
                <div className="col-span-1">
                    <div className="relative overflow-hidden aspect-square rounded-xl">
                        <Image src={reservation.property.image_url} fill className='hover:scale-110 object-cover transition h-full w-full' alt='beach house' />
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 ">
                    <h2 className="wb-4 text-xl ">{reservation.property.title}</h2>
                    <p className="mb-2"><strong>Chech out Date:</strong>{reservation.end_date}</p>
                    <p className="mb-2"><strong>Number of nights</strong>{reservation.number_of_nights}</p>
                    <p className="mb-2"><strong>Price</strong>${reservation.total_price}</p>
                    <p className="mb-2"><strong>Check in Date:</strong>{reservation.start_date}</p>
                    <Link href={`/properties/${reservation.property.id}`} className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl">
                        Go to Property
                    </Link>
                </div>
            </div>
                )
            })}
            
            </div>
    </main>
    )
}