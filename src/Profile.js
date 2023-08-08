import { Counter } from './Counter';

 export function Profile({ pic, name, age }) {
 

  return (
    <div className='usr-container'>
      <img className='profile' src={pic} alt={name} />
      <h4>{name}</h4>
      <h3>{age}</h3>
      <Counter />
    </div>
  );
}
