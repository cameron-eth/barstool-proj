import React, { useEffect, useState } from 'react';
import Story from '../Story';
import { API_URL } from '../../constants';
import ClipLoader from 'react-spinners/ClipLoader';
import { useRouter } from 'next/router';

const Feed: React.FC = () => {
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [limit] = useState(5);
  
  const router = useRouter();

  const fetchStories = async (page: number) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_URL}?page=${page}&limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch stories');
      }
      const data = await response.json();
      console.log('Fetched stories:', data);
      
      if (data.length === 0) {
        setHasMore(false);
      } else {
        setStories(prevStories => [...prevStories, ...data]);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories(page);
  }, [page]);

  const loadMoreStories = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleStoryClick = (id: string) => {
    router.push(`/page`);
  };

  if (loading && stories.length === 0) {
    return (
      <div className="spinner-container">
        <ClipLoader size={50} color={"#123abc"} loading={loading} />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-500">Error fetching stories: {error}</p>;
  }

  if (stories.length === 0) {
    return <p className="text-center">No stories available.</p>;
  }

  return (
    <div className="feed">
      {stories.map((story, index) => (
        <div key={index} onClick={() => handleStoryClick(story.id)} className="cursor-pointer">
          <Story
            title={story.title}
            imageUrl={story.thumbnail.desktop || story.thumbnail.raw}
            author={story.author}
          />
        </div>
      ))}

      {hasMore && (
        <div className="load-more-container">
          <button
            className="load-more-btn"
            onClick={loadMoreStories}
            disabled={loading}
          >
            {loading ? 'Loading more...' : 'Load More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Feed;
