import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import { QUERY_STORIES, QUERY_ME } from '../../utils/queries';

const StoryForm = () => {
  const [storyTitle, setTitle] = useState('');
  const [storyText, setText] = useState('');
  const [characterCountTitle, setCharacterCountTitle] = useState(0);
  const [characterCountText, setCharacterCountText] = useState(0);

  const [addStory, { error }] = useMutation(ADD_STORY, {
    update(cache, { data: { addStory } }) {
      
        // could potentially not exist yet, so wrap in a try/catch
      try {
        // update me array's cache
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, stories: [...me.stories, addStory] } },
        });
      } catch (e) {
        console.warn("First story insertion by user!")
      }

      // update story array's cache
      const { stories } = cache.readQuery({ query: QUERY_STORIES });
      cache.writeQuery({
        query: QUERY_STORIES,
        data: { stories: [addStory, ...stories] },
      });
    }
  });

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      setCharacterCountText(event.target.value.length);
    }
    if (event.target.value.length <= 12) {
      setTitle(event.target.value);
      setCharacterCountTitle(event.target.value.length);
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addStory({
        variables: { storyTitle, storyText },
      });

      // clear form value
      setText('');
      setTitle('');
      setCharacterCountText(0);
      setCharacterCountTitle(0);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
      >
        <div>
          <p
          className={`m-0 ${characterCountTitle === 12 || error ? 'text-error' : ''}`}
          >
            Character Count: {characterCountTitle}/12
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <textarea
            placeholder="Please enter a title."
            value={storyTitle}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <p
          className={`m-0 ${characterCountText === 280 || error ? 'text-error' : ''}`}
          >
            Character Count: {characterCountText}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <textarea
            placeholder="Here's a new story..."
            value={storyText}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StoryForm;
