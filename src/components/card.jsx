import Image from "next/image"

function Card({title,user,comments=[]}) {
    
    return (
        <div draggable  className="flex flex-col gap-4 p-2 text-gray-900 bg-white rounded">
            <div className="flex justify-between">
                <p>
                    {title}
                </p>
                <div>
                    <Image src="/edit.png" width={20} height={20} alt="edit"/>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Image src="/coment.png" width={20} height={20} alt="coment"/>
                    {comments.length > 0 ? comments.length : null}
                </div>
                <Image src={user.avatar} width={20} height={20} alt="avatar"/>
            </div>
        </div>
    )
}

export default Card
