'use client'
import Image from "next/image";

const ItemCard = ({ imageUrl, bigServiceImg, changeServiceImage }) => {
    const handleClick = () => {
        if (imageUrl?.bigImage && bigServiceImg !== imageUrl.bigImage) {
            changeServiceImage(imageUrl.bigImage);
        }
    };

    return (
        <div
            className={`border-2 rounded-xl ${
                bigServiceImg === imageUrl?.bigImage ? "border-primary" : "border-transparent"
            } cursor-pointer max-sm:flex-1`}
            onClick={handleClick} 
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                <Image
                    src={imageUrl.thumbnail}
                    alt="clinic service"
                    width={127}
                    height={103}
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default ItemCard;
