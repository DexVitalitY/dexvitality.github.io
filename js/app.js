$.ajax({
    url: '//freegeoip.net/json/',
    type: 'POST',
    success: function(location) {
        switch(location.country_code) {
            case 'US':
                window.location.href = 'staysorted.com/CN.html';
                break;
            // add additional cases for other countries
        }
    }
});