interface IProps{
    profile:string
    name:string
}

function Channel(props:IProps) {
    const {profile,name} = props
    return (
        <div className="flex items-center justify-between ">
      <div className="flex items-center">
        <div className="w-[2.8rem] h-[2.8rem] flex ">
          <img
            src={profile}
            alt="hình"
            className="rounded-full object-cover h-full w-full"
          />
        </div>
        <div className="hidden lg:flex flex-col pl-2">
          <p className="font-semibold  text-[14px]">{name}</p>
          <p className="text-[14px] truncate w-[90%]">Mukbang Live</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center">
        <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
        <p className="text-[14px]">12k</p>
      </div>
    </div>
    );
}

export default Channel;