import React, { Component } from 'react'
import Photo from './Photo.js';

const photoData = [
    {
        "id": 1,
        "photo": "https://i.ibb.co/FmkWLhW/photo9.jpg",
        "alt": "",
        "caption": "Testing our payload on the mountain!"
    },
    {
        "id": 2,
        "photo": "https://i.ibb.co/r5gFg2P/photo10.jpg",
        "alt": "photo of launch day fall 2018",
        "caption": "Getting ready for launch day!"
    },
    {
        "id": 3,
        "photo": "https://i.ibb.co/sJPwcHw/photo11.jpg",
        "alt": "",
        "caption": "Testing our systems before our Spring launch!" 
    },
    {
        "id": 4,
        "photo": "https://i.ibb.co/vY3Xty6/photo12.jpg",
        "alt": "",
        "caption": "Fall 2018 Payload"
    },
    {
        "id": 5,
        "photo": "https://i.ibb.co/FmkWLhW/photo9.jpg",
        "alt": "",
        "caption": "Testing our payload on Camelback Mountain"
    },
    {
        "id": 6,
        "photo": "https://i.ibb.co/KFKhnnS/photo14.jpg",
        "alt": "",
        "caption": "Testing our system in the desert"
    },
    {
        "id": 7,
        "photo": "https://i.ibb.co/vJJbPpR/photo15.jpg",
        "alt": "",
        "caption": "More fun testing!" 
    },
    {
        "id": 8,
        "photo": "https://i.ibb.co/8YqBTTJ/photo1.jpg",
        "alt": "",
        "caption": "Some of our distinguished interns"
    },
    {
        "id": 9,
        "photo": "https://i.ibb.co/swY1DJd/photo2.jpg",
        "alt": "",
        "caption": ""
    },
    {
        "id": 10,
        "photo": "https://i.ibb.co/tppTyKV/photo3.jpg",
        "alt": "",
        "caption": "Our interns working hard!"
    },
    {
        "id": 11,
        "photo": "https://i.ibb.co/KX7WdJV/photo4.jpg",
        "alt": "",
        "caption": "Collecting data from our payload post-launch"
    },
    {
        "id": 12,
        "photo": "https://i.ibb.co/L80Dkm2/photo5.jpg",
        "alt": "",
        "caption": "Payload retrival"
    },
    {
        "id": 13,
        "photo": "https://i.ibb.co/mbrTtm9/photo6.jpg",
        "alt": "",
        "caption": "Stuck the landing!"
    },
    {
        "id": 14,
        "photo": "https://i.ibb.co/DCV34VK/photo7.jpg",
        "alt": "",
        "caption": "The ASCEND! Team at the Symposium"
    },
    {
        "id": 15,
        "photo": "https://i.ibb.co/1Zhwspr/photo8.jpg",
        "alt": "",
        "caption": "Awarding our intern a graduation stole!"
    },
];

const Photos = ({PhotoData}) => {
    return PhotoData.map(item => <Photo {...item} key={item.id}/>);
};

class PhotoCollage extends Component {
  render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth: "840px"
    }}>
        <Photos PhotoData={photoData}/>
      </div>
    );
  };
};

export default PhotoCollage;