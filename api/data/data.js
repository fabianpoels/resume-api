let data = {}

data.personal = {}
data.personal.name = 'Fabian Poels'
data.personal.dateOfBirth = '05/04/1987'
data.personal.email = 'hello@fabianpoels.com'

data.skills = {}
data.skills.programmingLanguages = [
  {
    language: 'Java',
    skill: 4
  },
  {
    language: 'PHP',
    skill: 3
  },
  {
    language: 'Python',
    skill: 2
  },
  {
    language: 'Perl',
    skill: 2
  },
  {
    language: 'Javascript',
    skill: 4
  },
  {
    language: 'C#',
    skill: 2
  }
]
data.skills.frameworks = [
  {
    name: 'Play',
    skill: 3
  },
  {
    name: 'Laravel',
    skill: 2
  },
  {
    name: 'NodeJS',
    skill: 4
  }
]
data.skills.other = [
  {
    name: 'Git',
    skill: 4
  }
]
data.skills.languages = [
  {
    language: 'Dutch',
    skill: 5
  },
  {
    language: 'English',
    skill: 4
  },
  {
    language: 'French',
    skill: 4
  },
  {
    language: 'German',
    skill: 2
  }
]
data.skills.description = 'Thorough knowledge of object-orientated languages and concepts, mainly in Java but also to a lesser extent in C#. Experience with various scripting languages (PHP, Python, Perl, JavaScript) and web-development frameworks (Play, Laravel, NodeJS, ExpressJS, Vue…). Good knowledge of the Git version control system and various database systems (SQL, NoSQL). Experience with various development environments (from plain text editors to IDE’s like Eclipse) and operating systems (Windows and Linux, mostly Ubuntu).'

data.experience = [
  {
    name: 'Sportoase Philipssite',
    function: 'Climbing gym operational manager',
    timespan: 'September 2011 - present',
    location: 'Leuven',
    description: 'Responsability for the day-to-day workings and administration of a climbing gym.'
  },
  {
    name: 'Kivif',
    function: 'Rope course instructor and rescuer',
    timespan: '2011 - present',
    location: 'Sint-Joris-Weert',
    description: ''
  },
  {
    name: 'D\'Store',
    function: 'Sales employee',
    timespan: '2010 - 2012',
    location: 'Bierbeek',
    description: ''
  },
  {
    name: 'Smartlounge (part of Kunstmaan)',
    function: 'Junior Developer',
    timespan: '2010',
    location: 'Leuven',
    description: 'Three month internship followed by a one month paid position in the web development department of a communication agency. I worked mostly on their own Java-based CMS, as well as on small PoC\'s for future projects.'
  }
]

data.education = [
  {
    instance: 'UC Leuven-Limburg',
    degree: 'Bachelor in applied informatics',
    timespan: '2007 - 2010 / 2017 - present',
    comment: ''
  },
  {
    instance: 'Sport Vlaanderen/VTS',
    degree: 'Climbing instructor',
    timespan: '2016',
    comment: ''
  },
  {
    instance: 'Sport Vlaanderen/VTS',
    degree: 'Snowboard instructor',
    timespan: '2011',
    comment: ''
  },
  {
    instance: 'Exponent',
    degree: 'European rope course rescuer',
    timespan: '2011',
    comment: ''
  },
  {
    instance: 'KULeuven',
    degree: 'Bachelor in physics',
    timespan: '2005 - 2007',
    comment: 'No degree'
  },
  {
    instance: 'Sint-Pieterscollege Leuven',
    degree: 'High school degree',
    timespan: '1999 - 2005',
    comment: 'General high school degree with focus on maths and sciences'
  }
]

module.exports = data
