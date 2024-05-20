notifications+alerts

alert({
    title: 'Cellular Data is Turned Off for "Safari"',
    message: 'You can turn on cellular data for this app in Settings.'
});

confirm({
    title: 'Use location service?',
    message: 'Help apps determine the location. This means sending anonymous location data, even when no apps are running.',
    okText: 'Agree',
    cancelText: 'Disagree'
});

prompt({
    title: 'Sign in to iTunes Store',
    message: 'Enter the Apple ID password for "hello@mobiscroll.com".',
    placeholder: 'Password',
    inputType: 'password'
});




toast({
    message: 'message for user'
});
                              
toast({
    message: 'message for user',
    display: 'top'
});

toast({
    message: 'message for user',
    color: 'primary'
});

toast({
    message: 'message for user',
    color: 'secondary'
});

toast({
    message: 'message for user',
    color: 'success'
});

toast({
    message: 'message for user',
    color: 'danger'
});

toast({
    message: 'message for user',
    color: 'warning'
});

toast({
    message: 'message for user',
    color: 'info'
});

// draft and remember form data

snackbar({
    message: 'Your draft has been discarded'
});

snackbar({
    message: 'Your draft has been discarded',
    display: 'top'
});

// timing

snackbar({
    message: 'Connection timed out. Showing limited messages.',
    button: {
        text: 'Retry',
        action: function () {
            toast({
                message: 'Retrying...'
            });
        }
    }
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'primary'
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'secondary'
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'success'
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'danger'
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'warning'
});

snackbar({
    message: 'Your draft has been discarded',
    color: 'info'
});
