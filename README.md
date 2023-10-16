# alegra-francisco

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


```
Use este objeto en la api de Alegra  pero el cors no me dejeba crearlos ni visualizarlos
[
    {
        "id": 1,
        "name": "Francisco Chavajay",
        "identification": "1.000.123",
        "observations": "Vendedor tienda principal",
        "status": "active"
    },
    {
        "id": 2,
        "name": "Juan Javier ",
        "identification": "1.000.124",
        "observations": "Vendedor tienda principal",
        "status": "active"
    }
]

al Igual que la facturacion

{
  "status": "Open",
  "items": [
    {
      "name": "carrera",
      "price": 3,
      "quantity": 7,
      "description": "gano la carrera"
    }
  ],
  "date": "2023-10-23",
  "seller": {
    "1.000.123": "1",
    "1.000.124": "2"
  }
}
'


y tambien la request dde google solo que ya nopodia hacer mas peticiones 

{
    "kind": "customsearch#search",
    "url": {
        "type": "application/json",
        "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
    },
    "queries": {
        "request": [
            {
                "title": "Google Custom Search - \"Intel\" \"Tecnologico de Costa Rica\" site:linkedin.com",
                "totalResults": "30900",
                "searchTerms": "\"Intel\" \"Tecnologico de Costa Rica\" site:linkedin.com",
                "count": 10,
                "startIndex": 1,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "64a0ff48aa60342cb"
            }
        ],
        "nextPage": [
            {
                "title": "Google Custom Search - \"Intel\" \"Tecnologico de Costa Rica\" site:linkedin.com",
                "totalResults": "30900",
                "searchTerms": "\"Intel\" \"Tecnologico de Costa Rica\" site:linkedin.com",
                "count": 10,
                "startIndex": 11,
                "inputEncoding": "utf8",
                "outputEncoding": "utf8",
                "safe": "off",
                "cx": "64a0ff48aa60342cb"
            }
        ]
    },
    "context": {
        "title": "Intel"
    },
    "searchInformation": {
        "searchTime": 0.293022,
        "formattedSearchTime": "0.29",
        "totalResults": "30900",
        "formattedTotalResults": "30,900"
    },
    "items": [
        {
            "kind": "customsearch#result",
            "title": "Cynthia Taylor Herrera - System and Silicon Debug Engineer - Intel ...",
            "htmlTitle": "Cynthia Taylor Herrera - System and Silicon Debug Engineer - <b>Intel</b> ...",
            "link": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
            "displayLink": "cr.linkedin.com",
            "snippet": "Cynthia Taylor Herrera. Electronic Engineer - Tecnol\u00f3gico de Costa Rica. Intel CorporationTecnol\u00f3gico de Costa Rica. Grecia, Alajuela, Costa Rica.",
            "htmlSnippet": "Cynthia Taylor Herrera. Electronic Engineer - <b>Tecnol\u00f3gico de Costa Rica</b>. <b>Intel</b> Corporation<b>Tecnol\u00f3gico de Costa Rica</b>. Grecia, Alajuela, Costa Rica.",
            "formattedUrl": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
            "htmlFormattedUrl": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3fricDdkJ5YBkGa5U5dsQu0fqndaqr8qThWcNUYE86NEZ44ctMjZr0Q",
                        "width": "225",
                        "height": "225"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://media.licdn.com/dms/image/C5603AQH9HIpb75H6XA/profile-displayphoto-shrink_800_800/0/1654730302018?e=2147483647&v=beta&t=wZT17PbvrGa94FTkKLI6b459__XzMyrr9rrtATa14RM",
                        "twitter:card": "summary",
                        "platform-worker": "https://static.licdn.com/aero-v1/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
                        "al:android:package": "com.linkedin.android",
                        "locale": "es_ES",
                        "al:ios:url": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
                        "og:description": "Expert in test automation, scripting, debugging, and data analysis. Used to solve complex SW and HW issues. I enjoy learning programming languages and always looking for new growth opportunities in my career and as a person. I am a high-energy person who loves challenges and see problems as learning opportunities. I always strive for perfection without sacrificing teamwork and my peers\u2019 points of view. I am a teacher, and I always enjoy sharing my knowledge with the rest of the people. I do not believe in keeping knowledge just for myself. My daily tasks have the urge to be automated to maximize performance in all procedures. Due to this, I am an expert in automating tests to improve my team\u2019s day-to-day job. | Obt\u00e9n m\u00e1s informaci\u00f3n sobre la experiencia laboral, la educaci\u00f3n, los contactos y otra informaci\u00f3n sobre Cynthia Taylor Herrera visitando su perfil en LinkedIn",
                        "al:ios:app_store_id": "288429040",
                        "platform": "https://static.licdn.com/aero-v1/sc/h/euvq5tke82lc0n2ig246cr2dd",
                        "twitter:image": "https://media.licdn.com/dms/image/C5603AQH9HIpb75H6XA/profile-displayphoto-shrink_800_800/0/1654730302018?e=2147483647&v=beta&t=wZT17PbvrGa94FTkKLI6b459__XzMyrr9rrtATa14RM",
                        "profile:last_name": "Taylor Herrera",
                        "twitter:site": "@Linkedin",
                        "litmsprofilename": "public-profile-frontend",
                        "profile:first_name": "Cynthia",
                        "og:type": "profile",
                        "twitter:title": "Cynthia Taylor Herrera - System and Silicon Debug Engineer - Intel Corporation | LinkedIn",
                        "al:ios:app_name": "LinkedIn",
                        "og:title": "Cynthia Taylor Herrera - System and Silicon Debug Engineer - Intel Corporation | LinkedIn",
                        "pagekey": "public_profile_v3_mobile",
                        "al:android:url": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "Expert in test automation, scripting, debugging, and data analysis. Used to solve complex SW and HW issues. I enjoy learning programming languages and always looking for new growth opportunities in my career and as a person. I am a high-energy person who loves challenges and see problems as learning opportunities. I always strive for perfection without sacrificing teamwork and my peers\u2019 points of view. I am a teacher, and I always enjoy sharing my knowledge with the rest of the people. I do not believe in keeping knowledge just for myself. My daily tasks have the urge to be automated to maximize performance in all procedures. Due to this, I am an expert in automating tests to improve my team\u2019s day-to-day job. | Obt\u00e9n m\u00e1s informaci\u00f3n sobre la experiencia laboral, la educaci\u00f3n, los contactos y otra informaci\u00f3n sobre Cynthia Taylor Herrera visitando su perfil en LinkedIn",
                        "ubba": "https://static.licdn.com/aero-v1/sc/h/e3dp1lkr3l1mw3ms7sz17m11v",
                        "og:url": "https://cr.linkedin.com/in/cynthia-taylor-herrera",
                        "al:android:app_name": "LinkedIn"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://media.licdn.com/dms/image/C5603AQH9HIpb75H6XA/profile-displayphoto-shrink_800_800/0/1654730302018?e=2147483647&v=beta&t=wZT17PbvrGa94FTkKLI6b459__XzMyrr9rrtATa14RM"
                    }
                ],
                "Person": [
                    {}
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Andrea Gonzalez - Intel Corporation",
            "htmlTitle": "Andrea Gonzalez - <b>Intel</b> Corporation",
            "link": "https://www.linkedin.com/in/andrea-navas-asturias",
            "displayLink": "www.linkedin.com",
            "snippet": "Andrea Gonzalez. Global Leader | Industrial Engineer | DEI Strategist | Public Speaker. Intel CorporationTecnol\u00f3gico de Costa Rica. Clearfield, Utah, United\u00a0...",
            "htmlSnippet": "Andrea Gonzalez. Global Leader | Industrial Engineer | DEI Strategist | Public Speaker. <b>Intel</b> Corporation<b>Tecnol\u00f3gico de Costa Rica</b>. Clearfield, Utah, United&nbsp;...",
            "formattedUrl": "https://www.linkedin.com/in/andrea-navas-asturias",
            "htmlFormattedUrl": "https://www.linkedin.com/in/andrea-navas-asturias",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUNRAuTlgV_6jF3yM3yejJIgcwfA3KSp-u_ZZejwCTDYqp0DfPy0axIFU",
                        "width": "225",
                        "height": "225"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://media.licdn.com/dms/image/D5603AQHMD1LyJbH9IA/profile-displayphoto-shrink_800_800/0/1678547506292?e=2147483647&v=beta&t=oO1un-XqWhowS9GOK2MMxf2eSC7KX5zhOhN0z6CENPk",
                        "twitter:card": "summary",
                        "platform-worker": "https://static.licdn.com/aero-v1/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
                        "al:android:package": "com.linkedin.android",
                        "locale": "en_US",
                        "al:ios:url": "https://www.linkedin.com/in/andrea-navas-asturias",
                        "og:description": "\"Leading the way to change the world one professional, one organization, one community at the time\"<br>Proactive and Inclusive Leader. Passionate Public Speaker. Social Entrepreneur.<br><br>I help professionals who are seeking to become inclusive leaders.  As a Global Inclusion Program Manager at Intel, I am able to combine my passion, strategic thinking and influencing skills to implement Diversity, Equity and Inclusion solutions and best practices in order to empower everyone to belong in the workplace. | Learn more about Andrea Gonzalez's work experience, education, connections & more by visiting their profile on LinkedIn",
                        "al:ios:app_store_id": "288429040",
                        "platform": "https://static.licdn.com/aero-v1/sc/h/1xo1bsv98svd30vworhxh2rcr",
                        "twitter:image": "https://media.licdn.com/dms/image/D5603AQHMD1LyJbH9IA/profile-displayphoto-shrink_800_800/0/1678547506292?e=2147483647&v=beta&t=oO1un-XqWhowS9GOK2MMxf2eSC7KX5zhOhN0z6CENPk",
                        "profile:last_name": "Gonzalez",
                        "twitter:site": "@Linkedin",
                        "litmsprofilename": "public-profile-frontend",
                        "profile:first_name": "Andrea",
                        "og:type": "profile",
                        "twitter:title": "Andrea Gonzalez - Inclusion and Innovation Global Program Manager - Intel Corporation | LinkedIn",
                        "al:ios:app_name": "LinkedIn",
                        "og:title": "Andrea Gonzalez - Inclusion and Innovation Global Program Manager - Intel Corporation | LinkedIn",
                        "pagekey": "public_profile_v3_mobile",
                        "al:android:url": "https://www.linkedin.com/in/andrea-navas-asturias",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "\"Leading the way to change the world one professional, one organization, one community at the time\"<br>Proactive and Inclusive Leader. Passionate Public Speaker. Social Entrepreneur.<br><br>I help professionals who are seeking to become inclusive leaders.  As a Global Inclusion Program Manager at Intel, I am able to combine my passion, strategic thinking and influencing skills to implement Diversity, Equity and Inclusion solutions and best practices in order to empower everyone to belong in the workplace. | Learn more about Andrea Gonzalez's work experience, education, connections & more by visiting their profile on LinkedIn",
                        "ubba": "https://static.licdn.com/aero-v1/sc/h/aw6azdorseonohkskjojygghr",
                        "og:url": "https://www.linkedin.com/in/andrea-navas-asturias",
                        "al:android:app_name": "LinkedIn"
                    }
                ],
                "cse_image": [
                    {
                        "src": "https://media.licdn.com/dms/image/D5603AQHMD1LyJbH9IA/profile-displayphoto-shrink_800_800/0/1678547506292?e=2147483647&v=beta&t=oO1un-XqWhowS9GOK2MMxf2eSC7KX5zhOhN0z6CENPk"
                    }
                ],
                "Person": [
                    {}
                ]
            }
        },
        {
            "kind": "customsearch#result",
            "title": "Allan Carmona - Analog DV/HVM Engineer - Intel Corporation ...",
            "htmlTitle": "Allan Carmona - Analog DV/HVM Engineer - <b>Intel</b> Corporation ...",
            "link": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
            "displayLink": "cr.linkedin.com",
            "snippet": "Allan Carmona. Graduated Research Assistant Tecnol\u00f3gico de Costa Rica. Intel CorporationTecnol\u00f3gico de Costa Rica. San Pedro, San Jose,\u00a0...",
            "htmlSnippet": "Allan Carmona. Graduated Research Assistant <b>Tecnol\u00f3gico de Costa Rica</b>. <b>Intel</b> Corporation<b>Tecnol\u00f3gico de Costa Rica</b>. San Pedro, San Jose,&nbsp;...",
            "formattedUrl": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
            "htmlFormattedUrl": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
            "pagemap": {
                "cse_thumbnail": [
                    {
                        "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj62aRADTgZ-IE6AtDJKblzw6BtLfapOsgxl3RBgMuF1sQ3A1ptwYx3_U",
                        "width": "225",
                        "height": "225"
                    }
                ],
                "metatags": [
                    {
                        "og:image": "https://media.licdn.com/dms/image/C5603AQGoJbFjC_Frfg/profile-displayphoto-shrink_800_800/0/1608833395353?e=2147483647&v=beta&t=VJWgboBoa5wtv1fuHWvMO56h1Vk6GoEBNKAXVbEC4jk",
                        "twitter:card": "summary",
                        "platform-worker": "https://static.licdn.com/aero-v1/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
                        "al:android:package": "com.linkedin.android",
                        "locale": "en_US",
                        "al:ios:url": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
                        "og:description": "Working on Signal and Power Integrity Research projects.<br>Optimization of high speed interconnects using machine learning techniques.<br>Modeling of high speed interconnects using deep neural networks.<br>High Speed Links and Systems.<br><br> | Learn more about Allan Carmona's work experience, education, connections & more by visiting their profile on LinkedIn",
                        "al:ios:app_store_id": "288429040",
                        "platform": "https://static.licdn.com/aero-v1/sc/h/b00we9lpqgrlokzuz3f9lhb18",
                        "twitter:image": "https://media.licdn.com/dms/image/C5603AQGoJbFjC_Frfg/profile-displayphoto-shrink_800_800/0/1608833395353?e=2147483647&v=beta&t=VJWgboBoa5wtv1fuHWvMO56h1Vk6GoEBNKAXVbEC4jk",
                        "profile:last_name": "Carmona",
                        "twitter:site": "@Linkedin",
                        "litmsprofilename": "public-profile-frontend",
                        "profile:first_name": "Allan",
                        "og:type": "profile",
                        "twitter:title": "Allan Carmona - Analog DV/HVM Engineer - Intel Corporation | LinkedIn",
                        "al:ios:app_name": "LinkedIn",
                        "og:title": "Allan Carmona - Analog DV/HVM Engineer - Intel Corporation | LinkedIn",
                        "pagekey": "public_profile_v3_mobile",
                        "al:android:url": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
                        "viewport": "width=device-width, initial-scale=1.0",
                        "twitter:description": "Working on Signal and Power Integrity Research projects.<br>Optimization of high speed interconnects using machine learning techniques.<br>Modeling of high speed interconnects using deep neural networks.<br>High Speed Links and Systems.<br><br> | Learn more about Allan Carmona's work experience, education, connections & more by visiting their profile on LinkedIn",
                        "ubba": "https://static.licdn.com/aero-v1/sc/h/dzy9rj3007s5yo3jftf4kr2na",
                        "og:url": "https://cr.linkedin.com/in/allan-carmona-66b0a7109/en",
                        "al:android:app_name": "LinkedIn"
                    }
                ],
                "cse_image":
```

