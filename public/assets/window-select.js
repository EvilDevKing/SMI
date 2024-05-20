npm install react-windowed-select

import React from "react";
import WindowedSelect from "react-windowed-select";

const options = [];

for (let i = 0; i < 10000; i += 1) {
  options.push({
    label: `Option ${i}`,
    value: i
  });
}

function App () {
  return <WindowedSelect options={options} />;
}


import { components, createFilter } from 'react-windowed-select';
import React from "react";

const options = [
  { value: 1, label: 'data1' },
  { value: 2, label: 'data2 '},
];

const customFilter = createFilter({ ignoreAccents: false });
const customComponents = {
  ClearIndicator: (props) => <components.ClearIndicator {...props}>clear</components.ClearIndicator>
};

function App () {
  return (
    <WindowedSelect
       components={customComponents}
       isClearable={true}
       filterOption={customFilter}
       options={options}
     />
   );
}


// window list

import { WindowedMenuList } from 'react-windowed-select';
import CreatableSelect from 'react-select/creatable';

function App () {
  return (
    <CreatableSelect
      components={{ MenuList: WindowedMenuList }}
      // ...other props
    />
  );
}

// css piece

<WindowedSelect
  options={options}
  styles={{
    option: (base) => ({
      ...base,
      height: 60, // must be type number
      padding: '20px 12px',
    }),
  }}
/>


// checkbox

<Select
    onCancel = {(event, inst) => { /* Logic for cancel button click */ }}
    onChange = {(event, inst) => { /* Logic for value change */ }}
    onClose = {(event, inst) => { /* Your custom event handler goes here */ }}
    onDestroy = {(event, inst) => { /* Your custom event handler goes here */ }}
    onFilter = {(event, inst) => { /* Your custom filtering goes here */ }}
    onInit = {(event, inst) => { /* Logic running on component init */ }}
    onOpen = (event, inst) => { /* Your custom event handler goes here */ }}
    onPosition = {(event, inst) => { /* Logic for component positioning */ }}
    onTempChange = {(event, inst) => { /* Logic for temporary value change */ }}
/>



