interface Avatar    {
    image: string
    firstName: string
    lastName: string
    link: string
}

export function Avatar({image, firstName, lastName, link})   {
    return (
        <figure>
            <img 
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