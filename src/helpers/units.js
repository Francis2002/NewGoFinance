export const units = [
    {
      unitNumber: 1,
      description: "Management of expenses through money allocation",
      title: "Budgeting",
      tiles: [
        {
          type: "book",
          description: "Budgeting Principles",
          initialText: "Welcome to the Budgeting Basics module! This module is your gateway to mastering the art of budgeting. Budgeting is more than just numbers on a spreadsheet; it's a powerful tool that empowers you to take control of your financial future. By creating and managing a budget, you'll gain a clearer understanding of your income, expenses, and savings goals, allowing you to make informed financial decisions.",
          sections: [
            {
              title: "Fundamentals of Budgeting",
              subsections: [
                {
                  type: "text",
                  text: "Budgeting is your financial compass, guiding you through the world of money management. It's the process of carefully planning and tracking your income and expenses. Think of it as creating a financial roadmap that helps you reach your goals, whether it's paying off debt, saving for a vacation, or investing for the future. Budgeting ensures that every dollar you earn has a purpose, giving you greater control over your financial life.",
                },
                {
                  type: "text",
                  text: "Why do people budget? Budgeting isn't just about numbers; it's about turning your financial dreams into reality. It's about achieving short-term goals like getting rid of credit card debt or saving for a new laptop. It's also about long-term goals, such as building an emergency fund to provide a safety net during unexpected events or planning for retirement. A well-crafted budget paves the way to financial freedom, no matter your aspirations.",
                },
                {
                  type: "text",
                  text: "Budgeting isn't about restrictions; it's about aligning your spending with your values. This requires a shift in mindset—recognizing that each expense is a conscious choice. Before making a purchase, ask yourself if it aligns with your financial goals. Mindful spending empowers you to direct your money towards things that truly matter, creating a harmonious balance between enjoying life today and securing a stable financial future.",
                },
                {
                  type: "text",
                  text: "Tracking your income and expenses is the bedrock of effective budgeting. It's like being your own financial detective, uncovering spending patterns that might otherwise go unnoticed. Recording every transaction, whether it's a cup of coffee or a utility bill, allows you to make data-driven decisions. Tracking also promotes awareness, helping you identify areas where you can cut back and allocate more to your savings or debt repayment.",
                },
                {
                  type: "quiz",
                  questionText: "What crucial aspect of your financial life does budgeting help you manage effectively?",
                  options: [
                    " Your entertainment choices",
                    " Your income and expenses",
                    " Your social life spending",
                    " Your daily commute expenses"
                  ],
                  correctAnswer: 2,
                  explanation: " Budgeting is a powerful tool that empowers you to manage your financial resources strategically. It involves carefully allocating your income and tracking your expenses to ensure that you're making informed financial decisions and working towards your goals.",
                },
              ]
            },
            {
              title: "Budgeting Guidelines",
              subsections: [
                {
                  type: "text", 
                  text: "Meet the 50/30/20 rule—a golden guideline for budgeting success. Imagine your income as a pie; the 50% slice goes to your needs, covering essentials like housing and utilities. The 30% slice is for wants—those things that bring you joy, like eating out or entertainment. Lastly, the 20% slice is your savings superhero, building a safety net and propelling you toward your financial goals."
                },
                {
                  type: "text",
                  text: "While the 50/30/20 rule provides a solid framework, remember that personal finance isn't one-size-fits-all. Life circumstances and financial goals vary widely. Some individuals may need to allocate more than 50% to necessities due to higher living costs, while others might be able to allocate a smaller percentage. Similarly, if you're aiming for aggressive savings goals, consider adjusting the 20% savings allocation. The rule is a starting point; feel free to tailor it to your unique situation.",
                },
                {
                  type: "quiz",
                  questionText: " In the context of the 50/30/20 rule, what does the '20%' represent?",
                  options: [
                    "Essential needs",
                    "Discretionary expenses",
                    "Savings and fiancial goals",
                    "Debt repayment"
                  ],
                  correctAnswer: 3,
                  explanation: " The 50/30/20 rule suggests allocating 20% of your income towards savings and financial goals. This portion is a vital component of your budget, supporting your aspirations and building a foundation for your financial security.",
                },
                {
                  type: "text",
                  text: "Life can throw unexpected curveballs your way, from car breakdowns to medical emergencies. Enter the emergency fund—a financial superhero that saves the day. This fund ensures that you're prepared for life's surprises without derailing your financial progress. Having an emergency fund means you won't have to rely on credit cards or loans when the unexpected happens. It also provides peace of mind, knowing that you have a safety net to fall back on.",
                },
                {
                  type: "text",
                  text: "How much should you save in your emergency fund? A good rule of thumb is to save three to six months' worth of living expenses. If you're self-employed or have an unstable income, consider saving more. If you're just starting, don't be intimidated by the amount. Start small and build your way up. Even a few hundred dollars can make a difference in an emergency.",
                },
                {
                  type: "text",
                  text: "Budgeting isn't about rigidly adhering to predefined percentages; it's about aligning your financial choices with your goals. Consider a dynamic allocation approach, where you allocate funds based on your priorities each month. For instance, if you're saving up for a dream vacation, you might allocate more to your savings category for a few months. Or if a major life event arises, such as planning for a wedding, you could adjust your spending to accommodate the temporary increase in expenses. This dynamic approach allows your budget to evolve with your aspirations and life changes, providing a balanced yet adaptable financial strategy.",
                },
                {
                  type: "quiz",
                  questionText: "What is the recommended amount to save in your emergency fund?",
                  options: [
                    "One month's worth of living expenses",
                    "Three to six months' worth of living expenses",
                    "One year's worth of living expenses",
                    "Two years' worth of living expenses"
                  ],
                  correctAnswer: 2,
                  explanation: "A good rule of thumb is to save three to six months' worth of living expenses in your emergency fund. If you're self-employed or have an unstable income, consider saving more. If you're just starting, don't be intimidated by the amount. Start small and build your way up. Even a few hundred dollars can make a difference in an emergency.",
                },
              ]
            }
          ]
        },
        {
          type: "star",
          description: "Budgeting Simulation",
          initialText: "Welcome to the Budgeting Simulation! Practice your financial skills by making budgeting decisions to allocate monthly income across different expenses. Choose wisely to have a balanced budget and achieve your financial goals. The remaining non-allocated budget will be considered as savings.",

          overflowText: "Budget allocation exceeds 100%",

          prompt: "Please analyze my current budgeting allocation based on the following percentages: <input-1>% for <title-1>, <input-2>% for <title-2>, <input-3>% for <title-3>, <input-4>% for <title-4>. The remaining budget falls under a 'Savings' category. Provide feedback in the 'you person' perspective. The response must be 1 object with the following structure.",

          outputStructure: {
            principlesFollowed: "Text detailing the three budgeting principles that best describe my current approach, explaining the principles and how they are followed",
            nonFollowedPrinciples: "Text detailing the budgeting principles that I am not following, explaining the principles and how they can be incorporated into my budgeting strategy",
            overallFeedback: "Text detailing the overall feedback for the budgeting allocation approach and suggestions about how i should improve my allocation, without providing concrete values, but increments and decrements in each category.", 
            rating: "Number from 1 to 5, representing a classification of the overall budget allocation, with 5 being the best rating",
          }
          ,

          systemContent: "Act as a budgeting expert and advisor for students",

          specialPrompt: " My budgeting goal is <goal>.",

          graphic: "barPercentage",

          promptInputs: [
            "<input-1>",
            "<input-2>",
            "<input-3>",
            "<input-4>",
          ],
          promptTitles: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>",
          ],
          promptMainInput: null,
          promptMainTitle: null,

          promptSpecialInputs: [
            "<goal>"
          ],

          promptSpecialTitles: null,

          otherLabel: "Savings",

          initialInputs: [
            {
              isMain: true,
              title: "income",
              type: "text",
              placeHolder: "Monthly income"
            },
            {
              isSpecial: true,
              title: "goal",
              type: "text",
              placeHolder: "Budgeting Goal (Optional)"
            },
            {
              title: "rent",
              type: "text",
              placeHolder: "Monthly rent",
              label: "$"
            },
            {
              title: "groceries",
              type: "text",
              placeHolder: "Monthly groceries costs",
              label: "$"
            },
            {
              title: "transport",
              type: "text",
              placeHolder: "Monthly transportation costs",
              label: "$"
            },
            {
              title: "entertainment",
              type: "text",
              placeHolder: "Monthly entertainment spending",
              label: "$"
            },
          ],
        },

        {
          type: "trophy",
          description: "Expense Tracking and Analysis",

          initialText: "Welcome to the Financial Life Simulator! Take charge of a virtual character's financial journey. Navigate real-world scenarios by making weekly decisions that impact cash, income, expenses, savings, and debt. Your choices shape the character's financial destiny. Get ready to master money management and watch your decisions come to life! After choosing an action, a new week will fast-forward and an event will be presented here, with impact to your financial stats. New actions will also be provided.",

          overflowText: "Budget allocation exceeds 100%",

          zeroThIterationPrompt: `Please provide initial values of a financial situation. Now, please generate a new financial event that could impact the users' financial situation and provide the impact (as a change in the financial stats) that the event has on the financial situation. Additionally, create four new choices or actions in response to the event that the user can choose from. Context: This interaction is part of a financial simulation where users learn to manage finances through practical scenarios. The AI evaluates choices, provides feedback, and generates dynamic scenarios for optimal financial decisions.
          `,

          prompt: `Current Financial State:
          - <title-1>: $<stat-1>
          - <title-2>: $<stat-2>
          - <title-3>: $<stat-3>
          - <title-4>: $<stat-4>
          - <title-5>: $<stat-5>
          
          Previous Event:
          - Event: <prevevent>
          - Impact: <previmpact>
          
          Previous Choices Given to User:
          - Choice 1: <action-1>
          - Choice 2: <action-2>
          - Choice 3: <action-3>
          - Choice 4: <action-4>
          
          Previous User Choice:
          - Chosen Action: <chosen-action>
              
          Considering the user's previous interaction, please provide feedback about the choice made by the user considering the other options that were not chosen. Additionally, provide the new financial situation after the choice from the user.
          Now, please generate a new financial event that could impact the users' financial situation. Additionally, create four new choices or actions in response to the event that the user can choose from. Context: This interaction is part of a financial simulation where users learn to manage finances through practical scenarios. The AI evaluates choices, provides feedback, and generates dynamic scenarios for optimal financial decisions.
          `,

          outputStructure: {
            overallFeedback: "Text detailing the overall feedback for the decision and, if there was a better choice, say which one was better and why.", 
            impact : "Text detailing the impact of the decision on the financial situation, saying how much each stat changed and why. This should match the new values of the financial situation.",
            newFinancialSituation: {
              "cash": "Number representing the new amount of money in the bank",
              "monthly income": "Number representing the new monthly income",
              "monthly expenses": "Number representing the new monthly expenses",
              "monthly savings": "Number representing the new monthly savings",
              "debt": "Number representing the new debt"
            },
            newEvent: "Text describing the new event that happened",
            newChoices: [
              "Text describing the first choice",
              "Text describing the second choice",
              "Text describing the third choice",
              "Text describing the fourth choice"
            ]
          },

          systemContent: "Act as a budgeting expert and advisor for students",

          promptInputStats: [
            "<stat-1>",
            "<stat-2>",
            "<stat-3>",
            "<stat-4>",
            "<stat-5>",
          ],

          promptTitleStats: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>",
            "<title-5>",
          ],

          promptInputActions: [
            "<action-1>",
            "<action-2>",
            "<action-3>",
            "<action-4>",
          ],

          promptSpecialInputs: [
            "<prevevent>",
            "<previmpact>",
            "<chosen-action>",
          ],

          promptSpecialTitles: null,

          initialStats: [
            {
              title: "Cash",
              value: 3000,
              graphic: "lineChart",
            },
            {
              title: "Monthly Income",
              value: 3000,
              graphic: "lineChart",
            },
            {
              title: "Monthly Expenses",
              value: 2500,
              graphic: "lineChart",
            },
            {
              title: "Monthly Savings",
              value: 500,
              graphic: "",
            },
            {
              title: "Debt",
              value: 1000,
              graphic: "lineChart",
            },
          ],
        },
    ],
    },
    {
      unitNumber: 2,
      description: "Building wealth through strategic allocation",
      title: "Investing",
      tiles: [
        {
          type: "book",
          description: "Investing Principles",
          initialText: "Welcome to the Investing Basics module! This module is your gateway to mastering the art of investing. Investing is more than just numbers on a spreadsheet; it's a powerful tool that empowers you to take control of your financial future.",
          sections: [
            {
              title: "Investing Fundamentals",
              subsections: [
                {
                  type: "text",
                  text: "Welcome to the Investing Fundamentals section. Investing is like planting seeds for your financial future. It's about putting your money to work to grow over time. Whether you're saving for a dream vacation or retirement, investing can help you achieve your goals."
                },
                {
                  type: "text",
                  text: "Before diving into the world of investing, it's crucial to set clear financial goals. Think about what you want to achieve, whether it's buying a house, funding your children's education, or simply building wealth."
                },
                {
                  type: "text",
                  text: "Understanding risk is vital. Different investments come with different levels of risk. It's like deciding between a safe, slow-growing tree and a fast-growing but riskier plant for your garden. Your comfort with risk plays a big role in shaping your investment choices."
                },
                {
                  type: "text",
                  text: "In this section, we'll explore key investment concepts, starting with asset classes. Think of asset classes as different types of investments. The main ones are stocks (like owning a piece of a company), bonds (like lending money), real estate (like buying property), and cash (like money in your wallet)."
                },
                {
                  type: "text",
                  text: "One of the first decisions you'll make as an investor is how to divide your money among these assets. It's a bit like planning a meal – you want a balanced plate. We call this 'asset allocation.' Your choice depends on your goals and how much risk you're comfortable with."
                },
                {
                  type: "quiz",
                  questionText: "What is the primary purpose of investing?",
                  options: [
                    "To save money",
                    "To grow wealth over time",
                    "To pay off debt",
                    "To buy a car"
                  ],
                  correctAnswer: 2,
                  explanation: "Investing's main aim is to help your money grow over time by putting it into things that can increase in value, like stocks, bonds, or real estate. It's a bit like planting seeds to grow a money tree."
                }
              ]
            },
            {
              title: "Types of Investments",
              subsections: [
                {
                  type: "text",
                  text: "In this section, we'll dive deeper into different types of investments. Stocks are like buying a slice of a company's cake – you get a share of the profits. Bonds are more like lending your money to a friend – they pay you back with interest."
                },
                {
                  type: "text",
                  text: "Real estate is another option. It's like buying a house and renting it out to earn money. Mutual funds and exchange-traded funds (ETFs) are like buying a basket of different things, spreading your risk."
                },
                {
                  type: "text",
                  text: "Cryptocurrencies are digital currencies that use technology called blockchain. They're like digital gold, but they're also more volatile, like a rollercoaster ride. It's essential to understand what you're investing in."
                },
                {
                  type: "quiz",
                  questionText: "What is the primary difference between stocks and bonds?",
                  options: [
                    "Stocks represent ownership, while bonds represent debt.",
                    "Stocks always generate higher returns than bonds.",
                    "Bonds are riskier than stocks.",
                    "Stocks are only suitable for short-term investments."
                  ],
                  correctAnswer: 1,
                  explanation: "Stocks mean you own a piece of a company, like owning a share of a bakery. Bonds, on the other hand, are more like lending money to the bakery, and they pay you back with interest."
                }
              ]
            },
            {
              title: "Risk and Diversification",
              subsections: [
                {
                  type: "text",
                  text: "Investing isn't risk-free, but you can manage it. Diversification is a bit like not putting all your eggs in one basket. By spreading your money across different types of investments, you reduce the risk of losing everything."
                },
                {
                  type: "text",
                  text: "We all have different levels of comfort with risk. Think of it as a rollercoaster ride – some people love it, while others prefer a gentle stroll. Your risk tolerance will help decide how you invest."
                },
                {
                  type: "text",
                  text: "Risk in investing comes in different forms, like the weather – it can change. Market risk is when investments go up and down, inflation risk is like things getting more expensive, and interest rate risk affects your returns."
                },
                {
                  type: "text",
                  text: "In this section, we'll explore ways to reduce risk, like using index funds or exchange-traded funds (ETFs). These are like buying a little bit of everything, so you're not banking everything on a single investment."
                },
                {
                  type: "quiz",
                  questionText: "Why is diversification essential in investing?",
                  options: [
                    "It guarantees high returns.",
                    "It eliminates all investment risk.",
                    "It reduces risk by spreading investments.",
                    "It leads to higher taxes."
                  ],
                  correctAnswer: 3,
                  explanation: "Diversification is crucial because it lowers risk by spreading your investments. It's like having different ingredients for a meal – if one doesn't taste good, you've got others to enjoy."
                }
              ]
            }
          ]          
        },
        {
          type: "star",
          description: "Investing Simulation",
          initialText: "Welcome to the Investing Simulation! Sharpen your financial acumen as you step into the world of investments. Make strategic decisions to allocate resources into various investment options. Choose wisely to build a diversified portfolio and work towards your financial aspirations. You can specify other investment options in the 'Other' category. The remaining non-allocated capital will be considered to be invested in those other options.", 
          
          overflowText: "Investments exceed 100%",

          prompt: "Please analyze my current investment allocation based on the following percentages: <input-1>% for <title-1>, <input-2>% for <title-2>, <input-3>% for <title-3>, <input-4>% for <title-4>. The remaining budget falls under an 'Other' category. Provide feedback in the 'you person' perspective. The response must be 1 object with the following structure.",

          outputStructure: {
            principlesFollowed: "Text detailing the three investing principles that best describe my current approach, explaining the principles and how they are followed",
            nonFollowedPrinciples: "Text detailing the investing principles that I am not following, explaining the principles and how they can be incorporated into my investment strategy",
            overallFeedback: "Text detailing the overall feedback for the investment allocation approach and suggestions about how i should improve my allocation, without providing concrete values, but increments and decrements in each category.", 
            rating: "Number from 1 to 5, representing a classification of the overall investment allocation, with 5 being the best rating",
          } 
          ,

          systemContent: "Act as a investing expert and advisor for students",

          specialPrompt: " My investing risk-tolerance is <risk-tolerance>. The 'other' category includes <other>.",

          graphic: "barPercentage",

          promptInputs: [
            "<input-1>",
            "<input-2>",
            "<input-3>",
            "<input-4>"
          ],
          promptTitles: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>"
          ],
          promptMainInput: null,
          promptMainTitle: null,

          promptSpecialInputs: [
            "<other>",
            "<risk-tolerance>"
          ],

          promptSpecialTitles: null,

          otherLabel: "Other",

          initialInputs: [
            {
              isMain: true,
              title: "capital",
              type: "text",
              placeHolder: "Total portfolio",
              label: "$"
            },
            {
              isSpecial: true,
              title: "goal",
              type: "text",
              placeHolder: "Budgeting Goal (Optional)"
            },
            {
              title: "stocks",
              type: "text",
              placeHolder: "Stocks",
              label: "$"
            },
            {
              title: "bonds",
              type: "text",
              placeHolder: "Bonds",
              label: "$"
            },
            {
              title: "crypto",
              type: "text",
              placeHolder: "Crypto",
              label: "$"
            },
            {
              title: "mutual funds",
              type: "text",
              placeHolder: "Mutual Funds",
              label: "$"
            },
            {
              title: "risk tolerance",
              type: "text",
              placeHolder: "1-10 (10 being very aggressive)",
              isSpecial: true
            },
            {
              title: "other",
              type: "text",
              placeHolder: "Other categories",
              isSpecial: true
            },
          ],
        },

        {
          type: "star",
          description: "Compound Interest Simulation",
          initialText: "Welcome to the Compound Interest Simulation! Experience the power of compound interest as you invest. You can interact with the input parameters and see how they affect the final value of your investment. The simulation will show you the value of your investment over time, and the impact of compounding on your investment. You can also see the impact of different interest rates and different investment periods on your investment value.",
          prompt: "Please analyze my current budgeting allocation based on the following percentages: <input-1>% for <title-1>, <input-2>% for <title-2>, <input-3>% for <title-3>, <input-4>% for <title-4>, <input-5>% for <title-5>. The remaining budget falls under an 'Other' category. Based on this allocation, could you please identify the three budgeting principles that best describe my current approach? Additionally, highlight any principles that I might not be following and provide suggestions for incorporating them into my budgeting strategy. Analyse how closely i am following the 50/30/20 rule. Please classify the overall budget allocation on a scale of 1-5, with 1 being the least important and 5 being the most important. Do not classify each category individually nor any principles that you may mention, but rather the overall budget allocation only. Please do not mention the rating system in your response, but ate the end of your response, please state the rating you have assigned to the overall budget allocation.",

          graphic: "lineChart",

          specialPrompt: null,
          promptInputs: [
            "<input-1>",
            "<input-2>",
            "<input-3>",
            "<input-4>"
          ],
          promptTitles: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>"
          ],
          promptMainInput: null,
          promptMainTitle: null,

          promptSpecialInputs: null,

          promptSpecialTitles: null,

          otherLabel: "Other",

          initialInputs: [
            {
              isMain: true,
              title: "initial investment",
              type: "text",
              placeHolder: "Initial Investment",
              label: "$"
            },
            {
              title: "frequency",
              type: "text",
              placeHolder: "Investment Frequency",
              label: "/year"
            },
            {
              title: "amount",
              type: "text",
              placeHolder: "Investment Amount",
              label: "$"
            },
            {
              title: "annual interest rate",
              type: "text",
              placeHolder: "Interest Rate",
              label: "%"
            },
            {
              title: "period",
              type: "text",
              placeHolder: "Investment Period (Years)",
              label: "years"
            },
          ],
        },

        {
          type: "trophy",
          description: "Investment Tracking and Analysis",

          initialText: "Welcome to the Investment Odyssey! Embark on a financial journey where your investment decisions will shape your virtual character's destiny. Choose investment actions wisely, as they impact your financial future. After each choice, a new week unfolds, and the market unveils new events and opportunities. Explore, strategize, and let your investment acumen flourish in this captivating financial adventure!",

          overflowText: "Budget allocation exceeds 100%",

          zeroThIterationPrompt: `Please provide initial values of a financial situation. This should be in the form:

          "- New Values: 
          <new cash value> (this is the money in the bank)
          <new monthly income value>
          <new monthly expense value> (this is the amount of the income spent per month)
          <new monthly savings value> (this is the amount of the income saved per month)
          <new debt value>"
          
          Now, please generate a new financial event that could impact the users' financial situation and provide the impact (as a change in the financial stats) that the event has on the financial situation. Additionally, create four new choices or actions in response to the event that the user can choose from. This should be in the form:

          "- CurrentEvent: <event>

          - CurrentImpact: <impact>

          - Choices: 
           <choice-1>
           <choice-2>
           <choice-3>
           <choice-4>"
          
          Context: This interaction is part of a financial simulation where users learn to manage finances through practical scenarios. The AI evaluates choices, provides feedback, and generates dynamic scenarios for optimal financial decisions.
          `,

          prompt: `Current Financial State:
          - <title-1>: $<stat-1>
          - <title-2>: $<stat-2>
          - <title-3>: $<stat-3>
          - <title-4>: $<stat-4>
          - <title-5>: $<stat-5>
          
          Previous Event:
          - Event: <prevevent>
          - Impact: <previmpact>
          
          Previous Choices Given to User:
          - Choice 1: <action-1>
          - Choice 2: <action-2>
          - Choice 3: <action-3>
          - Choice 4: <action-4>
          
          Previous User Choice:
          - Chosen Action: <chosen-action>
              
          Considering the user's previous interaction, please provide feedback about the choice made by the user considering the other options that were not chosen. Additionally,provide the new financial situation after the impact from that event on the financial situation. This should be in the form:

          "- Feedback: <feedback>
          
          - New Values: 
          <new cash value>
          <new monthly income value>
          <new monthly expense value>
          <new monthly savings value>
          <new debt value>"
          
          Now, please generate a new financial event that could impact the users' financial situation and provide the impact that the event has on the financial situation. Additionally, create four new choices or actions in response to the event that the user can choose from. This should be in the form:

          "- CurrentEvent: <event>

          - CurrentImpact: <impact>

          - Choices: 
           <choice-1>
           <choice-2>,
           <choice-3>
           <choice-4>"
          
          Context: This interaction is part of a financial simulation where users learn to manage finances through practical scenarios. The AI evaluates choices, provides feedback, and generates dynamic scenarios for optimal financial decisions.
          `,

          promptInputStats: [
            "<stat-1>",
            "<stat-2>",
            "<stat-3>",
            "<stat-4>",
            "<stat-5>",
          ],

          promptTitleStats: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>",
            "<title-5>",
          ],

          promptInputActions: [
            "<action-1>",
            "<action-2>",
            "<action-3>",
            "<action-4>",
          ],

          promptSpecialInputs: [
            "<prevevent>",
            "<previmpact>",
            "<chosen-action>",
          ],

          promptSpecialTitles: null,

          initialStats: [
            {
              title: "Stocks Value",
              value: 3000,
              graphic: "lineChart",
            },
            {
              title: "Stock Monthly Returns",
              value: 3000,
              graphic: "lineChart",
            },
            {
              title: "Crypto Value",
              value: 2500,
              graphic: "lineChart",
            },
            {
              title: "Real Estate Value",
              value: 500,
              graphic: "",
            },
            {
              title: "Real Estate Monthly Returns",
              value: 1000,
              graphic: "lineChart",
            },
          ],
        },
    ],
    },

];