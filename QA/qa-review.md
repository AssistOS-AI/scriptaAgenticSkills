# QA review

Consolidated QA review across all canonical books.

## Books
- qa-detective-river: export 100% · stages macro 100%, chapters 100%, micro 100%, cnl 100%, drafts 100%, exports 100%
- qa-drama-silence: export 100% · stages macro 100%, chapters 100%, micro 100%, cnl 100%, drafts 100%, exports 100%
- qa-fantasy-ash: export 100% · stages macro 100%, chapters 100%, micro 100%, cnl 100%, drafts 100%, exports 100%
- qa-romance-margins: export 100% · stages macro 100%, chapters 100%, micro 100%, cnl 100%, drafts 100%, exports 100%
- qa-scifi-orbit: export 100% · stages macro 100%, chapters 100%, micro 100%, cnl 100%, drafts 100%, exports 100%

## Top tasks
- qa-detective-river: Increase lexical novelty (medium)
- qa-detective-river: Reinforce character continuity (medium)
- qa-detective-river: Improve final prose polish (high)
- qa-drama-silence: Increase lexical novelty (medium)
- qa-drama-silence: Reinforce character continuity (medium)
- qa-drama-silence: Improve final prose polish (high)
- qa-fantasy-ash: Increase lexical novelty (medium)
- qa-fantasy-ash: Reinforce character continuity (medium)
- qa-fantasy-ash: Improve final prose polish (high)
- qa-romance-margins: Increase lexical novelty (medium)
- qa-romance-margins: Reinforce character continuity (medium)
- qa-romance-margins: Improve final prose polish (high)
- qa-scifi-orbit: Increase lexical novelty (medium)
- qa-scifi-orbit: Reinforce character continuity (medium)
- qa-scifi-orbit: Improve final prose polish (high)

<!-- scripta-data
{
  "books": [
    {
      "bookId": "qa-detective-river",
      "profile": "detective-police",
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
      "topTasks": [
        {
          "id": "task-001",
          "priority": "medium",
          "stage": "micro",
          "title": "Increase lexical novelty",
          "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
          "evidence": "OI=68"
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
          "evidence": "NQS=88"
        }
      ],
      "publishedEditions": [
        {
          "bookId": "qa-detective-river",
          "title": "The River Knows First",
          "profile": "detective-police",
          "languageCode": "en",
          "workspaceSource": "phase8-exports/edition-en.reader.iter-001.html",
          "publishedPath": "books/en/qa-detective-river.html",
          "metricsPage": "books/metrics/qa-detective-river.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-detective-river",
          "title": "Raul stie primul",
          "profile": "detective-police",
          "languageCode": "ro",
          "workspaceSource": "phase9-translations/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-detective-river.html",
          "metricsPage": "books/metrics/qa-detective-river.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-detective-river.html"
    },
    {
      "bookId": "qa-drama-silence",
      "profile": "drama",
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
      "topTasks": [
        {
          "id": "task-001",
          "priority": "medium",
          "stage": "micro",
          "title": "Increase lexical novelty",
          "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
          "evidence": "OI=68"
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
          "evidence": "NQS=88"
        }
      ],
      "publishedEditions": [
        {
          "bookId": "qa-drama-silence",
          "title": "When the Silence Returns",
          "profile": "drama",
          "languageCode": "en",
          "workspaceSource": "phase8-exports/edition-en.reader.iter-001.html",
          "publishedPath": "books/en/qa-drama-silence.html",
          "metricsPage": "books/metrics/qa-drama-silence.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-drama-silence",
          "title": "Cand se intoarce tacerea",
          "profile": "drama",
          "languageCode": "ro",
          "workspaceSource": "phase9-translations/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-drama-silence.html",
          "metricsPage": "books/metrics/qa-drama-silence.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-drama-silence.html"
    },
    {
      "bookId": "qa-fantasy-ash",
      "profile": "fantasy",
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
      "topTasks": [
        {
          "id": "task-001",
          "priority": "medium",
          "stage": "micro",
          "title": "Increase lexical novelty",
          "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
          "evidence": "OI=68"
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
          "evidence": "NQS=88"
        }
      ],
      "publishedEditions": [
        {
          "bookId": "qa-fantasy-ash",
          "title": "The Ash Keeps Your Name",
          "profile": "fantasy",
          "languageCode": "en",
          "workspaceSource": "phase8-exports/edition-en.reader.iter-001.html",
          "publishedPath": "books/en/qa-fantasy-ash.html",
          "metricsPage": "books/metrics/qa-fantasy-ash.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-fantasy-ash",
          "title": "Cenusa iti pastreaza numele",
          "profile": "fantasy",
          "languageCode": "ro",
          "workspaceSource": "phase9-translations/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-fantasy-ash.html",
          "metricsPage": "books/metrics/qa-fantasy-ash.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-fantasy-ash.html"
    },
    {
      "bookId": "qa-romance-margins",
      "profile": "romance-relational",
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
      "topTasks": [
        {
          "id": "task-001",
          "priority": "medium",
          "stage": "micro",
          "title": "Increase lexical novelty",
          "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
          "evidence": "OI=68"
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
          "evidence": "NQS=88"
        }
      ],
      "publishedEditions": [
        {
          "bookId": "qa-romance-margins",
          "title": "Margins of the Heart",
          "profile": "romance-relational",
          "languageCode": "en",
          "workspaceSource": "phase8-exports/edition-en.reader.iter-001.html",
          "publishedPath": "books/en/qa-romance-margins.html",
          "metricsPage": "books/metrics/qa-romance-margins.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-romance-margins",
          "title": "Marginile inimii",
          "profile": "romance-relational",
          "languageCode": "ro",
          "workspaceSource": "phase9-translations/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-romance-margins.html",
          "metricsPage": "books/metrics/qa-romance-margins.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-romance-margins.html"
    },
    {
      "bookId": "qa-scifi-orbit",
      "profile": "science-fiction",
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
      "topTasks": [
        {
          "id": "task-001",
          "priority": "medium",
          "stage": "micro",
          "title": "Increase lexical novelty",
          "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
          "evidence": "OI=68"
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
          "evidence": "NQS=88"
        }
      ],
      "publishedEditions": [
        {
          "bookId": "qa-scifi-orbit",
          "title": "Orbit of the Unreturned",
          "profile": "science-fiction",
          "languageCode": "en",
          "workspaceSource": "phase8-exports/edition-en.reader.iter-001.html",
          "publishedPath": "books/en/qa-scifi-orbit.html",
          "metricsPage": "books/metrics/qa-scifi-orbit.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-scifi-orbit",
          "title": "Orbita celor nereveniti",
          "profile": "science-fiction",
          "languageCode": "ro",
          "workspaceSource": "phase9-translations/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-scifi-orbit.html",
          "metricsPage": "books/metrics/qa-scifi-orbit.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 68,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-scifi-orbit.html"
    }
  ],
  "tasks": [
    {
      "bookId": "qa-detective-river",
      "profile": "detective-police",
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=68"
    },
    {
      "bookId": "qa-detective-river",
      "profile": "detective-police",
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "bookId": "qa-detective-river",
      "profile": "detective-police",
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=88"
    },
    {
      "bookId": "qa-drama-silence",
      "profile": "drama",
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=68"
    },
    {
      "bookId": "qa-drama-silence",
      "profile": "drama",
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "bookId": "qa-drama-silence",
      "profile": "drama",
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=88"
    },
    {
      "bookId": "qa-fantasy-ash",
      "profile": "fantasy",
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=68"
    },
    {
      "bookId": "qa-fantasy-ash",
      "profile": "fantasy",
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "bookId": "qa-fantasy-ash",
      "profile": "fantasy",
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=88"
    },
    {
      "bookId": "qa-romance-margins",
      "profile": "romance-relational",
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=68"
    },
    {
      "bookId": "qa-romance-margins",
      "profile": "romance-relational",
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "bookId": "qa-romance-margins",
      "profile": "romance-relational",
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=88"
    },
    {
      "bookId": "qa-scifi-orbit",
      "profile": "science-fiction",
      "id": "task-001",
      "priority": "medium",
      "stage": "micro",
      "title": "Increase lexical novelty",
      "action": "Diversify scene-level action and trigger phrasing so the originality index rises without weakening continuity.",
      "evidence": "OI=68"
    },
    {
      "bookId": "qa-scifi-orbit",
      "profile": "science-fiction",
      "id": "task-002",
      "priority": "medium",
      "stage": "cnl",
      "title": "Reinforce character continuity",
      "action": "Carry character beliefs, fears, and relationship changes more explicitly from refined plans into drafts and exports.",
      "evidence": "CAD_score=88"
    },
    {
      "bookId": "qa-scifi-orbit",
      "profile": "science-fiction",
      "id": "task-003",
      "priority": "high",
      "stage": "bookwriter",
      "title": "Improve final prose polish",
      "action": "Tighten repeated formulations and deepen scene-specific language in the final edition so the narrative quality score moves above the current band.",
      "evidence": "NQS=88"
    }
  ]
}
-->
