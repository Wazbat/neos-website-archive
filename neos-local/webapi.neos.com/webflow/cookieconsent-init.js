// obtain plugin
var cc = initCookieConsent();
document.body.classList.toggle('theme_katuscak_cookie_conset');

// run plugin with your configuration
cc.run({
    current_lang: "en",//document.documentElement.getAttribute('lang'), // Pro multijazyk
    

    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom right',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },

    autoclear_cookies: true,                   // default: false
    theme_css: 'https://webapi.neos.com/webflow/cookieconsent-theme.css?2',  // 🚨 replace with a valid path
    page_scripts: true,                        // default: false

    // mode: 'opt-in'                          // default: 'opt-in'; value: 'opt-in' or 'opt-out'
    // delay: 0,                               // default: 0
    // auto_language: null                     // default: null; could also be 'browser' or 'document'
    // autorun: true,                          // default: true
    force_consent: false,                   // default: false
    // hide_from_bots: false,                  // default: false
    // remove_cookie_tables: false             // default: false
    // cookie_name: 'cc_cookie',               // default: 'cc_cookie'
    // cookie_expiration: 182,                 // default: 182 (days)
    // cookie_necessary_only_expiration: 182   // default: disabled
    // cookie_domain: location.hostname,       // default: current domain
    // cookie_path: '/',                       // default: root
    // cookie_same_site: 'Lax',                // default: 'Lax'
    // use_rfc_cookie: false,                  // default: false
    revision: 1,                            // default: 0

    onFirstAction: function(user_preferences, cookie){
        // callback triggered only once
    },

    onAccept: function (cookie) {
        // ...
    },

    onChange: function (cookie, changed_preferences) {
        // ...
    },

    languages: {
        'cs': {
            consent_modal: {
                title: 'Používáme cookies!',
                description: 'Dobrý den, tato webová stránka používá soubory cookie k zajištění správného fungování a cookie pro analýzu, abychom pochopili, které stránky jsou navštevované a podobně. Ty budou nastaveny až po souhlasu. <button type="button" data-cc="c-settings" class="cc-link">Pojďme na to</button>',
                primary_btn: {
                    text: 'Povolit vše',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Odmítnout vše',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Nastavení cookies',
                save_settings_btn: 'Uložit nastavení',
                accept_all_btn: 'Povolit vše',
                reject_all_btn: 'Odmítnout vše',
                close_btn_label: 'Zavřít',
                cookie_table_headers: [
                    {col1: 'Název'},
                    {col2: 'Doména'},
                    {col3: 'Expirace'},
                    {col4: 'Popis'}
                ],
                blocks: [
                    {
                        title: 'Používání cookies 📢',
                        description: 'Cookies se používají pouze pro anonymní zanalyzování fungování webu a pro správné fungování.'
                    }, {
                        title: 'Striktně potřebné cookies',
                        description: 'Tyto cookies jsou základem pro správné fungování webu. Bez nich by web nemohl fungovat správně.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analytické a výkonnostní cookies',
                        description: 'Tyto cookies povolují webu zapamatovat si volby, které jste provedli v minulosti.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 roky',
                                col4: 'Soubor cookie _ga, nainstalovaný službou Google Analytics, vypočítává údaje o návštěvnících, relacích a kampaních a také sleduje využití webu pro analytický přehled webu. Soubor cookie ukládá informace anonymně a přiřazuje náhodně vygenerované číslo k rozpoznání unikátních návštěvníků.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 den',
                                col4: 'Soubor cookie _gid nainstalovaný službou Google Analytics ukládá informace o tom, jak návštěvníci používají webovou stránku, a zároveň vytváří analytickou zprávu o výkonu webu. Některá data, která jsou shromažďována, zahrnují počet návštěvníků, jejich zdroj a stránky, které anonymně navštěvují.',
                            }
                        ]
                    }, {
                        title: 'Více informací',
                        description: 'V případě otázek ohledně vztahu k soukromí a používání cookies na našem webu, nás prosím kontaktuje na info@bicycle.holiday. <br/><a href="/cs/vop/" target="_blank">Zásady používání cookies</a>',
                    }
                ]
            }
        },
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'Hello, This website uses cookies to ensure proper operation and cookies for analysis to understand which sites are visited and so on. These will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let\'s go!</button>',
                primary_btn: {
                    text: 'Allow everything',
                    role: 'accept_all'              // 'accept_selected' or 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject everything',
                    role: 'accept_necessary'        // 'settings' or 'accept_necessary'
                }
            },
            settings_modal: {
                title: 'Save settings',
                save_settings_btn: 'Uložit nastavení',
                accept_all_btn: 'Allow everything',
                reject_all_btn: 'Reject everything',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Use of cookies 📢',
                        description: 'Cookies are used only for anonymous analysis of website operation and for proper functioning.'
                    }, {
                        title: 'Strictly needed cookies',
                        description: 'These cookies are the basis for the proper functioning of the website. Without them, the site would not work properly.',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                        }
                    }, {
                        title: 'Analytical and performance cookies',
                        description: 'These cookies allow the site to remember the choices you have made in the past.',
                        toggle: {
                            value: 'analytics',     // your cookie category
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [             // list of all expected cookies
                            {
                                col1: '^_ga',       // match all cookies starting with "_ga"
                                col2: 'google.com',
                                col3: '2 years',
                                col4: 'The _ga cookie, installed by Google Analytics, calculates visitor, session, and campaign data and also tracks site usage for site analytics. The cookie stores information anonymously and assigns a randomly generated number to identify unique visitors.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '1 day',
                                col4: 'The _gid cookie installed by Google Analytics stores information about how visitors use the website, as well as generating an analytics report on the site\'s performance. Some of the data that is collected includes the number of visitors, their source, and the sites they visit anonymously.',
                            }
                        ]
                    }, {
                        title: 'More information',
                        description: 'If you have any questions regarding the relationship with privacy and the use of cookies on our website, please contact us at hello@neos.com. <br/><a href="https://wiki.neos.com/Neos_Wiki:Privacy_policy" target="_blank">Principles of using cookies</a>',
                    }
                ]
            }
        }
    }
});