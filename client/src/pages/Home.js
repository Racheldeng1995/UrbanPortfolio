import React from 'react';
import StoryList from '../components/StoryList';
import StoryForm from '../components/StoryForm';
import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_STORIES, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_STORIES);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const stories = data?.stories || [];


  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div>
        {loggedIn && (
          <div className="col-11 mb-3">
            <StoryForm />
          </div>
        )}
        <div className={`flex-row justify-center mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <StoryList
              stories={stories}
              title="Explore Some Stories"
            />
          )}
        </div>
        {loggedIn && userData ? (
          <div className="col-4 col-lg-3 ml-3">
            <FriendList
              username={userData.me.username}
              friendCount={userData.me.friendCount}
              friends={userData.me.friends}
            />
          </div>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
