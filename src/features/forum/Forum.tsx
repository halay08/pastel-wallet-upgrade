import React, { useState } from 'react';

import Select, { TOption } from '../../common/components/Select/Select';
import PageHeader from '../../common/components/PageHeader';
import ScrollBar from '../../common/components/ScrollBar';
import MultiToggleSwitch from '../../common/components/MultiToggleSwitch';

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

  const data = [
    { label: 'Creators' },
    { label: 'Sellers' },
    { label: 'Buyers' },
  ];

  const routes = {
    data,
    activeIndex: selectedItem,
    onToggle: setSelectedItem,
  };

  return (
    <>
      <PageHeader title='Market' />
      <ScrollBar hasPageHeader={true}>
        <div className='wrapper content with-page-header pb-5 w-screen'>
          {/* Filters */}
          <div className='flex justify-between pb-6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3.5'>
              {filterOptions.map(option => (
                <Select {...option} key={option.label} />
              ))}
            </div>
            <div className='flex'>
              <div className='flex h-full items-center justify-end'>
                <MultiToggleSwitch
                  containerClassName='rounded-none border'
                  {...routes}
                />
              </div>
            </div>
          </div>
          <div className='bg-white p-5 rounded-lg'>
            <div className='flex justify-between pb-25px'>
              <div className='w-244px'>
                {/* <Select {...filterOptions} className='w-full' /> */}
              </div>
            </div>
            <div className='space-y-5'>forum</div>
          </div>
        </div>
      </ScrollBar>
    </>
  );
};
