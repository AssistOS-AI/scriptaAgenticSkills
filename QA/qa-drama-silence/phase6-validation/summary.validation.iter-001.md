# Validation summary

Structured validation output stored in Markdown form.

## Preview
- bookId: qa-drama-silence
- baselineProfile: drama
- metrics: {"OI":66,"NCS":100,"BCI":96,"VAD_score":100,"TOP_score":100,"PRC":100,"SFSG":95,"CCI":94,"CAD_score":88,"EAP":92,"CAR":99,"CS":93,"NQS":87}
- literaryIndicators: {"narrativeCoherence":93,"thematicDepth":88,"characterComplexity":82,"originality":83,"stylisticQuality":72,"emotionalImpact":90,"interpretiveOpenness":82,"culturalValue":78}
- issues: []
- exportAudit: {"score":100,"expectedLanguages":["en","ro"],"foundLanguages":["en","ro"],"missingLanguages":[],"editions":[{"languageCode":"en","score":100,"failedChecks":[]},{"languageCode":"ro","score":100,"failedChecks":[]}],"bundlePresent":true}
- stageAudit: [{"name":"macro","score":100,"status":"pass","checks":[{"name":"macro successor files exist","pass":true},{"name":"macro blocks expose central idea, theme, and world rules","pass":true},{"name":"macro blocks expose arc, motif, and location packets","pass":true}]},{"name":"chapters","score":100,"status":"pass","checks":[{"name":"chapter symbolic plans match requested chapter count","pass":true},{"name":"chapter refined plans match requested chapter count","pass":true},{"name":"chapter plans expose question and alternation fields","pass":true}]},{"name":"micro","score":100,"status":"pass","checks":[{"name":"micro refined plans match requested chapter count","pass":true},{"name":"micro plans contain scene definitions","pass":true},{"name":"micro plans contain dialogue-turn lines","pass":true},{"name":"micro plans contain location, rule-pressure, and arc packets","pass":true},{"name":"micro plans contain pause and acceleration controls","pass":true}]},{"name":"cnl","score":100,"status":"pass","checks":[{"name":"placeholder resolution artifact exists","pass":true},{"name":"refined plans do not retain placeholders","pass":true}]},{"name":"drafts","score":100,"status":"pass","checks":[{"name":"draft count matches requested chapter count","pass":true},{"name":"chapter drafts preserve refined chapter state fields","pass":true},{"name":"drafts are not trivially short","pass":true}]},{"name":"exports","score":100,"status":"pass","checks":[{"name":"all requested language editions exist","pass":true},{"name":"all editions passed structural checks","pass":true}]}]
- revisionTasks: [{"id":"task-001","priority":"medium","stage":"micro","title":"Increase lexical novelty","action":"Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.","evidence":"OI=66"},{"id":"task-002","priority":"medium","stage":"cnl","title":"Reinforce character continuity","action":"Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.","evidence":"CAD_score=88"},{"id":"task-003","priority":"high","stage":"bookwriter","title":"Improve final prose polish","action":"Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.","evidence":"NQS=87"}]

<!-- scripta-data
{
  "bookId": "qa-drama-silence",
  "baselineProfile": "drama",
  "metrics": {
    "OI": 66,
    "NCS": 100,
    "BCI": 96,
    "VAD_score": 100,
    "TOP_score": 100,
    "PRC": 100,
    "SFSG": 95,
    "CCI": 94,
    "CAD_score": 88,
    "EAP": 92,
    "CAR": 99,
    "CS": 93,
    "NQS": 87
  },
  "literaryIndicators": {
    "narrativeCoherence": 93,
    "thematicDepth": 88,
    "characterComplexity": 82,
    "originality": 83,
    "stylisticQuality": 72,
    "emotionalImpact": 90,
    "interpretiveOpenness": 82,
    "culturalValue": 78
  },
  "issues": [],
  "exportAudit": {
    "score": 100,
    "expectedLanguages": [
      "en",
      "ro"
    ],
    "foundLanguages": [
      "en",
      "ro"
    ],
    "missingLanguages": [],
    "editions": [
      {
        "languageCode": "en",
        "score": 100,
        "failedChecks": []
      },
      {
        "languageCode": "ro",
        "score": 100,
        "failedChecks": []
      }
    ],
    "bundlePresent": true
  },
  "stageAudit": [
    {
      "name": "macro",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "macro successor files exist",
          "pass": true
        },
        {
          "name": "macro blocks expose central idea, theme, and world rules",
          "pass": true
        },
        {
          "name": "macro blocks expose arc, motif, and location packets",
          "pass": true
        }
      ]
    },
    {
      "name": "chapters",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "chapter symbolic plans match requested chapter count",
          "pass": true
        },
        {
          "name": "chapter refined plans match requested chapter count",
          "pass": true
        },
        {
          "name": "chapter plans expose question and alternation fields",
          "pass": true
        }
      ]
    },
    {
      "name": "micro",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "micro refined plans match requested chapter count",
          "pass": true
        },
        {
          "name": "micro plans contain scene definitions",
          "pass": true
        },
        {
          "name": "micro plans contain dialogue-turn lines",
          "pass": true
        },
        {
          "name": "micro plans contain location, rule-pressure, and arc packets",
          "pass": true
        },
        {
          "name": "micro plans contain pause and acceleration controls",
          "pass": true
        }
      ]
    },
    {
      "name": "cnl",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "placeholder resolution artifact exists",
          "pass": true
        },
        {
          "name": "refined plans do not retain placeholders",
          "pass": true
        }
      ]
    },
    {
      "name": "drafts",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "draft count matches requested chapter count",
          "pass": true
        },
        {
          "name": "chapter drafts preserve refined chapter state fields",
          "pass": true
        },
        {
          "name": "drafts are not trivially short",
          "pass": true
        }
      ]
    },
    {
      "name": "exports",
      "score": 100,
      "status": "pass",
      "checks": [
        {
          "name": "all requested language editions exist",
          "pass": true
        },
        {
          "name": "all editions passed structural checks",
          "pass": true
        }
      ]
    }
  ],
  "revisionTasks": [
    {
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=66"
    },
    {
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=87"
    }
  ]
}
-->
