import React from 'react';

export type TForumMember = {
  name: string;
  avatar: string;
};

type TForumMemberProps = {
  members: TForumMember[];
};

const ForumMembers = ({ members }: TForumMemberProps): JSX.Element => {
  const DISPLAY_NUMBER = 5;
  const displayMembers = members.length > DISPLAY_NUMBER ? members.slice(0, DISPLAY_NUMBER) : members;
  const leftover = members.length - DISPLAY_NUMBER;
  return (
    <div className="flex">
      {displayMembers.map((member, index) => (
        <div
          key={index}
          className="rounded-full bg-line-default w-8 h-8 relative -mr-2.5 border-2 border-white border-solid"
        >
          <img src={member.avatar} className="opacity-60" />
        </div>
      ))}
      {leftover > 0 ? (
        <div className="rounded-full flex-center bg-line-default w-8 h-8 relative -mr-2.5 border-2 border-white border-solid text-gray-71 text-sm">
          <span className="block -ml-1">+{leftover}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default ForumMembers;
