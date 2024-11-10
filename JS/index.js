var lastQouteIndex;
function randomQoutes() {
  var qoute = [
    "“Be yourself; everyone else is already taken.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“Be the change that you wish to see in the world.”",
    "“A room without books is like a body without a soul.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“We are all in the gutter, but some of us are looking at the stars.”",
  ];
  var qouteAuthor = [
    "― Oscar Wilde",
    "― Bernard M. Baruch",
    "― Marilyn Monroe",
    "― Marcus Tullius Cicero",
    "― Mahatma Gandhi",
    "― Oscar Wilde",
  ];

  for (var i = 0; i < qouteAuthor.length; i++) {
    var randomQoute = Math.floor(Math.random() * qouteAuthor.length);
    if (randomQoute === lastQouteIndex) {
      continue;
    }
    lastQouteIndex = randomQoute;
    break;
  }

  document.getElementById("qoutes").innerHTML = qoute[randomQoute];
  document.getElementById("authorOfQoute").innerHTML = qouteAuthor[randomQoute];
}

randomQoutes();
