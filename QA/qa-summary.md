# QA summary

One-line summary for each canonical QA book run.

## Books
- qa-drama-silence (drama) — NQS 88% · CS 93% · CAR 99%
- qa-detective-river (detective-police) — NQS 88% · CS 93% · CAR 99%
- qa-scifi-orbit (science-fiction) — NQS 88% · CS 93% · CAR 99%
- qa-fantasy-ash (fantasy) — NQS 88% · CS 93% · CAR 99%
- qa-romance-margins (romance-relational) — NQS 88% · CS 93% · CAR 99%

<!-- scripta-data
{
  "books": [
    {
      "bookId": "qa-drama-silence",
      "profile": "drama",
      "workspaceRoot": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-drama-silence",
      "metrics": {
        "OI": 68,
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
        "NQS": 88
      },
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
              "name": "continuity packets match chapter count",
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
          "workspaceSource": "phase8-exports/edition-ro.reader.iter-001.html",
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
      "bookId": "qa-detective-river",
      "profile": "detective-police",
      "workspaceRoot": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-detective-river",
      "metrics": {
        "OI": 68,
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
        "NQS": 88
      },
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
              "name": "continuity packets match chapter count",
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
          "workspaceSource": "phase8-exports/edition-ro.reader.iter-001.html",
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
      "bookId": "qa-scifi-orbit",
      "profile": "science-fiction",
      "workspaceRoot": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-scifi-orbit",
      "metrics": {
        "OI": 69,
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
        "NQS": 88
      },
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
              "name": "continuity packets match chapter count",
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
          "evidence": "OI=69"
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
            "OI": 69,
            "EAP": 92
          }
        },
        {
          "bookId": "qa-scifi-orbit",
          "title": "Orbita celor nereveniti",
          "profile": "science-fiction",
          "languageCode": "ro",
          "workspaceSource": "phase8-exports/edition-ro.reader.iter-001.html",
          "publishedPath": "books/ro/qa-scifi-orbit.html",
          "metricsPage": "books/metrics/qa-scifi-orbit.html",
          "metricsSnapshot": {
            "NQS": 88,
            "CS": 93,
            "CAR": 99,
            "OI": 69,
            "EAP": 92
          }
        }
      ],
      "metricsPage": "books/metrics/qa-scifi-orbit.html"
    },
    {
      "bookId": "qa-fantasy-ash",
      "profile": "fantasy",
      "workspaceRoot": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-fantasy-ash",
      "metrics": {
        "OI": 68,
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
        "NQS": 88
      },
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
              "name": "continuity packets match chapter count",
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
          "workspaceSource": "phase8-exports/edition-ro.reader.iter-001.html",
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
      "workspaceRoot": "/home/salboaie/work/scriptaAgenticSkills/QA/qa-romance-margins",
      "metrics": {
        "OI": 68,
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
        "NQS": 88
      },
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
              "name": "continuity packets match chapter count",
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
          "workspaceSource": "phase8-exports/edition-ro.reader.iter-001.html",
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
    }
  ]
}
-->
