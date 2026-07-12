/* AUTO-GENERATED from corpus.json — do not edit by hand. */
window.PMM_DATA = {
  "meta": {
    "title": "Predictive Mastery Map — grounded corpus (v2)",
    "description": "Knowledge blocks for enterprise ML prediction. Each block maps to a real, named unit in a reputable ML/DL corpus (corpus+unit+URL). difficulty = foundations(0) -> frontier(1). domain drives colour; ucs = which of the 25 use cases require the block; prereqs = hand-curated direct prerequisites (the 'learn first' edges).",
    "sourcing": "No invented blocks. Vision/NLP-only units excluded as out-of-scope for tabular/time-series enterprise prediction. Prerequisites are hand-authored, not auto-derived.",
    "version": "0.2",
    "generated": "2026-07-12"
  },
  "domains": [
    {
      "k": "fnd",
      "label": "Foundations (shared)",
      "color": "#A8B2C0"
    },
    {
      "k": "fs",
      "label": "Financial services & risk",
      "color": "#4F8FF0"
    },
    {
      "k": "mkt",
      "label": "Marketing, sales & customer",
      "color": "#B072E8"
    },
    {
      "k": "scm",
      "label": "Supply chain, retail & pricing",
      "color": "#2FC2D4"
    },
    {
      "k": "mfg",
      "label": "Manufacturing, operations & assets",
      "color": "#EDA23B"
    },
    {
      "k": "hcw",
      "label": "Healthcare & workforce",
      "color": "#F072B6"
    }
  ],
  "useCases": [
    {
      "k": "cs",
      "label": "Credit scoring",
      "domain": "fs"
    },
    {
      "k": "lgd",
      "label": "Loss given default / EAD",
      "domain": "fs"
    },
    {
      "k": "uw",
      "label": "Insurance underwriting",
      "domain": "fs"
    },
    {
      "k": "claims",
      "label": "Claims severity & reserving",
      "domain": "fs"
    },
    {
      "k": "fraud",
      "label": "Fraud detection",
      "domain": "fs"
    },
    {
      "k": "aml",
      "label": "Anti-money laundering",
      "domain": "fs"
    },
    {
      "k": "collections",
      "label": "Collections prioritization",
      "domain": "fs"
    },
    {
      "k": "churn",
      "label": "Churn & retention",
      "domain": "mkt"
    },
    {
      "k": "clv",
      "label": "Customer lifetime value",
      "domain": "mkt"
    },
    {
      "k": "lead",
      "label": "Lead scoring / propensity",
      "domain": "mkt"
    },
    {
      "k": "xsell",
      "label": "Cross-sell / up-sell",
      "domain": "mkt"
    },
    {
      "k": "nba",
      "label": "Next-best-action / uplift",
      "domain": "mkt"
    },
    {
      "k": "reco",
      "label": "Recommendation",
      "domain": "mkt"
    },
    {
      "k": "attribution",
      "label": "Marketing attribution",
      "domain": "mkt"
    },
    {
      "k": "demand",
      "label": "Demand forecasting",
      "domain": "scm"
    },
    {
      "k": "sales_fc",
      "label": "Sales & revenue forecasting",
      "domain": "scm"
    },
    {
      "k": "inventory",
      "label": "Inventory & replenishment",
      "domain": "scm"
    },
    {
      "k": "pricing",
      "label": "Price & promotion optimization",
      "domain": "scm"
    },
    {
      "k": "pdm",
      "label": "Predictive maintenance",
      "domain": "mfg"
    },
    {
      "k": "anomaly",
      "label": "Anomaly detection",
      "domain": "mfg"
    },
    {
      "k": "quality",
      "label": "Quality & defect prediction",
      "domain": "mfg"
    },
    {
      "k": "energy",
      "label": "Energy load forecasting",
      "domain": "mfg"
    },
    {
      "k": "attrition",
      "label": "Employee attrition",
      "domain": "hcw"
    },
    {
      "k": "readmission",
      "label": "Hospital readmission / risk",
      "domain": "hcw"
    },
    {
      "k": "los",
      "label": "Length of stay",
      "domain": "hcw"
    }
  ],
  "knowledgeBlocks": [
    {
      "id": "math_found",
      "label": "Math & probability foundations",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.04,
      "importance": 2,
      "prereqs": [],
      "sources": [
        {
          "corpus": "d2l.ai",
          "unit": "Preliminaries",
          "url": "https://d2l.ai/chapter_preliminaries/index.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "stat_learning",
      "label": "Statistical learning: prediction vs inference",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.07,
      "importance": 2,
      "prereqs": [
        "math_found"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.2 Statistical Learning",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "found"
    },
    {
      "id": "end2end",
      "label": "End-to-end ML project workflow",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.1,
      "importance": 2,
      "prereqs": [
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.2 End-to-End ML Project",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch02.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "num_data",
      "label": "Working with numerical data",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.12,
      "importance": 1,
      "prereqs": [
        "end2end"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Working with Numerical Data",
          "url": "https://developers.google.com/machine-learning/crash-course/numerical-data"
        }
      ],
      "area": "found"
    },
    {
      "id": "cat_data",
      "label": "Categorical encoding",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.13,
      "importance": 1,
      "prereqs": [
        "end2end"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Working with Categorical Data",
          "url": "https://developers.google.com/machine-learning/crash-course/categorical-data"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Preprocessing data",
          "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "scaling",
      "label": "Feature scaling & preprocessing",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.14,
      "importance": 1,
      "prereqs": [
        "num_data"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Preprocessing data",
          "url": "https://scikit-learn.org/stable/modules/preprocessing.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "impute",
      "label": "Missing-value imputation",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.15,
      "importance": 1,
      "prereqs": [
        "end2end"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Imputation of missing values",
          "url": "https://scikit-learn.org/stable/modules/impute.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "train_test",
      "label": "Train / validation / test split",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.16,
      "importance": 2,
      "prereqs": [
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Datasets, Generalization & Overfitting",
          "url": "https://developers.google.com/machine-learning/crash-course/overfitting"
        }
      ],
      "area": "found"
    },
    {
      "id": "lin_reg",
      "label": "Linear regression",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.18,
      "importance": 2,
      "prereqs": [
        "stat_learning",
        "num_data"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.3 Linear Regression",
          "url": "https://www.statlearning.com/"
        },
        {
          "corpus": "Google MLCC",
          "unit": "Linear Regression",
          "url": "https://developers.google.com/machine-learning/crash-course/linear-regression"
        }
      ],
      "area": "classical"
    },
    {
      "id": "overfit",
      "label": "Overfitting & generalization",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.2,
      "importance": 2,
      "prereqs": [
        "train_test"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Datasets, Generalization & Overfitting",
          "url": "https://developers.google.com/machine-learning/crash-course/overfitting"
        }
      ],
      "area": "found"
    },
    {
      "id": "log_reg",
      "label": "Logistic regression",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.21,
      "importance": 2,
      "prereqs": [
        "lin_reg"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Logistic Regression",
          "url": "https://developers.google.com/machine-learning/crash-course/logistic-regression"
        },
        {
          "corpus": "ISLR",
          "unit": "Ch.4 Classification",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "classical"
    },
    {
      "id": "gradient_descent",
      "label": "Gradient descent & SGD",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.22,
      "importance": 2,
      "prereqs": [
        "lin_reg",
        "math_found"
      ],
      "sources": [
        {
          "corpus": "fast.ai",
          "unit": "Lesson 3: Neural net foundations",
          "url": "https://course.fast.ai/Lessons/lesson3.html"
        },
        {
          "corpus": "d2l.ai",
          "unit": "Optimization Algorithms",
          "url": "https://d2l.ai/chapter_optimization/index.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "bias_var",
      "label": "Bias–variance trade-off",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.23,
      "importance": 1,
      "prereqs": [
        "overfit",
        "train_test"
      ],
      "sources": [
        {
          "corpus": "ESL",
          "unit": "Ch.7 Model Assessment and Selection",
          "url": "https://hastie.su.domains/ElemStatLearn/"
        }
      ],
      "area": "found"
    },
    {
      "id": "naive_bayes",
      "label": "Naive Bayes",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.24,
      "importance": 1,
      "prereqs": [
        "math_found",
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Naive Bayes",
          "url": "https://scikit-learn.org/stable/modules/naive_bayes.html"
        }
      ],
      "area": "classical"
    },
    {
      "id": "knn",
      "label": "k-nearest neighbors",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.25,
      "importance": 1,
      "prereqs": [
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Nearest Neighbors",
          "url": "https://scikit-learn.org/stable/modules/neighbors.html"
        }
      ],
      "area": "classical"
    },
    {
      "id": "cross_val",
      "label": "Cross-validation & resampling",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.26,
      "importance": 2,
      "prereqs": [
        "train_test",
        "overfit"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.5 Resampling Methods",
          "url": "https://www.statlearning.com/"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Cross-validation",
          "url": "https://scikit-learn.org/stable/modules/cross_validation.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "dtrees",
      "label": "Decision trees",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.28,
      "importance": 2,
      "prereqs": [
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.8 Tree-Based Methods",
          "url": "https://www.statlearning.com/"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Decision Trees",
          "url": "https://scikit-learn.org/stable/modules/tree.html"
        }
      ],
      "area": "classical"
    },
    {
      "id": "class_metrics",
      "label": "Classification metrics (precision / recall / F1)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.28,
      "importance": 2,
      "prereqs": [
        "log_reg"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Classification",
          "url": "https://developers.google.com/machine-learning/crash-course/classification"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Metrics & scoring",
          "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
        }
      ],
      "area": "eval"
    },
    {
      "id": "regularize",
      "label": "Regularization (ridge / lasso)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.3,
      "importance": 2,
      "prereqs": [
        "lin_reg",
        "overfit"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.6 Linear Model Selection & Regularization",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "classical"
    },
    {
      "id": "roc_pr",
      "label": "ROC & PR curves",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.32,
      "importance": 2,
      "prereqs": [
        "class_metrics"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Classification",
          "url": "https://developers.google.com/machine-learning/crash-course/classification"
        }
      ],
      "area": "eval"
    },
    {
      "id": "pipelines",
      "label": "Pipelines & avoiding leakage",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.32,
      "importance": 2,
      "prereqs": [
        "scaling",
        "cat_data",
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Pipelines & composite estimators",
          "url": "https://scikit-learn.org/stable/modules/compose.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "feat_eng",
      "label": "Feature engineering",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.34,
      "importance": 3,
      "prereqs": [
        "num_data",
        "cat_data",
        "scaling"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Working with Categorical Data (feature crosses)",
          "url": "https://developers.google.com/machine-learning/crash-course/categorical-data"
        },
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.2 End-to-End ML Project",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch02.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "rforest",
      "label": "Random forests & bagging",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.34,
      "importance": 2,
      "prereqs": [
        "dtrees",
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.7 Ensemble Learning & Random Forests",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch07.html"
        },
        {
          "corpus": "ESL",
          "unit": "Ch.15 Random Forests",
          "url": "https://hastie.su.domains/ElemStatLearn/"
        }
      ],
      "area": "classical"
    },
    {
      "id": "clustering",
      "label": "Clustering (k-means / DBSCAN)",
      "domain": "mkt",
      "ucs": [
        "churn",
        "clv",
        "nba",
        "reco",
        "anomaly",
        "aml"
      ],
      "difficulty": 0.36,
      "importance": 1,
      "prereqs": [
        "scaling"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.9 Unsupervised Learning",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch09.html"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Clustering",
          "url": "https://scikit-learn.org/stable/modules/clustering.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "feat_select",
      "label": "Feature selection",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.38,
      "importance": 1,
      "prereqs": [
        "feat_eng"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Feature selection",
          "url": "https://scikit-learn.org/stable/modules/feature_selection.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "fairness",
      "label": "Fairness, bias & responsible AI",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.4,
      "importance": 1,
      "prereqs": [
        "class_metrics"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "ML Fairness",
          "url": "https://developers.google.com/machine-learning/crash-course/fairness"
        },
        {
          "corpus": "fast.ai",
          "unit": "Data ethics",
          "url": "https://course.fast.ai/Lessons/lesson8a.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "error_analysis",
      "label": "Error analysis & ML strategy",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.4,
      "importance": 1,
      "prereqs": [
        "cross_val",
        "class_metrics"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Structuring ML Projects",
          "url": "https://www.coursera.org/learn/machine-learning-projects"
        }
      ],
      "area": "eval"
    },
    {
      "id": "dim_reduce",
      "label": "Dimensionality reduction (PCA)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.4,
      "importance": 1,
      "prereqs": [
        "scaling",
        "math_found"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.8 Dimensionality Reduction",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch08.html"
        },
        {
          "corpus": "ISLR",
          "unit": "Ch.12 Unsupervised Learning",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "found"
    },
    {
      "id": "ts_decomp",
      "label": "Time-series decomposition",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "energy",
        "pdm",
        "anomaly"
      ],
      "difficulty": 0.4,
      "importance": 1,
      "prereqs": [
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Ch.3 Time series decomposition",
          "url": "https://otexts.com/fpp3/decomposition.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "svm",
      "label": "Support vector machines",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.4,
      "importance": 1,
      "prereqs": [
        "regularize",
        "gradient_descent"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.9 Support Vector Machines",
          "url": "https://www.statlearning.com/"
        },
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.5 Support Vector Machines",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch05.html"
        }
      ],
      "area": "classical"
    },
    {
      "id": "gbm",
      "label": "Gradient boosting (XGBoost / LightGBM)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.42,
      "importance": 3,
      "prereqs": [
        "dtrees",
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "ESL",
          "unit": "Ch.10 Boosting and Additive Trees",
          "url": "https://hastie.su.domains/ElemStatLearn/"
        },
        {
          "corpus": "scikit-learn",
          "unit": "Ensembles: gradient boosting",
          "url": "https://scikit-learn.org/stable/modules/ensemble.html"
        }
      ],
      "area": "classical"
    },
    {
      "id": "hyperparam",
      "label": "Hyperparameter tuning",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.42,
      "importance": 1,
      "prereqs": [
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Improving DNNs — Hyperparameter Tuning",
          "url": "https://www.coursera.org/learn/deep-neural-network"
        }
      ],
      "area": "eval"
    },
    {
      "id": "splines_gam",
      "label": "Beyond linearity: splines & GAMs",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.42,
      "importance": 1,
      "prereqs": [
        "lin_reg",
        "regularize"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.7 Moving Beyond Linearity",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "classical"
    },
    {
      "id": "imbalance",
      "label": "Class-imbalance handling",
      "domain": "fs",
      "ucs": [
        "fraud",
        "aml",
        "cs",
        "uw",
        "collections",
        "pdm",
        "quality",
        "anomaly",
        "readmission"
      ],
      "difficulty": 0.44,
      "importance": 2,
      "prereqs": [
        "class_metrics",
        "roc_pr"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Metrics & scoring (imbalance)",
          "url": "https://scikit-learn.org/stable/modules/model_evaluation.html"
        }
      ],
      "area": "eval"
    },
    {
      "id": "ts_features",
      "label": "Lag & window features",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "energy",
        "pdm",
        "anomaly"
      ],
      "difficulty": 0.44,
      "importance": 2,
      "prereqs": [
        "ts_decomp",
        "feat_eng"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.15 Processing Sequences (RNNs/CNNs)",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch15.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "ensembles",
      "label": "Ensembling & stacking",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.46,
      "importance": 1,
      "prereqs": [
        "rforest",
        "gbm"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.7 Ensemble Learning",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch07.html"
        },
        {
          "corpus": "ESL",
          "unit": "Ch.16 Ensemble Learning",
          "url": "https://hastie.su.domains/ElemStatLearn/"
        }
      ],
      "area": "classical"
    },
    {
      "id": "calibration",
      "label": "Probability calibration",
      "domain": "fs",
      "ucs": [
        "cs",
        "uw",
        "fraud",
        "lgd",
        "claims",
        "pdm"
      ],
      "difficulty": 0.46,
      "importance": 1,
      "prereqs": [
        "log_reg",
        "class_metrics"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Probability calibration",
          "url": "https://scikit-learn.org/stable/modules/calibration.html"
        }
      ],
      "area": "eval"
    },
    {
      "id": "explain",
      "label": "Explainability (SHAP) & importance",
      "domain": "fs",
      "ucs": [
        "cs",
        "uw",
        "fraud",
        "claims",
        "churn",
        "pdm",
        "attrition"
      ],
      "difficulty": 0.48,
      "importance": 2,
      "prereqs": [
        "rforest",
        "feat_select"
      ],
      "sources": [
        {
          "corpus": "fast.ai",
          "unit": "Lesson 6: Random forests (feature importance)",
          "url": "https://course.fast.ai/Lessons/lesson6.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "threshold",
      "label": "Threshold optimization",
      "domain": "mfg",
      "ucs": [
        "fraud",
        "aml",
        "anomaly",
        "quality",
        "pdm",
        "cs"
      ],
      "difficulty": 0.48,
      "importance": 1,
      "prereqs": [
        "roc_pr",
        "class_metrics"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Classification (thresholding)",
          "url": "https://developers.google.com/machine-learning/crash-course/classification"
        }
      ],
      "area": "eval"
    },
    {
      "id": "density",
      "label": "Density estimation",
      "domain": "mfg",
      "ucs": [
        "anomaly",
        "fraud",
        "aml"
      ],
      "difficulty": 0.48,
      "importance": 1,
      "prereqs": [
        "math_found",
        "dim_reduce"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Density Estimation",
          "url": "https://scikit-learn.org/stable/modules/density.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "forecast_eval",
      "label": "Forecast backtesting & accuracy",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "energy",
        "pdm"
      ],
      "difficulty": 0.48,
      "importance": 1,
      "prereqs": [
        "ts_decomp",
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Evaluating point-forecast accuracy",
          "url": "https://otexts.com/fpp3/accuracy.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "expsmooth",
      "label": "Exponential smoothing / ETS",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "energy"
      ],
      "difficulty": 0.5,
      "importance": 2,
      "prereqs": [
        "ts_decomp"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Ch.8 Exponential smoothing",
          "url": "https://otexts.com/fpp3/expsmooth.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "cost_sensitive",
      "label": "Cost-sensitive learning",
      "domain": "fs",
      "ucs": [
        "fraud",
        "aml",
        "cs",
        "uw",
        "claims",
        "pdm",
        "collections"
      ],
      "difficulty": 0.5,
      "importance": 2,
      "prereqs": [
        "class_metrics",
        "threshold"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Classification (thresholding)",
          "url": "https://developers.google.com/machine-learning/crash-course/classification"
        }
      ],
      "area": "eval"
    },
    {
      "id": "stl",
      "label": "STL decomposition",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "energy",
        "anomaly"
      ],
      "difficulty": 0.52,
      "importance": 1,
      "prereqs": [
        "ts_decomp"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "STL decomposition",
          "url": "https://otexts.com/fpp3/stl.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "arima",
      "label": "ARIMA models",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "energy"
      ],
      "difficulty": 0.54,
      "importance": 2,
      "prereqs": [
        "ts_decomp",
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Ch.9 ARIMA models",
          "url": "https://otexts.com/fpp3/arima.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "nn_basics",
      "label": "Neural network basics (MLP)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.54,
      "importance": 2,
      "prereqs": [
        "gradient_descent",
        "log_reg"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Neural Networks",
          "url": "https://developers.google.com/machine-learning/crash-course/neural-networks"
        },
        {
          "corpus": "d2l.ai",
          "unit": "Multilayer Perceptrons",
          "url": "https://d2l.ai/chapter_multilayer-perceptrons/index.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "deploy",
      "label": "Model deployment & serving",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.56,
      "importance": 1,
      "prereqs": [
        "end2end",
        "pipelines"
      ],
      "sources": [
        {
          "corpus": "fast.ai",
          "unit": "Lesson 2: Deployment",
          "url": "https://course.fast.ai/Lessons/lesson2.html"
        },
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.19 Deploying at Scale",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch19.html"
        }
      ],
      "area": "found"
    },
    {
      "id": "anomaly",
      "label": "Novelty & outlier detection",
      "domain": "mfg",
      "ucs": [
        "anomaly",
        "fraud",
        "aml",
        "quality"
      ],
      "difficulty": 0.56,
      "importance": 2,
      "prereqs": [
        "density",
        "clustering"
      ],
      "sources": [
        {
          "corpus": "scikit-learn",
          "unit": "Novelty & Outlier Detection",
          "url": "https://scikit-learn.org/stable/modules/outlier_detection.html"
        },
        {
          "corpus": "PyOD",
          "unit": "PyOD documentation",
          "url": "https://pyod.readthedocs.io/en/latest/index.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "backprop",
      "label": "Backpropagation",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.57,
      "importance": 1,
      "prereqs": [
        "nn_basics",
        "gradient_descent"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Neural Networks & Deep Learning",
          "url": "https://www.coursera.org/learn/neural-networks-deep-learning"
        }
      ],
      "area": "deep"
    },
    {
      "id": "collab_filter",
      "label": "Collaborative filtering & recommenders",
      "domain": "mkt",
      "ucs": [
        "reco",
        "nba",
        "xsell",
        "churn"
      ],
      "difficulty": 0.58,
      "importance": 1,
      "prereqs": [
        "gradient_descent",
        "feat_eng"
      ],
      "sources": [
        {
          "corpus": "fast.ai",
          "unit": "Lesson 7: Collaborative filtering",
          "url": "https://course.fast.ai/Lessons/lesson7.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "prod_ml",
      "label": "Production ML systems",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.58,
      "importance": 1,
      "prereqs": [
        "deploy"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Production ML Systems",
          "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
        }
      ],
      "area": "found"
    },
    {
      "id": "embeddings",
      "label": "Embeddings for categoricals",
      "domain": "mkt",
      "ucs": [
        "nba",
        "churn",
        "cs",
        "fraud",
        "reco",
        "xsell",
        "lead"
      ],
      "difficulty": 0.6,
      "importance": 2,
      "prereqs": [
        "nn_basics"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Embeddings",
          "url": "https://developers.google.com/machine-learning/crash-course/embeddings"
        },
        {
          "corpus": "fast.ai",
          "unit": "Lesson 7: Collaborative filtering",
          "url": "https://course.fast.ai/Lessons/lesson7.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "dl_reg",
      "label": "DL regularization & dropout",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.6,
      "importance": 1,
      "prereqs": [
        "nn_basics",
        "regularize"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Improving DNNs — Practical Aspects",
          "url": "https://www.coursera.org/learn/deep-neural-network"
        },
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.11 Training Deep Neural Networks",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch11.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "automl",
      "label": "AutoML & search",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.6,
      "importance": 1,
      "prereqs": [
        "hyperparam"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "AutoML",
          "url": "https://developers.google.com/machine-learning/crash-course/automl"
        }
      ],
      "area": "found"
    },
    {
      "id": "sarima",
      "label": "Seasonal ARIMA",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "energy"
      ],
      "difficulty": 0.6,
      "importance": 1,
      "prereqs": [
        "arima"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Seasonal ARIMA",
          "url": "https://otexts.com/fpp3/seasonal-arima.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "dl_optim",
      "label": "Optimizers (momentum / Adam)",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.62,
      "importance": 1,
      "prereqs": [
        "backprop"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Improving DNNs — Optimization",
          "url": "https://www.coursera.org/learn/deep-neural-network"
        },
        {
          "corpus": "d2l.ai",
          "unit": "Optimization Algorithms",
          "url": "https://d2l.ai/chapter_optimization/index.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "monitoring",
      "label": "Monitoring & drift detection",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.62,
      "importance": 1,
      "prereqs": [
        "prod_ml",
        "deploy"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Production ML Systems",
          "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
        }
      ],
      "area": "found"
    },
    {
      "id": "dynreg",
      "label": "Dynamic regression (ARIMA errors)",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory",
        "pricing"
      ],
      "difficulty": 0.62,
      "importance": 1,
      "prereqs": [
        "arima",
        "lin_reg"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Ch.10 Dynamic regression",
          "url": "https://otexts.com/fpp3/dynamic.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "survival",
      "label": "Survival analysis & censoring",
      "domain": "mfg",
      "ucs": [
        "pdm",
        "churn",
        "clv",
        "readmission",
        "los",
        "attrition"
      ],
      "difficulty": 0.62,
      "importance": 2,
      "prereqs": [
        "log_reg",
        "stat_learning"
      ],
      "sources": [
        {
          "corpus": "lifelines",
          "unit": "Introduction to survival analysis",
          "url": "https://lifelines.readthedocs.io/en/latest/Survival%20Analysis%20intro.html"
        },
        {
          "corpus": "ISLR",
          "unit": "Ch.11 Survival Analysis",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "survival"
    },
    {
      "id": "potential_outcomes",
      "label": "Potential outcomes & causality",
      "domain": "mkt",
      "ucs": [
        "nba",
        "attribution",
        "pricing",
        "churn"
      ],
      "difficulty": 0.62,
      "importance": 2,
      "prereqs": [
        "stat_learning",
        "cross_val"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Introduction to Causality",
          "url": "https://matheusfacure.github.io/python-causality-handbook/01-Introduction-To-Causality.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "batchnorm",
      "label": "Batch norm & initialization",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.64,
      "importance": 1,
      "prereqs": [
        "backprop",
        "dl_reg"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Improving DNNs — Batch Normalization",
          "url": "https://www.coursera.org/learn/deep-neural-network"
        }
      ],
      "area": "deep"
    },
    {
      "id": "retrain",
      "label": "Retraining strategy",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.64,
      "importance": 1,
      "prereqs": [
        "monitoring"
      ],
      "sources": [
        {
          "corpus": "Google MLCC",
          "unit": "Production ML Systems",
          "url": "https://developers.google.com/machine-learning/crash-course/production-ml-systems"
        }
      ],
      "area": "found"
    },
    {
      "id": "kaplan_meier",
      "label": "Kaplan-Meier & Nelson-Aalen",
      "domain": "mfg",
      "ucs": [
        "pdm",
        "churn",
        "readmission",
        "los",
        "attrition"
      ],
      "difficulty": 0.66,
      "importance": 1,
      "prereqs": [
        "survival"
      ],
      "sources": [
        {
          "corpus": "lifelines",
          "unit": "Estimating univariate models",
          "url": "https://lifelines.readthedocs.io/en/latest/Survival%20analysis%20with%20lifelines.html"
        }
      ],
      "area": "survival"
    },
    {
      "id": "seq_models",
      "label": "Sequence models (RNN / LSTM / GRU)",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "energy",
        "pdm",
        "anomaly"
      ],
      "difficulty": 0.66,
      "importance": 2,
      "prereqs": [
        "backprop",
        "ts_features"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Sequence Models — RNNs",
          "url": "https://www.coursera.org/learn/nlp-sequence-models"
        },
        {
          "corpus": "d2l.ai",
          "unit": "Recurrent Neural Networks",
          "url": "https://d2l.ai/chapter_recurrent-neural-networks/index.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "autoencoders",
      "label": "Autoencoders (representation)",
      "domain": "mfg",
      "ucs": [
        "anomaly",
        "fraud",
        "aml",
        "quality"
      ],
      "difficulty": 0.66,
      "importance": 1,
      "prereqs": [
        "backprop",
        "dim_reduce"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.17 Autoencoders, GANs & Diffusion",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch17.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "hierforecast",
      "label": "Hierarchical & grouped forecasting",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "inventory"
      ],
      "difficulty": 0.66,
      "importance": 1,
      "prereqs": [
        "arima",
        "expsmooth"
      ],
      "sources": [
        {
          "corpus": "FPP3",
          "unit": "Ch.11 Hierarchical & grouped series",
          "url": "https://otexts.com/fpp3/hierarchical.html"
        }
      ],
      "area": "ts"
    },
    {
      "id": "iforest",
      "label": "Isolation Forest / One-Class SVM / LOF",
      "domain": "mfg",
      "ucs": [
        "anomaly",
        "fraud",
        "aml",
        "quality"
      ],
      "difficulty": 0.62,
      "importance": 1,
      "prereqs": [
        "anomaly"
      ],
      "sources": [
        {
          "corpus": "PyOD",
          "unit": "All Models",
          "url": "https://pyod.readthedocs.io/en/latest/pyod.models.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "anomaly_bench",
      "label": "Choosing detectors (ADBench)",
      "domain": "mfg",
      "ucs": [
        "anomaly",
        "fraud",
        "aml",
        "quality"
      ],
      "difficulty": 0.68,
      "importance": 1,
      "prereqs": [
        "anomaly",
        "iforest"
      ],
      "sources": [
        {
          "corpus": "PyOD",
          "unit": "Benchmarks",
          "url": "https://pyod.readthedocs.io/en/latest/benchmark.html"
        }
      ],
      "area": "anomaly"
    },
    {
      "id": "cnn_signals",
      "label": "CNNs for sensor & image signals",
      "domain": "mfg",
      "ucs": [
        "pdm",
        "anomaly",
        "quality"
      ],
      "difficulty": 0.68,
      "importance": 1,
      "prereqs": [
        "backprop",
        "ts_features"
      ],
      "sources": [
        {
          "corpus": "d2l.ai",
          "unit": "Convolutional Neural Networks",
          "url": "https://d2l.ai/chapter_convolutional-neural-networks/index.html"
        },
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.14 Deep Computer Vision (CNNs)",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch14.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "propensity",
      "label": "Propensity scores & IPW",
      "domain": "mkt",
      "ucs": [
        "nba",
        "attribution",
        "pricing",
        "churn"
      ],
      "difficulty": 0.7,
      "importance": 1,
      "prereqs": [
        "potential_outcomes",
        "log_reg"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Propensity Score",
          "url": "https://matheusfacure.github.io/python-causality-handbook/11-Propensity-Score.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "cox",
      "label": "Cox proportional hazards",
      "domain": "mfg",
      "ucs": [
        "pdm",
        "churn",
        "clv",
        "readmission",
        "los",
        "attrition"
      ],
      "difficulty": 0.72,
      "importance": 2,
      "prereqs": [
        "kaplan_meier",
        "survival",
        "log_reg"
      ],
      "sources": [
        {
          "corpus": "lifelines",
          "unit": "Survival regression (CoxPHFitter)",
          "url": "https://lifelines.readthedocs.io/en/latest/fitters/regression/CoxPHFitter.html"
        }
      ],
      "area": "survival"
    },
    {
      "id": "attention",
      "label": "Attention & Transformers",
      "domain": "scm",
      "ucs": [
        "demand",
        "sales_fc",
        "energy",
        "pdm",
        "anomaly"
      ],
      "difficulty": 0.74,
      "importance": 2,
      "prereqs": [
        "seq_models"
      ],
      "sources": [
        {
          "corpus": "DeepLearning.AI",
          "unit": "Sequence Models — Transformer Network",
          "url": "https://www.coursera.org/learn/nlp-sequence-models"
        },
        {
          "corpus": "d2l.ai",
          "unit": "Attention Mechanisms & Transformers",
          "url": "https://d2l.ai/chapter_attention-mechanisms-and-transformers/index.html"
        }
      ],
      "area": "deep"
    },
    {
      "id": "did",
      "label": "Difference-in-differences",
      "domain": "mkt",
      "ucs": [
        "attribution",
        "pricing",
        "nba"
      ],
      "difficulty": 0.76,
      "importance": 1,
      "prereqs": [
        "potential_outcomes"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Difference-in-Differences",
          "url": "https://matheusfacure.github.io/python-causality-handbook/13-Difference-in-Differences.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "weibull_aft",
      "label": "Weibull AFT (parametric survival)",
      "domain": "mfg",
      "ucs": [
        "pdm",
        "readmission",
        "los"
      ],
      "difficulty": 0.76,
      "importance": 1,
      "prereqs": [
        "cox"
      ],
      "sources": [
        {
          "corpus": "lifelines",
          "unit": "WeibullAFTFitter",
          "url": "https://lifelines.readthedocs.io/en/latest/fitters/regression/WeibullAFTFitter.html"
        }
      ],
      "area": "survival"
    },
    {
      "id": "tabular_fm",
      "label": "Tabular deep learning & foundation models",
      "domain": "fnd",
      "ucs": "ALL",
      "difficulty": 0.8,
      "importance": 2,
      "prereqs": [
        "attention",
        "gbm"
      ],
      "sources": [
        {
          "corpus": "ISLR",
          "unit": "Ch.10 Deep Learning",
          "url": "https://www.statlearning.com/"
        }
      ],
      "area": "deep"
    },
    {
      "id": "iv",
      "label": "Instrumental variables",
      "domain": "mkt",
      "ucs": [
        "attribution",
        "pricing",
        "nba"
      ],
      "difficulty": 0.8,
      "importance": 1,
      "prereqs": [
        "potential_outcomes",
        "lin_reg"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Instrumental Variables",
          "url": "https://matheusfacure.github.io/python-causality-handbook/08-Instrumental-Variables.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "cate",
      "label": "Heterogeneous effects (CATE)",
      "domain": "mkt",
      "ucs": [
        "nba",
        "churn",
        "pricing",
        "attribution"
      ],
      "difficulty": 0.82,
      "importance": 2,
      "prereqs": [
        "propensity",
        "gbm"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Heterogeneous Treatment Effects",
          "url": "https://matheusfacure.github.io/python-causality-handbook/18-Heterogeneous-Treatment-Effects-and-Personalization.html"
        },
        {
          "corpus": "EconML",
          "unit": "ML-based estimation of HTE",
          "url": "https://www.pywhy.org/EconML/spec/motivation.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "rul",
      "label": "Remaining useful life (RUL) / prognostics",
      "domain": "mfg",
      "ucs": [
        "pdm"
      ],
      "difficulty": 0.84,
      "importance": 2,
      "prereqs": [
        "cox",
        "seq_models"
      ],
      "sources": [
        {
          "corpus": "PHM",
          "unit": "NASA PCoE Data Repository",
          "url": "https://www.nasa.gov/intelligent-systems-division/discovery-and-systems-health/pcoe/pcoe-data-set-repository/"
        },
        {
          "corpus": "PHM",
          "unit": "C-MAPSS (Saxena & Goebel, 2008)",
          "url": "https://doi.org/10.1109/PHM.2008.4711414"
        }
      ],
      "area": "survival"
    },
    {
      "id": "uplift_eval",
      "label": "Uplift evaluation (Qini)",
      "domain": "mkt",
      "ucs": [
        "nba",
        "churn"
      ],
      "difficulty": 0.84,
      "importance": 1,
      "prereqs": [
        "cate"
      ],
      "sources": [
        {
          "corpus": "Causal Handbook",
          "unit": "Evaluating Causal Models",
          "url": "https://matheusfacure.github.io/python-causality-handbook/19-Evaluating-Causal-Models.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "metalearners",
      "label": "Uplift meta-learners (S/T/X)",
      "domain": "mkt",
      "ucs": [
        "nba",
        "churn",
        "pricing"
      ],
      "difficulty": 0.84,
      "importance": 1,
      "prereqs": [
        "cate",
        "gbm"
      ],
      "sources": [
        {
          "corpus": "EconML",
          "unit": "Meta-Learners",
          "url": "https://www.pywhy.org/EconML/spec/estimation/metalearners.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "dml",
      "label": "Double ML / R-learner",
      "domain": "mkt",
      "ucs": [
        "nba",
        "pricing",
        "attribution"
      ],
      "difficulty": 0.86,
      "importance": 1,
      "prereqs": [
        "cate",
        "propensity"
      ],
      "sources": [
        {
          "corpus": "EconML",
          "unit": "Orthogonal / Double ML",
          "url": "https://www.pywhy.org/EconML/spec/estimation/dml.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "causal_forest",
      "label": "Causal forests",
      "domain": "mkt",
      "ucs": [
        "nba",
        "churn",
        "pricing"
      ],
      "difficulty": 0.86,
      "importance": 1,
      "prereqs": [
        "cate",
        "rforest"
      ],
      "sources": [
        {
          "corpus": "EconML",
          "unit": "Forest-based estimators",
          "url": "https://www.pywhy.org/EconML/spec/estimation/forest.html"
        }
      ],
      "area": "causal"
    },
    {
      "id": "rl_bandits",
      "label": "Contextual bandits / RL",
      "domain": "mkt",
      "ucs": [
        "nba",
        "reco"
      ],
      "difficulty": 0.88,
      "importance": 1,
      "prereqs": [
        "propensity",
        "nn_basics"
      ],
      "sources": [
        {
          "corpus": "Hands-On ML",
          "unit": "Ch.18 Reinforcement Learning",
          "url": "https://www.oreilly.com/library/view/hands-on-machine-learning/9781098125967/ch18.html"
        }
      ],
      "area": "causal"
    }
  ],
  "areas": [
    {
      "k": "found",
      "label": "Foundations & data",
      "color": "#A8B2C0"
    },
    {
      "k": "classical",
      "label": "Classical ML",
      "color": "#4F8FF0"
    },
    {
      "k": "eval",
      "label": "Evaluation & tuning",
      "color": "#43C67D"
    },
    {
      "k": "deep",
      "label": "Deep learning",
      "color": "#B072E8"
    },
    {
      "k": "ts",
      "label": "Time-series",
      "color": "#2FC2D4"
    },
    {
      "k": "survival",
      "label": "Survival / time-to-event",
      "color": "#EDA23B"
    },
    {
      "k": "causal",
      "label": "Causal & uplift",
      "color": "#F072B6"
    },
    {
      "k": "anomaly",
      "label": "Anomaly & unsupervised",
      "color": "#F26457"
    }
  ]
};
