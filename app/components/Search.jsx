import React from "react";

function Search({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <div className='flex mx-8 items-start justify-between rounded-t-lg pb-6'>
        <div className='flex w-full flex-1 items-center gap-2 px-0 md:h-[70px]'>
          <div className='s:flex hidden h-[45px] min-w-[45px] items-center justify-center bg-black text-center text-2xl text-white shadow-[3px_3px_0px_0px_#16BF44] transition duration-200 hover:bg-[#16BF44] hover:shadow-[-3px_3px_0px_0px_#191919]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 24 24'
              fill='none'>
              <path
                opacity='.4'
                d='M18.51 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.4-.9-.9-.9Z'
                fill='#fff'></path>
              <path
                d='M12 15.75c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9v-4.65c0-.49-.4-.9-.9-.9Z'
                fill='#fff'></path>
              <path
                opacity='.4'
                d='M5.49 1.8c-.5 0-.9.4-.9.9v4.65c0 .5.4.9.9.9s.9-.4.9-.9V2.7c0-.5-.41-.9-.9-.9ZM7.35 10.172H3.63c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.41-.9-.9-.9ZM20.37 10.172h-3.72c-.5 0-.9.4-.9.9s.4.9.9.9h.96v9.33c0 .5.4.9.9.9s.9-.4.9-.9v-9.33h.96c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z'
                fill='#fff'></path>
              <path
                d='M13.86 12.03h-.96V2.7c0-.5-.4-.9-.9-.9s-.9.4-.9.9v9.33h-.96c-.5 0-.9.4-.9.9s.4.9.9.9h3.72c.5 0 .9-.4.9-.9s-.4-.9-.9-.9Z'
                fill='#fff'></path>
            </svg>
          </div>
          <div className='flex h-11 w-full flex-row-reverse items-center gap-2 border-2 border-gray-300 bg-white px-4'>
            <input
              type='text'
              className='w-full bg-white  text-sm outline-none'
              placeholder='Search images by name or description'
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                console.log(e.target.value); // Check what's being typed in the input field
              }}
            />
          </div>
          <div className='hidden h-[45px] min-w-[45px] items-center justify-center bg-black text-center text-2xl text-white shadow-[3px_3px_0px_0px_#16BF44] transition duration-200 hover:bg-[#16BF44] hover:shadow-[-3px_3px_0px_0px_#191919] md:flex'>
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'>
              <circle cx='11' cy='11' r='8'></circle>
              <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
