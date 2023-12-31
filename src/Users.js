import { Profile } from './Profile';

export function Users() {

  const users = [
    {
      pic: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      name: "Jose",
      age: 50
    },
    {
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rR-KMSgNMEl6b9nBdhzTEvGs5BDI1rvdaQ&usqp=CAU",
      name: "sofi",
      age: 18
    },
    {
      pic: "https://source.unsplash.com/500x500/?captainamerica",
      name: "marudha",
      age: 25
    }
  ];
  return (
    <div>
      {users.map((usr) => (
        <Profile name={usr.name} pic={usr.pic} />
      ))}
    </div>
  );
}
