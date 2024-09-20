import React, { useEffect } from 'react';

interface StoryProps {
  title: string;
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
    author_url?: string;
  };
}

const Story: React.FC<StoryProps> = ({ title, imageUrl, author }) => {
  return (
    <div className="story-card">
      <img className="story-image" src={imageUrl} alt={title} />
      <div className="story-content">
        <h3 className="story-title">{title || 'Untitled'}</h3>
        <div className="story-author">
          {author?.avatar && <img className="story-avatar" src={author.avatar} alt={author.name} />}
          <p>{author?.name || 'Unknown Author'}</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
