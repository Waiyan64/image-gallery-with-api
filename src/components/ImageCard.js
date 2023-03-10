import React from 'react'

const ImageCard = ({image}) => {
  const tags = image.tags.split(',');
  return (
    <div className="max-w-sm overflow-hidden shadow-2xl rounded-xl">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-indigo-700">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4"> 
        {tags.map((tag, index) => (
          <span key={image.index} className="inline-block bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700 mr-2">#{tag}</span>
        
        ))}
      </div>
    </div>
  )
}

export default ImageCard;