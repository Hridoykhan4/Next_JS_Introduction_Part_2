import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StoryCard = ({ story }) => {
    // Safe truncation for story text
    const shortStory = story?.story
        ? story.story.split(' ').slice(0, 20).join(' ') + '...'
        : '';

    return (
        <div className="card-custom mb-6">
            {/* User Info Header */}
            <div className="flex items-center gap-4">
                <Image
                    src={story.image}
                    alt={story.name || "Developer Profile"}
                    className="w-16 h-16 rounded-full object-cover"
                    width={64}
                    height={64}
                />
                <div>
                    <h3 className="font-semibold text-lg text-dark-1">{story.name}</h3>
                    <p className="text-sm text-dark-3">{story.designation}</p>
                    <p className="text-sm font-medium text-primary">{story.company}</p>
                </div>
            </div>

            {/* Story Excerpt */}
            <p className="mt-4 text-sm text-dark-2 leading-relaxed">
                {shortStory}
            </p>

            {/* Action Button */}
            <Link
                href={`/stories/${story.id}`}
                className="btn btn-primary btn-sm mt-4 inline-block"
            >
                Read Full Story
            </Link>
        </div>
    );
};

export default StoryCard;