import React from 'react'
import Spinner from '../commons/Spinner';

export default function Users({users,loading}) {
  if(loading){
    return <Spinner/>
}
  return (
    <div className='flex flex-row flex-wrap'>{users && users.map((user,index) => {
        const profileImage = user.profile_image.large;
        const name = user.first_name + ' ' + user.last_name;
        const bio = user.bio;
        const location = user.location;
        const instaUserName = user.social.instagram_username ?'@' +  user.social.instagram_username: 'No Social ';
        return ( <div key={index} className="w-[40vw] mr-2  ">
        <div className="border-r border-b border-l w-[40vw] h-[250px] m-10 mr-5 border-gray-400 lg:border-l-0  lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 mb-1 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="text-sm text-gray-600 flex items-center">
             {index+1}. {name}
            </p>
            <div className="text-gray-900 font-bold text-xl mb-2 truncateto1">{location}</div>
            <p className="text-gray-700 text-base line truncateTo3">{bio}</p>
          </div>
          <div className="flex items-center">
            <img className="w-10 h-10 rounded-full mr-4" src={profileImage} alt="Avatar of Jonathan Reinink"/>
            <div className="text-sm">
              <p className="text-gray-900 leading-none">{name}</p>
              <p className="text-gray-600">{instaUserName}</p>
            </div>
          </div>
        </div>
      </div>
)
    })}</div>
  )
}
