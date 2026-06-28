// Prevent white flash on reload by applying correct background
(function () {

    var keyPrefix = 'kiwixjs-';

    function getStoredValue(key) {
        try {
            var val = localStorage.getItem(keyPrefix + key);
            if (val !== null) return val;
        } catch (e) { // eslint-disable-line no-unused-vars
        }

        var match = document.cookie.match(
            new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)')
        );

        return match ? decodeURIComponent(match[1]) : null;
    }

    var storedTheme = getStoredValue('appTheme') || 'light';

    function prefersDark() {
        return window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    var isDark = false;

    if (storedTheme.indexOf('dark') !== -1) {
        isDark = true;
    } else if (storedTheme.indexOf('auto') !== -1) {
        isDark = prefersDark();
    }

    var htmlEl = document.documentElement;

    if (isDark) {
        htmlEl.classList.add('dark');
    }

    htmlEl.style.backgroundColor = isDark ? '#141414' : '#FCFCFC';

})();
