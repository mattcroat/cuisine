import type { unitsCroatian, unitsEnglish } from '@/root/utils/units'

export type Ingredient = {
  _key?: string
  id: number
  amount: Amount
  ingredient: string
  unit: string
  locale?: Locale
}

export type Amount = string | number

export type Units = keyof typeof unitsCroatian | keyof typeof unitsEnglish

export type Locale = string

export type RecipeItems = {
  title: string
  imageUrl: string
  preparation: number
  amount: number
  ingredients: Ingredient[]
  content: any
  slug: string
}

export type Recipe = {
  id: string
  title: string
  imageUrl: string
  slug: string
}

export type Params = {
  locale: string
  params: {
    recept?: string
  }
  preview: boolean
}

export type TranslatedHomeText = {
  title: string
  secondaryTitle: string
  subscribeTitle: string
  subscribePlaceholder: string
  subscribeCallToAction: string
  recipeLink: string
}

export type TranslatedRecipeText =
  | {
      preparation: string
      portion: string
      ingredients: string
      subscribeTitle: string
      subscribePlaceholder: string
      subscribeCallToAction: string
    }
  | Record<string, any>

export type TranslatedRecipesText = {
  title: string
  placeholder: string
}

export type TranslatedAboutText = {
  title: string
  description: any
}

type TranslatedNavigationText = {
  title: string
  home: string
  recipes: string
  about: string
}

export type TranslatedSeoText = {
  title: string
  description?: string
}

export type TranslatedHeaderText =
  | (TranslatedNavigationText & TranslatedSeoText)
  | Record<string, any>
