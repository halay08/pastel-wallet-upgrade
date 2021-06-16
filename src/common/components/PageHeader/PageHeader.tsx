import React from 'react';
import Select, { TOption } from '../Select/Select';
import MultiToggleSwitch, { TMultiToggle } from '../MultiToggleSwitch';

export type TPageHeaderSortByOptions = {
  placeholder: string;
  onOptionChange: (option: TOption | null) => void;
  selected: TOption | null;
  options: TOption[];
};

export interface IPageHeaderProps {
  showTitle?: boolean;
  title: string;
  routes?: TMultiToggle;
  sortByOptions?: TPageHeaderSortByOptions[];
}

/**
 * This is a presentational component, meaning it holds no state.
 * State should be handled by parent component.
 */
const PageHeader = ({
  showTitle = false,
  title,
  routes,
  sortByOptions,
}: IPageHeaderProps): JSX.Element => {
  return (
    <div className='bg-white text-gray-1a'>
      <div className='wrapper py-30px'>
        <div className='flex justify-between'>
          <div className='flex items-center'>
            {showTitle && (
              <h1 className='pr-70px font-semibold text-gray-23'>{title}</h1>
            )}
            {routes && <MultiToggleSwitch {...routes} />}
          </div>
          {sortByOptions?.length && (
            <div className='flex items-center'>
              <p className='pr-4 text-h5'>Sort by</p>
              <div className='flex space-x-6'>
                {sortByOptions.map(item => (
                  <Select
                    placeholder={item.placeholder}
                    options={item.options}
                    selected={item.selected}
                    onChange={item.onOptionChange}
                    key={item.placeholder}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
