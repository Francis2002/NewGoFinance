export const units = [
    {
      unitNumber: 1,
      description: "Budgeting",
      tiles: [
        {
          type: "star",
          description: "Budgeting Simulation",
          initialText: "Welcome to the Budgeting Simulation! Practice your financial skills by making budgeting decisions to allocate monthly income across different expenses. Choose wisely to have a balanced budget and achieve your financial goals. Explain in the 'other' category, any other expense categories that you find relevant.",

          overflowText: "Budget allocation exceeds 100%",

          prompt: "Please analyze my current budgeting allocation based on the following percentages: <input-1>% for <title-1>, <input-2>% for <title-2>, <input-3>% for <title-3>, <input-4>% for <title-4>, <input-5>% for <title-5>. The remaining budget falls under an 'Other' category. Based on this allocation, could you please identify the three budgeting principles that best describe my current approach? Additionally, highlight any principles that I might not be following and provide suggestions for incorporating them into my budgeting strategy. Analyse how closely i am following the 50/30/20 rule. Please classify the overall budget allocation on a scale of 1-5, with 1 being the least important and 5 being the most important. Do not classify each category individually nor any principles that you may mention, but rather the overall budget allocation only. Please do not mention the rating system in your response, but ate the end of your response, please state the rating you have assigned to the overall budget allocation.",

          specialPrompt: " My budgeting goal is <goal>. The 'other' category includes <other>.",

          promptInputs: [
            "<input-1>",
            "<input-2>",
            "<input-3>",
            "<input-4>",
            "<input-5>",
          ],
          promptTitles: [
            "<title-1>",
            "<title-2>",
            "<title-3>",
            "<title-4>",
            "<title-5>"
          ],
          promptMainInput: null,
          promptMainTitle: null,

          promptSpecialInputs: [
            "<other>",
            "<goal>"
          ],

          promptSpecialTitles: null,

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
              placeHolder: "Monthly rent"
            },
            {
              title: "groceries",
              type: "text",
              placeHolder: "Monthly groceries costs"
            },
            {
              title: "transport",
              type: "text",
              placeHolder: "Monthly transportation costs"
            },
            {
              title: "entertainment",
              type: "text",
              placeHolder: "Monthly entertainment spending"
            },
            {
              title: "savings",
              type: "text",
              placeHolder: "Monthly savings"
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
          type: "trophy",
          description: "Expense Tracking and Analysis",

          initialText: "Welcome to the Financial Life Simulator! Take charge of a virtual character's financial journey. Navigate real-world scenarios by making weekly decisions that impact cash, income, expenses, savings, and debt. Your choices shape the character's financial destiny. Get ready to master money management and watch your decisions come to life! After choosing an action, a new week will fast-forward and an event will be presented here, with impact to your financial stats. New actions will also be provided.",

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
    }
];