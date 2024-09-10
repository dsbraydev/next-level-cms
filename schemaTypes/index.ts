import { expencesType, financesType } from "./budgetTypes"
import { journalType, currencyType } from "./tradingTypes"
import { dailyGoalType, goalCategoryType, goalProgressType } from "./goalTypes"
export const schemaTypes = [
    // BUDGET TYPES
    expencesType,
    financesType,
    // TRADING TYPES
    journalType,
    currencyType,
    // GOAL TYPES
    dailyGoalType,
    goalCategoryType,
    goalProgressType,
]
