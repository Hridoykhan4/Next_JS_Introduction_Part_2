import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StoryCard = ({story}) => {
  
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 border border-gray-200">
                {/* Image */}
                <div className="flex items-center gap-4">
                    <Image
                        src={story.image}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover"
                        width={100}
                        height={100}
                    />
                    <div>
                        <h2 className="font-semibold text-lg">{story.name}</h2>
                        <p className="text-sm text-gray-600">{story.designation}</p>
                        <p className="text-sm text-blue-600">{story.company}</p>
                    </div>
                </div>

                {/* Story */}
                <p className="mt-4 text-gray-700 text-sm">{story.story.split(' ').slice(0, 20).join(" ")}...</p>

                {/* Button */}
                <Link
                    href={`/stories/${story.id}`}
                    className="inline-block mt-3 bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                >
                    Read Full Story
                </Link>
            </div>
        </div>
    );
};

export default StoryCard;