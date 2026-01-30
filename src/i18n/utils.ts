import { text } from './translations'

export function getCategoryLabel(category: string) {
  const labels: Record<string, string> = {
    digital: text.categoryDigital,
    entrepreneurship: text.categoryEntrepreneurship,
    sport: text.categorySport,
  }
  return labels[category] || category
}
