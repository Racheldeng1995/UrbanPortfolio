import React, { useState } from 'react';

import { useMutation } from '@apollo/client';
import { ADD_STORY } from '../../utils/mutations';
import { QUERY_STORIES, QUERY_ME } from '../../utils/queries';

const StoryForm = () => {
  const [story, setStory] = useState({
    storyTitle: "",
    storyText: ""
  });
  const [characterCount, setCharacterCount] = useState({
    storyTitle: 0,
    storyText: 0
  });


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
      setStory({
        ...story,
        [event.target.name]: event.target.value
      });
      setCharacterCount({
        ...characterCount,
        [event.target.name]: event.target.value.length
      });
    }
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addStory({
        variables: { ...story },
      });

      // clear form value
      setStory('');
      setCharacterCount(0);
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
          className={`m-0 ${characterCount.storyTitle === 12 || error ? 'text-error' : ''}`}
          name="storyTitle"
          >
            Character Count: {characterCount.storyTitle}/12
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <textarea
            placeholder="Please enter a title."
            name="storyTitle"
            value={story.storyTitle}
            className="form-input col-12 col-md-9"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <p
          className={`m-0 ${characterCount.storyText === 280 || error ? 'text-error' : ''}`}
          name="storyText"
          >
            Character Count: {characterCount.storyText}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <textarea
            placeholder="Here's a new story..."
            name="storyText"
            value={story.storyText}
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
