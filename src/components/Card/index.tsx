type PropsTypes ={lable:string;lable2:string; onClick ?:()=> void; srcImage: string }

export default function Card(props:PropsTypes){
    return(
        <article className="flex gap-2 p-2 my-2 ">
            <div className="border-2 rounded-full border-red-600 p-4">
                <img src={props.srcImage} className="w-10 h-10" alt="" />
            </div>
            <div>
                <h1 className="text-2xl">{props.lable}</h1>
                <p >{props.lable2}</p>
            </div>
        </article>
        
    )
}