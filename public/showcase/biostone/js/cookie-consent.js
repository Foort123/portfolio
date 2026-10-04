document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.getElementById('cookie-consent');
    const acceptCookies = document.getElementById('accept-cookies');

    console.log('cookie-consent.js loaded');

    if (!cookieConsent) return; // nothing to do

    const urlParams = new URLSearchParams(window.location.search);
    const forceShow = urlParams.get('showcookie') === '1';

    if (forceShow || !getCookie('cookies_accepted')) {
        cookieConsent.classList.add('cc-visible');              
    }

    // Auto-show on common local hostnames to help development/testing
    try {
        const host = window.location.hostname || '';
        if (host === 'localhost' || host.indexOf('local') !== -1 || host.indexOf('127.0.0.1') !== -1) {
            cookieConsent.classList.add('cc-visible');
        }
    } catch (e) {
        // ignore
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function() {
            setCookie('cookies_accepted', 'true', 365);
            cookieConsent.classList.remove('cc-visible');
        });
    }

    // Modal wiring for 'Узнайте больше'
    const ccMore = document.querySelector('#cookie-consent a') || document.querySelector('.cc-more');
    const ccModalTriggers = document.querySelectorAll('.cc-modal-trigger');
    const ccModal = document.getElementById('cc-modal');
    const ccModalCloseElems = ccModal ? ccModal.querySelectorAll('[data-cc-close]') : null;

    function openCcModal() {
        if (!ccModal) return;
        ccModal.classList.add('cc-modal--open');
        ccModal.setAttribute('aria-hidden', 'false');
    }

    function closeCcModal() {
        if (!ccModal) return;
        ccModal.classList.remove('cc-modal--open');
        ccModal.setAttribute('aria-hidden', 'true');
    }

    if (ccMore) {
        ccMore.addEventListener('click', function(e) {
            e.preventDefault();
            openCcModal();
        });
    }

    if (ccModalTriggers) {
        ccModalTriggers.forEach(function(trigger) {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                openCcModal();
            });
        });
    }

    if (ccModalCloseElems) {
        ccModalCloseElems.forEach(function(el) {
            el.addEventListener('click', function() { closeCcModal(); });
        });
    }

    // Close on Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeCcModal();
    });

    function setCookie(name, value, days) {
        let expires = '';
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toUTCString();
        }
        document.cookie = name + '=' + (value || '')  + expires + '; path=/';
    }

    function getCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});
