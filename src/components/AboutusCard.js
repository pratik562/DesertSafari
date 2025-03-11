'use client'
import { star } from "@/assests"
import Image from "next/image"

const AboutusCard = ({ imgURL, name, position, experience, about, rating }) => {
    return (
        <div className="flex flex-col items-center bg-primary-bg shadow-lg hover:shadow-primary rounded-2xl p-6 w-full max-w-sm h-auto transition-transform transform hover:scale-105 duration-300 hover:shadow-lg">
            {/* Founder Image */}
            <Image 
                src={imgURL} 
                className="h-28 w-28 rounded-full object-cover border-4 border-primary shadow-md" 
                alt={name} 
                width={112} 
                height={112} 
            />

            <h3 className="mt-4 text-center text-xl font-semibold text-secondary">
                {name}
            </h3>
            <h4 className="text-center text-lg text-secondary font-medium mt-1">
                {position}
            </h4>

            <p className="text-center ttext-secondary mt-4 text-sm leading-relaxed px-4">
                {about}
            </p>

            <div className="mt-4 flex items-center gap-2">
                <Image src={star} alt="rating" className="h-5 w-5" width={20} height={20} />
                <p className="text-secondary text-lg font-medium">Rating: {rating}</p>
            </div>

            <p className="mt-2 text-center text-md font-medium text-secondary">
                {experience}
            </p>
        </div>
    )
}

export default AboutusCard
