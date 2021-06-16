import React, { useState } from 'react';

import MultiToggleSwitch from '../../common/components/MultiToggleSwitch';
import PageHeader from '../../common/components/PageHeader';
import ScrollBar from '../../common/components/ScrollBar';
import Select, { TOption } from '../../common/components/Select/Select';
import Table from '../../common/components/Table';
import StarRate from './components/StarRate';
import { data } from './forumData';
import type { TForumMember } from './ForumMembers';
import ForumMembers from './ForumMembers';
import type { TForumUpdatedNumberProps } from './ForumUpdatedNumber';
import ForumUpdatedNumber from './ForumUpdatedNumber';

export const Forum: React.FC = () => {
  const mockCategories: TOption[] = [
    { value: '', label: 'All' },
    { value: 'Bitcoin Talks', label: 'Bitcoin Talks' },
    { value: 'Ethereum', label: 'Ethereum' },
    { value: 'XRP (Ripple)', label: 'XRP (Ripple)' },
  ];

  const mockTags: TOption[] = [
    { value: '', label: 'All' },
    { value: 'Coinbase', label: 'Coinbase' },
    { value: 'Cryptocurrency', label: 'Cryptocurrency' },
    { value: 'Instablockchain', label: 'Instablockchain' },
  ];

  // Filters
  const [category, setCategory] = useState<TOption | null>(mockCategories[0]);
  const [tag, setTag] = useState<TOption | null>(mockTags[0]);
  const [selectedItem, setSelectedItem] = useState(0);

  const filterOptions = [
    {
      label: 'Categories',
      selected: category,
      onChange: setCategory,
      options: mockCategories,
    },
    {
      label: 'Tags',
      selected: tag,
      onChange: setTag,
      options: mockTags,
    },
  ];

  const routeData = [{ label: 'Latest' }, { label: 'Top' }, { label: 'Categories' }];

  const routes = {
    data: routeData,
    activeIndex: selectedItem,
    onToggle: setSelectedItem,
  };

  const columns = [
    {
      key: 'topic',
      name: 'Topic',
    },
    {
      key: 'favorite',
      name: '',
      custom: (value: string | number) => <StarRate rate={+value || 0} maxRate={1} />,
    },
    {
      key: 'members',
      name: '',
      custom: (members: TForumMember[]) => <ForumMembers members={members} />,
    },
    {
      key: 'replies',
      name: 'Replies',
      custom: (replies: TForumUpdatedNumberProps) => <ForumUpdatedNumber {...replies} />,
    },
    {
      key: 'views',
      name: 'Views',
      custom: (views: TForumUpdatedNumberProps) => <ForumUpdatedNumber {...views} />,
    },
    {
      key: 'activity',
      name: 'Activity',
      custom: (activity: string) => <span className="text-gray-a0">{activity}</span>,
    },
  ];

  const table = {
    columns: columns,
    data: data,
    headerTrClasses: 'h-12 text-gray-4a font-extrabold',
    headerTdClasses: 'first:pl-6 last:pr-6 border-b-1px border-line-default border-solid z-10',
    bodyTrClasses: 'h-12 hover:bg-line-default text-gray-f2',
    bodyTdClasses: 'first:rounded-l first:pl-6 last:pr-6 last:rounded-r border-b-1px border-line-default border-solid',
    bodyClasses: 'overflow-y-scroll',
  };

  return (
    <div className="wrapper content with-page-header pb-5 w-screen">
      <div className="flex justify-between pt-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3.5">
          {filterOptions.map((option) => (
            <Select {...option} key={option.label} />
          ))}
        </div>
        <div className="flex">
          <div className="flex h-full items-center justify-end">
            <MultiToggleSwitch containerClassName="rounded-none border-none" {...routes} />
          </div>
        </div>
      </div>
      <ScrollBar hasPageHeader={true}>
        <div className="bg-white px-7 py-5 rounded-lg">
          <Table {...table} />
        </div>
      </ScrollBar>
    </div>
  );
};
