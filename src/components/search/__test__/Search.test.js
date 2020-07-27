import React from 'react';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';

import Search from '../Search';
import data from './mockData.json';
import { key } from '../../../hooks/use-arrow-keys/key-code';
import { searchIssues } from '../../../hooks/use-suggestions/searchIssues';

Enzyme.configure({
  adapter: new Adapter(),
})

describe('Test <Search /> component', () => {

  const initialMarkupHTML = '<div class="search-container"><div class="search-box"><input type="text" placeholder="Search" class="search-input"><div class="search-items-list"><ul></ul></div></div></div>';
  const markupHTMLWithGoodProp = '<div class="search-container"><div class="search-box"><input type="text" placeholder="Search" class="search-input"><div class="search-items-list"><ul><li class="search-item active"><a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/issues/19362">Scheduler callback is only checked for null value and therefore throws when callback is undefined.</a></li><li class="search-item "><a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/pull/19349">fix(reset): set value tracker to default values after form reset</a></li><li class="search-item "><a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/issues/19020">Feature request: have Context.Provider throw error if missing `value` prop</a></li><li class="search-item "><a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/react/issues/18945">DevTools: Improve browser extension iframe support</a></li></ul></div></div></div>';
  
  test('should be render', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {
      console.log(e);
    }
    
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
    expect(wrapper.html()).toBe(initialMarkupHTML);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be regenerate html when pass new props', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {
      console.log(e);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
  
    expect(wrapper.html()).toBe(markupHTMLWithGoodProp);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 5 when search "react" label in the input', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {
      console.log(e);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'react' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })

    expect(wrapper.find('ul').children().length).toBe(5);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have a length 3 when search "good first issue" label in the input', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {
      console.log(e);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good first issue' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    expect(wrapper.find('ul').children().length).toBe(3);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the first suggestion item', async () => {

    var searchResults = [];
    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    var index = 0;
    const setArrowKeys = e => {
      console.log(e);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good first issue' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the second suggestion item when press key.DOWN arrow', async () => {
    
    var index = 0;
    var searchResults = [];

    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const handleArrowKeys = (keyCode, length) => {
      length = length - 1;
      switch (keyCode) {
        case key.DOWN:
          console.log('key.DOWN press');
          if (index < length) {
            index++;
            break;
          }
          index = 0;
          break;
        case key.UP:
          if (index > 0) {
            index--;
            break;
          }
          index = length;
          break;
        case key.ENTER:
          console.log('Enter pressed');
          break;
        case key.MOUSE_EVENT:
          index = length;
          break;
        default:
          index = 0;
      }

    }
    const setArrowKeys = keyCode => {
      handleArrowKeys(keyCode, searchResults.length);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good first issue' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    
    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    
    act(() => {
      wrapper.find('input').simulate('keydown', {keyCode: key.DOWN})
    })
  
    act(() => {
      wrapper.setProps({
        index
      })
    })
    expect(wrapper.find('li').first().hasClass('active')).toBe(false);
    expect(wrapper.find('ul').childAt(1).hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  test('should be have active class the last suggestion item when press key.UP arrow', async () => {
    
    var index = 0;
    var searchResults = [];

    const newSearchResults = value => {
      searchResults = searchIssues(value, data);
    }
    const handleArrowKeys = (keyCode, length) => {
      length = length - 1;
      switch (keyCode) {
        case key.DOWN:
          if (index < length) {
            index++;
            break;
          }
          index = 0;
          break;
        case key.UP:
          if (index > 0) {
            index--;
            break;
          }
          index = length;
          break;
        case key.ENTER:
          console.log('Enter pressed');
          break;
        case key.MOUSE_EVENT:
          index = length;
          break;
        default:
          index = 0;
      }

    }
    const setArrowKeys = keyCode => {
      handleArrowKeys(keyCode, searchResults.length);
    }
      
    const wrapper = mount(
      <Search
        searchResults={searchResults}
        newSearchResults={newSearchResults}
        index={index}
        setArrowKeys={setArrowKeys}
      />
    );
      
    expect(wrapper.html()).toBe(initialMarkupHTML);
  
    act(() => {
      wrapper.find('input').simulate('change', { target: { value: 'good first issue' } });
    })
  
    act(() => {
      wrapper.setProps({
        searchResults
      })
    })
    
    expect(wrapper.find('li').first().hasClass('active')).toBe(true);
    
    act(() => {
      wrapper.find('input').simulate('keydown', {keyCode: key.UP})
    })
  
    act(() => {
      wrapper.setProps({
        index
      })
    })
    expect(wrapper.find('li').first().hasClass('active')).toBe(false);
    expect(wrapper.find('li').last().hasClass('active')).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });



})

