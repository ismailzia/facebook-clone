import React from "react";
import InputBox from "./InputBox";
import Postes from "./Postes";
import Stories from "./Stories";

function Feed({ posts }) {
  return (
    <div className='scrollbar-hide flex-grow h-screen pb-44 pt-b mx-4 lg:mx-0 overflow-y-auto'>
      <div className='mx-auto max-w-md md:max-w-lg lg:max-w-2xl'>
        <Stories />
        <InputBox />
        <Postes posts={posts} />
      </div>
    </div>
  );
}

export default Feed;
