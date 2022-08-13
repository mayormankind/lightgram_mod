import React from 'react';
import { StoryCard } from '../Main/Library';
import { Link } from 'react-router-dom';

function LibraryStory({story,onPress}) {
  return (
      <StoryCard>
         <Link to={`/storyStore/${story.id}`}>
           <div>
              <img src={story.image} alt="" />
            </div>
         </Link>
            <p>{story.title}</p>
      </StoryCard>
  )
}

export default LibraryStory;
