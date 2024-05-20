START
<Datepicker
    controls={['calendar']}
    inputComponent="input"
    inputProps={{
        placeholder: 'Please Select...'
    }}
/>

Please select...
If you don't pass a reference to an external input, the component takes care of generating its own input.

    
<Datepicker
    controls={['calendar']}
/>

Multiple date selection
Use it for multiple date picking with a mobiscroll input and pill rendering for the selected values.

    
<Datepicker
    controls={['calendar']}
    selectMultiple={true}
/>

Embeddable calendar picker
It can be embedded into the page or a popup as an inline picker by setting the display option to inline.

    
<Datepicker
    controls={['calendar']}
    display="inline"
/>

RESPONSIVE
<Datepicker
    responsive={{
        xsmall: {
            controls: ['calendar'],
            display: 'bottom',
            touchUi: true
        },
        small: {
            controls: ['calendar'],
            display: 'anchored',
            touchUi: true
        },
        custom: { // Custom breakpoint
            breakpoint: 800,
            controls: ['calendar'],
            display: 'anchored',
            touchUi: false
        }
    }}
/>

DISPLAY / TOUCH
<Datepicker
    display="inline"
    touchUi={true}
/>
<Datepicker
    display="anchored"
    touchUi={true}
/>
<Datepicker
    display="top"
    touchUi={true}
/>
<Datepicker
    display="bottom"
    touchUi={true}
/>
<Datepicker
    display="center"
    touchUi={true}
/>


CALENDAR
const props = { placeholder: 'Please Select...' };
<Datepicker
    controls={['calendar']}
    touchUi={true}
    inputComponent="input"
    inputProps={props}
/>
JSX
const props = { placeholder: 'Please Select...' };
const show = () => {
    setOpenPicker(true);
};
const onClose = () => {
    setOpenPicker(false);
};
<Datepicker
    controls={['calendar']}
    showOnClick={false}
    showOnFocus={false}
    isOpen={openPicker}
    onClose={onClose}
    touchUi={true}
    inputComponent="input"
    inputProps={props}
 />
<Button onClick={show}>Show picker</Button>
JSX
<Datepicker
    controls={['calendar']}
    touchUi={true}
 />
JSX
<Datepicker
    controls={['calendar']}
    display="inline"
    touchUi={true}
 />


MULTIPLE - DAY
<Datepicker
    controls={['calendar']}
    selectMultiple={true}
    selectCounter={true}
/>

-	WEEK
<Datepicker
    controls={['calendar']}
    select="preset-range"
    firstSelectDay={1}
    selectSize={7}
/>


RANGE
Highlight the selected range or only start/end dates
Highlight selected range
Customize the start & end labels
Show range labels
Override localized labels with custom text
Show 
Outbound
 for the start label
Show 
Return
 for the end label
Control the minimum and maximum length of the selection
 
3
 days
 
10
 days
    
<Datepicker
    select="range"
    rangeHighlight={true}
    showRangeLabels={true}
/>


OBJECTS
JS date object
    
const [myValue, setValue] = useState(new Date());
setValue(new Date(2020, 10, 15, 10, 45));
const onChange = useCallback((ev) => {
    setValue(ev.value);
});
                            
<Datepicker returnFormat="jsdate" value={myValue} onChange={onChange} />
ISO date string
const [myValue, setValue] = useState(new Date());
setValue('2020-05-20T12:30:00');
const onChange = useCallback((ev) => {
    setValue(ev.value);
});    
                            
<Datepicker returnFormat="iso8601" value={myValue} onChange={onChange} />
Moment.js object
const [myValue, setValue] = useState(new Date());
setValue(moment([2020, 2, 6, 15, 30]);
const onChange = useCallback((ev) => {
    setValue(ev.value);
});

<Datepicker returnFormat="moment" value={myValue} onChange={onChange} />


FORMATTING
<Datepicker
    controls={['calendar']}
/>
<Datepicker
    controls={['calendar']}
    dateFormat="DD.MM.YYYY"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="MMMM"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="D MMMM YYYY"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="MM/YYYY"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="DDD DD MMM, YYYY"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="YYYY-MM-DD"
/>
<Datepicker
    controls={['calendar']}
    dateFormat="DDD, DD MMM YYYY"
/>
<Datepicker
    controls={['time']}
/>
<Datepicker
    controls={['time']}
    timeFormat="hh:mm A"
/>
<Datepicker
    controls={['time']}
    timeFormat="HH:mm"
/>
<Datepicker
    controls={['time']}
    timeFormat="HH:mm:ss"
/>
<Datepicker
    controls={['calendar', 'time']}
    timeFormat="HH:mm:ss"
/>
<Datepicker
    controls={['calendar', 'time']}
    dateFormat="DDD D MMM, YYYY"
    timeFormat="H:mm"
    dateWheels="|DDD D MMM, YYYY|"
/>


DEFAULT VALUES / CUSTOM

Controlling the default value
The calendar defaults to today if not overridden. You can however manually set a default value through the defaultSelection option.

    
JSX
<Datepicker
    controls={['calendar']}
/>
JSX
const defaultSelection = new Date(2020, 11, 24);
                           
<Datepicker
    controls={['calendar']}
    defaultSelection={defaultSelection}
/>
Setting values runtime
While the selected value can be changed by interacting with the calendar, you can set the model value to change it programmatically.

    
JSX
const [val, setVal] = React.useState(null);
const setValue = (event) => {
    setVal(new Date(2020, 0, 2));
};
const setToday = (event) => {
    setVal(new Date());
};

<Button onClick={setValue}>02-01-2020</Button>
<Button onClick={setToday}>Today</Button>
<Datepicker
    controls={['calendar']}
    value={val}
/>
Setting values with buttons
The button API provides shortcuts to value selection and confirmation. Add 'Now' or custom button to the component or entirely remove the 'Set' button to activate auto-set, which automatically closes the dialog if a date is selected.

    
JSX
const [now, setNow] = React.useState();
const nowButtons = React.useMemo(() => {
    return [{
        text: 'Now',
        handler: () => {
            now.setVal(new Date());
            now.close();
        }
    }, 'set', 'cancel'];
}, [now]);
                            
<Datepicker
    controls={['calendar']}
    buttons={nowButtons}
    ref={setNow}
/>
JSX
const [custom, setCustom] = React.useState();
const customButtons = React.useMemo(() => {
    return [{
            text: '05 Jan 2020',
            handler: () => {
                custom.setVal(new Date(2020, 0, 5));
                custom.close();
            }
        }, 'set', 'cancel'
    ];
}, [custom]);
                            
<Datepicker
    controls={['calendar']}
    buttons={customButtons}
    ref={setCustom}
/>
JSX
const autoButtons = React.useMemo(() => {
    return [{
        text: 'Close',
        handler: 'cancel'
    }];
}, []);
                            
<Datepicker
    controls={['calendar']}
    buttons={autoButtons}
/>


TIMEZONE
import { momentTimezone } from '@mobiscroll/react';
import moment from 'moment-timezone';

// setup Mobiscroll Moment plugin
momentTimezone.moment = moment;

function App() {
    const [selected, setSelected] = useState(null);
    const selectedChange = (ev) => {
        setSelected(ev.value);
    }
    return <Datepicker
        value={selected}
        onChange={selectedChange}
        dataTimezone='utc'
        displayTimezone='local'
        timezonePlugin={momentTimezone}
        controls={['calendar', 'time']}
    />
}


DISABLE DATES?
Disable exact dates
 
2024-05-16, 2024-05-19
Disable recurring dates

Disable one or more date ranges 
2024-05-21 - 2024-05-28



// date range buttons

const Calendar = () => {

    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);
    let [changeText, setChangeText] = useState(false);
    const handleChange = () => {
        return setChangeText(!changeText);
    };
    var str = JSON.stringify(state[0].startDate);
    var strone = JSON.stringify(state[0].endDate);
    var month = parseInt(str.substring(6, 8).replace(/['"]/g, ''));
    var monthone = parseInt(strone.substring(6, 8).replace(/['"]/g, ''));


// const arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "December"];
 const arr = ["Annual Quarter to Date", "Annual Year to Date", "Fiscal Quarter to Date", "Fiscal Year to Date", "hidden1", "hidden2",];

    console.log('newstate123', str);
    let a = parseInt("012");
    console.log('newstdfugbdfufv', a);
    return (
        <div >
            {console.log('newstate', state)}

            <button className='border rounded' onClick={() => handleChange()}>
             {str.substring(9, 11).replace(/['"]/g, '')}-
             {arr[month - 1]}-{str.substring(0, 5).replace(/['"]/g, '')}-----
             {strone.substring(9, 11).replace(/['"]/g, '')}-{arr[monthone - 1]}-
             {str.substring(0, 5).replace(/['"]/g, '')}</button>

            {changeText ? <div className='rangepicker my-4'>

                <DateRangePicker
                    onChange={item => setState([item.selection])}
                    showSelectionPreview={true}
                    moveRangeOnFirstSelection={false}
                    months={1}
                    ranges={state}
                    direction="horizontal"
                    preventSnapRefocus={true}
                    calendarFocus="backwards"
                    className='calendar'

                /></div> : " "}

        </div>
    )
}

export default Calendar