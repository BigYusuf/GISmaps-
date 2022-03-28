

var subjectObject = {
    "Presidential Election": {
        "Whole Country": ["Whole Country"],
      "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
      "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
    },
    "Governoship Election": {
      "Whole Country": ["Whole Country"],
      "Abia": ["SELECT", "UPDATE", "DELETE"],
      "Adamawa": ["SELECT", "UPDATE", "DELETE"],
      "Akwa Ibom": ["SELECT", "UPDATE", "DELETE"],
      "Anambra": ["SELECT", "UPDATE", "DELETE"],
      "Bauchi": ["SELECT", "UPDATE", "DELETE"],
      "Bayelsa": ["SELECT", "UPDATE", "DELETE"],
      "Benue": ["SELECT", "UPDATE", "DELETE"],
      "Borno": ["SELECT", "UPDATE", "DELETE"],
      "Cross River": ["SELECT", "UPDATE", "DELETE"],
      "Delta": ["SELECT", "UPDATE", "DELETE"],
      "Ebonyi": ["SELECT", "UPDATE", "DELETE"],
      "Edo": ["SELECT", "UPDATE", "DELETE"],
      "Ekiti": ["SELECT", "UPDATE", "DELETE"],
      "Enugu": ["SELECT", "UPDATE", "DELETE"],
        "FCT": ["SELECT", "UPDATE", "DELETE"],
        "Gombe": ["SELECT", "UPDATE", "DELETE"],
        "Imo": ["SELECT", "UPDATE", "DELETE"],
        "Jigawa": ["SELECT", "UPDATE", "DELETE"],
        "Kaduna": ["SELECT", "UPDATE", "DELETE"],
        "Kano": ["SELECT", "UPDATE", "DELETE"],
        "Katsina": ["SELECT", "UPDATE", "DELETE"],
        "Kebbi": ["SELECT", "UPDATE", "DELETE"],
        "Kogi": ["SELECT", "UPDATE", "DELETE"],
        "Kwara": ["SELECT", "UPDATE", "DELETE"],
        "Lagos": ["SELECT", "UPDATE", "DELETE"],
        "Nasarawa": ["SELECT", "UPDATE", "DELETE"],
        "Niger": ["SELECT", "UPDATE", "DELETE"],
        "Ogun": ["SELECT", "UPDATE", "DELETE"],
        "Ondo": ["SELECT", "UPDATE", "DELETE"],
        "Osun": ["SELECT", "UPDATE", "DELETE"],
        "Oyo": ["SELECT", "UPDATE", "DELETE"],
        "Plateau": ["SELECT", "UPDATE", "DELETE"],
        "Rivers": ["SELECT", "UPDATE", "DELETE"],
        "Sokoto": ["SELECT", "UPDATE", "DELETE"],
        "Taraba": ["SELECT", "UPDATE", "DELETE"],
        "Yobe": ["SELECT", "UPDATE", "DELETE"],
        "Zamfara": ["SELECT", "UPDATE", "DELETE"],

    },
    "Senatorial Election": {
      "PHP": ["Variables", "Strings", "Arrays"],
      "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
  }
  function loadg() {
    var subjectSel = document.getElementById("subject");
    var topicSel = document.getElementById("topic");
    var chapterSel = document.getElementById("chapter");
    for (var x in subjectObject) {
      subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function() {
      //empty Chapters- and Topics- dropdowns
      chapterSel.length = 1;
      topicSel.length = 1;
      //display correct values
      for (var y in subjectObject[this.value]) {
        topicSel.options[topicSel.options.length] = new Option(y, y);
      }
    }
    topicSel.onchange = function() {
      //empty Chapters dropdown
      chapterSel.length = 1;
      //display correct values
      var z = subjectObject[subjectSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }