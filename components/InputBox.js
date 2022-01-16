import Image from "next/image";
import { useRef, useState } from "react";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";

function InputBox() {
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setimageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: "ziani ismail",
        email: "ismail.dev.ziani@gmail.com",
        image: "https://i.ibb.co/ctk6CTw/1584004071571.jpg",
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(imageToPost, "data_url");

          removeImage();

          uploadTask.on(
            "state_change",
            null,
            (error) => console.error(),
            () => {
              //when the upload completes
              storage
                .ref(`posts`)
                .child(doc.id)
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts").doc(doc.id).set(
                    {
                      postImage: url,
                    },
                    { merge: true }
                  );
                });
            }
          );
        }
      });

    inputRef.current.value = "";
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setimageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setimageToPost(null);
  };
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src='https://i.ibb.co/ctk6CTw/1584004071571.jpg'
          width={40}
          height={40}
          layout='fixed'
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            ref={inputRef}
            placeholder="what's on your mind, ismail ?"
          />
          <button hidden type='submit' onClick={sendPost}></button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className=' flex flex-col items-center justify-center filter hover:brightness-110 transition duration-150 transform hover:scale-105 hover:cursor-pointer'>
            <img
              className='h-10 w-10 object-contain'
              src={imageToPost}
              alt='img'
            />
            <p className='text-xs sm:text-sm xl:text-base text-red-500'>
              remove
            </p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly py-5 border-t'>
        <div className='inputIcon flex items-center'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          onClick={() => filePickerRef.current.click()}
          className='inputIcon flex items-center'>
          <CameraIcon className='h-7 text-green-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input
            ref={filePickerRef}
            onChange={addImageToPost}
            type='file'
            hidden
          />
        </div>
        <div className='inputIcon flex items-center'>
          <EmojiHappyIcon className='h-7 text-yellow-500' />

          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
