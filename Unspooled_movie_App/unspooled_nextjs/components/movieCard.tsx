import React from 'react';
import {formatDate} from '@/app/utils/utilities';


interface MovieCardProps {
  image: string;
  title: string;
  rating: number;
  genre: string;
  description: string;
  releaseDate: string;
}

export default function MovieCard(props: MovieCardProps) {
  const { image, title, rating, genre, description, releaseDate } = props;

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-sm text-gray-500">{`Rating: ${rating}`}</span>
          <span className="text-sm text-gray-500">{genre}</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">Release Date: {formatDate(releaseDate)}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Details
        </button>
      </div>
    </div>
  );
}

