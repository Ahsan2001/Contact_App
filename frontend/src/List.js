import React from 'react'



// const profileApp = () => {
//     const profiles = [
//         {
//             id: 1,
//             userID: "1",
//             favoriteMovieID: "1",
//         },
//         {
//             id: 2,
//             userID: "2",
//             favoriteMovieID: "1",
//         },
//         {
//             id: 3,
//             userID: "4",
//             favoriteMovieID: "5",
//         },
//         {
//             id: 4,
//             userID: "5",
//             favoriteMovieID: "2",
//         },
//         {
//             id: 5,
//             userID: "3",
//             favoriteMovieID: "5",
//         },
//         {
//             id: 6,
//             userID: "6",
//             favoriteMovieID: "4",
//         },
//     ];

//     const users = {
//         1: {
//             id: 1,
//             name: "Jane Cruz",
//             userName: "coder",
//         },
//         2: {
//             id: 2,
//             name: "Matthew Johnson",
//             userName: "mpage",
//         },
//         3: {
//             id: 3,
//             name: "Autumn Green",
//             userName: "user123",
//         },
//         4: {
//             id: 4,
//             name: "John Doe",
//             userName: "user123",
//         },
//         5: {
//             id: 5,
//             name: "Lauren Carlson",
//             userName: "user123",
//         },
//         6: {
//             id: 6,
//             name: "Nicholas Lain",
//             userName: "user123",
//         },
//     };

//     const movies = {
//         1: {
//             id: 1,
//             name: "Planet Earth 1",
//         },
//         2: {
//             id: 2,
//             name: "Selma",
//         },
//         3: {
//             id: 3,
//             name: "Million Dollar Baby",
//         },
//         4: {
//             id: 4,
//             name: "Forrest Gump",
//         },
//         5: {
//             id: 5,
//             name: "Get Out",
//         },
//     };


//     return(
//     <ol>
//         {profiles.map((profile) => {
//             const userName = users[profile.userID].name;
//             const favMovieName = movies[profile.favoriteMovieID].name;
//             return (
//                 <li key={profile.id} >
//                     {`${userName}'s favorite movie is "${favMovieName}."`}
//                 </li>
//             );
//         })
//         }
//     </ol>
//     )
// }


const List = ({ contacts, onDeleteContact }) => {
    // console.log(contacts)
    return (
        <ol>
            {
                contacts.map((item) => {
                    return (
                        <li key={item.id}>
                            <img src={item.avatarURL} alt={item.name} />
                                <h4>{item.name}</h4>  
                                <h4>{item.handle}</h4>
                            <button onClick={() => onDeleteContact(item)} >Remove</button>
                        </li>
                    )
                })
            }
        </ol>
    )
}

export default List