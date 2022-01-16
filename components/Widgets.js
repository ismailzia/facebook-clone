import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";

const contacts = [
  {
    id: 1,
    name: "ziani ismail ",
    src: "https://i.ibb.co/ctk6CTw/1584004071571.jpg",
  },
  {
    id: 2,
    name: "elon musk",
    src: "https://i.ibb.co/gjTGF1C/gettyimages-1229892983-square-1.jpg",
  },
  {
    id: 3,
    name: "Bill Gates",
    src: "https://i.ibb.co/0BbW7VJ/t-l-chargement-2.jpg",
  },
  {
    id: 4,
    name: "mark zackerberg",
    src: "https://i.ibb.co/Csr9rRQ/Mark-Zuckerberg-F8-2019-Keynote-32830578717-cropped.jpg",
  },
  {
    id: 5,
    name: "jeff bezos",
    src: "https://i.ibb.co/BTc0btg/MV5-BYTNl-OGZh-Yzgt-Mm-E3-OC00-Y2-Ni-LWFh-NWQt-Nzg5-Mj-Rh-NTJh-ZGVm-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzg5-Mz-Iy.jpg",
  },
  {
    id: 6,
    name: "leonardo dicaprio",
    src: "https://i.ibb.co/xDV1QVq/leonardo-dicaprio.jpg",
  },
  {
    id: 7,
    name: "ziani ismail ",
    src: "https://i.ibb.co/ctk6CTw/1584004071571.jpg",
  },
  {
    id: 8,
    name: "elon musk",
    src: "https://i.ibb.co/gjTGF1C/gettyimages-1229892983-square-1.jpg",
  },
  {
    id: 9,
    name: "Bill Gates",
    src: "https://i.ibb.co/0BbW7VJ/t-l-chargement-2.jpg",
  },
  {
    id: 10,
    name: "mark zackerberg",
    src: "https://i.ibb.co/Csr9rRQ/Mark-Zuckerberg-F8-2019-Keynote-32830578717-cropped.jpg",
  },
  {
    id: 11,
    name: "jeff bezos",
    src: "https://i.ibb.co/BTc0btg/MV5-BYTNl-OGZh-Yzgt-Mm-E3-OC00-Y2-Ni-LWFh-NWQt-Nzg5-Mj-Rh-NTJh-ZGVm-Xk-Ey-Xk-Fqc-Gde-QXVy-Nzg5-Mz-Iy.jpg",
  },
  {
    id: 12,
    name: "leonardo dicaprio",
    src: "https://i.ibb.co/xDV1QVq/leonardo-dicaprio.jpg",
  },
];

function Widgets() {
  return (
    <div className='h-screen scrollbar-hide overflow-y-auto hidden lg:flex flex-col w-60 p-2 mt-5'>
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className=''>Contacts</h2>
        <div className='flex space-x-2'>
          <SearchIcon className='h-6' />
          <DotsHorizontalIcon className='h-6' />
          <VideoCameraIcon className='h-6' />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact key={contact.id} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default Widgets;
