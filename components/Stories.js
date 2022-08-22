import React from 'react';
import StoriesCard from './storiesCard';


const stories = [
    {
        name: "user1",
        image: "/storyImage/ail.png",
        profile: "/storyImage/profile.jpeg"

    },
    {
        name: "user2",
        image: "/storyImage/me.jpeg",
        profile: "/storyImage/profile.jpeg"

    },
    {
        name: "user3",
        image: "/storyImage/gamer.jpeg",
        profile: "/storyImage/profile.jpeg"

    },
    {
        name: "user4",
        image: "/storyImage/po.jpeg",
        profile: "/storyImage/profile.jpeg"

    },
    {
        name: "user3",
        image: "/storyImage/gamer.jpeg",
        profile: "/storyImage/profile.jpeg"

    }
]

const Stories = () => {
    return (
        <div className='flex justify-center mx-auto space-x-3'>
            {
                stories.map((story, index) => {
                    return (

                        <StoriesCard key={index} src={story.image} name={story.name} profile={story.profile} />

                    )
                })
            }
        </div>
    );
};

export default Stories;