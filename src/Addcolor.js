import { useState } from 'react';
import { ColorBox } from './ColorBox';

export function Addcolor() {
  //const color = "blue"
  //const colorList = ["violet", "blue", "green", "yellow"]
  const [colorList, setColorList] = useState(["violet", "blue", "green", "yellow"]);

  const [color, setColor] = useState("red");
  const styles = {
    backgroundColor: color
  };
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>

      <div className='add-color'>
        <input
          style={styles}
          type='text'
          onChange={handleChange}
          value={color} />
        <button onClick={() => {
          setColorList([...colorList, color]);
          console.log(colorList);

        }}
        >
          Add Color
        </button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}


    </div>
  );
}
