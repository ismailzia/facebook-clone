import React from "react";
import StoryCard from "./StoryCard";

const stories = [
  {
    name: "ziani ismail ",
    src: "https://i.ibb.co/ctk6CTw/1584004071571.jpg",
    profile: "https://i.ibb.co/ctk6CTw/1584004071571.jpg",
  },
  {
    name: "elon musk",
    src: "https://i.ibb.co/gjTGF1C/gettyimages-1229892983-square-1.jpg",
    profile: "https://i.ibb.co/2Znydvw/106434195-1595357993564-elon.jpg",
  },
  {
    name: "Bill Gates",
    src: "https://i.ibb.co/0BbW7VJ/t-l-chargement-2.jpg",
    profile: "https://i.ibb.co/F3NV3Sw/images-1.jpg",
  },
  {
    name: "mark zackerberg",
    src: "https://i.ibb.co/Csr9rRQ/Mark-Zuckerberg-F8-2019-Keynote-32830578717-cropped.jpg",
    profile:
      "https://i.ibb.co/JxDkQZc/mark-zuckerberg-pdg-et-fondateur-de-facebook-va-t-il-se-lancer-en-politique-1.jpg",
  },
  {
    name: "jeff bezos",
    src: "https://i.ibb.co/BTc0btg/MV5-BYTNl-OGZh-Yzgt-Mm-E3-OC00-Y2-Ni-LWFh-NWQt-Nzg5-Mj-Rh-NTJh-ZGVm-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzg5-Mz-Iy.jpg",
    profile:
      "https://i.ibb.co/1Xf39Bg/jeff-bezos-and-mackenzie-bezos-attend-the-2018-vanity-fair-news-photo-927381540-1547047564.jpg",
  },
];

function Stories() {
  return (
    <div className='flex justify-center space-x-3 mx-auto overflow-x-auto overflow-y-hidden'>
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
