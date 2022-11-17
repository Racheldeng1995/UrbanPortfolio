import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { useMutation } from '@apollo/client';
import { ADD_LIKE } from '../../utils/mutations';
import { REMOVE_LIKE } from '../../utils/mutations';
import { QUERY_STORY } from '../../utils/queries';
import { useQuery } from '@apollo/client';

const Like = ({ storyId, username }) => {
    const { loading, data } = useQuery(QUERY_STORY, {
        variables: { id: storyId },
      });
    
    const employees = data.story.likes

    const isFound = employees.some(element => {
        if (element.username === username) {
          return true;
        }
    
        return false;
      });

    console.log(isFound)

    const [state, setState] = useState(
        (isFound) ? ({liked: 'true'}) : localStorage.getItem( 'likestatus') ? ({liked: localStorage.getItem( 'likestatus')=='true'}) : ( 
        {
        liked: false
        })
      );
    console.log("state.liked: " +toString(state.liked))
    // console.log(state.liked)
    // console.log(localStorage.getItem('likestatus'))
  
    const [likesCount, setLikesNumber] = useState( (isFound)? (1) : (localStorage.getItem( 'likecnt') || 0));

    const [addLike] = useMutation(ADD_LIKE);

    const [removeLike] = useMutation(REMOVE_LIKE);

    const toggle = async (event)  => {
        event.preventDefault();
        let localLiked = state.liked ;

        // Toggle the state variable liked
        localLiked = !localLiked;
        localStorage.setItem( 'likestatus', localLiked );
        setState({ liked: localLiked});

        if(localLiked){
            const num = parseInt(likesCount) + 1
            localStorage.setItem( 'likecnt', num );
            setLikesNumber(parseInt(likesCount) + 1)
            console.log({ storyId, num })
            try {
                await addLike({
                    variables: { storyId, num },
                });
        
                
            } catch (e) {
                console.error(e);
            }
        }
        if(!localLiked){
            const num = parseInt(likesCount)
            localStorage.setItem( 'likecnt', parseInt(likesCount) - 1 );
            setLikesNumber(parseInt(likesCount) - 1)
            console.log({ num, username })
            try {
                await removeLike({
                    variables: { storyId, num, username },
                });
        
                
            } catch (e) {
                console.error(e);
            }
        }
    
    };
    
    return (
        <div className="flex-row mb-3">
            <div className="dgreen pr-4 mt-3">Check the heart icon if you like this sharing!</div>
            <div
                
                onClick={toggle}
                className="flex-row align-center pink"
            >
                {String(state.liked) == "false" ? (
                <FontAwesomeIcon icon={farHeart} />
                ) : (
                <FontAwesomeIcon icon={faHeart} />
                )}
                <p className='m-3'>Likes: {likesCount}</p>
            </div>
            
        </div>
    );
    
}

export default Like;
