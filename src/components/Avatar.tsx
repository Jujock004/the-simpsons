import { useState } from "react";



interface Avatar    {
    image: string
    firstName: string
    lastName: string
    link: string
}

export function Avatar({image, firstName, lastName, link})   {
    const [count, setCount] =
    useState(0)
    return (
        <figure>
            <button id="counter" onClick={() => setCount(count + 1)}>
                <img width="40em" src="https://www.stickees.com/files/cartoon/the-simpsons/2370-pink-donut.png"/> 
                {count}
            </button>
            <img className="picture"
                src={image}
            />
            <a href={link} target="_blank"><figcaption>{firstName} {lastName}</figcaption></a>
        </figure>
    )

}

// const bart = {
//     image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
//     firstName: "Bart",
//     lastName: "Simpson"
//   };