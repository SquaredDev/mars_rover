import React, { Component } from 'react';
import GetImageButton from './GetImageButton';
import ImageDisplay from './ImageDisplay';


const api_key = "api_key=jXvQoW1Kr6XA0nzl2ukBp2VqnjHlvbCcWP8wQAwC";
const api = "https://api.nasa.gov/planetary/apod?"

class GetImageForm extends Component {
  render() {
    return (
      <div>
        <form>
          Rover<input type="select"/>&nbsp;
          Camera Type<input type="select/>"/>&nbsp;
          Martian Sol: 1000-2000<input type="number" min="1000" max="2000"/>
        </form>
        <GetImageButton/>
        <ImageDisplay/>
      </div>
    );
  }
}

export default GetImageForm;
