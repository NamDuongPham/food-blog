import { BiSearch } from 'react-icons/bi'
function Search() {
  return (
    <div className="px-2 py-1 flex items-center rounded-full w-1/2 border-2 border-yellow-400 bg-gray-200">
      <button className='bg-transparent outline-none'><BiSearch /></button>
      <input placeholder='Tìm kiếm bài viết, video, lớp học,...' className='w-full outline-none p-2 bg-transparent ' />
    </div>
  );
}

export default Search;
