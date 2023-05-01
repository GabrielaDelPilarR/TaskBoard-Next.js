import Image from "next/image"

function Card({title}) {
    return (
        <div className="flex flex-col gap-4 p-2 text-gray-900 bg-white rounded">
            <div className="flex justify-between">
                <p>
                    {title}
                </p>
                <span>
                    <Image src="/edit.png" width={20} height={20} alt="edit"/>
                </span>
            </div>
            <div className="flex justify-between">
                <Image src="/coment.png" width={20} height={20} alt="coment"/>
                <Image src="/avatar.png" width={20} height={20} alt="avatar"/>
            </div>
        </div>
    )
}

export default Card
