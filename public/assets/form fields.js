form fields

<Input label="Label" placeholder="Text field label" />
<Input label="Password" type="password" placeholder="Password field with icon" startIcon="lock2" />
<Input label="Password Toggle" type="password" placeholder="Password field with icon" startIcon="lock2" passwordToggle={true} />
<Input placeholder="Text field with right icon" endIcon="pencil" />
<Input placeholder="Text field disabled" disabled={true} />
<Input placeholder="Text field with error style" error={true} />
<Input placeholder="Text field with error style and message" error={true} errorMessage="Error message!" />
<Input label="File upload" type="file" placeholder="Select file..." />





Customize
<Input inputStyle="underline" labelStyle="stacked" startIcon="icon-placeholder1" placeholder="Input with label" label="title1"></Input>
<Input inputStyle="underline" labelStyle="stacked" startIcon="icon-placeholder2" placeholder="With error styling" error="true" label="title2"></Input>
<Input inputStyle="underline" labelStyle="stacked" startIcon="icon-placeholder3" placeholder="Without label"></Input>
<Textarea inputStyle="underline" labelStyle="stacked" startIcon="textarea" placeholder="Textarea with left icon" label="Description"></Textarea>
<Dropdown inputStyle="underline" labelStyle="stacked" startIcon="dropdown-plus" endIcon="close">
    <option>Select with icons</option>
    <option value="option1">label1</option>
    <option value="option2">label2</option>
    <option value="option3">label3</option>
    <option value="option4">label4</option>
</Dropdown>
<Input inputStyle="underline" labelStyle="stacked" type="file" placeholder="Select file..." label="File upload"></Input>


PICKER
const myData = [
    { text: 'data1', value: 'value1' },
    { text: 'data2', value: 'value2'},
    { text: 'data3', value: 'value3'},
    { text: 'data4', value: 'value4'}
];
<Select
    data={myData}
    touchUi={false}
    inputComponent="input"
/>
JSX
const myData = [
    { text: 'data1', value: 'value1' },
    { text: 'data2', value: 'value2'},
    { text: 'data3', value: 'value3'},
    { text: 'data4', value: 'value4'}
];
const show = () => { 
    setOpenPicker(true);
};
const onClose = () => {
    setOpenPicker(false);
};
<Select
    data={myData}
    showOnClick={false}
    showOnFocus={false}
    isOpen={openPicker}
    onClose={onClose}
    touchUi={false}
    inputComponent="input"
 />
<Button onClick={show}>Show picker</Button>
JSX
const myData = [
    { text: 'data1', value: 'value1' },
    { text: 'data2', value: 'value2'},
    { text: 'data3', value: 'value3'},
    { text: 'data4', value: 'value4'}
];
<Select
    data={myData}
    touchUi={false}
 />
JSX
const myData = [
    { text: 'data1', value: 'value1' },
    { text: 'data2', value: 'value2'},
    { text: 'data3', value: 'value3'},
    { text: 'data4', value: 'value4'}
];
<Select
    data={myData}
    display="inline"
